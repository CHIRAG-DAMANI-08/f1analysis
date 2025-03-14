"use client";

import { useEffect, useState } from "react";
import { RacePrediction, Driver } from "@/types/race";
import { Flag, AlertTriangle } from "lucide-react";
import Image from "next/image";

interface LiveRacePredictionProps {
  raceId: string;
  raceName: string;
  raceDate: string;
  raceLocation: string;
  raceCountry: string;
  raceImage: string;
}

export default function LiveRacePrediction({
  raceId,
  raceName,
  raceDate,
  raceLocation,
  raceCountry,
  raceImage,
}: LiveRacePredictionProps) {
  const [prediction, setPrediction] = useState<RacePrediction | null>(null);
  const [drivers, setDrivers] = useState<Record<string, Driver>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Fetch all drivers first to have their details
        const driversResponse = await fetch("/api/live-drivers");

        if (!driversResponse.ok) {
          throw new Error(`Failed to fetch drivers: ${driversResponse.status}`);
        }

        const driversData = await driversResponse.json();

        // Create a map of driver IDs to driver objects for easy lookup
        const driversMap: Record<string, Driver> = {};
        driversData.forEach((driver: Driver) => {
          driversMap[driver.id] = driver;
        });

        setDrivers(driversMap);

        // Now fetch the prediction for this race
        const predictionResponse = await fetch(
          `/api/live-predictions?raceId=${raceId}`,
        );

        if (!predictionResponse.ok) {
          throw new Error(
            `Failed to fetch prediction: ${predictionResponse.status}`,
          );
        }

        const predictionData = await predictionResponse.json();
        setPrediction(predictionData);
      } catch (err) {
        console.error("Error fetching live race prediction:", err);
        setError("Failed to load race predictions. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    if (raceId) {
      fetchData();

      // Set up a refresh interval to update predictions frequently
      const refreshInterval = setInterval(fetchData, 15 * 60 * 1000); // Refresh every 15 minutes

      return () => clearInterval(refreshInterval);
    }
  }, [raceId]);

  if (loading) {
    return (
      <section className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Flag className="text-red-500" />
          <h2 className="font-semibold text-xl">Race Prediction</h2>
        </div>

        <div className="animate-pulse">
          <div className="rounded-lg overflow-hidden mb-6 h-48 bg-gray-700"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-700 rounded-lg p-4 h-24"></div>
            ))}
          </div>
          <div className="h-10 bg-gray-700 rounded-lg w-full"></div>
        </div>
      </section>
    );
  }

  if (error || !prediction) {
    return (
      <section className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Flag className="text-red-500" />
          <h2 className="font-semibold text-xl">Race Prediction</h2>
        </div>

        <div className="text-center py-8">
          <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
          <h3 className="text-xl font-medium mb-2">Prediction Unavailable</h3>
          <p className="text-gray-400 mb-4">
            {error || "Could not generate prediction for this race."}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  // Get top 3 drivers from prediction
  const topDrivers = prediction.predictions
    .slice(0, 3)
    .map((pred) => ({
      ...pred,
      driver: drivers[pred.driverId],
    }))
    .filter((item) => item.driver); // Filter out any undefined drivers

  return (
    <section className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Flag className="text-red-500" />
        <h2 className="font-semibold text-xl">Live Race Prediction</h2>
      </div>

      <div className="relative rounded-lg overflow-hidden mb-6 h-48">
        <Image src={raceImage} alt={raceName} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-2xl font-bold">{raceName}</h3>
          <p className="text-gray-300">
            {raceDate} • {raceLocation}, {raceCountry}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {topDrivers.map((item, index) => (
          <div
            key={item.driverId}
            className="bg-gray-700 rounded-lg p-4 flex items-center gap-3"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={item.driver?.image || ""}
                alt={item.driver?.name || ""}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium">{item.driver?.name}</h4>
              <p className="text-xs text-gray-400">{item.driver?.team}</p>
              <div className="mt-1 text-sm">
                <span
                  className={`font-bold ${index === 0 ? "text-red-500" : "text-gray-300"}`}
                >
                  {Math.round(item.winProbability * 100)}%
                </span>{" "}
                <span className="text-gray-400">win probability</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-xs text-gray-400 text-right mt-2">
        Last updated: {new Date(prediction.lastUpdated).toLocaleString()}
      </div>
    </section>
  );
}

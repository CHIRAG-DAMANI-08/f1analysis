"use client";

import { useEffect, useState } from "react";
import DashboardNavbar from "@/components/dashboard-navbar";
import { Race, RacePrediction, Driver } from "@/types/race";
import { ArrowLeft, Calendar, Flag, MapPin, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate, formatProbability } from "@/utils/utils";

export default function LiveRaceDetailPage({ raceId }: { raceId: string }) {
  const [race, setRace] = useState<Race | null>(null);
  const [prediction, setPrediction] = useState<RacePrediction | null>(null);
  const [drivers, setDrivers] = useState<Record<string, Driver>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Fetch race schedule to find the specific race
        const racesResponse = await fetch("/api/live-races");

        if (!racesResponse.ok) {
          throw new Error(`Failed to fetch races: ${racesResponse.status}`);
        }

        const races = await racesResponse.json();
        const currentRace = races.find((r: Race) => r.id === raceId);

        if (!currentRace) {
          throw new Error("Race not found");
        }

        setRace(currentRace);

        // Fetch all drivers for reference
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

        // Fetch prediction for this race
        const predictionResponse = await fetch(
          `/api/live-predictions?raceId=${raceId}`,
        );

        if (predictionResponse.ok) {
          const predictionData = await predictionResponse.json();
          setPrediction(predictionData);
        }
        // If prediction fetch fails, we just don't show predictions
      } catch (err) {
        console.error("Error fetching race details:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load race details",
        );
      } finally {
        setLoading(false);
      }
    }

    if (raceId) {
      fetchData();

      // Set up a refresh interval to update predictions frequently
      const refreshInterval = setInterval(fetchData, 10 * 60 * 1000); // Refresh every 10 minutes

      return () => clearInterval(refreshInterval);
    }
  }, [raceId]);

  if (loading) {
    return (
      <>
        <DashboardNavbar />
        <main className="w-full bg-gray-900 text-white min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <div className="animate-pulse">
              <div className="h-6 w-32 bg-gray-700 rounded mb-8"></div>
              <div className="h-64 bg-gray-700 rounded-xl mb-8"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="h-96 bg-gray-700 rounded-xl"></div>
                <div className="lg:col-span-2 h-96 bg-gray-700 rounded-xl"></div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  if (error || !race) {
    return (
      <>
        <DashboardNavbar />
        <main className="w-full bg-gray-900 text-white min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center py-12">
              <h1 className="text-3xl font-bold mb-4">Race Not Found</h1>
              <p className="text-gray-400 mb-6">
                {error ||
                  "The race you're looking for doesn't exist or has been removed."}
              </p>
              <Link
                href="/races"
                className="inline-flex items-center px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Races
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  // Get driver details for predictions
  const driverPredictions = prediction
    ? prediction.predictions
        .map((pred) => ({
          ...pred,
          driver: drivers[pred.driverId],
        }))
        .filter((item) => item.driver)
    : [];

  return (
    <>
      <DashboardNavbar />
      <main className="w-full bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Back button */}
          <Link
            href="/races"
            className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Races
          </Link>

          {/* Race Header */}
          <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 mb-8">
            <div className="relative h-64 w-full">
              <Image
                src={race.image}
                alt={race.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h1 className="font-bold text-3xl mb-2">{race.name}</h1>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-300">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-red-500" />
                    <span>{formatDate(race.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-red-500" />
                    <span>
                      {race.location}, {race.country}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Flag className="h-4 w-4 text-red-500" />
                    <span>{race.circuit}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Race Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Track Information */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h2 className="font-semibold text-xl mb-4">Track Information</h2>

              {race.trackMap && (
                <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={race.trackMap}
                    alt={`${race.circuit} track map`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="space-y-4">
                {race.laps && (
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <span>Laps</span>
                    <span className="font-bold">{race.laps}</span>
                  </div>
                )}
                {race.distance && (
                  <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                    <span>Distance</span>
                    <span className="font-bold">{race.distance} km</span>
                  </div>
                )}
                {race.lapRecord && (
                  <div className="p-3 bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span>Lap Record</span>
                      <span className="font-bold">{race.lapRecord.time}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {race.lapRecord.driver} ({race.lapRecord.year})
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 text-xs text-gray-400 text-center">
                Data provided by Ergast F1 API
              </div>
            </div>

            {/* Race Predictions */}
            <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-xl">Race Predictions</h2>
                {prediction && (
                  <div className="text-xs text-gray-400">
                    Last updated:{" "}
                    {new Date(prediction.lastUpdated).toLocaleString()}
                  </div>
                )}
              </div>

              {driverPredictions.length > 0 ? (
                <div className="space-y-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left border-b border-gray-700">
                          <th className="pb-2">Position</th>
                          <th className="pb-2">Driver</th>
                          <th className="pb-2">Team</th>
                          <th className="pb-2">Win Probability</th>
                          <th className="pb-2">Podium Probability</th>
                        </tr>
                      </thead>
                      <tbody>
                        {driverPredictions.map((item, index) => (
                          <tr
                            key={item.driverId}
                            className="border-b border-gray-700 hover:bg-gray-750"
                          >
                            <td className="py-3">
                              <span
                                className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${index < 3 ? "bg-red-600" : "bg-gray-700"}`}
                              >
                                {index + 1}
                              </span>
                            </td>
                            <td className="py-3">
                              <div className="flex items-center gap-3">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                  <Image
                                    src={item.driver?.image || ""}
                                    alt={item.driver?.name || ""}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <span>{item.driver?.name}</span>
                              </div>
                            </td>
                            <td className="py-3">{item.driver?.team}</td>
                            <td className="py-3 font-medium">
                              {formatProbability(item.winProbability)}
                            </td>
                            <td className="py-3 font-medium">
                              {formatProbability(item.podiumProbability)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {prediction && prediction.factors && (
                    <div>
                      <h3 className="font-medium mb-3">Prediction Factors</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {prediction.factors.map((factor, index) => (
                          <div
                            key={index}
                            className="p-3 bg-gray-700 rounded-lg"
                          >
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-medium">{factor.name}</span>
                              <span
                                className={`${factor.impact > 0 ? "text-green-500" : factor.impact < 0 ? "text-red-500" : "text-gray-400"}`}
                              >
                                {factor.impact > 0
                                  ? `+${factor.impact}`
                                  : factor.impact}
                              </span>
                            </div>
                            <p className="text-sm text-gray-400">
                              {factor.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <Timer className="h-12 w-12 mx-auto mb-4 opacity-30" />
                  <p className="mb-2">Predictions not available yet</p>
                  <p className="text-sm">
                    Our AI is analyzing data for this race. Check back soon!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

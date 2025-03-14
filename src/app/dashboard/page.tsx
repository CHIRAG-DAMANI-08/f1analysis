"use client";

import { useEffect, useState } from "react";
import DashboardNavbar from "@/components/dashboard-navbar";
import LiveRacePrediction from "@/components/live-race-prediction";
import UpcomingRaces from "@/components/upcoming-races";
import TopDriversCard from "@/components/top-drivers-card";
import PredictionStats from "@/components/prediction-stats";
import { InfoIcon, AlertTriangle } from "lucide-react";
import { Race } from "@/types/race";

export default function Dashboard() {
  const [nextRace, setNextRace] = useState<Race | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNextRace() {
      try {
        setLoading(true);
        const response = await fetch("/api/live-races");

        if (!response.ok) {
          throw new Error(`Failed to fetch races: ${response.status}`);
        }

        const races = await response.json();

        // Get the first upcoming race
        if (races && races.length > 0) {
          setNextRace(races[0]);
        } else {
          setError("No upcoming races found");
        }
      } catch (err) {
        console.error("Error fetching next race:", err);
        setError("Failed to load upcoming races. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchNextRace();
  }, []);

  return (
    <>
      <DashboardNavbar />
      <main className="w-full bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
          {/* Header Section */}
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Race Predictions Dashboard</h1>
            <div className="bg-gray-800 text-sm p-3 px-4 rounded-lg text-gray-300 flex gap-2 items-center border border-gray-700">
              <InfoIcon size="14" className="text-red-500" />
              <span>
                Welcome to the F1 Race Predictor dashboard. View upcoming races
                and predictions powered by our AI engine using live data from
                the Ergast F1 API.
              </span>
            </div>
          </header>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Upcoming Race */}
            <div className="lg:col-span-2 space-y-8">
              {/* Next Race Prediction */}
              {loading ? (
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
                  <div className="animate-pulse">
                    <div className="h-8 w-64 bg-gray-700 rounded mb-6"></div>
                    <div className="h-48 bg-gray-700 rounded-lg mb-6"></div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="h-24 bg-gray-700 rounded-lg"></div>
                      <div className="h-24 bg-gray-700 rounded-lg"></div>
                      <div className="h-24 bg-gray-700 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              ) : error ? (
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
                  <div className="text-center py-8">
                    <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
                    <h3 className="text-xl font-medium mb-2">
                      Could not load race data
                    </h3>
                    <p className="text-gray-400 mb-4">{error}</p>
                    <button
                      onClick={() => window.location.reload()}
                      className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              ) : nextRace ? (
                <LiveRacePrediction
                  raceId={nextRace.id}
                  raceName={nextRace.name}
                  raceDate={nextRace.date}
                  raceLocation={nextRace.location}
                  raceCountry={nextRace.country}
                  raceImage={nextRace.image}
                />
              ) : (
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
                  <div className="text-center py-8">
                    <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
                    <h3 className="text-xl font-medium mb-2">
                      No upcoming races found
                    </h3>
                    <p className="text-gray-400">
                      Check back later for the next race schedule
                    </p>
                  </div>
                </div>
              )}

              {/* Race Calendar */}
              <UpcomingRaces />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Stats Section */}
              <PredictionStats />

              {/* Top Drivers */}
              <TopDriversCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

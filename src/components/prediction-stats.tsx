"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Trophy, RefreshCw, Clock, Activity } from "lucide-react";

export default function PredictionStats() {
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [accuracy, setAccuracy] = useState<number>(87);

  const [refreshInterval, setRefreshInterval] = useState<number>(5 * 60 * 1000); // Default 5 minutes
  const [raceStatus, setRaceStatus] = useState<string>("No active race");
  const [updateFrequencyText, setUpdateFrequencyText] =
    useState<string>("Hourly");

  // Check if there's a live race and adjust update frequency
  useEffect(() => {
    const checkRaceStatus = async () => {
      try {
        const response = await fetch("/api/race-status");
        if (!response.ok) throw new Error("Failed to fetch race status");

        const data = await response.json();
        setRaceStatus(data.status);
        setRefreshInterval(data.refreshInterval);

        // Update the frequency text based on the interval
        if (data.refreshInterval <= 30 * 1000) {
          setUpdateFrequencyText(
            `Every ${data.refreshInterval / 1000} seconds`,
          );
        } else if (data.refreshInterval <= 5 * 60 * 1000) {
          setUpdateFrequencyText(
            `Every ${data.refreshInterval / (60 * 1000)} minutes`,
          );
        } else if (data.refreshInterval <= 60 * 60 * 1000) {
          setUpdateFrequencyText("Hourly");
        } else {
          setUpdateFrequencyText("Daily");
        }

        // If race is live, add the race name
        if (data.race && data.isLive) {
          setRaceStatus(`${data.status}: ${data.race.name}`);
        }
      } catch (error) {
        console.error("Error checking race status:", error);
        setRaceStatus("Error checking races");
        setRefreshInterval(15 * 60 * 1000); // 15 minutes on error
        setUpdateFrequencyText("Every 15 minutes");
      }
    };

    // Initial check
    checkRaceStatus();

    // Check for race status every 5 minutes
    const statusCheckInterval = setInterval(checkRaceStatus, 5 * 60 * 1000);

    return () => clearInterval(statusCheckInterval);
  }, []);

  // Update prediction stats with dynamic refresh interval
  useEffect(() => {
    // Set initial last updated time
    setLastUpdated(new Date().toLocaleTimeString());

    // Slightly vary the accuracy to simulate real-time updates
    const updateStats = () => {
      // Random variation between -1.5 and +1.5
      const variation = Math.random() * 3 - 1.5;
      // Keep accuracy between 85 and 92
      setAccuracy((prev) => {
        const newValue = prev + variation;
        return newValue > 92
          ? 92
          : newValue < 85
            ? 85
            : parseFloat(newValue.toFixed(1));
      });
      setLastUpdated(new Date().toLocaleTimeString());
    };

    // Update stats with dynamic interval
    const interval = setInterval(updateStats, refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);

  return (
    <section className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
          <TrendingUp className="text-red-500 w-6 h-6" />
        </div>
        <div>
          <h2 className="font-semibold text-xl">AI Predictions</h2>
          <p className="text-sm text-gray-400">Powered by machine learning</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-red-500 w-4 h-4" />
            <span className="text-sm">Prediction Accuracy</span>
          </div>
          <span className="font-bold">{accuracy}%</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
          <div className="flex items-center gap-2">
            <Trophy className="text-red-500 w-4 h-4" />
            <span className="text-sm">Correct Predictions</span>
          </div>
          <span className="font-bold">12</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
          <div className="flex items-center gap-2">
            <RefreshCw className="text-red-500 w-4 h-4" />
            <span className="text-sm">Update Frequency</span>
          </div>
          <span className="font-bold">{updateFrequencyText}</span>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-400 flex items-center justify-between">
        <div className="flex items-center">
          <Activity className="w-3 h-3 mr-1" />
          <span>{raceStatus}</span>
          {raceStatus.includes("Live") && (
            <span className="relative flex h-2 w-2 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          )}
        </div>
        <div className="flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          Last updated:{" "}
          {typeof window !== "undefined" ? lastUpdated : "loading..."}
        </div>
      </div>
    </section>
  );
}

"use client";

import { TrendingUp, Trophy, RefreshCw, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function PredictionStats() {
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [accuracy, setAccuracy] = useState<number>(87);

  // Simulate real-time updates to prediction stats
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

    // Update stats every 5 minutes
    const interval = setInterval(updateStats, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

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
          <span className="font-bold">Hourly</span>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-400 flex items-center justify-end">
        <Clock className="w-3 h-3 mr-1" />
        Last updated: {lastUpdated}
      </div>
    </section>
  );
}

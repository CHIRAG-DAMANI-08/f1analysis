"use client";

import { useEffect, useState } from "react";
import { RacePrediction } from "@/types/race";

interface LivePredictionUpdaterProps {
  raceId: string;
  onUpdate?: (prediction: RacePrediction) => void;
  refreshInterval?: number; // in milliseconds
  raceStatus?: string; // Added race status parameter
}

export default function LivePredictionUpdater({
  raceId,
  onUpdate,
  refreshInterval = 60000, // Default to 1 minute
  raceStatus = "Upcoming", // Default status
}: LivePredictionUpdaterProps) {
  const [prediction, setPrediction] = useState<RacePrediction | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrediction = async () => {
    try {
      setLoading(true);
      setError(null);

      // Include race status in the API call
      const response = await fetch(
        `/api/live-predictions?raceId=${raceId}&status=${raceStatus}`,
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch prediction: ${response.status}`);
      }

      const data = await response.json();
      setPrediction(data);

      if (onUpdate && data) {
        onUpdate(data);
      }
    } catch (err) {
      console.error("Error fetching live prediction:", err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch prediction",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchPrediction();

    // Set up interval for periodic updates
    const intervalId = setInterval(fetchPrediction, refreshInterval);

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [raceId, refreshInterval, raceStatus]);

  // This component doesn't render anything visible
  // It just handles the data fetching and updates
  return null;
}

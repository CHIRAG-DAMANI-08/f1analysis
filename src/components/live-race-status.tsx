"use client";

import { useEffect, useState } from "react";
import { Clock, Activity } from "lucide-react";

interface LiveRaceStatusProps {
  raceId: string;
  raceDate: string;
  raceName: string;
}

export default function LiveRaceStatus({
  raceId,
  raceDate,
  raceName,
}: LiveRaceStatusProps) {
  const [isLive, setIsLive] = useState(false);
  const [raceStatus, setRaceStatus] = useState<string>("Upcoming");
  const [refreshInterval, setRefreshInterval] = useState<number>(
    15 * 60 * 1000,
  ); // Default 15 minutes
  const [updateFrequencyText, setUpdateFrequencyText] =
    useState<string>("15 minutes");

  useEffect(() => {
    // Function to check if race is currently live
    const checkRaceStatus = () => {
      const now = new Date();
      const race = new Date(raceDate);

      // For demo purposes: Consider race as live if it's today
      const isToday = now.toDateString() === race.toDateString();

      // For demo purposes: Consider race as live if it's within 2 days (past or future)
      const timeDiff = Math.abs(now.getTime() - race.getTime());
      const daysDiff = timeDiff / (1000 * 3600 * 24);

      if (daysDiff <= 2) {
        // Race is considered live or very close
        setIsLive(true);

        // Determine exact status
        if (now < race) {
          // Race is today but hasn't started
          setRaceStatus("Pre-race");
          setRefreshInterval(5 * 60 * 1000); // 5 minutes
          setUpdateFrequencyText("5 minutes");
        } else if (now.getTime() - race.getTime() < 4 * 60 * 60 * 1000) {
          // Race is likely in progress (assuming ~4 hours for a race)
          setRaceStatus("Live");
          setRefreshInterval(30 * 1000); // 30 seconds during live race
          setUpdateFrequencyText("30 seconds");
        } else {
          // Race recently finished
          setRaceStatus("Post-race");
          setRefreshInterval(10 * 60 * 1000); // 10 minutes
          setUpdateFrequencyText("10 minutes");
        }
      } else if (now < race) {
        // Upcoming race
        setIsLive(false);
        setRaceStatus("Upcoming");

        // Calculate days until race
        const daysUntil = Math.ceil(daysDiff);
        if (daysUntil <= 7) {
          // Race week
          setRefreshInterval(60 * 60 * 1000); // Hourly during race week
          setUpdateFrequencyText("hour");
        } else {
          setRefreshInterval(24 * 60 * 60 * 1000); // Daily otherwise
          setUpdateFrequencyText("day");
        }
      } else {
        // Past race
        setIsLive(false);
        setRaceStatus("Completed");
        setRefreshInterval(24 * 60 * 60 * 1000); // Daily
        setUpdateFrequencyText("day");
      }
    };

    // Initial check
    checkRaceStatus();

    // Set up interval to periodically check race status
    const statusInterval = setInterval(checkRaceStatus, 60 * 1000); // Check every minute

    return () => clearInterval(statusInterval);
  }, [raceDate]);

  return (
    <div className="flex items-center gap-2 text-sm">
      {isLive ? (
        <>
          <div className="flex items-center">
            <Activity className="h-4 w-4 text-red-500 mr-1" />
            <span className="font-medium text-red-500">{raceStatus}</span>
          </div>
          {raceStatus === "Live" && (
            <span className="relative flex h-3 w-3 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          )}
        </>
      ) : (
        <div className="flex items-center">
          <Clock className="h-4 w-4 text-gray-400 mr-1" />
          <span className="text-gray-400">{raceStatus}</span>
        </div>
      )}
      <span className="text-xs text-gray-500 hidden md:inline">
        {isLive
          ? `Updates every ${updateFrequencyText}`
          : raceStatus === "Upcoming"
            ? `Race: ${new Date(raceDate).toLocaleDateString()}`
            : `Last race: ${new Date(raceDate).toLocaleDateString()}`}
      </span>
    </div>
  );
}

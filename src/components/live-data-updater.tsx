"use client";

import { useEffect, useState } from "react";
import { Activity, RefreshCw } from "lucide-react";

export default function LiveDataUpdater() {
  const [status, setStatus] = useState<string>("Checking race status...");
  const [isLive, setIsLive] = useState<boolean>(false);
  const [refreshInterval, setRefreshInterval] = useState<number>(60000); // Default 1 minute
  const [lastChecked, setLastChecked] = useState<string>("");
  const [updateFrequencyText, setUpdateFrequencyText] =
    useState<string>("every minute");

  useEffect(() => {
    const checkRaceStatus = async () => {
      try {
        const response = await fetch("/api/race-status");
        if (!response.ok) throw new Error("Failed to fetch race status");

        const data = await response.json();
        setIsLive(data.isLive);
        setStatus(data.status);
        setRefreshInterval(data.refreshInterval);
        setLastChecked(new Date().toLocaleTimeString());

        // Format the update frequency text based on the interval
        if (data.refreshInterval < 60 * 1000) {
          setUpdateFrequencyText(
            `every ${data.refreshInterval / 1000} seconds`,
          );
        } else if (data.refreshInterval < 60 * 60 * 1000) {
          const minutes = data.refreshInterval / (60 * 1000);
          setUpdateFrequencyText(
            `every ${minutes} ${minutes === 1 ? "minute" : "minutes"}`,
          );
        } else if (data.refreshInterval < 24 * 60 * 60 * 1000) {
          const hours = data.refreshInterval / (60 * 60 * 1000);
          setUpdateFrequencyText(
            `every ${hours} ${hours === 1 ? "hour" : "hours"}`,
          );
        } else {
          const days = data.refreshInterval / (24 * 60 * 60 * 1000);
          setUpdateFrequencyText(
            `every ${days} ${days === 1 ? "day" : "days"}`,
          );
        }
      } catch (error) {
        console.error("Error checking race status:", error);
        setStatus("Error checking race status");
        setLastChecked(new Date().toLocaleTimeString());
        setUpdateFrequencyText("every 15 minutes");
      }
    };

    // Initial check
    checkRaceStatus();

    // Set up interval to check race status
    const statusInterval = setInterval(checkRaceStatus, 60000); // Check every minute

    return () => clearInterval(statusInterval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-700 z-50 text-sm flex items-center gap-2">
      {isLive ? (
        <>
          <Activity className="h-4 w-4 text-red-500" />
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="font-medium text-red-500">{status}</span>
              <span className="relative flex h-2 w-2 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </div>
            <span className="text-xs text-gray-400">
              Data refreshes {updateFrequencyText}
            </span>
          </div>
        </>
      ) : (
        <>
          <RefreshCw className="h-4 w-4 text-gray-400" />
          <div className="flex flex-col">
            <span className="text-gray-300">{status}</span>
            <span className="text-xs text-gray-400">
              Updates {updateFrequencyText}
              {lastChecked ? ` • Last checked: ${lastChecked}` : ""}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

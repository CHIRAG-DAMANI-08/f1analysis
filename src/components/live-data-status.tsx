"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

interface LiveDataStatusProps {
  lastUpdated: string;
  refreshInterval?: number;
}

export default function LiveDataStatus({
  lastUpdated,
  refreshInterval = 30000, // Default to 30 seconds
}: LiveDataStatusProps) {
  const [timeAgo, setTimeAgo] = useState<string>("");

  useEffect(() => {
    // Initial calculation
    calculateTimeAgo();

    // Set up interval to update the time ago text
    const intervalId = setInterval(calculateTimeAgo, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, [lastUpdated]);

  const calculateTimeAgo = () => {
    const now = new Date();
    const updated = new Date(lastUpdated);
    const diffMs = now.getTime() - updated.getTime();
    const diffSec = Math.floor(diffMs / 1000);

    if (diffSec < 5) {
      setTimeAgo("just now");
    } else if (diffSec < 60) {
      setTimeAgo(`${diffSec} seconds ago`);
    } else if (diffSec < 3600) {
      const minutes = Math.floor(diffSec / 60);
      setTimeAgo(`${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`);
    } else {
      const hours = Math.floor(diffSec / 3600);
      setTimeAgo(`${hours} ${hours === 1 ? "hour" : "hours"} ago`);
    }
  };

  // Determine badge color based on how recent the update is
  const getBadgeVariant = () => {
    const now = new Date();
    const updated = new Date(lastUpdated);
    const diffMs = now.getTime() - updated.getTime();

    // If data is older than 2x the refresh interval, show warning
    if (diffMs > refreshInterval * 2) {
      return "destructive";
    }
    // If data is older than the refresh interval, show caution
    else if (diffMs > refreshInterval) {
      return "outline";
    }
    // Otherwise data is fresh
    return "secondary";
  };

  return (
    <Badge variant={getBadgeVariant()} className="ml-2">
      {timeAgo}
    </Badge>
  );
}

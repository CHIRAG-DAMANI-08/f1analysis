"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RacePrediction } from "@/types/race";
import LivePredictionUpdater from "./live-prediction-updater";

interface RacePredictionLiveProps {
  raceId: string;
  initialPrediction?: RacePrediction;
}

export default function RacePredictionLive({
  raceId,
  initialPrediction,
}: RacePredictionLiveProps) {
  const [prediction, setPrediction] = useState<RacePrediction | null>(
    initialPrediction || null,
  );
  const [lastUpdated, setLastUpdated] = useState<string>(
    new Date().toISOString(),
  );

  const handlePredictionUpdate = (newPrediction: RacePrediction) => {
    setPrediction(newPrediction);
    setLastUpdated(new Date().toISOString());
  };

  // Format the last updated time
  const formatLastUpdated = (isoString: string) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    }).format(date);
  };

  if (!prediction) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Live Race Prediction</CardTitle>
          <CardDescription>Loading prediction data...</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <>
      <LivePredictionUpdater
        raceId={raceId}
        onUpdate={handlePredictionUpdate}
        refreshInterval={30000} // Update every 30 seconds
      />

      <Card className="w-full">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Live Race Prediction</CardTitle>
              <CardDescription>
                Updated at {formatLastUpdated(lastUpdated)}
              </CardDescription>
            </div>
            <Badge
              variant="outline"
              className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 animate-pulse"
            >
              LIVE
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Top 3 Predictions</h3>
              <div className="space-y-1">
                {prediction.predictions.slice(0, 3).map((driver) => (
                  <div
                    key={driver.driverId}
                    className="flex justify-between items-center p-2 bg-muted/50 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{driver.position}.</span>
                      <span>
                        {driver.driverId
                          .split("_")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1),
                          )
                          .join(" ")}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">
                        {(driver.winProbability * 100).toFixed(1)}%
                      </span>{" "}
                      win probability
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Key Factors</h3>
              <div className="space-y-1">
                {prediction.factors.map((factor, index) => (
                  <div key={index} className="p-2 bg-muted/50 rounded-md">
                    <div className="flex justify-between">
                      <span className="font-medium">{factor.name}</span>
                      <span className="text-sm">
                        Impact: {factor.impact}/10
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {factor.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

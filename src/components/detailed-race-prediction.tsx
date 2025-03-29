"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface PredictionFactor {
  name: string;
  description: string;
  impact: number;
}

interface Driver {
  name: string;
  winProbability: number;
  position: number;
}

interface DetailedRacePredictionProps {
  raceId: string;
  raceName?: string;
  circuitName?: string;
  location?: string;
  date?: string;
  trackImage?: string;
  laps?: number;
  distance?: number;
  lapRecord?: string;
}

export default function DetailedRacePrediction({
  raceId,
  raceName = "Australian Grand Prix",
  circuitName = "Albert Park Circuit",
  location = "Melbourne",
  date = "3/24/2025",
  trackImage = "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?w=800&q=80",
  laps = 58,
  distance = 307.574,
  lapRecord = "1:20.235 (Charles Leclerc, 2022)",
}: DetailedRacePredictionProps) {
  const [isLive, setIsLive] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [refreshInterval, setRefreshInterval] = useState(30); // seconds
  const [predictions, setPredictions] = useState<Driver[]>([
    { name: "Max Verstappen", winProbability: 75.0, position: 1 },
    { name: "Norris", winProbability: 45.0, position: 2 },
    { name: "Leclerc", winProbability: 54.0, position: 3 },
  ]);
  const [factors, setPredictionFactors] = useState<PredictionFactor[]>([
    {
      name: "Current Championship Form",
      description:
        "Max Verstappen leads with 437 points, Lando Norris follows with 374 points",
      impact: 7,
    },
    {
      name: "Team Performance Trend",
      description:
        "Red Bull has shown improving pace in recent races with strong qualifying performance",
      impact: 6,
    },
    {
      name: "Track Compatibility",
      description:
        "Based on historical data, this circuit favors Red Bull cars",
      impact: 8,
    },
    {
      name: "Weather Forecast",
      description:
        "Light rain conditions expected with track temperature around 27°C, 12km/h winds, 60% humidity, and 69% chance of rain",
      impact: 6,
    },
    {
      name: "Tire Strategy Options",
      description:
        "Moderate tire degradation expected, favoring single-stop strategies",
      impact: 5,
    },
  ]);

  // Simulate data refresh
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      // In a real app, this would fetch from API
      setLastUpdated(new Date());

      // Slightly randomize probabilities to simulate live updates
      setPredictions((prev) =>
        prev.map((driver) => ({
          ...driver,
          winProbability: Math.min(
            100,
            Math.max(1, driver.winProbability + (Math.random() * 6 - 3)),
          ),
        })),
      );
    }, refreshInterval * 1000);

    return () => clearInterval(interval);
  }, [isLive, refreshInterval]);

  return (
    <div className="space-y-6">
      <div className="bg-blue-600 p-4 rounded-t-lg">
        <h1 className="text-2xl font-bold text-white">
          {raceName} - Live Prediction
        </h1>
        <p className="text-white/90 text-sm">
          Real-time race predictions updated every {refreshInterval} seconds
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left column - Prediction */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-blue-600 text-white p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg">Live Race Prediction</CardTitle>
                <p className="text-sm opacity-90">
                  {typeof window !== "undefined"
                    ? `Updated at ${lastUpdated.toLocaleTimeString()}`
                    : "Updating..."}
                </p>
              </div>
              {isLive && (
                <Badge className="bg-red-500 text-white animate-pulse">
                  LIVE
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold bg-blue-600 text-white p-2 rounded">
                  Top 3 Predictions
                </h3>
                <div className="space-y-4 mt-4">
                  {predictions.map((driver) => (
                    <div
                      key={driver.name}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-600 text-white font-bold p-1 min-w-8 text-center rounded">
                          {driver.position}.
                        </span>
                        <span className="font-semibold">{driver.name}</span>
                      </div>
                      <Badge
                        className={`${driver.position === 1 ? "bg-blue-600" : "bg-blue-500"} text-white px-3 py-1`}
                      >
                        {driver.winProbability.toFixed(1)}% win probability
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold bg-blue-600 text-white p-2 rounded">
                  Key Factors
                </h3>

                {factors.map((factor) => (
                  <div key={factor.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium bg-blue-600 text-white px-2 py-1 rounded">
                        {factor.name}
                      </h4>
                      <Badge className="bg-blue-600 text-white">
                        Impact: {factor.impact}/10
                      </Badge>
                    </div>
                    <p className="text-sm bg-blue-100 p-2 rounded dark:bg-blue-950 dark:text-blue-100">
                      {factor.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right column - Race Information */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-blue-600 text-white p-4 rounded-t-lg">
            <CardTitle className="text-lg">Race Information</CardTitle>
            <p className="text-sm opacity-90">
              {circuitName}, {location}
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="relative h-48 w-full rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 flex items-center justify-center text-white font-bold">
                  {circuitName} track layout
                </div>
                <Image
                  src={trackImage}
                  alt={`${circuitName} track layout`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Date:
                  </h4>
                  <p className="font-semibold">{date}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Laps:
                  </h4>
                  <p className="font-semibold">{laps}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Distance:
                  </h4>
                  <p className="font-semibold">{distance} km</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Lap Record:
                  </h4>
                  <p className="font-semibold">{lapRecord}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { Suspense } from "react";
import { notFound } from "next/navigation";
import { fetchRaceSchedule, generateRacePredictions } from "@/lib/api";
import RacePredictionLive from "@/components/race-prediction-live";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

interface LivePredictionPageProps {
  params: {
    id: string;
  };
}

export default async function LivePredictionPage({
  params,
}: LivePredictionPageProps) {
  const { id } = params;

  // Fetch race details to verify the race exists
  const races = await fetchRaceSchedule();
  const race = races.find((r) => r.id === id);

  if (!race) {
    notFound();
  }

  // Get initial prediction data
  const initialPrediction = await generateRacePredictions(id);

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex items-center gap-2 mb-4">
        <Link
          href={`/races/${id}`}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← Back to Race Details
        </Link>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">
          {race.name} - Live Prediction
        </h1>
        <p className="text-muted-foreground">
          Real-time race predictions updated every 30 seconds
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Suspense fallback={<PredictionSkeleton />}>
            <RacePredictionLive
              raceId={id}
              initialPrediction={initialPrediction || undefined}
            />
          </Suspense>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Race Information</CardTitle>
              <CardDescription>
                {race.circuit}, {race.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <img
                    src={race.trackMap}
                    alt={`${race.circuit} track layout`}
                    className="w-full h-auto rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Date:</span>
                    <span className="font-medium">
                      {new Date(race.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Laps:</span>
                    <span className="font-medium">{race.laps}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Distance:
                    </span>
                    <span className="font-medium">{race.distance} km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Lap Record:
                    </span>
                    <span className="font-medium">
                      {race.lapRecord.time} ({race.lapRecord.driver},{" "}
                      {race.lapRecord.year})
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href={`/races/${id}/detailed-prediction`}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  View detailed prediction →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function PredictionSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/2 mt-2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-5 w-1/3" />
            <div className="space-y-2">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-1/3" />
            <div className="space-y-2">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

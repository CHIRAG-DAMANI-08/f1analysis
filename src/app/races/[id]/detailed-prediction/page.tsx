import { Suspense } from "react";
import { fetchRaceSchedule } from "@/lib/api";
import DetailedRacePrediction from "@/components/detailed-race-prediction";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export const dynamic = "force-dynamic"; // Ensure this page is never cached

export default async function DetailedRacePredictionPage({
  params,
}: {
  params: { id: string };
}) {
  // Fetch race details
  const races = await fetchRaceSchedule();
  const race = races.find((r) => r.id === params.id) || null;

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center gap-2">
        <Link
          href={`/races/${params.id}`}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← Back to Race Details
        </Link>
      </div>

      <Suspense fallback={<DetailedPredictionSkeleton />}>
        {race ? (
          <DetailedRacePrediction
            raceId={race.id}
            raceName={race.name}
            circuitName={race.circuit}
            location={race.location}
            date={new Date(race.date).toLocaleDateString()}
            trackImage={race.trackMap}
            laps={race.laps}
            distance={race.distance}
          />
        ) : (
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Race Not Found</h2>
            <p className="text-muted-foreground mb-4">
              The race you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/races"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View All Races
            </Link>
          </div>
        )}
      </Suspense>
    </div>
  );
}

function DetailedPredictionSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-12 w-full max-w-lg" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-48 w-full" />
        </div>

        <div className="space-y-4">
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    </div>
  );
}

import { Suspense } from "react";
import {
  fetchRaceSchedule,
  fetchDriverStandings,
  generateRacePredictions,
} from "@/lib/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import RacePredictionLive from "@/components/race-prediction-live";
import Link from "next/link";

export const dynamic = "force-dynamic"; // Ensure this page is never cached

export default async function LiveDashboardPage() {
  // Fetch upcoming races
  const races = await fetchRaceSchedule();
  const upcomingRaces = races
    .filter((race) => new Date(race.date) >= new Date())
    .slice(0, 3); // Get next 3 races

  // Get the next race
  const nextRace = upcomingRaces[0];

  // Get driver standings
  const drivers = await fetchDriverStandings();

  // Get prediction for the next race
  const prediction = nextRace
    ? await generateRacePredictions(nextRace.id)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto py-8 space-y-8 px-4">
        <div className="py-6">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full mb-4 font-medium text-sm">
            LIVE UPDATES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Live F1 Dashboard
          </h1>
          <p className="text-xl text-gray-300">
            Real-time race predictions and statistics updated automatically
          </p>
        </div>

        <Tabs defaultValue="predictions" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-3 bg-gray-800 border border-gray-700">
            <TabsTrigger
              value="predictions"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
            >
              Predictions
            </TabsTrigger>
            <TabsTrigger
              value="races"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
            >
              Upcoming Races
            </TabsTrigger>
            <TabsTrigger
              value="drivers"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
            >
              Driver Standings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="predictions" className="space-y-6 mt-6">
            {nextRace && prediction ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Suspense fallback={<PredictionSkeleton />}>
                    <RacePredictionLive
                      raceId={nextRace.id}
                      initialPrediction={prediction}
                    />
                  </Suspense>
                </div>

                <div>
                  <Card className="bg-gray-800 border border-gray-700 text-white hover:bg-gray-750 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-white">
                        {nextRace.name}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {nextRace.circuit}, {nextRace.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <img
                            src={nextRace.trackMap}
                            alt={`${nextRace.circuit} track layout`}
                            className="w-full h-auto rounded-md"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Date:</span>
                            <span className="font-medium text-white">
                              {new Date(nextRace.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Laps:</span>
                            <span className="font-medium text-white">
                              {nextRace.laps}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">
                              Distance:
                            </span>
                            <span className="font-medium text-white">
                              {nextRace.distance} km
                            </span>
                          </div>
                        </div>

                        <div className="pt-2 space-y-2">
                          <Link
                            href={`/races/${nextRace.id}`}
                            className="text-sm text-gray-300 hover:text-white block"
                          >
                            View full race details →
                          </Link>
                          <Link
                            href={`/races/${nextRace.id}/detailed-prediction`}
                            className="text-sm text-red-500 hover:text-red-400 block"
                          >
                            View detailed prediction →
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <Card className="bg-gray-800 border border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-white">
                    No Upcoming Races
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    There are no upcoming races with predictions available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Check back later for predictions on upcoming races.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="races" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingRaces.map((race) => (
                <Card
                  key={race.id}
                  className="bg-gray-800 border border-gray-700 text-white hover:bg-gray-750 transition-colors"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-white">
                      {race.name}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {race.circuit}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <img
                        src={race.image}
                        alt={race.name}
                        className="w-full h-40 object-cover rounded-md"
                      />

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-400">Date:</span>
                          <span className="font-medium text-white">
                            {new Date(race.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-400">
                            Location:
                          </span>
                          <span className="font-medium text-white">
                            {race.location}, {race.country}
                          </span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link
                          href={`/races/${race.id}/live-prediction`}
                          className="text-sm text-red-500 hover:text-red-400 font-medium"
                        >
                          View live predictions →
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="drivers" className="space-y-6 mt-6">
            <Card className="bg-gray-800 border border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-white">Driver Standings</CardTitle>
                <CardDescription className="text-gray-300">
                  Current Formula 1 driver standings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {drivers.slice(0, 10).map((driver, index) => (
                    <div
                      key={driver.id}
                      className="flex items-center p-2 bg-gray-750 rounded-md border border-gray-700"
                    >
                      <div className="w-8 text-center font-bold text-white">
                        {index + 1}
                      </div>
                      <div className="flex-1 ml-2">
                        <div className="font-medium text-white">
                          {driver.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {driver.team}
                        </div>
                      </div>
                      <div className="font-bold text-white">
                        {driver.points} pts
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/drivers"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    View all drivers →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function PredictionSkeleton() {
  return (
    <Card className="bg-gray-800 border border-gray-700">
      <CardHeader>
        <Skeleton className="h-8 w-3/4 bg-gray-700" />
        <Skeleton className="h-4 w-1/2 mt-2 bg-gray-700" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-5 w-1/3 bg-gray-700" />
            <div className="space-y-2">
              <Skeleton className="h-12 w-full bg-gray-700" />
              <Skeleton className="h-12 w-full bg-gray-700" />
              <Skeleton className="h-12 w-full bg-gray-700" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-1/3 bg-gray-700" />
            <div className="space-y-2">
              <Skeleton className="h-16 w-full bg-gray-700" />
              <Skeleton className="h-16 w-full bg-gray-700" />
              <Skeleton className="h-16 w-full bg-gray-700" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

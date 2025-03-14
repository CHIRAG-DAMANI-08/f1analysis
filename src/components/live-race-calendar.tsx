"use client";

import { useEffect, useState } from "react";
import { Race } from "@/types/race";
import { Calendar, Flag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate, getTimeRemaining } from "@/utils/utils";

export default function LiveRaceCalendar() {
  const [races, setRaces] = useState<Race[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRaces() {
      try {
        setLoading(true);
        const response = await fetch("/api/live-races");

        if (!response.ok) {
          throw new Error(`Failed to fetch races: ${response.status}`);
        }

        const data = await response.json();
        setRaces(data);
      } catch (err) {
        console.error("Error fetching live races:", err);
        setError("Failed to load upcoming races. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchRaces();
  }, []);

  // Group races by month
  const racesByMonth: Record<string, Race[]> = {};

  races.forEach((race) => {
    const date = new Date(race.date);
    const monthYear = date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

    if (!racesByMonth[monthYear]) {
      racesByMonth[monthYear] = [];
    }

    racesByMonth[monthYear].push(race);
  });

  if (loading) {
    return (
      <div className="w-full py-12 text-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-64 bg-gray-700 rounded mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-800 rounded-xl h-64 w-full"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-12 text-center">
        <div className="text-red-500 mb-4">
          <Flag className="h-12 w-12 mx-auto mb-2" />
          <p>{error}</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {Object.entries(racesByMonth).length > 0 ? (
        Object.entries(racesByMonth).map(([monthYear, monthRaces]) => (
          <div key={monthYear}>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Calendar className="text-red-500" />
              {monthYear}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {monthRaces.map((race) => {
                const timeRemaining = getTimeRemaining(race.date);
                const isUpcoming = timeRemaining.days >= 0;

                return (
                  <Link
                    href={`/races/${race.id}`}
                    key={race.id}
                    className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500 transition-colors group"
                  >
                    <div className="relative h-40 w-full">
                      <Image
                        src={race.image}
                        alt={race.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      <div className="absolute top-3 right-3">
                        {isUpcoming && (
                          <div className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                            Upcoming
                          </div>
                        )}
                      </div>
                      <div className="absolute bottom-0 left-0 p-4 w-full">
                        <h3 className="font-bold text-xl group-hover:text-red-500 transition-colors">
                          {race.name}
                        </h3>
                        <p className="text-gray-300">{formatDate(race.date)}</p>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between mb-4">
                        <div>
                          <span className="text-sm text-gray-400">Circuit</span>
                          <p className="font-medium">{race.circuit}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">
                            Location
                          </span>
                          <p className="font-medium">
                            {race.location}, {race.country}
                          </p>
                        </div>
                      </div>

                      {isUpcoming && (
                        <div className="mt-4 flex items-center justify-between">
                          <div className="text-sm text-gray-400">
                            {timeRemaining.days > 0 ? (
                              <span>Race in {timeRemaining.days} days</span>
                            ) : (
                              <span>Race today!</span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-red-500 group-hover:text-red-400">
                            <Flag className="h-4 w-4" />
                            <span className="font-medium">
                              View Predictions
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-500" />
          <h3 className="text-xl font-medium mb-2">No upcoming races found</h3>
          <p className="text-gray-400">
            Check back later for the next race schedule
          </p>
        </div>
      )}
    </div>
  );
}

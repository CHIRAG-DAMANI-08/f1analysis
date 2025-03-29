import DashboardNavbar from "@/components/dashboard-navbar";
import { fetchRaceSchedule } from "@/lib/api";
import { races as initialRaces } from "@/lib/data";
import { MapPin, Flag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/utils";

export default async function TracksPage() {
  // Fetch races from API, fallback to initial data if needed
  const races = await fetchRaceSchedule().catch(() => initialRaces);
  return (
    <>
      <DashboardNavbar />
      <main className="w-full bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">F1 Tracks</h1>
            <p className="text-gray-400">
              Explore all Formula 1 circuits with detailed track information and
              race history
            </p>
            <div className="mt-4 inline-block bg-red-600/20 border border-red-600/30 text-red-400 px-4 py-2 rounded-lg text-sm">
              <MapPin className="inline-block mr-2 h-4 w-4" />
              Circuit details and track layouts
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {races.map((race) => (
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
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="font-bold text-xl group-hover:text-red-500 transition-colors">
                      {race.circuit}
                    </h3>
                    <p className="text-gray-300">
                      {race.location}, {race.country}
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between mb-4">
                    <div>
                      <span className="text-sm text-gray-400">Grand Prix</span>
                      <p className="font-medium">{race.name}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-400">Race Date</span>
                      <p className="font-medium">{formatDate(race.date)}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-gray-400">
                      {race.laps} laps • {race.distance} km
                    </div>
                    <div className="flex items-center gap-1 text-red-500 group-hover:text-red-400">
                      <Flag className="h-4 w-4" />
                      <span className="font-medium">View Details</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

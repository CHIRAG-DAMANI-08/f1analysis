import { getUpcomingRaces } from "@/lib/data";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/utils";

export default function UpcomingRaces() {
  const upcomingRaces = getUpcomingRaces(3);

  return (
    <section className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="text-red-500" />
        <h2 className="font-semibold text-xl">Upcoming Races</h2>
      </div>

      <div className="space-y-4">
        {upcomingRaces.map((race) => (
          <div
            key={race.id}
            className="flex items-center gap-4 p-3 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors"
          >
            <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={race.image}
                alt={race.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-grow">
              <h4 className="font-medium">{race.name}</h4>
              <p className="text-sm text-gray-400">
                {formatDate(race.date)} • {race.location}, {race.country}
              </p>
            </div>
            <Link
              href={`/races/${race.id}`}
              className="px-3 py-1 bg-gray-600 hover:bg-red-600 transition-colors rounded text-sm"
            >
              Predict
            </Link>
          </div>
        ))}
      </div>

      <Link
        href="/races"
        className="mt-6 block text-center py-2 border border-gray-600 hover:border-red-500 hover:text-red-500 transition-colors rounded-lg text-sm"
      >
        View Full Calendar
      </Link>
    </section>
  );
}

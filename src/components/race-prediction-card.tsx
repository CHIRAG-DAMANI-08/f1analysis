import { getPredictionForRace, getDriverById, getRaceById } from "@/lib/data";
import { Flag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/utils";

interface RacePredictionCardProps {
  raceId: string;
}

export default function RacePredictionCard({
  raceId,
}: RacePredictionCardProps) {
  const prediction = getPredictionForRace(raceId);
  const race = getRaceById(raceId);

  if (!prediction || !race) {
    return (
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
        <p>Race or prediction not found</p>
      </div>
    );
  }

  // Get top 3 drivers from prediction
  const topDrivers = prediction.predictions
    .slice(0, 3)
    .map((pred) => ({
      ...pred,
      driver: getDriverById(pred.driverId),
    }))
    .filter((item) => item.driver); // Filter out any undefined drivers

  return (
    <section className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Flag className="text-red-500" />
        <h2 className="font-semibold text-xl">Race Prediction</h2>
      </div>

      <div className="relative rounded-lg overflow-hidden mb-6 h-48">
        <Image src={race.image} alt={race.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-2xl font-bold">{race.name}</h3>
          <p className="text-gray-300">
            {formatDate(race.date)} • {race.location}, {race.country}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {topDrivers.map((item, index) => (
          <div
            key={item.driverId}
            className="bg-gray-700 rounded-lg p-4 flex items-center gap-3"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={item.driver?.image || ""}
                alt={item.driver?.name || ""}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium">{item.driver?.name}</h4>
              <p className="text-xs text-gray-400">{item.driver?.team}</p>
              <div className="mt-1 text-sm">
                <span
                  className={`font-bold ${index === 0 ? "text-red-500" : "text-gray-300"}`}
                >
                  {Math.round(item.winProbability * 100)}%
                </span>{" "}
                <span className="text-gray-400">win probability</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        href={`/races/${race.id}`}
        className="block w-full text-center py-3 bg-red-600 hover:bg-red-700 transition-colors rounded-lg font-medium"
      >
        View Detailed Prediction
      </Link>
    </section>
  );
}

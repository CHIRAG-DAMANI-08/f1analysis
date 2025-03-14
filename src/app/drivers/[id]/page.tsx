import DashboardNavbar from "@/components/dashboard-navbar";
import { getDriverById } from "@/lib/data";
import { ArrowLeft, Award, Flag, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DriverDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const driver = getDriverById(params.id);

  if (!driver) {
    return (
      <>
        <DashboardNavbar />
        <main className="w-full bg-gray-900 text-white min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center py-12">
              <h1 className="text-3xl font-bold mb-4">Driver Not Found</h1>
              <p className="text-gray-400 mb-6">
                The driver you're looking for doesn't exist or has been removed.
              </p>
              <Link
                href="/drivers"
                className="inline-flex items-center px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Drivers
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  // Mock race history data
  const raceHistory = [
    {
      id: "bahrain-2023",
      name: "Bahrain Grand Prix",
      year: 2023,
      position: 1,
      points: 25,
    },
    {
      id: "saudi-2023",
      name: "Saudi Arabian Grand Prix",
      year: 2023,
      position: 2,
      points: 18,
    },
    {
      id: "australia-2023",
      name: "Australian Grand Prix",
      year: 2023,
      position: 1,
      points: 25,
    },
    {
      id: "miami-2023",
      name: "Miami Grand Prix",
      year: 2023,
      position: 1,
      points: 25,
    },
    {
      id: "imola-2023",
      name: "Emilia Romagna Grand Prix",
      year: 2023,
      position: 1,
      points: 25,
    },
  ];

  return (
    <>
      <DashboardNavbar />
      <main className="w-full bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Back button */}
          <Link
            href="/drivers"
            className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Drivers
          </Link>

          {/* Driver Header */}
          <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 mb-8">
            <div className="relative h-64 w-full">
              <Image
                src={driver.image}
                alt={driver.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold">
                    {driver.number}
                  </div>
                  <div>
                    <h1 className="font-bold text-3xl">{driver.name}</h1>
                    <p className="text-xl text-gray-300">{driver.team}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div>
                  <span className="text-sm text-gray-400">Points</span>
                  <p className="font-bold text-2xl">{driver.points}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Country</span>
                  <p className="font-medium">{driver.country}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Championships</span>
                  <p className="font-bold text-2xl">{driver.championships}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Race Wins</span>
                  <p className="font-bold text-2xl">{driver.wins}</p>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h2 className="text-xl font-semibold mb-4">Biography</h2>
                <p className="text-gray-300 leading-relaxed">{driver.bio}</p>
              </div>
            </div>
          </div>

          {/* Stats and History */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Career Statistics */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="text-red-500" />
                <h2 className="font-semibold text-xl">Career Statistics</h2>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                  <span>Race Starts</span>
                  <span className="font-bold">150</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                  <span>Podiums</span>
                  <span className="font-bold">{driver.podiums}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                  <span>Wins</span>
                  <span className="font-bold">{driver.wins}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                  <span>Pole Positions</span>
                  <span className="font-bold">30</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-700 rounded-lg">
                  <span>Fastest Laps</span>
                  <span className="font-bold">25</span>
                </div>
              </div>
            </div>

            {/* Recent Race Results */}
            <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <Flag className="text-red-500" />
                <h2 className="font-semibold text-xl">Recent Race Results</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-gray-700">
                      <th className="pb-2">Race</th>
                      <th className="pb-2">Year</th>
                      <th className="pb-2">Position</th>
                      <th className="pb-2">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {raceHistory.map((race) => (
                      <tr
                        key={race.id}
                        className="border-b border-gray-700 hover:bg-gray-750"
                      >
                        <td className="py-3">{race.name}</td>
                        <td className="py-3">{race.year}</td>
                        <td className="py-3">
                          <span
                            className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${race.position <= 3 ? "bg-red-600" : "bg-gray-700"}`}
                          >
                            {race.position}
                          </span>
                        </td>
                        <td className="py-3 font-medium">{race.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="#"
                  className="inline-block px-4 py-2 border border-gray-600 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors text-sm"
                >
                  View Full Race History
                </Link>
              </div>
            </div>

            {/* Championships */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-red-500" />
                <h2 className="font-semibold text-xl">Championships</h2>
              </div>

              {driver.championships && driver.championships > 0 ? (
                <div className="space-y-4">
                  {Array.from({ length: driver.championships }).map((_, i) => (
                    <div
                      key={i}
                      className="p-4 bg-gray-700 rounded-lg flex items-center gap-3"
                    >
                      <Trophy className="text-yellow-500 h-6 w-6" />
                      <div>
                        <span className="block font-medium">
                          F1 World Champion
                        </span>
                        <span className="text-sm text-gray-400">
                          {2023 - i} Season
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <Trophy className="h-12 w-12 mx-auto mb-4 opacity-30" />
                  <p>No championships yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

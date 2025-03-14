import DashboardNavbar from "@/components/dashboard-navbar";
import { getTeamById } from "@/lib/data";
import { ArrowLeft, Shield, Trophy, Flag, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TeamDetailPage({ params }: { params: { id: string } }) {
  const team = getTeamById(params.id);

  if (!team) {
    return (
      <>
        <DashboardNavbar />
        <main className="w-full bg-gray-900 text-white min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center py-12">
              <h1 className="text-3xl font-bold mb-4">Team Not Found</h1>
              <p className="text-gray-400 mb-6">
                The team you're looking for doesn't exist or has been removed.
              </p>
              <Link
                href="/teams"
                className="inline-flex items-center px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Teams
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  // Mock team history data
  const teamHistory = [
    {
      year: 2023,
      position: 1,
      points: 860,
      wins: 21,
      podiums: 38,
    },
    {
      year: 2022,
      position: 1,
      points: 759,
      wins: 17,
      podiums: 28,
    },
    {
      year: 2021,
      position: 1,
      points: 613,
      wins: 11,
      podiums: 23,
    },
    {
      year: 2020,
      position: 2,
      points: 319,
      wins: 2,
      podiums: 13,
    },
    {
      year: 2019,
      position: 3,
      points: 417,
      wins: 3,
      podiums: 9,
    },
  ];

  return (
    <>
      <DashboardNavbar />
      <main className="w-full bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Back button */}
          <Link
            href="/teams"
            className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Teams
          </Link>

          {/* Team Header */}
          <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 mb-8">
            <div className="p-6">
              <div className="flex items-center gap-6 mb-6">
                <div
                  className="w-24 h-24 rounded-md overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: team.color }}
                >
                  <Image
                    src={team.logo}
                    alt={team.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-3xl">{team.name}</h1>
                  <p className="text-xl text-gray-300">Formula 1 Team</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div>
                  <span className="text-sm text-gray-400">
                    Constructor Points
                  </span>
                  <p className="font-bold text-2xl">{team.constructorPoints}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Drivers</span>
                  <p className="font-medium">{team.drivers.length}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Championships</span>
                  <p className="font-bold text-2xl">
                    {team.id === "red-bull"
                      ? 6
                      : team.id === "mercedes"
                        ? 8
                        : team.id === "ferrari"
                          ? 16
                          : 0}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Base</span>
                  <p className="font-medium">
                    {team.id === "red-bull"
                      ? "Milton Keynes, UK"
                      : team.id === "mercedes"
                        ? "Brackley, UK"
                        : team.id === "ferrari"
                          ? "Maranello, Italy"
                          : "Formula 1 Headquarters"}
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h2 className="text-xl font-semibold mb-4">Team Overview</h2>
                <p className="text-gray-300 leading-relaxed">
                  {team.id === "red-bull"
                    ? "Red Bull Racing, competing as Oracle Red Bull Racing, is one of the most successful Formula One teams in recent history. Founded in 2005, the team has secured multiple Constructors' and Drivers' Championships, with legendary drivers like Sebastian Vettel and Max Verstappen."
                    : team.id === "mercedes"
                      ? "Mercedes-AMG Petronas Formula One Team has dominated the hybrid era of Formula 1, winning eight consecutive Constructors' Championships from 2014 to 2021. With Lewis Hamilton at the wheel, the team has rewritten the record books of Formula 1."
                      : team.id === "ferrari"
                        ? "Scuderia Ferrari is the oldest and most successful team in Formula 1 history. Founded by Enzo Ferrari in 1939, the Italian team has won 16 Constructors' Championships and 15 Drivers' Championships, creating a legacy unmatched in motorsport."
                        : team.id === "mclaren"
                          ? "McLaren Racing is one of Formula 1's most iconic teams, with a rich history dating back to 1966. Founded by Bruce McLaren, the team has secured 8 Constructors' Championships and 12 Drivers' Championships, featuring legends like Ayrton Senna and Alain Prost."
                          : team.id === "aston-martin"
                            ? "Aston Martin Aramco Formula One Team represents the iconic British luxury car manufacturer's return to Formula 1 as a works team. With a focus on innovation and British engineering excellence, the team aims to compete at the highest level of motorsport."
                            : `${team.name} is a competitive Formula 1 team with a roster of talented drivers competing at the highest level of motorsport.`}
                </p>
              </div>
            </div>
          </div>

          {/* Team Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Drivers */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <Users className="text-red-500" />
                <h2 className="font-semibold text-xl">Team Drivers</h2>
              </div>

              <div className="space-y-4">
                {team.drivers.map((driver) => (
                  <Link
                    href={`/drivers/${driver.id}`}
                    key={driver.id}
                    className="p-4 bg-gray-700 rounded-lg flex items-center gap-4 hover:bg-gray-650 transition-colors"
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={driver.image}
                        alt={driver.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{driver.name}</h4>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-400">#{driver.number}</span>
                        <span className="font-semibold">
                          {driver.points} pts
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Team History */}
            <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="text-red-500" />
                <h2 className="font-semibold text-xl">Team History</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b border-gray-700">
                      <th className="pb-2">Season</th>
                      <th className="pb-2">Position</th>
                      <th className="pb-2">Points</th>
                      <th className="pb-2">Wins</th>
                      <th className="pb-2">Podiums</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamHistory.map((season) => (
                      <tr
                        key={season.year}
                        className="border-b border-gray-700 hover:bg-gray-750"
                      >
                        <td className="py-3">{season.year}</td>
                        <td className="py-3">
                          <span
                            className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${season.position <= 3 ? "bg-red-600" : "bg-gray-700"}`}
                          >
                            {season.position}
                          </span>
                        </td>
                        <td className="py-3 font-medium">{season.points}</td>
                        <td className="py-3">{season.wins}</td>
                        <td className="py-3">{season.podiums}</td>
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
                  View Full Team History
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

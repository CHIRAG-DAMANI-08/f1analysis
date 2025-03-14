import DashboardNavbar from "@/components/dashboard-navbar";
import { Users, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { teams } from "@/lib/data";

export default function TeamsPage() {
  return (
    <>
      <DashboardNavbar />
      <main className="w-full bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">F1 Teams</h1>
            <p className="text-gray-400">
              Comprehensive profiles and statistics for all Formula 1 teams
            </p>
            <div className="mt-4 inline-block bg-red-600/20 border border-red-600/30 text-red-400 px-4 py-2 rounded-lg text-sm">
              <Shield className="inline-block mr-2 h-4 w-4" />
              Team standings and performance data
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teams.map((team) => (
              <Link
                href={`/teams/${team.id}`}
                key={team.id}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500 transition-colors group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-16 h-16 rounded-md overflow-hidden flex items-center justify-center"
                      style={{ backgroundColor: team.color }}
                    >
                      <Image
                        src={team.logo}
                        alt={team.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl group-hover:text-red-500 transition-colors">
                        {team.name}
                      </h3>
                      <p className="text-gray-300">
                        {team.drivers.length} Drivers
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm text-gray-400">
                      Constructor Points
                    </span>
                    <p className="font-bold text-2xl">
                      {team.constructorPoints}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {team.drivers.map((driver) => (
                      <div
                        key={driver.id}
                        className="flex items-center gap-2 bg-gray-700 p-2 rounded"
                      >
                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                          <Image
                            src={driver.image}
                            alt={driver.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{driver.name}</p>
                          <p className="text-xs text-gray-400">
                            {driver.points} pts
                          </p>
                        </div>
                      </div>
                    ))}
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

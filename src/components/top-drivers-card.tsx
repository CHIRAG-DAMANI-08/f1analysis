import { getTopDrivers } from "@/lib/data";
import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TopDriversCard() {
  const topDrivers = getTopDrivers(5);

  return (
    <section className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Users className="text-red-500" />
        <h2 className="font-semibold text-xl">Top Drivers</h2>
      </div>

      <div className="space-y-3">
        {topDrivers.map((driver, index) => (
          <div key={driver.id} className="flex items-center gap-3 p-2">
            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-sm font-medium">
              {index + 1}
            </div>
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={driver.image}
                alt={driver.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium text-sm">{driver.name}</h4>
              <p className="text-xs text-gray-400">{driver.team}</p>
            </div>
            <div className="ml-auto text-sm font-semibold">
              {driver.points} pts
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/drivers"
        className="mt-4 block text-center py-2 text-sm text-gray-400 hover:text-red-500 transition-colors"
      >
        View All Drivers
      </Link>
    </section>
  );
}

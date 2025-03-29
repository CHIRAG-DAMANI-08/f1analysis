"use client";

import { useEffect, useState } from "react";
import { Driver } from "@/types/race";
import { Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Helper function to use the image proxy
const getProxiedImageUrl = (url: string) => {
  if (!url) return "";
  // If the URL is already using our proxy, return it as is
  if (url.includes("/api/image-proxy")) return url;
  // Otherwise, proxy the URL
  return `/api/image-proxy?url=${encodeURIComponent(url)}`;
};

export default function LiveDriverStandings() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDrivers() {
      try {
        setLoading(true);
        const response = await fetch("/api/live-drivers");

        if (!response.ok) {
          throw new Error(`Failed to fetch drivers: ${response.status}`);
        }

        const data = await response.json();
        setDrivers(data);
      } catch (err) {
        console.error("Error fetching live drivers:", err);
        setError("Failed to load driver standings. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchDrivers();
  }, []);

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
          <Users className="h-12 w-12 mx-auto mb-2" />
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {drivers.map((driver, index) => (
        <Link
          href={`/drivers/${driver.id}`}
          key={driver.id}
          className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500 transition-colors group"
        >
          <div className="relative h-48 w-full">
            <Image
              src={getProxiedImageUrl(driver.image)}
              alt={driver.name}
              fill
              className="object-cover"
              unoptimized // Use this for external images through our proxy
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-lg font-bold">
                  {driver.number || index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-xl group-hover:text-red-500 transition-colors">
                    {driver.name}
                  </h3>
                  <p className="text-gray-300">{driver.team}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between mb-4">
              <div>
                <span className="text-sm text-gray-400">Points</span>
                <p className="font-bold text-xl">{driver.points}</p>
              </div>
              <div>
                <span className="text-sm text-gray-400">Country</span>
                <p className="font-medium">{driver.country}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-gray-700 p-2 rounded">
                <span className="text-sm text-gray-400">Wins</span>
                <p className="font-bold">{driver.wins || 0}</p>
              </div>
              <div className="bg-gray-700 p-2 rounded">
                <span className="text-sm text-gray-400">Podiums</span>
                <p className="font-bold">{driver.podiums || 0}</p>
              </div>
              <div className="bg-gray-700 p-2 rounded">
                <span className="text-sm text-gray-400">Championships</span>
                <p className="font-bold">{driver.championships || 0}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

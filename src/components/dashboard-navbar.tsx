"use client";

import Link from "next/link";
import { Flag, Users, Calendar, TrendingUp, Home } from "lucide-react";

export default function DashboardNavbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-gray-900 py-4 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            prefetch
            className="text-xl font-bold flex items-center"
          >
            <Flag className="w-6 h-6 text-red-500 mr-2" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 font-bold">
              F1 Predictor
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/dashboard"
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <TrendingUp className="w-4 h-4 mr-1" />
            Predictions
          </Link>
          <Link
            href="/drivers"
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <Users className="w-4 h-4 mr-1" />
            Drivers
          </Link>
          <Link
            href="/races"
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <Calendar className="w-4 h-4 mr-1" />
            Race Calendar
          </Link>
          <Link
            href="/"
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}

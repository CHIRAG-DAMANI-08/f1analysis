import Link from "next/link";
import { Flag } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-gray-900 py-4 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="text-xl font-bold flex items-center">
          <Flag className="w-6 h-6 text-red-500 mr-2" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 font-bold">
            F1 Predictor
          </span>
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link
            href="/how-it-works"
            className="text-gray-300 hover:text-white transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/drivers"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Drivers
          </Link>
          <Link
            href="/races"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Calendar
          </Link>
          <Link
            href="/live-dashboard"
            className="text-gray-300 hover:text-white transition-colors flex items-center"
          >
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Live Dashboard
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Dashboard
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link href="/sign-in">
            <Button
              variant="ghost"
              className="text-white hover:text-red-500 hover:bg-gray-800"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

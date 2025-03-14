import DashboardNavbar from "@/components/dashboard-navbar";
import LiveRaceCalendar from "@/components/live-race-calendar";
import { Calendar } from "lucide-react";

export default function RacesPage() {
  return (
    <>
      <DashboardNavbar />
      <main className="w-full bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">F1 Race Calendar</h1>
            <p className="text-gray-400">
              Complete schedule of Formula 1 races with predictions and track
              information
            </p>
            <div className="mt-4 inline-block bg-red-600/20 border border-red-600/30 text-red-400 px-4 py-2 rounded-lg text-sm">
              <Calendar className="inline-block mr-2 h-4 w-4" />
              Live data from Ergast F1 API
            </div>
          </header>

          <LiveRaceCalendar />
        </div>
      </main>
    </>
  );
}

import { NextResponse } from "next/server";
import { fetchRaceSchedule } from "@/lib/api";

export async function GET(request: Request) {
  try {
    // Get the current date and time
    const now = new Date();

    // Fetch all races
    const races = await fetchRaceSchedule();

    // Find the closest race (past or future)
    let closestRace = null;
    let minTimeDiff = Infinity;

    for (const race of races) {
      const raceDate = new Date(race.date);
      const timeDiff = Math.abs(now.getTime() - raceDate.getTime());

      if (timeDiff < minTimeDiff) {
        minTimeDiff = timeDiff;
        closestRace = race;
      }
    }

    if (!closestRace) {
      return NextResponse.json({ status: "No races found" }, { status: 404 });
    }

    // Calculate days difference
    const raceDate = new Date(closestRace.date);
    const timeDiff = Math.abs(now.getTime() - raceDate.getTime());
    const daysDiff = timeDiff / (1000 * 3600 * 24);

    let status = "Upcoming";
    let refreshInterval = 24 * 60 * 60 * 1000; // Default daily
    let isLive = false;

    if (daysDiff <= 2) {
      // Race is considered live or very close
      isLive = true;

      if (now < raceDate) {
        // Race is today but hasn't started
        status = "Pre-race";
        refreshInterval = 5 * 60 * 1000; // 5 minutes
      } else if (now.getTime() - raceDate.getTime() < 4 * 60 * 60 * 1000) {
        // Race is likely in progress (assuming ~4 hours for a race)
        status = "Live";
        refreshInterval = 30 * 1000; // 30 seconds during live race
      } else {
        // Race recently finished
        status = "Post-race";
        refreshInterval = 10 * 60 * 1000; // 10 minutes
      }
    } else if (now < raceDate) {
      // Upcoming race
      status = "Upcoming";

      // Calculate days until race
      const daysUntil = Math.ceil(daysDiff);
      if (daysUntil <= 7) {
        // Race week
        refreshInterval = 60 * 60 * 1000; // Hourly during race week
      } else {
        refreshInterval = 24 * 60 * 60 * 1000; // Daily otherwise
      }
    } else {
      // Past race
      status = "Completed";
      refreshInterval = 24 * 60 * 60 * 1000; // Daily
    }

    return NextResponse.json({
      race: closestRace,
      status,
      isLive,
      refreshInterval,
      timestamp: now.toISOString(),
    });
  } catch (error) {
    console.error("Error in race status API:", error);
    return NextResponse.json(
      { error: "Failed to determine race status" },
      { status: 500 },
    );
  }
}

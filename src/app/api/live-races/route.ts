import { NextResponse } from "next/server";
import { fetchRaceSchedule } from "@/lib/api";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const season = searchParams.get("season") || "current";

    const races = await fetchRaceSchedule(season);

    // Filter for upcoming races (dates in the future)
    // We'll use the races directly since our fetchRaceSchedule now handles empty results
    return NextResponse.json(races);
  } catch (error) {
    console.error("Error in live-races API route:", error);
    return NextResponse.json(
      { error: "Failed to fetch upcoming races" },
      { status: 500 },
    );
  }
}

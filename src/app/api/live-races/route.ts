import { NextResponse } from "next/server";
import { fetchRaceSchedule } from "@/lib/api";

export const dynamic = "force-dynamic"; // Ensure this route is never cached

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const season = searchParams.get("season") || "current";

    const races = await fetchRaceSchedule(season);

    // Return the races with cache control headers to prevent caching
    return NextResponse.json(races, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "Surrogate-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Error in live-races API route:", error);
    return NextResponse.json(
      { error: "Failed to fetch upcoming races" },
      { status: 500 },
    );
  }
}

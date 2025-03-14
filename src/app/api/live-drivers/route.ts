import { NextResponse } from "next/server";
import { fetchDriverStandings } from "@/lib/api";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const season = searchParams.get("season") || "current";

    const drivers = await fetchDriverStandings(season);

    return NextResponse.json(drivers);
  } catch (error) {
    console.error("Error in live-drivers API route:", error);
    return NextResponse.json(
      { error: "Failed to fetch driver standings" },
      { status: 500 },
    );
  }
}

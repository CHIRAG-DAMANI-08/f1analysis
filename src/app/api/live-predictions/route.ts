import { NextResponse } from "next/server";
import { generateRacePredictions } from "@/lib/api";

export const dynamic = "force-dynamic"; // Ensure this route is never cached

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const raceId = searchParams.get("raceId");
    const raceStatus = searchParams.get("status") || "Upcoming";

    if (!raceId) {
      return NextResponse.json(
        { error: "Race ID is required" },
        { status: 400 },
      );
    }

    // Generate a fresh prediction every time this endpoint is called
    const prediction = await generateRacePredictions(raceId, raceStatus);

    if (!prediction) {
      return NextResponse.json(
        { error: "Could not generate prediction" },
        { status: 404 },
      );
    }

    // Add cache control headers to prevent caching
    return NextResponse.json(prediction, {
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "Surrogate-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Error in live-predictions API route:", error);
    return NextResponse.json(
      { error: "Failed to generate race predictions" },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import { generateRacePredictions } from "@/lib/api";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const raceId = searchParams.get("raceId");

    if (!raceId) {
      return NextResponse.json(
        { error: "Race ID is required" },
        { status: 400 },
      );
    }

    const prediction = await generateRacePredictions(raceId);

    if (!prediction) {
      return NextResponse.json(
        { error: "Could not generate prediction" },
        { status: 404 },
      );
    }

    return NextResponse.json(prediction);
  } catch (error) {
    console.error("Error in live-predictions API route:", error);
    return NextResponse.json(
      { error: "Failed to generate race predictions" },
      { status: 500 },
    );
  }
}

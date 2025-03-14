import { NextResponse } from "next/server";
import { racePredictions } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const raceId = searchParams.get("raceId");

  if (raceId) {
    const prediction = racePredictions.find((p) => p.raceId === raceId);

    if (!prediction) {
      return NextResponse.json(
        { error: "Prediction not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(prediction);
  }

  return NextResponse.json(racePredictions);
}

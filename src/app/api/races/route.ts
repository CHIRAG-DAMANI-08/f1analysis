import { NextResponse } from "next/server";
import { races } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const raceId = searchParams.get("id");

  if (raceId) {
    const race = races.find((r) => r.id === raceId);

    if (!race) {
      return NextResponse.json({ error: "Race not found" }, { status: 404 });
    }

    return NextResponse.json(race);
  }

  return NextResponse.json(races);
}

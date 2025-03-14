import { NextResponse } from "next/server";
import { drivers } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const driverId = searchParams.get("id");

  if (driverId) {
    const driver = drivers.find((d) => d.id === driverId);

    if (!driver) {
      return NextResponse.json({ error: "Driver not found" }, { status: 404 });
    }

    return NextResponse.json(driver);
  }

  return NextResponse.json(drivers);
}

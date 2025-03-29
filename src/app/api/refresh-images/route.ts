import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

// This API endpoint will fetch fresh images from Formula 1 website
export async function GET(request: NextRequest) {
  try {
    // Define the base URLs for different image types
    const driverBaseUrl =
      "https://www.formula1.com/content/dam/fom-website/drivers";
    const teamBaseUrl =
      "https://www.formula1.com/content/dam/fom-website/teams/2024";
    const circuitBaseUrl =
      "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9";

    // List of driver codes to check
    const driverCodes = [
      "MAXVER01_Max_Verstappen",
      "SERPER01_Sergio_Perez",
      "CHALEC01_Charles_Leclerc",
      "CARSAI01_Carlos_Sainz",
      "LEWHAM01_Lewis_Hamilton",
      "GEORUS01_George_Russell",
      "LANNOR01_Lando_Norris",
      "OSCPIA01_Oscar_Piastri",
      "FERALO01_Fernando_Alonso",
      "LANSTR01_Lance_Stroll",
    ];

    // List of team names to check
    const teamNames = [
      "red-bull-racing",
      "ferrari",
      "mercedes",
      "mclaren",
      "aston-martin",
    ];

    // List of circuit names to check
    const circuitNames = [
      "Monaco_Circuit",
      "Canada_Circuit",
      "Great_Britain_Circuit",
      "Hungary_Circuit",
      "Belgium_Circuit",
    ];

    // Function to check if an image URL is valid
    async function checkImageUrl(url: string): Promise<boolean> {
      try {
        const response = await fetch(url, {
          method: "HEAD",
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; F1RacePredictor/1.0)",
          },
        });
        return response.ok;
      } catch (error) {
        console.error(`Error checking image URL ${url}:`, error);
        return false;
      }
    }

    // Check driver images
    const driverResults = await Promise.all(
      driverCodes.map(async (code) => {
        const firstLetter = code.charAt(0);
        const url = `${driverBaseUrl}/${firstLetter}/${code}/${code.split("_")[0].toLowerCase()}.png.transform/2col-retina/image.png`;
        const isValid = await checkImageUrl(url);
        return { code, url, isValid };
      }),
    );

    // Check team images
    const teamResults = await Promise.all(
      teamNames.map(async (name) => {
        const url = `${teamBaseUrl}/${name}.png.transform/2col-retina/image.png`;
        const isValid = await checkImageUrl(url);
        return { name, url, isValid };
      }),
    );

    // Check circuit images
    const circuitResults = await Promise.all(
      circuitNames.map(async (name) => {
        const url = `${circuitBaseUrl}/${name}.png.transform/7col-retina/image.png`;
        const isValid = await checkImageUrl(url);
        return { name, url, isValid };
      }),
    );

    // Compile results
    const results = {
      drivers: driverResults,
      teams: teamResults,
      circuits: circuitResults,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(results);
  } catch (error) {
    console.error("Image refresh error:", error);
    return NextResponse.json(
      { error: "Failed to refresh images" },
      { status: 500 },
    );
  }
}

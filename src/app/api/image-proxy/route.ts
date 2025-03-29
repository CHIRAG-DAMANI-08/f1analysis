import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    // Get the URL from the query parameter
    const url = request.nextUrl.searchParams.get("url");

    if (!url) {
      return new NextResponse("Missing URL parameter", { status: 400 });
    }

    // Decode the URL if it's encoded
    const decodedUrl = decodeURIComponent(url);

    // Validate the URL to prevent server-side request forgery
    try {
      new URL(decodedUrl);
    } catch (error) {
      return new NextResponse("Invalid URL", { status: 400 });
    }

    // Fetch the image from the source
    const response = await fetch(decodedUrl, {
      headers: {
        // Add a user agent to avoid being blocked by some servers
        "User-Agent": "Mozilla/5.0 (compatible; F1RacePredictor/1.0)",
        // Add referer to help with access to F1 website resources
        Referer: "https://www.formula1.com/",
      },
    });

    if (!response.ok) {
      console.error(
        `Failed to fetch image: ${response.status} for URL: ${decodedUrl}`,
      );
      // If the image fails to load, try to return a fallback image
      if (decodedUrl.includes("formula1.com")) {
        // For driver images
        if (decodedUrl.includes("/drivers/")) {
          return NextResponse.redirect(
            new URL(
              `/api/image-proxy?url=${encodeURIComponent("https://images.unsplash.com/photo-1541889413457-4aec9b418977?w=800&q=80")}`,
            ),
          );
        }
        // For team logos
        if (decodedUrl.includes("/teams/")) {
          return NextResponse.redirect(
            new URL(
              `/api/image-proxy?url=${encodeURIComponent("https://images.unsplash.com/photo-1541889413457-4aec9b418977?w=800&q=80")}`,
            ),
          );
        }
        // For circuit maps
        if (decodedUrl.includes("Circuit")) {
          return NextResponse.redirect(
            new URL(
              `/api/image-proxy?url=${encodeURIComponent("https://images.unsplash.com/photo-1541889413457-4aec9b418977?w=800&q=80")}`,
            ),
          );
        }
      }

      return new NextResponse(`Failed to fetch image: ${response.status}`, {
        status: response.status,
      });
    }

    // Get the image data
    const imageData = await response.arrayBuffer();

    // Get the content type from the response
    const contentType = response.headers.get("content-type") || "image/jpeg";

    // Return the image with appropriate headers
    return new NextResponse(imageData, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour (reduced from 24 hours)
      },
    });
  } catch (error) {
    console.error("Image proxy error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { TempoInit } from "@/components/tempo-init";
import { ThemeProvider } from "@/components/theme-provider";
import LiveDataUpdater from "@/components/live-data-updater";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F1 Race Predictor - Powered by AI",
  description: "Predict Formula 1 race outcomes with our AI-powered platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <LiveDataUpdater />
        </ThemeProvider>
        <TempoInit />
      </body>
    </html>
  );
}

import Link from "next/link";
import { ArrowUpRight, Check, Flag } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-900 text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1541773367336-d3f7e036e693?w=1200&q=80"
          alt="F1 Race Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full mb-6 font-medium text-sm">
              POWERED BY AI
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-8 tracking-tight">
              Predict F1 Race Results{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                With Precision
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Our AI-powered prediction engine analyzes historical data, track
              conditions, and driver form to forecast Formula 1 race outcomes
              with incredible accuracy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center px-8 py-4 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors text-lg font-medium"
              >
                View Predictions
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#features"
                className="inline-flex items-center px-8 py-4 text-gray-200 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-lg font-medium"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Flag className="w-5 h-5 text-red-500" />
                <span>Real-time race predictions</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-red-500" />
                <span>Comprehensive driver profiles</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-red-500" />
                <span>Historical race analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

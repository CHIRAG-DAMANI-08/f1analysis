import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  Flag,
  Timer,
  Trophy,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1541773367336-d3f7e036e693?w=1200&q=80"
            alt="F1 Race Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 flex flex-col items-center text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full mb-6 font-medium text-sm">
            POWERED BY AI
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Predict F1 Race Results <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
              With Precision
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Our AI-powered prediction engine analyzes historical data, track
            conditions, and driver form to forecast Formula 1 race outcomes with
            incredible accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/live-dashboard"
              className="px-8 py-4 bg-red-600 rounded-lg hover:bg-red-700 transition-colors text-lg font-medium inline-flex items-center"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Live Dashboard
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-lg font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Race Prediction Features
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform offers comprehensive F1 insights and
              predictions to enhance your racing experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "AI Predictions",
                description:
                  "Advanced machine learning algorithms predict race outcomes based on historical data and current form",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Driver Profiles",
                description:
                  "Comprehensive profiles for all F1 drivers with statistics, team info, and performance metrics",
              },
              {
                icon: <Flag className="w-6 h-6" />,
                title: "Race Calendar",
                description:
                  "Complete F1 season calendar with track details and historical race data",
              },
              {
                icon: <Timer className="w-6 h-6" />,
                title: "Real-time Updates",
                description:
                  "Live prediction updates during race weekends as conditions change",
              },
              {
                icon: <Trophy className="w-6 h-6" />,
                title: "Historical Analysis",
                description:
                  "Interactive timelines showing past performances and championship data",
              },
              {
                icon: <ArrowUpRight className="w-6 h-6" />,
                title: "Performance Metrics",
                description:
                  "Detailed performance analytics for drivers and teams across different tracks and conditions",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors border border-gray-700"
              >
                <div className="text-red-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div className="text-red-100">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-red-100">Years of Race Data</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-red-100">Driver Profiles</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              How Our Prediction Engine Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our sophisticated AI model analyzes multiple factors to deliver
              accurate race predictions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Data Collection",
                description:
                  "We gather historical race data, driver statistics, and track information",
              },
              {
                number: "02",
                title: "AI Analysis",
                description:
                  "Our machine learning algorithms process and analyze patterns in the data",
              },
              {
                number: "03",
                title: "Prediction Generation",
                description:
                  "The AI generates race outcome predictions with probability percentages",
              },
              {
                number: "04",
                title: "Real-time Updates",
                description:
                  "Predictions are updated during race weekends as conditions change",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-red-600 opacity-30 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 right-0 w-full h-0.5 bg-red-600 opacity-20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Predict the Next Race?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of F1 fans who use our AI prediction engine to
            enhance their race weekend experience.
          </p>
          <Link
            href="/live-dashboard"
            className="inline-flex items-center px-8 py-4 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Get Started Now
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

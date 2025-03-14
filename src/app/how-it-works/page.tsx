import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Brain,
  TrendingUp,
  Database,
  RefreshCw,
  Zap,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Our F1 Prediction Engine Works
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Our sophisticated AI model analyzes multiple factors to deliver
            accurate race predictions with precision and reliability.
          </p>
          <div className="relative h-64 md:h-96 w-full max-w-4xl mx-auto rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1504707748692-419802cf939d?w=1200&q=80"
              alt="F1 Race Prediction Technology"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Prediction Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Database className="h-10 w-10 text-red-500" />,
                title: "Data Collection",
                description:
                  "We gather historical race data, driver statistics, weather conditions, and track information from multiple reliable sources.",
              },
              {
                icon: <Brain className="h-10 w-10 text-red-500" />,
                title: "AI Analysis",
                description:
                  "Our machine learning algorithms process and analyze patterns in the data, identifying key performance indicators and trends.",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-red-500" />,
                title: "Prediction Generation",
                description:
                  "The AI generates race outcome predictions with detailed probability percentages for each driver and various race scenarios.",
              },
              {
                icon: <RefreshCw className="h-10 w-10 text-red-500" />,
                title: "Real-time Updates",
                description:
                  "Predictions are continuously updated during race weekends as conditions change, including weather, qualifying results, and team strategies.",
              },
            ].map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <div className="text-4xl font-bold text-gray-700 absolute top-0 right-0 opacity-20">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Factors We Consider
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            Our AI prediction engine analyzes a comprehensive set of factors to
            generate the most accurate race predictions possible.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Driver Performance",
                description:
                  "Current form, historical performance at specific tracks, and head-to-head records against other drivers.",
              },
              {
                title: "Team Strategy",
                description:
                  "Pit stop strategies, tire management approaches, and team orders that might influence race outcomes.",
              },
              {
                title: "Weather Conditions",
                description:
                  "Detailed weather forecasts including temperature, precipitation, wind speed, humidity, and how these factors affect different drivers and cars.",
              },
              {
                title: "Track Characteristics",
                description:
                  "Circuit layout, surface conditions, overtaking opportunities, and historical race patterns at each venue.",
              },
              {
                title: "Car Performance",
                description:
                  "Technical specifications, recent upgrades, and how different cars perform under various conditions and track types.",
              },
              {
                title: "Qualifying Results",
                description:
                  "Starting grid positions and qualifying pace as indicators of race performance potential.",
              },
            ].map((factor, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="text-red-500 h-5 w-5" />
                  {factor.title}
                </h3>
                <p className="text-gray-400">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Technology Stack
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            We use cutting-edge technologies to power our prediction engine and
            deliver a seamless user experience.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Machine Learning",
                icon: <Brain className="h-12 w-12 mb-4 mx-auto text-red-500" />,
              },
              {
                name: "Real-time Data",
                icon: (
                  <RefreshCw className="h-12 w-12 mb-4 mx-auto text-red-500" />
                ),
              },
              {
                name: "Predictive Analytics",
                icon: (
                  <TrendingUp className="h-12 w-12 mb-4 mx-auto text-red-500" />
                ),
              },
              {
                name: "High Performance",
                icon: <Zap className="h-12 w-12 mb-4 mx-auto text-red-500" />,
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700"
              >
                {tech.icon}
                <h3 className="font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience AI-Powered F1 Predictions?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of F1 fans who use our prediction engine to enhance
            their race weekend experience.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center px-8 py-4 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Try Our Predictions Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

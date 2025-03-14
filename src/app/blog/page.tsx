import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  // Sample blog posts
  const blogPosts = [
    {
      id: "race-strategy-explained",
      title: "F1 Race Strategy Explained: How Teams Plan for Victory",
      excerpt:
        "Dive into the complex world of Formula 1 race strategies, from tire management to pit stop timing and how our AI predicts optimal strategies.",
      image:
        "https://images.unsplash.com/photo-1541889413457-4aec9b418977?w=800&q=80",
      author: "David Miller",
      date: "2023-06-15",
      readTime: "8 min read",
      category: "Strategy",
    },
    {
      id: "weather-impact",
      title: "How Weather Conditions Impact F1 Race Outcomes",
      excerpt:
        "Explore how rain, temperature, humidity, and wind affect Formula 1 races and how our prediction engine accounts for these variables.",
      image:
        "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=800&q=80",
      author: "Emma Thompson",
      date: "2023-07-22",
      readTime: "6 min read",
      category: "Analysis",
    },
    {
      id: "driver-form",
      title: "The Importance of Driver Form in Race Predictions",
      excerpt:
        "Understanding how a driver's recent performances, confidence levels, and momentum play crucial roles in predicting race outcomes.",
      image:
        "https://images.unsplash.com/photo-1518539396202-edc0926a759a?w=800&q=80",
      author: "Michael Chen",
      date: "2023-08-10",
      readTime: "7 min read",
      category: "Drivers",
    },
    {
      id: "ai-in-motorsport",
      title: "The Rise of AI in Motorsport Predictions",
      excerpt:
        "How artificial intelligence and machine learning are revolutionizing race predictions and strategy planning in Formula 1.",
      image:
        "https://images.unsplash.com/photo-1527481138388-31827a7c94d5?w=800&q=80",
      author: "Sarah Johnson",
      date: "2023-09-05",
      readTime: "9 min read",
      category: "Technology",
    },
    {
      id: "track-analysis",
      title:
        "Circuit Analysis: How Track Characteristics Influence Race Results",
      excerpt:
        "A detailed look at how different track layouts, surfaces, and conditions affect race outcomes and driver performances.",
      image:
        "https://images.unsplash.com/photo-1533106958148-daaeab8b83fe?w=800&q=80",
      author: "James Wilson",
      date: "2023-10-12",
      readTime: "10 min read",
      category: "Tracks",
    },
    {
      id: "prediction-accuracy",
      title: "Measuring Prediction Accuracy: Our 2023 Season Review",
      excerpt:
        "A comprehensive analysis of our prediction engine's performance throughout the 2023 Formula 1 season.",
      image:
        "https://images.unsplash.com/photo-1506844583096-2f029d8b40f9?w=800&q=80",
      author: "Alex Martinez",
      date: "2023-12-20",
      readTime: "12 min read",
      category: "Analysis",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              F1 Predictor Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, analysis, and expert opinions on Formula 1 racing and
              prediction technology
            </p>
          </div>

          {/* Featured Post */}
          <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 mb-16">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full w-full">
                <Image
                  src="https://images.unsplash.com/photo-1541889413457-4aec9b418977?w=800&q=80"
                  alt="Featured Post"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block bg-red-600 text-white px-3 py-1 rounded-full mb-4 text-sm">
                  FEATURED
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  The Science Behind Our F1 Race Prediction Algorithm
                </h2>
                <p className="text-gray-300 mb-6">
                  Dive deep into the technology and methodology that powers our
                  AI-driven Formula 1 race prediction engine, and how we achieve
                  industry-leading accuracy.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>Dr. Robert Chen</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>15 min read</span>
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors font-medium"
                >
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500 transition-colors group"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                    <span className="text-sm text-gray-400">
                      {post.readTime}
                    </span>
                    <Link
                      href={`#${post.id}`}
                      className="text-red-500 hover:text-red-400 transition-colors text-sm font-medium flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 border border-gray-700 hover:border-red-500 transition-colors"
              >
                1
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 border border-gray-700 hover:border-red-500 transition-colors"
              >
                2
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-600 hover:bg-red-700 transition-colors"
              >
                3
              </Link>
              <span className="px-2">...</span>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 border border-gray-700 hover:border-red-500 transition-colors"
              >
                8
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get the latest F1 insights, prediction analysis, and exclusive
            content delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 rounded-r-lg hover:bg-red-700 transition-colors font-medium"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

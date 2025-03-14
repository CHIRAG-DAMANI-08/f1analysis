import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Users,
  MessageSquare,
  Trophy,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our F1 Community
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Connect with fellow Formula 1 fans, share your predictions, and
            discuss race strategies in our growing community.
          </p>
          <div className="relative h-64 md:h-96 w-full max-w-4xl mx-auto rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1520853504280-249b72dc947c?w=1200&q=80"
              alt="F1 Fan Community"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Community Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-10 w-10 text-red-500" />,
                title: "Discussion Forums",
                description:
                  "Engage in lively discussions about race strategies, driver performances, and team developments with fellow F1 enthusiasts.",
              },
              {
                icon: <Trophy className="h-10 w-10 text-red-500" />,
                title: "Prediction Leagues",
                description:
                  "Compete with other fans in our prediction leagues. Make your race weekend predictions and climb the leaderboard.",
              },
              {
                icon: <Calendar className="h-10 w-10 text-red-500" />,
                title: "Virtual Watch Parties",
                description:
                  "Join our virtual watch parties for each race weekend. Share the excitement with fans from around the world.",
              },
              {
                icon: <Users className="h-10 w-10 text-red-500" />,
                title: "Fan Groups",
                description:
                  "Connect with fans who support the same drivers and teams. Share your passion in dedicated fan groups.",
              },
              {
                icon: <ArrowRight className="h-10 w-10 text-red-500" />,
                title: "Expert Insights",
                description:
                  "Get exclusive insights from F1 experts and analysts who share their knowledge and predictions.",
              },
              {
                icon: <Trophy className="h-10 w-10 text-red-500" />,
                title: "Community Challenges",
                description:
                  "Participate in weekly challenges and quizzes to test your F1 knowledge and win exclusive rewards.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            What Our Community Says
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            Hear from members of our F1 prediction community
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "The prediction engine is incredibly accurate! I've been using it for the entire season and it's enhanced my F1 viewing experience.",
                name: "Michael S.",
                title: "F1 Fan since 2010",
                avatar:
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
              },
              {
                quote:
                  "I love the community discussions after each race. It's great to connect with other fans who are as passionate about F1 as I am.",
                name: "Sarah L.",
                title: "Mercedes Supporter",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
              },
              {
                quote:
                  "The detailed driver statistics and race predictions have helped me understand the sport on a much deeper level.",
                name: "James T.",
                title: "Fantasy F1 Player",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <p className="text-gray-300 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-700">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Sign up today and become part of our growing community of Formula 1
            enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center px-8 py-4 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Join Now
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center px-8 py-4 text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              Explore Predictions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

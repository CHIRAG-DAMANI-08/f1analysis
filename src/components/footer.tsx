import Link from "next/link";
import { Twitter, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Features Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Race Predictions
                </Link>
              </li>
              <li>
                <Link
                  href="/drivers"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Driver Profiles
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/races"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Race Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* F1 Info Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">F1 Information</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/teams"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/drivers"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Drivers
                </Link>
              </li>
              <li>
                <Link
                  href="/tracks"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Tracks
                </Link>
              </li>
              <li>
                <Link
                  href="/races"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Race Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/help-center"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} F1 Race Predictor. All rights reserved. Not
            affiliated with Formula 1®.
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

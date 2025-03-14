import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/20 mb-6">
              <Shield className="h-8 w-8 text-red-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Last updated: January 15, 2024
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="mb-6">
                F1 Race Predictor ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website and use our services.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We may collect information about you in various ways, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Personal Data:</strong> Name, email address, and
                  account credentials when you register.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information on how you interact
                  with our website and services.
                </li>
                <li>
                  <strong>Device Information:</strong> Browser type, IP address,
                  and device identifiers.
                </li>
                <li>
                  <strong>Cookies and Tracking Technologies:</strong> Data
                  collected through cookies and similar technologies.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                We may use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Improving and personalizing user experience</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Communicating with you about updates and new features</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Enforcing our terms and policies</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">
                4. Data Sharing and Disclosure
              </h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who
                  assist us in providing our services.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets.
                </li>
                <li>
                  <strong>With Your Consent:</strong> In other cases with your
                  explicit consent.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="mb-6">
                We implement appropriate technical and organizational measures
                to protect your personal information. However, no method of
                transmission over the Internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights
                regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">
                7. Children's Privacy
              </h2>
              <p className="mb-6">
                Our services are not intended for individuals under the age of
                16. We do not knowingly collect personal information from
                children under 16. If we become aware that we have collected
                personal data from a child under 16, we will take steps to
                delete that information.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                8. Changes to This Privacy Policy
              </h2>
              <p className="mb-6">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please
                contact us at privacy@f1predictor.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

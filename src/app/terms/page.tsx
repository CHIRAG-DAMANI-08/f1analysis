import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/20 mb-6">
              <FileText className="h-8 w-8 text-red-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Last updated: January 15, 2024
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="mb-6">
                By accessing or using F1 Race Predictor ("the Service"), you
                agree to be bound by these Terms of Service. If you do not agree
                to these terms, please do not use the Service.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                2. Description of Service
              </h2>
              <p className="mb-6">
                F1 Race Predictor provides AI-powered predictions for Formula 1
                race outcomes, driver statistics, and related content. The
                Service may include various features, tools, and resources
                related to Formula 1 racing.
              </p>

              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <p className="mb-4">
                When creating an account with us, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information as needed</li>
                <li>Keep your password secure and confidential</li>
                <li>
                  Be responsible for all activities that occur under your
                  account
                </li>
                <li>
                  Notify us immediately of any unauthorized use of your account
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
              <p className="mb-4">When using our Service, you agree not to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>
                  Attempt to gain unauthorized access to any part of the Service
                </li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Collect or harvest user data without permission</li>
                <li>
                  Engage in any activity that could damage or overburden our
                  infrastructure
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">
                5. Intellectual Property
              </h2>
              <p className="mb-6">
                The Service and its original content, features, and
                functionality are owned by F1 Race Predictor and are protected
                by international copyright, trademark, patent, trade secret, and
                other intellectual property laws. You may not reproduce,
                distribute, modify, create derivative works of, publicly
                display, publicly perform, republish, download, store, or
                transmit any of the material on our Service without our prior
                written consent.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                6. Disclaimer of Warranties
              </h2>
              <p className="mb-6">
                The Service is provided on an "as is" and "as available" basis
                without any warranties of any kind. We do not guarantee the
                accuracy, completeness, or reliability of any predictions,
                content, or information provided through the Service.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                7. Limitation of Liability
              </h2>
              <p className="mb-6">
                In no event shall F1 Race Predictor, its directors, employees,
                partners, agents, suppliers, or affiliates be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from your
                access to or use of or inability to access or use the Service.
              </p>

              <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
              <p className="mb-6">
                We may terminate or suspend your account and access to the
                Service immediately, without prior notice or liability, for any
                reason whatsoever, including without limitation if you breach
                the Terms. Upon termination, your right to use the Service will
                immediately cease.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                9. Changes to Terms
              </h2>
              <p className="mb-6">
                We reserve the right to modify or replace these Terms at any
                time. It is your responsibility to review these Terms
                periodically for changes. Your continued use of the Service
                following the posting of any changes constitutes acceptance of
                those changes.
              </p>

              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about these Terms, please contact us
                at terms@f1predictor.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

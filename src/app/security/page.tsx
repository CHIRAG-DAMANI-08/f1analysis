import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Lock, Shield, Server, Key, AlertTriangle, CheckCircle } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/20 mb-6">
              <Lock className="h-8 w-8 text-red-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Security Practices
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we protect your data and maintain the security of our platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Security Overview */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="text-red-500 h-6 w-6" />
                Our Security Commitment
              </h2>
              <p className="text-gray-300 mb-6">
                At F1 Race Predictor, we take the security of your data seriously. We implement industry-standard security measures to protect your personal information and ensure the integrity of our platform. Our security practices are designed to provide a safe and reliable experience for all users.
              </p>
            </div>

            {/* Security Measures */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: <Lock className="h-8 w-8 text-red-500" />,
                  title: "Data Encryption",
                  description: "All sensitive data is encrypted both in transit and at rest using industry-standard encryption protocols.",
                },
                {
                  icon: <Server className="h-8 w-8 text-red-500" />,
                  title: "Secure Infrastructure",
                  description: "Our platform is hosted on secure cloud infrastructure with multiple layers of protection and regular security audits.",
                },
                {
                  icon: <Key className="h-8 w-8 text-red-500" />,
                  title: "Authentication",
                  description: "We implement secure authentication mechanisms, including multi-factor authentication options for added security.",
                },
                {
                  icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
                  title: "Vulnerability Management",
                  description: "Regular security assessments and vulnerability scans are conducted to identify and address potential security issues.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Best Practices */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle className="text-red-500 h-6 w-6" />
                Security Best Practices for Users
              </h2>
              <ul className="space-y-4">
                {[
                  "Use a strong, unique password for your F1 Race Predictor account",
                  "Enable multi-factor authentication when available",
                  "Keep your devices and browsers updated with the latest security patches",
                  "Be cautious of phishing attempts and only access F1 Race Predictor through official channels",
                  "Regularly review your account activity for any suspicious behavior",
                  "Log out of your account when using shared or public computers",
                ].map((practice, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security Reporting */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="text-red-500 h-6 w-6" />
                Reporting Security Issues
              </h2>
              <p className="text-gray-300 mb-6">
                If you discover a security vulnerability or have concerns about the security of our platform, please contact our security team immediately at security@f1predictor.com. We take all security reports seriously and will investigate promptly.
              </p>
              <div className="flex justify-center mt-6">
                <a href="mailto:security@f1predictor.com" className="inline-flex items-center px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition-colors font-medium">
                  Contact Security Team
                </a>
              </div>
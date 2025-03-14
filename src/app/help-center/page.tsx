import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HelpCenterPage() {
  // FAQ categories and questions
  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I create an account?",
          answer:
            "To create an account, click on the 'Sign Up' button in the top right corner of the homepage. Fill in your details, verify your email address, and you're ready to go!",
        },
        {
          question: "Is F1 Race Predictor free to use?",
          answer:
            "Yes, the basic features of F1 Race Predictor are completely free to use. We also offer premium subscription plans with additional features and insights.",
        },
        {
          question: "How accurate are the predictions?",
          answer:
            "Our AI prediction engine has an average accuracy rate of 87-92% based on historical data. The accuracy varies depending on race conditions and unexpected events during races.",
        },
      ],
    },
    {
      category: "Predictions & Features",
      questions: [
        {
          question: "How often are predictions updated?",
          answer:
            "Predictions are updated continuously throughout race weekends. Major updates occur after practice sessions, qualifying, and as weather conditions change.",
        },
        {
          question: "Can I see historical predictions?",
          answer:
            "Yes, premium users can access our complete prediction history for all races, allowing you to analyze our accuracy over time.",
        },
        {
          question: "What factors are considered in your predictions?",
          answer:
            "Our AI analyzes numerous factors including driver form, team performance, track characteristics, weather conditions, qualifying results, and historical data at each circuit.",
        },
      ],
    },
    {
      category: "Account & Settings",
      questions: [
        {
          question: "How do I change my password?",
          answer:
            "To change your password, go to your account settings, select the 'Security' tab, and click on 'Change Password'. Follow the prompts to update your password.",
        },
        {
          question: "Can I customize my dashboard?",
          answer:
            "Yes, premium users can customize their dashboard to display their favorite drivers, teams, and prediction metrics.",
        },
        {
          question: "How do I delete my account?",
          answer:
            "To delete your account, go to your account settings, select the 'Account' tab, and click on 'Delete Account'. Please note that this action is permanent and cannot be undone.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/20 mb-6">
            <HelpCircle className="h-8 w-8 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Can We Help You?
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Find answers to common questions about F1 Race Predictor
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-white"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-10 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Account Setup", link: "#getting-started" },
              { title: "Prediction Features", link: "#predictions" },
              { title: "Billing & Subscriptions", link: "#account" },
              { title: "Technical Support", link: "#contact" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center hover:border-red-500 transition-colors"
              >
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                id={category.category
                  .toLowerCase()
                  .replace(" & ", "-")
                  .replace(" ", "-")}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <ChevronRight className="h-5 w-5 text-red-500" />
                  {category.category}
                </h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`item-${categoryIndex}-${faqIndex}`}
                      className="border border-gray-700 rounded-lg overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 bg-gray-800 hover:bg-gray-750 transition-colors text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 bg-gray-750 text-gray-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Reach out to us and we'll get back
            to you as soon as possible.
          </p>
          <Link
            href="#"
            className="inline-flex items-center px-8 py-4 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Contact Support
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, User, CreditCard, Scale, Mail } from "lucide-react";

const sections = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Acceptance of Terms",
    content:
      "By accessing Hamboll’s Services, you agree to be bound by these Terms and applicable laws. Hamboll may update these Terms at any time, and continued use constitutes acceptance of the revised Terms.",
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "Eligibility & Accounts",
    content:
      "You must be at least 18 years old or the legal age in your jurisdiction. You are responsible for maintaining account security and all activities under your account.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Use of Services",
    content:
      "You agree to use Hamboll only for lawful purposes. Unauthorized access, malware distribution, intellectual property violations, or harmful activities are strictly prohibited.",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Payments & Licensing",
    content:
      "Certain services may require payment. Fees must be paid as agreed. Hamboll grants a limited, non‑transferable license to use the Services for personal or business purposes.",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Liability & Termination",
    content:
      "Services are provided 'as is'. Hamboll is not liable for indirect damages or data loss. We reserve the right to suspend or terminate accounts that violate these Terms.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-indigo-900/20" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
      >
        {/* header */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="mt-4 text-gray-400">
            Effective Date: January 2026 • Hamboll
          </p>
        </motion.div>

        {/* cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:border-purple-400/40 transition"
            >
              <div className="flex items-center gap-3 mb-4 text-purple-400">
                {section.icon}
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* full terms */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Full Terms</h2>
          <p className="text-gray-300 whitespace-pre-line leading-relaxed">
            These Terms govern your access to Hamboll’s platform, products, and services.

            You agree not to misuse the Services, violate laws, or infringe intellectual property.

            Hamboll owns all trademarks, software, and content provided through the Services.

            Services are provided without warranties of uninterrupted or error‑free operation.

            Hamboll reserves the right to suspend or terminate access if Terms are violated.

            These Terms are governed by applicable jurisdiction laws.
          </p>
        </motion.div>

        {/* contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-purple-400/40 rounded-full backdrop-blur-xl bg-white/5">
            <Mail className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300">
              Contact: Hamboll Founders
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* glowing orb */}
      <motion.div
        animate={{ y: [0, -25, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute top-20 left-10 w-44 h-44 bg-purple-500/20 rounded-full blur-3xl"
      />
    </div>
  );
}

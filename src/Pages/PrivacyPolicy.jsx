import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Database, Eye, Mail } from "lucide-react";

const sections = [
  {
    icon: <Database className="w-6 h-6" />,
    title: "Information We Collect",
    content:
      "We collect information you provide directly, such as your name, email, phone number, company information, and any details shared through accounts, support, newsletters, or surveys. We may also collect limited technical data like IP address, browser type, and usage information to improve security and performance.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "How We Use Your Information",
    content:
      "Your information helps us provide and improve services, process transactions, send updates and security alerts, respond to support requests, communicate about services and offers, analyze usage trends, and ensure compliance with policies and agreements.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Professional Conduct & Communication",
    content:
      "All communications and transactions must occur through official Hamboll channels. Employees and clients are prohibited from engaging in private or unauthorized service arrangements outside company platforms.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Data Security",
    content:
      "We implement encryption, access controls, authentication, role‑based permissions, and regular security assessments to protect your information. While we follow strict standards, no system is completely secure.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-black to-cyan-900/20" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-20"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-400">
            Effective Date: January 2026 • Hamboll
          </p>
        </motion.div>

        {/* Glass cards */}
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
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:border-cyan-400/40 transition"
            >
              <div className="flex items-center gap-3 mb-4 text-cyan-400">
                {section.icon}
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Full policy text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Full Policy</h2>
          <p className="text-gray-300 whitespace-pre-line leading-relaxed">
            Hamboll ("Company," "we," "our," or "us") is committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your information.

            We do not sell or trade your personal information. We may share information only with consent, legal obligations, trusted service providers, or during business restructuring.

            You may have rights to access, correct, delete, or request portability of your data depending on jurisdiction.

            We may use cookies and tracking technologies to improve experience.

            We may update this policy periodically.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-cyan-400/40 rounded-full backdrop-blur-xl bg-white/5">
            <Mail className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300">
              Contact: Hamboll Founders • +91 7027131110
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* floating glowing orb */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"
      />
    </div>
  );
}
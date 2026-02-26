import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Workflow, Database, Cpu, Shield, Settings } from "lucide-react";

const services = [
  {
    id: "rpa",
    icon: <Bot className="w-5 h-5" />,
    title: "Robotic Process Automation",
    description:
      "We design, develop, and deploy software robots that replicate human interactions with digital systems to eliminate repetitive manual work. Our bots can log into applications, extract and enter data, process transactions, and generate reports with unmatched speed and accuracy.",
    details:
      "Our RPA solutions are built using enterprise-grade frameworks that integrate seamlessly with legacy systems, web applications, desktop software, and cloud platforms. We implement centralized bot orchestration, scheduling, monitoring dashboards, exception handling, and audit trails. This enables organizations to reduce operational costs, eliminate human errors, accelerate processing time, and free teams to focus on high-value strategic tasks. Typical automation includes invoice processing, payroll operations, employee onboarding, reconciliation, claims processing, and back-office administration.",
  },
  {
    id: "workflow",
    icon: <Workflow className="w-5 h-5" />,
    title: "Workflow & Business Process Automation",
    description:
      "We automate end-to-end business workflows by connecting systems, teams, and decision points into structured digital pipelines. This eliminates delays caused by manual approvals, emails, and disconnected tools.",
    details:
      "Our workflow automation solutions include approval chains, automated notifications, conditional logic, escalation handling, and real-time status tracking. We map your business processes, identify inefficiencies, and engineer optimized automation pipelines that ensure consistent execution. This improves turnaround time, enhances operational visibility, and ensures compliance with internal policies. Common use cases include HR onboarding workflows, procurement approvals, finance approvals, service request management, and operational task orchestration.",
  },
  {
    id: "integration",
    icon: <Database className="w-5 h-5" />,
    title: "System & API Integration",
    description:
      "We connect your CRMs, ERPs, payroll systems, databases, and internal tools into a unified automation ecosystem, enabling seamless data flow across your organization.",
    details:
      "Our engineers develop secure API integrations, middleware automation layers, and custom connectors that synchronize data between systems in real time. This eliminates manual exports, reduces data inconsistencies, and enables automated decision-making. We integrate platforms such as SAP, Salesforce, Workday, custom enterprise software, financial systems, and cloud platforms. Our integration architecture ensures reliability, scalability, and secure communication between all connected systems.",
  },
  {
    id: "ai",
    icon: <Cpu className="w-5 h-5" />,
    title: "Intelligent Automation & Document Processing",
    description:
      "We combine RPA with Artificial Intelligence, Optical Character Recognition (OCR), and machine learning to automate complex, data-driven workflows that traditionally required human judgment.",
    details:
      "Our intelligent automation systems can read invoices, contracts, emails, and scanned documents, extract relevant data, validate it, and automatically trigger downstream workflows. This dramatically reduces manual document handling and processing time. We implement classification models, intelligent validation, and decision automation to enable fully autonomous processing pipelines. These solutions are widely used in finance, insurance, compliance, logistics, and enterprise operations.",
  },
  {
    id: "security",
    icon: <Shield className="w-5 h-5" />,
    title: "Automation Security & Compliance",
    description:
      "We ensure your automation infrastructure is secure, compliant, and enterprise-ready with strict access control, encryption, and monitoring mechanisms.",
    details:
      "Our security architecture includes role-based access control, encrypted credential vaults, secure bot authentication, audit logging, and compliance-aligned implementation. We ensure automation systems follow internal governance policies and regulatory requirements. This protects sensitive business data while enabling scalable automation deployment across departments.",
  },
  {
    id: "support",
    icon: <Settings className="w-5 h-5" />,
    title: "Automation Monitoring, Maintenance & Support",
    description:
      "We provide continuous monitoring, optimization, and lifecycle support for your automation systems to ensure maximum reliability and performance.",
    details:
      "Our team monitors bot performance, resolves exceptions, updates automation workflows as systems evolve, and continuously improves efficiency. We implement performance analytics dashboards, proactive issue detection, and scaling strategies to ensure uninterrupted operations. This ensures your automation infrastructure remains stable, efficient, and aligned with business growth.",
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState(services[0]);

  return (
    <div className="relative bg-black text-white py-28 overflow-hidden">
      {/* futuristic floating lights */}
      <motion.div
        animate={{ y: [0, -60, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 60, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
            Automation Services
          </h1>
          <p className="text-gray-400 mt-4">
            Futuristic automation engineered for intelligent enterprises
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[320px_1fr] gap-12 items-start">
          {/* tabs */}
          <div className="space-y-4">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setActive(service)}
                whileHover={{ scale: 1.05, x: 10 }}
                className={`relative w-full text-left px-5 py-4 rounded-xl border backdrop-blur-xl transition overflow-hidden ${
                  active.id === service.id
                    ? "border-cyan-400 text-cyan-400"
                    : "border-white/10 text-gray-300"
                }`}
              >
                {/* neon glow */}
                {active.id === service.id && (
                  <motion.div
                    layoutId="tabGlow"
                    className="absolute inset-0 bg-cyan-400/10 blur-xl"
                  />
                )}

                <div className="relative flex items-center gap-3">
                  {service.icon}
                  {service.title}
                </div>
              </motion.button>
            ))}
          </div>

          {/* card display */}
          <div className="relative min-h-[320px]">
            {/* revolving neon border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-0 rounded-2xl border border-cyan-400/30"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative border border-white/10 rounded-2xl p-10 backdrop-blur-xl bg-white/5"
              >
                <div className="flex items-center gap-3 mb-6 text-cyan-400">
                  {active.icon}
                  <h2 className="text-3xl font-semibold">
                    {active.title}
                  </h2>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {active.description}
                </p>

                <p className="text-gray-400 leading-relaxed">
                  {active.details}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

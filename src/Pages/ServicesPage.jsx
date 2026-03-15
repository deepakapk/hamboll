import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Workflow, Database, Cpu, Shield, Settings, Activity, TrendingUp } from "lucide-react";

const services = [
  {
    id: "rpa",
    icon: <Bot className="w-5 h-5" />,
    title: "Automation Strategy That Delivers Results",
    description:
      "We design automation strategies that translate business goals into practical, scalable automation initiatives. Our approach focuses on aligning automation with measurable outcomes such as faster processing, improved accuracy, and significant cost savings. By evaluating existing workflows and identifying high-impact opportunities, we help organizations build a clear roadmap that prioritizes the most valuable automation initiatives while ensuring long-term scalability and sustainable adoption across teams and departments.",

    details:
      "Our automation strategy begins with a comprehensive business-first assessment where we analyze current processes, operational challenges, and key performance indicators such as cycle-time reduction, process accuracy, compliance, and operational cost efficiency. Based on this analysis, we create a structured automation blueprint that directly supports business objectives rather than implementing automation for technology’s sake. We apply a value-led prioritization framework to identify quick wins that deliver immediate impact while also building a strategic backlog of automation initiatives that can scale over time.\n\nWe then develop a phased execution roadmap that includes clear milestones, governance models, stakeholder ownership, and measurable success metrics. This structured rollout ensures smooth adoption, reduces implementation risks, and enables continuous improvement. Our repeatable delivery model allows organizations to standardize automation practices, making it easier to expand automation across multiple departments, business processes, and operational units while maintaining consistency, transparency, and long-term value.",
  },
  {
    id: "workflow",
    icon: <Workflow className="w-5 h-5" />,
    title: "Identify the Best Opportunities & Prove ROI Fast",
    description:
      "We help organizations identify the most impactful automation opportunities and validate their value before development begins. Through structured discovery, process analysis, and ROI evaluation, we ensure that automation initiatives are focused on processes that deliver measurable business value. Our approach minimizes risk, accelerates decision-making, and allows businesses to see tangible returns on automation investments quickly.",

    details:
      "Our engagement begins with collaborative process discovery workshops where we work closely with stakeholders to understand existing workflows, operational challenges, and repetitive tasks that are ideal candidates for automation. Through detailed process analysis and documentation, we identify high-impact opportunities that can deliver immediate efficiency improvements while also supporting long-term scalability.\n\nWe then develop an ROI-driven business case that includes effort baselining, projected cost savings, productivity gains, and a clear value tracking framework. This ensures that every automation initiative is backed by measurable outcomes and provides leadership with the confidence to move forward with investment.\n\nBefore development begins, we conduct a feasibility assessment that evaluates system dependencies, process variations, edge cases, and integration requirements. This helps avoid unexpected complexities during implementation and ensures the automation solution is technically viable and operationally stable. Additionally, we incorporate strong governance and risk controls by designing audit-friendly automation workflows that support compliance, reliability, and operational resilience across the organization.",
  },
  {
    id: "integration",
    icon: <Database className="w-5 h-5" />,
    title: "Build High-Impact Bots with UiPath & Microsoft Power Platform",
    description:
      "We design and implement high-impact automation solutions using UiPath and the Microsoft Power Platform to streamline repetitive business operations and improve productivity. Our bots and workflow automations handle large volumes of rule-based tasks with speed and accuracy, allowing teams to focus on strategic work while ensuring processes run efficiently, reliably, and at scale.",

    details:
      "Our automation development approach focuses on building robust, production-ready solutions using leading platforms such as UiPath and the Microsoft Power Platform. With UiPath, we develop powerful robotic process automation (RPA) bots that can manage high-volume, rule-based tasks such as data extraction, report generation, reconciliations, invoice processing, and large-scale data handling. These bots operate with precision and consistency, significantly reducing manual effort while improving processing speed and operational accuracy.\n\nIn parallel, we leverage Microsoft Power Platform tools including Power Automate and Power Apps to create intelligent workflows, approval processes, and self-service business applications. These solutions allow organizations to automate everyday tasks, streamline internal workflows, and empower teams with user-friendly applications that reduce dependency on manual processes.\n\nEvery automation solution we build follows production-grade engineering practices, including structured logging, real-time monitoring, exception handling, and reusable modular components. This ensures that the automations are reliable, maintainable, and easy to scale. Our solutions are also designed to integrate seamlessly with web applications, email systems, databases, file storage platforms, and enterprise systems, enabling smooth automation across the entire digital ecosystem.",
  },
  {
    id: "ai",
    icon: <Cpu className="w-5 h-5" />,
    title: "AI-Powered Agentic Automation That Thinks & Acts",
    description:
      "We build intelligent automation systems that go beyond simple rule-based tasks by combining AI-driven logic, workflow orchestration, and scalable APIs. Our agentic automation solutions are designed to analyze information, make contextual decisions, and trigger the right actions across multiple systems. This enables organizations to automate complex workflows while maintaining accuracy, control, and transparency.",

    details:
      "Our AI-powered automation solutions integrate advanced programming, orchestration platforms, and modern API architectures to create systems that can intelligently process data and take actions across business applications. Using Python, we develop advanced automation logic capable of handling data validation, transformation, decision-making, and dynamic routing based on real-time inputs. This allows workflows to adapt to different scenarios rather than relying only on rigid rule-based automation.\n\nTo manage complex processes across multiple tools and platforms, we implement workflow orchestration using n8n. This enables organizations to connect various applications, trigger automated events, and coordinate multi-step processes that span across internal systems, third-party tools, databases, and cloud services.\n\nFor reliable system-to-system communication, we design secure and scalable APIs using Flask. These APIs allow automation systems to interact seamlessly with business platforms, enabling controlled data exchange, task execution, and automation monitoring.\n\nTo ensure operational reliability and compliance, we also implement human-in-the-loop safeguards. Critical decision points can include approvals, validations, and exception handling mechanisms, allowing teams to maintain oversight while still benefiting from the speed and efficiency of AI-driven automation workflows.",
  },
  {
    id: "security",
    icon: <Shield className="w-5 h-5" />,
    title: "Scale with Confidence: Governance, Security & Adoption",
    description:
      "We help organizations scale automation programs confidently by establishing strong governance, security controls, and operational best practices. Our approach ensures that automation initiatives remain reliable, compliant, and sustainable as they expand across departments and business functions. By combining structured governance with enablement and change management, we support long-term automation success and organizational adoption.",

    details:
      "As automation initiatives grow, maintaining consistency, security, and operational stability becomes essential. We implement a comprehensive governance framework that defines automation intake processes, prioritization methods, release cycles, development standards, and documentation practices. This structured approach ensures that automation solutions are delivered consistently, transparently, and in alignment with business priorities.\n\nTo protect sensitive systems and data, we incorporate strong security and compliance guardrails into every automation program. This includes role-based access controls, secure credential management practices, detailed audit logging, and operations that align with organizational policies and regulatory requirements.\n\nWe also provide an enablement toolkit designed to help internal teams maintain and expand automation capabilities over time. This includes detailed runbooks, technical documentation, and structured knowledge transfer sessions that empower teams to take ownership of the solutions.\n\nFinally, we support change management efforts by working closely with stakeholders to align expectations, plan adoption strategies, and guide teams through the rollout process. This ensures that new automation solutions are embraced by users, integrated smoothly into existing workflows, and deliver long-term value to the organization.",
  },
  {
    id: "support",
    icon: <Settings className="w-5 h-5" />,
    title: "Go Live Faster with Seamless Integration & Deployment",
    description:
      "We ensure automation solutions move from development to production quickly and smoothly through structured deployment planning and reliable system integration. Our approach minimizes operational disruption while ensuring that automation systems are stable, secure, and fully integrated with the organization’s technology ecosystem from day one.",

    details:
      "Successful automation delivery does not end with development—it requires a carefully planned deployment strategy that ensures minimal disruption to ongoing business operations. We design low-risk rollout plans that align with operational schedules, allowing organizations to deploy automation solutions without interrupting critical processes or impacting productivity.\n\nOur team supports full environment readiness by establishing and configuring development, testing, and production environments including DEV, UAT, and PROD setups. We also assist with release planning, deployment pipelines, version control practices, and detailed go-live checklists to ensure every step of the transition is controlled and predictable.\n\nTo enable true end-to-end automation, we configure integrations across enterprise systems, APIs, applications, databases, and external services. This ensures that automated workflows can exchange data seamlessly and operate reliably across the entire technology stack.\n\nAfter deployment, we provide a dedicated hypercare period where our team closely monitors the automation in production. During this phase, we rapidly address any issues, optimize performance, and support teams with early adoption to ensure the automation stabilizes quickly and begins delivering measurable operational value.",
  },
  {
    id: "Activity",
    icon: <Activity className="w-5 h-5" />,
    title: "Always-On Automation: Monitoring, Support & Maintenance",
    description:
      "We provide continuous monitoring, operational support, and maintenance to ensure automation systems run reliably at all times. Our always-on support model keeps bots healthy, workflows stable, and automations aligned with evolving business systems. By proactively managing performance, alerts, and updates, we ensure that automation continues to deliver consistent value without disruption.",

    details:
      "Automation systems must operate reliably long after deployment, which is why we implement proactive monitoring and operational support to keep bots running smoothly. Our team continuously monitors bot health, job schedules, execution logs, alerts, and exception queues to quickly identify and resolve potential issues before they impact business operations. This proactive approach helps maintain high reliability and uninterrupted automation performance.\n\nAs enterprise applications evolve over time, automation solutions also require updates to remain effective. We provide ongoing enhancements and maintenance to accommodate changes in application interfaces, business rules, data formats, and system integrations. This ensures that automations remain stable and continue to function accurately even as the surrounding technology landscape changes.\n\nTo support different organizational needs, we offer flexible SLA-based support models that provide predictable response times and structured operational support. In addition, we continuously analyze automation performance and implement optimization improvements to increase throughput, reduce processing failures, and enhance overall efficiency. This ensures that automation remains a dependable and high-performing component of the organization’s digital operations.",
  },
  {
    id: "Trending",
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Accelerate Value with Reusable Frameworks & Continuous Improvement",
    description:
      "We help organizations maximize the long-term value of automation by introducing reusable frameworks, performance insights, and continuous improvement practices. Our approach ensures that automation programs evolve over time, scale efficiently, and consistently deliver measurable business impact across departments and processes.",

    details:
      "To accelerate automation delivery and reduce development effort, we implement quick-start accelerators that include reusable templates, standardized components, and pre-built automation assets. These frameworks allow teams to rapidly design and deploy new automation solutions while maintaining consistency, quality, and engineering best practices across projects.\n\nWe also implement performance dashboards that provide clear visibility into automation program metrics such as bot stability, execution success rates, process adoption, and ROI performance. These insights enable leadership and operational teams to track the real business impact of automation and identify areas that require optimization or expansion.\n\nOur continuous improvement model focuses on regularly reviewing automation performance and identifying opportunities to enhance workflows, remove bottlenecks, and extend automation coverage into new processes. Through ongoing discovery and analysis, we help organizations identify the next-best automation opportunities and prioritize initiatives that deliver the highest operational value. This ensures that automation programs continue to grow strategically while delivering sustained efficiency gains and operational excellence.",
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
                  <h2 className="text-3xl font-semibold">{active.title}</h2>
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

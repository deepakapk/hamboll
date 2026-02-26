import { motion } from "framer-motion";
import { useState } from "react";
import { Zap, Shield, Cpu } from "lucide-react";

const features = [
  {
    icon: <Zap size={32} />,
    title: "Blazing Fast Performance",
    short: "Optimized architecture for lightning speed.",
    details: [
      "Vite-powered build system",
      "Lazy loading components",
      "Optimized asset delivery",
      "Zero unnecessary re-renders"
    ]
  },
  {
    icon: <Shield size={32} />,
    title: "Enterprise Security",
    short: "Advanced protection & encryption layers.",
    details: [
      "JWT-based authentication",
      "Role-based access control",
      "Encrypted API communication",
      "Secure token handling"
    ]
  },
  {
    icon: <Cpu size={32} />,
    title: "Smart Architecture",
    short: "Scalable and maintainable structure.",
    details: [
      "Modular folder structure",
      "Reusable UI components",
      "Optimized state management",
      "Clean separation of concerns"
    ]
  }
];

export default function Features() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful <span className="text-cyan-400">Features</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Built with performance, scalability and modern experience in mind.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              onHoverStart={() => setActive(index)}
              onHoverEnd={() => setActive(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 
                         p-8 rounded-2xl border border-gray-800 
                         hover:border-cyan-500 transition-all duration-500
                         group overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                              bg-cyan-500/10 blur-2xl transition duration-500" />

              {/* Icon */}
              <div className="mb-6 text-cyan-400 relative z-10">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 relative z-10">
                {feature.title}
              </h3>

              {/* Short Description */}
              <p className="text-gray-400 relative z-10 mb-4">
                {feature.short}
              </p>

              {/* Animated Divider */}
              <motion.div
                className="h-[2px] bg-cyan-500 mb-4"
                initial={{ width: 0 }}
                animate={{ width: active === index ? "100%" : "40%" }}
                transition={{ duration: 0.4 }}
              />

              {/* Bullet Details */}
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: active === index ? 1 : 0.7,
                  height: active === index ? "auto" : "80px"
                }}
                transition={{ duration: 0.4 }}
                className="text-gray-400 text-sm space-y-2 overflow-hidden"
              >
                {feature.details.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    {point}
                  </li>
                ))}
              </motion.ul>

              {/* Bottom Hover Line */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-cyan-400"
                initial={{ width: 0 }}
                animate={{ width: active === index ? "100%" : 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Aarav James Walker",
    role: "Product Operations Director, Canada",
    text: "Working with Hamboll was refreshingly different. They didn't push tools - they designed solutions. Their Pyton-driven automatin and AI-based invoice processing reduced our operational workload signficantly. What stood out most was their ethical approach and focus on ROI. Every automation had a measurable imact. Highly professional team.",
  },
  {
    name: "Anika Muller",
    role: "Head of Finance, Germany",
    text: "We partnered with Hamboll to optimize document automation and process mining. Their conbination of Celonis insights and RPA execution helped us improve working capital visibility. The team is techincally strong, structured, and extremely transparent. They truly understand intelligent automation beyond buzzwords.",
  },
  {
    name: "Michael Thompson",
    role: "Supply Chain Lead, United States",
    text: "Hamboll helped us implement AI-supported RPA for logistics optimization across multiple warehouses. Within months, we saw cost reductions and improved inventory balancing. Their open-source and Python expertise gives flexibility without heavy vendorlock-in. A very pragmatic and future-ready automation partner.",
  },
  {
    name: "Sophie van Dijk",
    role: "Digital Transformation Manager, Netherlands",
    text: "What impressed me about Hambol was their human-in-the-loop AI approach. Their automatinon adapts and improves over time instead of breaking with change. They combine innovation with governance, which is criticial for European compliance environments. A reliable and forward-thinking team.",
  },
  {
    name: "Rajiv Menon",
    role: "CFO, UAE",
    text: "Hamboll delivered measurable savings using intelligent automation and UiPath bots integrated with AI models. the financial visibility we gained was substantial. They focus on optimized digital transformation - not oversized solutions. Strong engineering mindset and ecellent execution.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto Slide
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          What Our <span className="text-cyan-400">Users Say</span>
        </motion.h2>

        {/* Slider */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative min-h-[260px] flex items-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  “{testimonials[index].text}”
                </p>

                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-lg mb-3">
                    {testimonials[index].name.charAt(0)}
                  </div>
                  <h4 className="font-semibold">{testimonials[index].name}</h4>
                  <span className="text-gray-400 text-sm">
                    {testimonials[index].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="hidden sm:flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-cyan-400 scale-125"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

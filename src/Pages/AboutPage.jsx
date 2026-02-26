import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { motion, useScroll, useTransform } from "framer-motion";
import journeyImg from "../assets/images/journey.jpg";
import life from "../assets/images/life.jpg";

export default function AboutPage() {
  const [init, setInit] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* PARTICLES (ALWAYS WORKING VERSION) */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: true, zIndex: -1 },
            background: { color: "#000000" },
            particles: {
              number: { value: 110 },
              color: { value: "#22d3ee" },
              links: {
                enable: true,
                color: "#22d3ee",
                distance: 140,
                opacity: 0.15,
                width: 1,
              },
              move: { enable: true, speed: 1 },
              size: { value: { min: 1, max: 3 } },
              opacity: { value: 0.5 },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
              modes: { repulse: { distance: 120 } },
            },
          }}
        />
      )}

      {/* HERO */}
      <section className="py-32 text-center px-6 relative">
        {/* Neon Glow */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-cyan-500/10 blur-3xl animate-pulse rounded-full"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 relative"
        >
          Engineering <span className="text-cyan-400">Automation</span>
          <br /> For The Future
        </motion.h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Intelligent automation ecosystems that eliminate inefficiencies and
          scale enterprise systems with precision.
        </p>
      </section>

      {/* OUR JOURNEY */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {/* OUR JOURNEY ROW */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-cyan-400">Journey</span>
            </h2>

            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              Hamboll was founded with a simple belief: world-class automation
              shouldn’t be limited by geography. What began as a focused
              initiative to deliver practical digital automation solutions has
              evolved into a growing automation engineering firm serving global
              clients across manufacturing, finance, payroll, and operations.
              From building scalable Playwright frameworks and enterprise RPA
              systems to developing open-source, Python-driven intelligent
              automation models, Hamboll has consistently focused on one thing —
              engineering solutions that deliver measurable ROI. We started by
              solving complex operational bottlenecks. Today, we design Agentic
              Automation ecosystems that combine RPA, process mining, AI, and
              intelligent document processing to transform how businesses
              operate. Our approach is different: • Ethical automation •
              Open-source-first thinking • Scalable, compliance-ready systems •
              Human-in-the-loop intelligence • ROI-driven execution Where
              township talent meets the globe. The future we’re engineering is
              autonomous, adaptive, and globally connected.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <img
              src={journeyImg}// put your image in public/images
              alt="Hamboll Journey"
              className="relative rounded-2xl border border-white/10 shadow-2xl"
            />
          </motion.div>
        </div>

        {/* LIFE AT HAMBOLL ROW */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

            <img
              src={life} // put your image in public/images
              alt="Life at Hamboll"
              className="relative rounded-2xl border border-white/10 shadow-2xl"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Life at <span className="text-cyan-400">Hamboll</span>
            </h2>

            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              At Hamboll, we believe great automation is built by focused minds
              — not crowded offices. We embraced a remote-first culture.
              Performance over presence. Clients benefit from global talent
              access, faster turnaround, reduced costs, and continuous momentum
              across time zones. For our people, remote work enables deep focus,
              flexible schedules, global exposure, and ownership-driven
              accountability. Where township talent meets the globe. At Hamboll,
              work is not about where you sit. It’s about what you build.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

function Counter({ from = 0, to }) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return

    let start = from
    const duration = 1500
    const increment = to / (duration / 16)

    const counter = setInterval(() => {
      start += increment
      if (start >= to) {
        setCount(to)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(counter)
  }, [inView, from, to])

  return <span ref={ref}>{count}</span>
}

export default function About() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const glowY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section
      id="aboutmain"
      ref={ref}
      className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-6 py-32"
    >
      {/* Background Glow */}
      <motion.div
        style={{ y: glowY }}
        className="absolute w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[140px]"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl  md:text-6xl font-bold mb-6 pb-5 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Powering Intelligent Evolution
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl mb-20"
        >
          Our AI-driven systems optimize, automate, and secure digital
          infrastructures — transforming businesses into autonomous ecosystems.
        </motion.p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">

          {[
            { number: 98, label: "Accuracy %" },
            { number: 25, label: "Enterprise Clients" },
            { number: 483, label: "Automations Deployed" },
            { number: 7, label: "Countries Served" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-purple-400">
                <Counter to={stat.number} />+
              </h3>
              <p className="text-gray-500 mt-2">{stat.label}</p>
            </motion.div>
          ))}

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Adaptive Intelligence",
              desc: "AI models that continuously learn and refine performance.",
            },
            {
              title: "Autonomous Automation",
              desc: "Workflow systems operating with zero human friction.",
            },
            {
              title: "Quantum Security",
              desc: "Next-gen encrypted infrastructure at enterprise scale.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500"
            >
              <div className="bg-black rounded-2xl p-8 h-full backdrop-blur-lg border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {card.title}
                </h3>
                <p className="text-gray-400">{card.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
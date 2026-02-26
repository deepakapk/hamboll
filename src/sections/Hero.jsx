import { motion, useMotionValue, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"
import { Link } from "react-router-dom"

function Hero() {
  const sectionRef = useRef(null)

  // ===============================
  // Mouse Parallax (3D Tilt)
  // ===============================
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    mouseX.set(clientX - centerX)
    mouseY.set(clientY - centerY)
  }

  // ===============================
  // Scroll Parallax (Section Based)
  // ===============================
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden perspective-1000"
    >
      {/* ===============================
          Futuristic Grid Background
      =============================== */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ===============================
          Animated Gradient Glow Layers
      =============================== */}
      <motion.div
        style={{ y: backgroundY }}
        animate={{
          background: [
            "radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }}
        className="absolute w-[600px] h-[600px] top-[-150px] left-[-150px] blur-3xl"
      />

      <motion.div
        style={{ y: backgroundY }}
        animate={{
          background: [
            "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity
        }}
        className="absolute w-[500px] h-[500px] bottom-[-150px] right-[-150px] blur-3xl"
      />

      {/* ===============================
          Floating Rings (Depth Effect)
      =============================== */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ rotateX, rotateY }}
        className="absolute w-[300px] h-[300px] border border-cyan-400/30 rounded-full"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ rotateX, rotateY }}
        className="absolute w-[500px] h-[500px] border border-purple-500/20 rounded-full"
      />

      {/* ===============================
          Main Content
      =============================== */}
      <motion.div
        style={{ rotateX, rotateY, y: contentY, opacity, scale }}
        className="max-w-5xl text-center z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Building The Future Of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Digital Innovation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-gray-300 text-lg md:text-xl"
        >
          We craft scalable, intelligent, and high-performance digital
          experiences for modern businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 flex flex-col md:flex-row gap-6 justify-center"
        >
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-3 rounded-full font-semibold transition shadow-lg shadow-cyan-500/30">
            Get Started
          </button>

          <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition">
            <Link to="/contact">Contact</Link>
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
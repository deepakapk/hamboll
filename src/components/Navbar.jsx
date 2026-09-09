import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { ArrowUpRight, Bot, ChevronRight, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productModalOpen, setProductModalOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setProductModalOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          <img
            src="/Logo.png"
            alt="Hamboll Logo"
            className="w-10 h-10 mr-2 inline-block"
          />
          <Link to="/">Hamboll</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-wide">
          <li className="hover:text-cyan-400 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-cyan-400 cursor-pointer">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-cyan-400 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-cyan-400 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-cyan-400 cursor-pointer">
            <button type="button" onClick={() => setProductModalOpen(true)}>PRODUCT</button>
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-full font-semibold transition">
          <a href="https://www.linkedin.com/company/hamboll/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="inline-block mr-2 w-5 h-5" />
            LinkedIn
          </a>
        </button>

        {/* Animated Burger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white absolute"
          />
          <Motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white"
          />
          <Motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white absolute"
          />
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-black/95 backdrop-blur-md px-6 py-6 space-y-6 text-center text-sm uppercase tracking-wide"
          >
            {navItems.map((item) => (
              <Motion.div key={item.name} variants={itemVariants}>
                <Link
                  to={item.path}
                  className="hover:text-cyan-400 cursor-pointer transition-colors"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              </Motion.div>
            ))}

            <Motion.button
              variants={itemVariants}
              type="button"
              className="hover:text-cyan-400 cursor-pointer transition-colors"
              onClick={() => {
                setMenuOpen(false);
                setProductModalOpen(true);
              }}
            >
              PRODUCT
            </Motion.button>

            <Motion.button
              variants={itemVariants}
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-full font-semibold transition w-full"
            >
              <a href="https://www.linkedin.com/company/hamboll/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="inline-block mr-2 w-5 h-5" />
                LinkedIn
              </a>
            </Motion.button>
          </Motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {productModalOpen && (
              <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-start justify-center bg-black/80 px-4 pt-24 backdrop-blur-sm md:pt-32"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setProductModalOpen(false);
            }}
          >
              <Motion.div
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[#0b1117] text-left shadow-2xl shadow-cyan-950/40"
              role="dialog"
              aria-modal="true"
              aria-labelledby="product-modal-title"
            >
              <div className="flex items-start justify-between border-b border-white/10 px-6 py-5 md:px-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">Hamboll product system</p>
                  <h2 id="product-modal-title" className="mt-2 text-2xl font-semibold text-white md:text-3xl">Choose a product</h2>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-gray-400">Explore the intelligent systems Hamboll is building for modern operations.</p>
                </div>
                <button type="button" aria-label="Close product menu" onClick={() => setProductModalOpen(false)} className="rounded-full p-2 text-gray-400 transition hover:bg-white/10 hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="grid gap-3 p-4 md:p-6">
                <Link
                  to="/product"
                  onClick={() => setProductModalOpen(false)}
                  className="group flex items-center gap-4 rounded-xl border border-cyan-400/30 bg-cyan-400/[0.08] p-4 transition hover:border-cyan-300 hover:bg-cyan-400/[0.14]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300"><Bot className="h-6 w-6" /></span>
                  <span className="min-w-0 flex-1"><span className="flex items-center gap-2 text-lg font-semibold text-white">Extraction IQ <span className="rounded-full border border-cyan-400/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-cyan-300">Live</span></span><span className="mt-1 block text-sm leading-6 text-gray-400">Agentic intelligence for smarter invoice and finance document processing.</span></span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-cyan-300 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <div className="flex items-center gap-4 rounded-xl border border-dashed border-white/10 p-4 opacity-60"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-gray-500"><ChevronRight className="h-6 w-6" /></span><span><span className="block text-lg font-semibold text-gray-300">More products coming soon</span><span className="mt-1 block text-sm text-gray-500">New Hamboll systems will appear here as they launch.</span></span></div>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white absolute"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white absolute"
          />
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-black/95 backdrop-blur-md px-6 py-6 space-y-6 text-center text-sm uppercase tracking-wide"
          >
            {navItems.map((item) => (
              <motion.div key={item.name} variants={itemVariants}>
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
              </motion.div>
            ))}

            <motion.button
              variants={itemVariants}
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-full font-semibold transition w-full"
            >
              <a href="https://www.linkedin.com/company/hamboll/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="inline-block mr-2 w-5 h-5" />
                LinkedIn
              </a>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

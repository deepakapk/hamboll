import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">

      {/* glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full top-0 left-1/4"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 blur-3xl rounded-full bottom-0 right-1/4"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Hamboll
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Building intelligent automation systems that streamline workflows,
              optimize infrastructure, and enable autonomous digital operations
              for the future.
            </p>
          </motion.div>


          {/* LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-semibold text-lg mb-4">
              Navigation
            </h3>

            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>


          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-semibold text-lg mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                Email: solutions@Hamboll.com
              </li>

              <li>
                Phone: +91 7027131110
              </li>

              <li>
                Location: India
              </li>

            </ul>
          </motion.div>

        </div>


        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Hamboll. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link
              to="/terms"
              className="text-gray-500 hover:text-cyan-400 transition"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/privacy"
              className="text-gray-500 hover:text-cyan-400 transition"
            >
              Privacy Policy
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
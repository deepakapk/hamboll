import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  User,
  Phone,
  Mail,
  Building2,
  MessageSquare,
  X,
} from "lucide-react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "",
  });

  const services = [
    "RPA Development",
    "AI Automation",
    "Workflow Automation",
    "System Integration",
    "Automation Consulting",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      service: "",
    });

    setServiceOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSending) return;

    // -------------------------
    // Validation
    // -------------------------

    if (!form.firstName.trim()) {
      toast.error("First name is required");
      return;
    }

    if (!form.lastName.trim()) {
      toast.error("Last name is required");
      return;
    }

    if (!form.email.trim()) {
      toast.error("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email.trim())) {
      toast.error("Enter a valid email address");
      return;
    }

    if (!form.phone.trim()) {
      toast.error("Phone number is required");
      return;
    }

    if (!form.message.trim()) {
      toast.error("Message cannot be empty");
      return;
    }

    // -------------------------
    // EmailJS
    // -------------------------

    setIsSending(true);

    try {
      const templateParams = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim() || "Not provided",
        service: form.service || "Not selected",
        message: form.message.trim(),
      };
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey: publicKey,
        }
      );

      toast.success("Message sent successfully!");

      resetForm();
      setOpen(false);
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast.error(
        "Failed to send your message. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col pt-20 md:pt-24">

      {/* =========================
          FLOATING BACKGROUND
      ========================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, -150, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full top-10 left-10"
        />

        <motion.div
          animate={{
            x: [0, -200, 0],
            y: [0, 150, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
          className="absolute w-96 h-96 bg-blue-500/10 blur-3xl rounded-full bottom-10 right-10"
        />

      </div>


      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 md:px-6 max-w-6xl mx-auto w-full py-6 md:py-10">

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">

          {/* LEFT SIDE */}

          <div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Contact{" "}
              <span className="text-cyan-400">
                Hamboll
              </span>
            </h1>

            <p className="text-gray-400 mb-6">
              Connect with our automation engineers to design
              intelligent robotic workflows, AI-driven systems,
              and enterprise-grade automation infrastructure.
            </p>


            {/* SERVICE CARDS */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-cyan-400 font-semibold mb-1">
                  Enterprise RPA
                </h3>

                <p className="text-gray-400 text-sm">
                  Automate repetitive enterprise operations.
                </p>
              </div>


              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-cyan-400 font-semibold mb-1">
                  AI Integration
                </h3>

                <p className="text-gray-400 text-sm">
                  Combine AI with automation workflows.
                </p>
              </div>


              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-cyan-400 font-semibold mb-1">
                  Secure Infrastructure
                </h3>

                <p className="text-gray-400 text-sm">
                  Enterprise-grade automation security.
                </p>
              </div>


              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-cyan-400 font-semibold mb-1">
                  Rapid Deployment
                </h3>

                <p className="text-gray-400 text-sm">
                  Deploy automation systems quickly.
                </p>
              </div>

            </div>


            {/* OPEN CONTACT BUTTON */}

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="
                mt-6
                px-6
                py-3
                rounded-xl
                bg-cyan-500/20
                border
                border-cyan-400
                text-cyan-400
                hover:bg-cyan-500/30
                transition
                duration-300
              "
            >
              Open Contact Portal
            </button>

          </div>


          {/* RIGHT SIDE IMAGE */}

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="hidden md:block"
          >
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000"
              alt="Technology and automation"
              className="rounded-xl border border-white/10 w-full"
            />
          </motion.div>

        </div>

      </div>


      {/* =========================
          CONTACT MODAL
      ========================== */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              bg-black/70
              backdrop-blur-sm
              flex
              items-center
              justify-center
              z-50
              p-4
            "
            onClick={() => {
              if (!isSending) {
                setOpen(false);
                setServiceOpen(false);
              }
            }}
          >

            <motion.form
              onClick={(e) => e.stopPropagation()}

              onMouseMove={(e) => {
                const rect =
                  e.currentTarget.getBoundingClientRect();

                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                e.currentTarget.style.setProperty(
                  "--x",
                  `${x}px`
                );

                e.currentTarget.style.setProperty(
                  "--y",
                  `${y}px`
                );
              }}

              style={{
                background:
                  "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(34,211,238,0.15), transparent 40%), rgba(255,255,255,0.05)",
              }}

              initial={{
                scale: 0.9,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              exit={{
                scale: 0.9,
                opacity: 0,
              }}

              onSubmit={handleSubmit}

              className="
                relative
                w-full
                max-w-xl
                md:max-w-2xl
                h-full
                max-h-[90vh]
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-2xl
                p-6
                flex
                flex-col
                overflow-hidden
              "
            >

              {/* CLOSE BUTTON */}

              <button
                type="button"
                disabled={isSending}
                onClick={() => {
                  setOpen(false);
                  setServiceOpen(false);
                }}
                className="
                  absolute
                  top-4
                  right-4
                  text-gray-400
                  hover:text-white
                  transition
                  disabled:opacity-50
                "
              >
                <X size={24} />
              </button>


              {/* TITLE */}

              <h2 className="
                text-2xl
                font-bold
                mb-4
                text-cyan-400
                pr-10
              ">
                Automation Contact Portal
              </h2>


              {/* FORM CONTENT */}

              <div className="
                grid
                md:grid-cols-2
                gap-4
                flex-1
                overflow-y-auto
                pr-1
              ">

                {/* FIRST NAME */}

                <div className="relative">

                  <User
                    className="
                      absolute
                      left-3
                      top-3
                      text-cyan-400
                    "
                    size={18}
                  />

                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name *"
                    disabled={isSending}
                    autoComplete="given-name"
                    className="
                      w-full
                      pl-10
                      p-3
                      bg-white/5
                      border
                      border-white/10
                      rounded-lg
                      outline-none
                      focus:border-cyan-400
                      transition
                      disabled:opacity-50
                    "
                  />

                </div>


                {/* LAST NAME */}

                <div className="relative">

                  <User
                    className="
                      absolute
                      left-3
                      top-3
                      text-cyan-400
                    "
                    size={18}
                  />

                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name *"
                    disabled={isSending}
                    autoComplete="family-name"
                    className="
                      w-full
                      pl-10
                      p-3
                      bg-white/5
                      border
                      border-white/10
                      rounded-lg
                      outline-none
                      focus:border-cyan-400
                      transition
                      disabled:opacity-50
                    "
                  />

                </div>


                {/* EMAIL */}

                <div className="relative">

                  <Mail
                    className="
                      absolute
                      left-3
                      top-3
                      text-cyan-400
                    "
                    size={18}
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    disabled={isSending}
                    autoComplete="email"
                    className="
                      w-full
                      pl-10
                      p-3
                      bg-white/5
                      border
                      border-white/10
                      rounded-lg
                      outline-none
                      focus:border-cyan-400
                      transition
                      disabled:opacity-50
                    "
                  />

                </div>


                {/* PHONE */}

                <div className="relative">

                  <Phone
                    className="
                      absolute
                      left-3
                      top-3
                      text-cyan-400
                    "
                    size={18}
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone *"
                    disabled={isSending}
                    autoComplete="tel"
                    className="
                      w-full
                      pl-10
                      p-3
                      bg-white/5
                      border
                      border-white/10
                      rounded-lg
                      outline-none
                      focus:border-cyan-400
                      transition
                      disabled:opacity-50
                    "
                  />

                </div>


                {/* COMPANY */}

                <div className="relative md:col-span-2">

                  <Building2
                    className="
                      absolute
                      left-3
                      top-3
                      text-cyan-400
                    "
                    size={18}
                  />

                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company (optional)"
                    disabled={isSending}
                    autoComplete="organization"
                    className="
                      w-full
                      pl-10
                      p-3
                      bg-white/5
                      border
                      border-white/10
                      rounded-lg
                      outline-none
                      focus:border-cyan-400
                      transition
                      disabled:opacity-50
                    "
                  />

                </div>


                {/* SERVICE */}

                <div className="md:col-span-2 relative">

                  <button
                    type="button"
                    disabled={isSending}
                    onClick={() =>
                      setServiceOpen((prev) => !prev)
                    }
                    className="
                      w-full
                      text-left
                      p-3
                      bg-white/5
                      border
                      border-white/10
                      rounded-lg
                      cursor-pointer
                      outline-none
                      focus:border-cyan-400
                      transition
                      disabled:opacity-50
                    "
                  >
                    <span
                      className={
                        form.service
                          ? "text-white"
                          : "text-gray-400"
                      }
                    >
                      {form.service || "Select Service"}
                    </span>
                  </button>


                  <AnimatePresence>

                    {serviceOpen && (

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: -5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -5,
                        }}
                        className="
                          absolute
                          left-0
                          right-0
                          top-full
                          mt-2
                          z-50
                          border
                          border-white/10
                          rounded-lg
                          overflow-hidden
                          bg-[#111]
                          shadow-xl
                        "
                      >

                        {services.map((service) => (

                          <button
                            key={service}
                            type="button"
                            onClick={() => {
                              setForm((prev) => ({
                                ...prev,
                                service,
                              }));

                              setServiceOpen(false);
                            }}
                            className="
                              block
                              w-full
                              text-left
                              p-3
                              text-gray-300
                              hover:bg-cyan-500/20
                              hover:text-cyan-400
                              transition
                            "
                          >
                            {service}
                          </button>

                        ))}

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>


                {/* MESSAGE */}

                <div className="
                  relative
                  md:col-span-2
                ">

                  <MessageSquare
                    className="
                      absolute
                      left-3
                      top-3
                      text-cyan-400
                    "
                    size={18}
                  />

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message *"
                    rows={5}
                    disabled={isSending}
                    className="
                      w-full
                      pl-10
                      p-3
                      bg-white/5
                      border
                      border-white/10
                      rounded-lg
                      outline-none
                      focus:border-cyan-400
                      transition
                      resize-none
                      disabled:opacity-50
                    "
                  />

                </div>

              </div>


              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                disabled={isSending}
                className="
                  mt-4
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-cyan-500/20
                  border
                  border-cyan-400
                  text-cyan-400
                  py-3
                  rounded-lg
                  hover:bg-cyan-500/30
                  transition
                  duration-300
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >

                {isSending ? (
                  <>
                    <span
                      className="
                        w-5
                        h-5
                        border-2
                        border-cyan-400/30
                        border-t-cyan-400
                        rounded-full
                        animate-spin
                      "
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}

              </button>

            </motion.form>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}
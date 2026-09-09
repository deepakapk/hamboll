import { motion as Motion } from "framer-motion";

const certificateFiles = import.meta.glob("../assets/images/certificate*.jpeg", {
  eager: true,
  import: "default",
  query: "?url",
});

const certificates = Object.entries(certificateFiles)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath, undefined, { numeric: true }))
  .map(([path, image]) => ({
    image,
    name: path.split("/").pop(),
  }));

const renderCertificates = (keyPrefix) => certificates.map((certificate, index) => (
  <figure
    key={`${keyPrefix}-${certificate.name}-${index}`}
    className="group w-[min(78vw,360px)] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-cyan-400/50"
  >
    <div className="overflow-hidden rounded-xl bg-white">
      <img
        src={certificate.image}
        alt={certificate.name}
        className="aspect-[4/3] w-full object-contain transition duration-500 group-hover:scale-[1.03]"
      />
    </div>
  </figure>
));

export default function Certificates() {
  if (!certificates.length) return null;

  return (
    <section className="relative overflow-hidden bg-[#071016] px-6 py-24 text-white md:py-32">
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-400">Our certifications</p>
          <h2 className="text-4xl font-bold md:text-5xl">Trusted to build what matters.</h2>
          <p className="mt-5 text-lg leading-8 text-gray-400">A closer look at the standards and expertise behind Hamboll&apos;s work.</p>
        </Motion.div>

        <div className="overflow-hidden">
  <Motion.div
    className="flex w-max will-change-transform"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: Math.max(certificates.length * 12, 24),
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    }}
  >
    <div className="flex shrink-0 gap-6">
      {renderCertificates("first")}
    </div>

    <div
      aria-hidden="true"
      className="flex shrink-0 gap-6"
    >
      {renderCertificates("second")}
    </div>
  </Motion.div>
</div>
      </div>
    </section>
  );
}

// eslint-disable-next-line no-unused-vars
import { motion, motion as Motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Check,
  ClipboardCheck,
  ChevronRight,
  Circle,
  Database,
  FileText,
  LockKeyhole,
  Play,
  ScanSearch,
  Sparkles,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

const metrics = [
  { value: "18.4k", label: "invoices processed", change: "+24.8%" },
  { value: "96.4%", label: "data completeness", change: "+4.2%" },
  { value: "$2.8m", label: "invoice value reviewed", change: "+18.6%" },
];

const workflowSteps = [
  { icon: FileText, number: "01", title: "Classify", text: "Identify document types and select the right processing route." },
  { icon: ScanSearch, number: "02", title: "Extract", text: "Capture invoice details, line items, discounts, and taxes with Azure AI Foundry support." },
  { icon: ClipboardCheck, number: "03", title: "Validate", text: "Reconcile required fields, line-item sums, discounts, taxes, and totals." },
  { icon: ShieldCheck, number: "04", title: "Assess risk", text: "Apply configured policies and surface the cases that need attention." },
  { icon: Database, number: "05", title: "Detect duplicates", text: "Compare historical records to identify potential duplicate invoices." },
  { icon: Workflow, number: "06", title: "Resolve", text: "Coordinate outcomes and route exceptions to authorised reviewers." },
];

const ExtractionIQ = () => {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <section className="relative min-h-[760px] px-6 pb-24 pt-36 md:pt-44">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <Motion.div animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.3, 0.18] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-cyan-400"><span className="h-px w-10 bg-cyan-400" />Hamboll product system / finance intelligence</div>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">Meet Extraction IQ.<span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Smarter documents.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400 md:text-xl">Agentic intelligence for smarter document processing. Extraction IQ coordinates specialised AI agents, Microsoft Azure AI Foundry, and human oversight to turn incoming finance documents into trusted business outputs.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4"><Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300">Explore Extraction IQ<ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Link><a href="#workflow" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400">See the workflow <ChevronRight className="h-4 w-4" /></a></div>
            <div className="mt-12 flex items-center gap-3 text-sm text-gray-500"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 text-cyan-400"><Check className="h-4 w-4" /></span>Built for finance teams that need every decision to be traceable</div>
          </Motion.div>

          <Motion.div initial={{ opacity: 0, x: 40, rotateY: 8 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 0.9, delay: 0.15 }} className="relative [perspective:1200px]">
            <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0b1117]/95 shadow-2xl shadow-cyan-950/50">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><div className="flex items-center gap-2 text-sm font-medium"><Bot className="h-4 w-4 text-cyan-400" /> Control center</div><div className="flex items-center gap-2 text-xs text-emerald-400"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> All systems operational</div></div>
              <div className="grid gap-6 p-5 md:p-7">
                <div className="flex items-end justify-between"><div><p className="text-sm text-gray-500">Extraction IQ pulse</p><p className="mt-1 text-3xl font-semibold">+24.8%</p></div><div className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-300">This month</div></div>
                <div className="flex h-28 items-end gap-2 border-b border-white/10 pb-3">{[32, 47, 39, 64, 52, 75, 61, 88, 72, 100, 83, 94, 78, 108, 96, 118].map((height, index) => <Motion.div key={height + index} initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ delay: 0.4 + index * 0.04, duration: 0.5 }} className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan-500/20 to-cyan-400" />)}</div>
                <div className="grid gap-3 sm:grid-cols-3">{metrics.map((metric) => <div key={metric.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4"><p className="text-lg font-semibold">{metric.value}</p><p className="mt-1 text-[11px] text-gray-500">{metric.label}</p><p className="mt-3 text-xs text-emerald-400">{metric.change}</p></div>)}</div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4"><div className="mb-4 flex items-center justify-between text-xs text-gray-400"><span>Invoice processing queue</span><span className="text-cyan-400">Live view</span></div>{[['Northstar Foods', 'Validation', 'Running'], ['Aster Group', 'Human review', 'Attention'], ['Marlow & Co.', 'Complete', 'Ready']].map(([supplier, stage, status], index) => <div key={supplier} className="flex items-center gap-3 border-t border-white/10 py-3 text-sm"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400"><Play className="h-3 w-3 fill-current" /></span><span className="flex-1 text-gray-300">{supplier}<span className="ml-2 text-xs text-gray-600">{stage}</span></span><span className="text-xs text-gray-500">{status}</span><Circle className={`h-2 w-2 fill-current ${index === 1 ? "text-amber-400" : "text-emerald-400"}`} /></div>)}</div>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-12"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">{metrics.map((metric) => <div key={metric.label} className="flex items-center gap-4 md:border-r md:border-white/10 md:last:border-0"><Sparkles className="h-5 w-5 text-cyan-400" /><div><p className="text-2xl font-semibold">{metric.value}</p><p className="text-sm text-gray-500">{metric.label}</p></div></div>)}</div></section>

      <section id="workflow" className="relative px-6 py-28 md:py-36"><div className="mx-auto max-w-7xl"><div className="mb-16 max-w-2xl"><p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-400">Specialised agents. One connected workflow.</p><h2 className="text-4xl font-bold md:text-6xl">Every invoice has a <span className="text-cyan-400">clear next step.</span></h2><p className="mt-5 text-lg leading-8 text-gray-400">Extraction IQ brings distinct responsibilities together in a traceable process, from incoming document to structured business output.</p></div><div className="grid gap-5 md:grid-cols-3">{workflowSteps.map((step, index) => { const Icon = step.icon; return <motion.article key={step.number} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 transition hover:border-cyan-400/60"><div className="mb-16 flex items-center justify-between"><Icon className="h-7 w-7 text-cyan-400" /><span className="text-sm text-gray-600">{step.number}</span></div><h3 className="text-2xl font-semibold">{step.title}</h3><p className="mt-3 leading-7 text-gray-400">{step.text}</p><div className="mt-8 h-px w-12 bg-cyan-400 transition-all group-hover:w-full" /></motion.article>; })}</div></div></section>

      <section className="border-y border-white/10 bg-[#071016] px-6 py-24 md:py-32"><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]"><Motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10"><div className="mb-10 flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400"><LockKeyhole className="h-5 w-5" /></div><span className="text-xs uppercase tracking-[0.2em] text-gray-500">Human in the loop</span></div><h2 className="max-w-lg text-3xl font-bold md:text-4xl">Automation with an accountable handoff.</h2><p className="mt-5 max-w-xl leading-7 text-gray-400">Authorised reviewers can inspect source documents, correct extracted information, and approve or reject cases. Every decision and processing event is recorded for traceability.</p><div className="mt-8 flex flex-wrap gap-3 text-xs text-gray-400">{["Source document view", "Correction history", "Approval trail"].map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-2">{item}</span>)}</div></Motion.article><Motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 }} className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-8 md:p-10"><div className="mb-10 flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400"><Sparkles className="h-5 w-5" /></div><span className="text-xs uppercase tracking-[0.2em] text-cyan-300">Financial visibility</span></div><h2 className="max-w-lg text-3xl font-bold md:text-4xl">See the story behind the figures.</h2><p className="mt-5 max-w-xl leading-7 text-gray-400">Interactive analytics show processed invoice value, pending workloads, discounts, tax totals, and supplier concentration, with currency-aware reporting and data-completeness indicators.</p><div className="mt-8 grid grid-cols-3 gap-3">{[['$842k', 'Processed'], ['124', 'Pending'], ['18.2%', 'Discounts']].map(([value, label]) => <div key={label} className="border-l border-cyan-400/40 pl-3"><p className="text-lg font-semibold">{value}</p><p className="mt-1 text-xs text-gray-500">{label}</p></div>)}</div></Motion.article></div></section>

      <section className="px-6 py-24 md:py-32"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-400">Designed to evolve</p><h2 className="text-4xl font-bold md:text-5xl">A foundation for what comes next.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-gray-400">A modular architecture with Microsoft-oriented AI capabilities, ready to grow with future API, enterprise identity, and ERP integrations.</p></div><div className="grid gap-3 sm:grid-cols-3">{[['AI-ready', 'Azure AI Foundry support'], ['Modular', 'Extend each agent independently'], ['Connected', 'Built for future enterprise integrations']].map(([title, text], index) => <div key={title} className="border-t border-white/15 pt-5"><span className="text-xs text-cyan-400">0{index + 1}</span><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-gray-500">{text}</p></div>)}</div></div></section>

      <section className="px-6 pb-28"><div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 md:flex-row md:items-center md:p-14"><div className="absolute -right-20 -top-40 h-80 w-80 rounded-full border border-cyan-300/20" /><div><div className="mb-4 flex items-center gap-2 text-sm text-cyan-300"><LockKeyhole className="h-4 w-4" /> Secure by design</div><h2 className="max-w-2xl text-3xl font-bold md:text-5xl">Your next operational advantage is already waiting.</h2><p className="mt-4 max-w-xl text-gray-400">Tell us where work slows you down. We&apos;ll show you what Hamboll can set in motion.</p></div><Link to="/contact" className="group relative inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-cyan-300">Start a conversation <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></div></section>
    </main>
  );
};

export default ExtractionIQ;

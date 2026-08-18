'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Check,
  Download,
  FolderOpen,
  Gauge,
  Layers3,
  LockKeyhole,
  PanelsTopLeft,
  ScanLine,
  Sparkles,
  AlertTriangle,
  X
} from 'lucide-react'

const features = [
  {
    eyebrow: '01 / READING MODE',
    title: 'Immersive ambient reading.',
    copy: 'Settle into every page with a calm, immersive reading experience. ComicFlow keeps the interface quiet and lets your artwork take center stage.',
    icon: Sparkles,
    kind: 'reader',
  },
  {
    eyebrow: '02 / MOMENTS',
    title: 'Capture & share moments.',
    copy: 'Save favorite pages and memorable scenes in one place. Keep the moments you love close, ready to revisit whenever you want.',
    icon: PanelsTopLeft,
    kind: 'moments',
  },
  {
    eyebrow: '03 / INSIGHTS',
    title: 'Track your reading journey.',
    copy: 'See your reading habit grow at a glance. Keep track of what you have finished, what is next, and the stories that keep you coming back.',
    icon: BarChart3,
    kind: 'stats',
  },
  {
    eyebrow: '04 / YOUR VAULT',
    title: 'Smart vault organization.',
    copy: 'Bring your collection together and find the right story quickly. Sort favorites, saved titles, and unread issues with a single click.',
    icon: FolderOpen,
    kind: 'vault',
  },
]

const advantages = [
  { icon: Gauge, title: 'Quick and comfortable.', copy: 'Open your collection and start reading without waiting around. ComicFlow stays light and responsive while you browse.' },
  { icon: LockKeyhole, title: 'Private by design.', copy: 'Your collection stays yours. Read comfortably without accounts, subscriptions, or sending your files anywhere.' },
  { icon: ScanLine, title: 'Find anything easily.', copy: 'Even a big collection feels simple to explore. Browse, sort, and pick up exactly where you left off.' },
  { icon: Layers3, title: 'Modern aesthetics.', copy: 'No clunky menus or outdated toolbars from 2008. Just a gorgeous interface that gets out of your way and lets the art shine.' },
]

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

function WindowChrome({ label = 'ComicFlow / Library' }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 bg-white/[0.02]">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ef6a7b] shadow-sm shadow-[#ef6a7b]/50" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#e8b85c] shadow-sm shadow-[#e8b85c]/50" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#5bd18c] shadow-sm shadow-[#5bd18c]/50" />
      <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">{label}</span>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="mockup dashboard-mockup relative group flex flex-col overflow-hidden h-auto">
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <WindowChrome />
      <img 
        src="/dashboard.png" 
        alt="ComicFlow Dashboard" 
        className="w-full h-auto block border-t border-white/5" 
      />
    </div>
  )
}

function FeatureMockup({ kind }: { kind: string }) {
  const windowLabel = kind === 'moments' ? 'Moments' : kind === 'stats' ? 'Insights' : kind === 'vault' ? 'Vault' : 'Reader';
  return (
    <motion.div 
      whileHover={{ scale: 1.02, rotateY: kind === 'reader' || kind === 'stats' ? 2 : -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="mockup shadow-[0_0_50px_-15px_rgba(255,143,49,0.15)] flex flex-col overflow-hidden h-auto"
    >
      <WindowChrome label={`ComicFlow / ${windowLabel}`} />
      <img 
        src={`/${kind}.png`} 
        alt={`ComicFlow ${windowLabel}`} 
        className="w-full h-auto block border-t border-white/5" 
      />
    </motion.div>
  )
}

export default function Page() {
  const [showTerms, setShowTerms] = useState(false);
  
  // REPLACE THIS WITH YOUR REAL GOOGLE DRIVE LINK
  const GOOGLE_DRIVE_LINK = "https://github.com/Ansari-M-Rayyan/ComicFlow/releases/download/comicflow/ComicFlow_0.1.0_x64-setup.exe"; 

  return (
    <main className="overflow-x-hidden bg-background selection:bg-orange-500/30 text-foreground w-full">
      {/* Ambient Background Glows */}
      <div className="ambient ambient-one fixed mix-blend-screen" />
      <div className="ambient ambient-two fixed mix-blend-screen" />
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 border-b border-white/[0.07] bg-background/75 backdrop-blur-2xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3 text-lg font-bold tracking-tight text-white group">
            <img src="/logo.png" alt="ComicFlow Logo" className="h-8 w-8 object-contain drop-shadow-[0_0_10px_rgba(255,143,49,0.5)] group-hover:rotate-12 transition-transform duration-300" />
            <span>ComicFlow<span className="text-orange-400">.</span></span>
          </a>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowTerms(true)}
            className="button-primary desktop-download shadow-orange-500/20"
          >
            <Download className="h-4 w-4" /> Download for Windows <span className="hidden text-white/50 md:inline">(.exe)</span>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowTerms(true)}
            className="button-primary mobile-download shadow-orange-500/20"
          >
            <Download className="h-4 w-4" /> Download
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="top" className="relative mx-auto max-w-7xl px-5 pb-20 pt-24 text-center md:px-8 md:pb-32 md:pt-36">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10">
          
          <motion.div variants={fadeUp} className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(255,143,49,0.3)] mb-6">
            <img src="/logo.png" alt="ComicFlow Logo" className="h-10 w-10 object-contain drop-shadow-xl" />
          </motion.div>

          <motion.h1 variants={fadeUp} className="hero-title mx-auto mt-7 max-w-5xl text-balance text-5xl text-white md:text-8xl drop-shadow-2xl">
            Your local comics.<br /><span className="headline-accent">Beautifully curated.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-slate-400 md:text-lg">
            A beautiful home for your digital comics. Keep your collection organized, enjoy every page, and read privately at your own pace.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 40px -10px rgba(255,143,49,0.6)" }} 
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowTerms(true)}
              className="button-primary button-large group"
            >
              <Download className="h-5 w-5" /> Download now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-4 text-xs font-mono tracking-widest text-slate-500 uppercase">
            Supports both .cbz and .cbr files.
          </motion.p>
        </motion.div>

        {/* Floating Dashboard Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24 relative"
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <DashboardMockup />
          </motion.div>
          <div className="absolute -inset-x-20 -bottom-20 h-40 bg-background blur-2xl z-10 pointer-events-none" />
        </motion.div>
      </section>

      {/* Feature Walkthrough */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32 relative z-20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} 
          className="mb-16 md:mb-24"
        >
          <p className="eyebrow flex items-center gap-2"><span className="pulse-dot"></span> WHY DOWNLOAD?</p>
          <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Your digital library,<br /><span className="text-slate-500">beautifully reimagined.</span>
          </h2>
        </motion.div>

        <div className="space-y-24 md:space-y-40">
          {features.map(({ icon: Icon, ...feature }, index) => (
            <motion.article 
              key={feature.title} 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-20 ${index % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}
            >
              <div>
                <div className="mb-5 flex items-center gap-3 text-orange-400">
                  <Icon className="h-5 w-5 drop-shadow-[0_0_10px_rgba(255,143,49,0.5)]" />
                  <span className="eyebrow !text-orange-400/80">{feature.eyebrow}</span>
                </div>
                <h3 className="max-w-lg text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{feature.title}</h3>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400">{feature.copy}</p>
              </div>
              <FeatureMockup kind={feature.kind} />
            </motion.article>
          ))}
        </div>
      </section>

      {/* Grid Features */}
      <section className="border-y border-white/[0.07] bg-white/[0.015] px-5 py-20 md:px-8 md:py-32 relative z-20 backdrop-blur-sm">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="mx-auto max-w-7xl"
        >
          <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <motion.div variants={fadeUp}>
              <p className="eyebrow flex items-center gap-2"><span className="pulse-dot"></span> BUILT DIFFERENT</p>
              <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                Small footprint.<br /><span className="text-slate-500">Big reading energy.</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="max-w-xs text-sm leading-6 text-slate-500">
              Native performance, thoughtful details, and a library that belongs entirely to you.
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {advantages.map(({ icon: Icon, title, copy }) => (
              <motion.div key={title} variants={fadeUp} className="glass-card group p-7 md:p-9">
                <Icon className="h-8 w-8 text-orange-400 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,143,49,0.3)]" />
                <h3 className="mt-12 text-xl font-bold text-white tracking-tight">{title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">{copy}</p>
                <Check className="mt-8 h-5 w-5 text-blue-500/80" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8 relative z-20">
        <a href="#top" className="flex items-center gap-3 text-lg font-bold tracking-tight text-white group">
          <img src="/logo.png" alt="ComicFlow Logo" className="h-6 w-6 object-contain opacity-70 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
          <span>ComicFlow<span className="text-orange-400">.</span></span>
        </a>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Designed &amp; built by Rayyan Ansari</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">© 2026 ComicFlow</p>
      </footer>

      {/* LEGAL DISCLAIMER MODAL */}
      <AnimatePresence>
        {showTerms && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Dark Blur Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowTerms(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            />
            
            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#111216] shadow-2xl p-6 md:p-8"
            >
              <button onClick={() => setShowTerms(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors">
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Legal & Terms</h3>
                  <p className="text-sm text-slate-400">Please read before downloading</p>
                </div>
              </div>

              <div className="mb-8 space-y-4 text-sm leading-relaxed text-slate-300">
                <p>
                  <strong>ComicFlow is a local file reader only.</strong> We do not provide, host, distribute, or promote the downloading of copyrighted comic books, manga, or graphic novels. 
                </p>
                <p>
                  By downloading this software, you acknowledge that you are solely responsible for ensuring you have the legal right to read and store the <code>.cbz</code> and <code>.cbr</code> files you provide to the application.
                </p>
                <p>
                  ComicFlow acts strictly as an offline utility to organize and view files already present on your personal hard drive.
                </p>
              </div>

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button 
                  onClick={() => setShowTerms(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <a 
                  href={GOOGLE_DRIVE_LINK}
                  onClick={() => setShowTerms(false)}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-orange-500 text-black shadow-[0_0_20px_rgba(255,143,49,0.3)] hover:bg-orange-400 transition-all hover:scale-105 active:scale-95"
                >
                  <Check className="h-4 w-4" /> I Agree, Download Now
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}
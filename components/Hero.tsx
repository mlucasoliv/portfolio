"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
  };

  return (
    <section id="top" className="pb-20 pt-28 sm:pt-36">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="mb-5 font-mono text-sm uppercase tracking-widest text-muted">
          {t.hero.role}
        </motion.p>
        <motion.h1
          variants={item}
          className="text-balance text-6xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-7xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 max-w-[46ch] text-balance text-base leading-relaxed text-muted"
        >
          {t.hero.tagline}
        </motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#experiencia"
            className="press rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-opacity duration-200 ease-out hover:opacity-80"
          >
            {t.hero.ctaExperience}
          </a>
          <a
            href="#contato"
            className="press rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors duration-200 ease-out hover:bg-surface"
          >
            {t.hero.ctaContact}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

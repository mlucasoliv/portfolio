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
    show: { transition: { staggerChildren: 0.06 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
  };

  return (
    <section id="top" className="pb-16 pt-24 sm:pt-32">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="mb-4 font-mono text-sm text-accent">
          {t.hero.role}
        </motion.p>
        <motion.h1
          variants={item}
          className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-5 text-balance text-lg leading-relaxed text-muted"
        >
          {t.hero.tagline}
        </motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#experiencia"
            className="press rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-colors duration-200 ease-out hover:opacity-90"
          >
            {t.hero.ctaExperience}
          </a>
          <a
            href="#contato"
            className="press rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors duration-200 ease-out hover:bg-surface"
          >
            {t.hero.ctaContact}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

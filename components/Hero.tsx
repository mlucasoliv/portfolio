"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";
import { ScrollLink } from "./ScrollLink";

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
        {/* Sem hierarquia de tamanho: o nome se distingue pelo contraste,
            não pela escala — como na referência. */}
        <motion.h1 variants={item} className="uppercase text-fg">
          {profile.name}
        </motion.h1>
        <motion.p variants={item} className="uppercase text-muted">
          {t.hero.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-7 max-w-[52ch] uppercase leading-loose text-muted"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
          <ScrollLink
            href="#experiencia"
            className="uppercase text-muted underline decoration-border underline-offset-4 transition-colors duration-200 ease-out hover:text-fg hover:decoration-current"
          >
            {t.hero.ctaExperience}
          </ScrollLink>
          <ScrollLink
            href="#contato"
            className="uppercase text-muted underline decoration-border underline-offset-4 transition-colors duration-200 ease-out hover:text-fg hover:decoration-current"
          >
            {t.hero.ctaContact}
          </ScrollLink>
        </motion.div>
      </motion.div>
    </section>
  );
}

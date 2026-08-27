"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/data";
import { routes, routeLabel } from "@/lib/routes";
import { useLanguage } from "./LanguageProvider";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function Index() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.h1 variants={item} className="uppercase text-fg">
        {profile.name}
      </motion.h1>
      <motion.p variants={item} className="uppercase text-muted">
        {t.hero.role}
      </motion.p>

      <motion.p variants={item} className="mt-7 uppercase leading-loose text-muted">
        {t.hero.tagline}
      </motion.p>

      <motion.nav variants={item} className="mt-10">
        <ul className="space-y-1">
          {routes.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="uppercase text-muted underline decoration-border underline-offset-4 transition-colors duration-200 ease-out hover:text-fg hover:decoration-current"
              >
                {routeLabel(t, r.key)}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </motion.div>
  );
}

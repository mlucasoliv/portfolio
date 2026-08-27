"use client";

import { useLanguage } from "./LanguageProvider";
import type { Locale } from "@/lib/data";

const options: Locale[] = ["pt", "en"];

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className="flex items-center rounded-full border border-border bg-surface/60 p-0.5 font-mono text-xs"
    >
      {options.map((opt) => {
        const active = locale === opt;
        return (
          <button
            key={opt}
            type="button"
            aria-pressed={active}
            onClick={() => setLocale(opt)}
            className={`press rounded-full px-2 py-1 uppercase transition-colors duration-200 ease-out ${
              active ? "bg-fg text-bg" : "text-muted hover:text-fg"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

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
      className="flex items-center gap-2"
    >
      {options.map((opt) => {
        const active = locale === opt;
        return (
          <button
            key={opt}
            type="button"
            aria-pressed={active}
            onClick={() => setLocale(opt)}
            className={`press uppercase transition-colors duration-200 ease-out ${
              active ? "text-fg underline decoration-current underline-offset-4" : "text-muted hover:text-fg"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

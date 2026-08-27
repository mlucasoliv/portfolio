"use client";

import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

export function SiteFooter() {
  return (
    <footer className="mt-20 flex items-center gap-4">
      <LanguageToggle />
      <ThemeToggle />
    </footer>
  );
}

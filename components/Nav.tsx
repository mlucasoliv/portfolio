"use client";

import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { Logo } from "./Logo";
import { useLanguage } from "./LanguageProvider";

export function Nav() {
  const { t } = useLanguage();

  const links = [
    { href: "#sobre", label: t.nav.sobre },
    { href: "#experiencia", label: t.nav.experiencia },
    { href: "#skills", label: t.nav.skills },
    { href: "#contato", label: t.nav.contato },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-content items-center justify-between px-6">
        <a href="#top" className="press" aria-label="Início">
          <Logo />
        </a>
        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors duration-200 ease-out hover:text-fg"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

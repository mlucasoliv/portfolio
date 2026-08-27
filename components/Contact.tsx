"use client";

import { PageShell } from "./PageShell";
import { Reveal } from "./Reveal";
import { useLanguage } from "./LanguageProvider";

export function Contact() {
  const { t } = useLanguage();

  return (
    <PageShell title={t.contact.title}>
      <Reveal>
        <p className="text-pretty leading-loose text-fg/80">{t.contact.intro}</p>
      </Reveal>

      <ul className="mt-10 space-y-2">
        {t.contact.items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.05}>
            <li className="flex flex-wrap items-baseline gap-x-4">
              <a
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="uppercase text-fg underline decoration-border underline-offset-4 transition-colors duration-200 ease-out hover:decoration-current"
              >
                {item.label}
              </a>
              <span className="uppercase text-muted">{item.value}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </PageShell>
  );
}

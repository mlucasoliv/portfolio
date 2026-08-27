"use client";

import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";
import { useLanguage } from "./LanguageProvider";

export function Contact() {
  const { t } = useLanguage();
  const items = t.contact.items;

  return (
    <Section id="contato" title={t.contact.title}>
      <Reveal>
        <p className="text-balance text-base leading-relaxed text-fg/90">
          {t.contact.intro}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <ContactForm />
      </Reveal>
      <ul className="mt-10 divide-y divide-border border-y border-border">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.05}>
            <li>
              <a
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-3 uppercase text-muted underline decoration-border underline-offset-4 transition-colors duration-200 ease-out hover:text-fg hover:decoration-current"
              >
                <span className="font-mono text-base text-muted group-hover:text-accent">
                  {item.label}
                </span>
                <span className="flex items-center gap-2 text-base">
                  {item.value}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="-translate-x-1 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

"use client";

import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useLanguage } from "./LanguageProvider";

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="sobre" title={t.about.title}>
      <div className="space-y-4">
        {t.about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p className="text-pretty leading-loose text-fg/80">{p}</p>
          </Reveal>
        ))}
        <Reveal delay={t.about.paragraphs.length * 0.05}>
          <p className="pt-2 uppercase text-muted">{t.about.location}</p>
        </Reveal>
      </div>
    </Section>
  );
}

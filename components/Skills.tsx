"use client";

import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useLanguage } from "./LanguageProvider";

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills" title={t.skills.title}>
      <div className="grid gap-6 sm:grid-cols-2">
        {t.skills.groups.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.05}>
            <div>
              <h3 className="mb-3 text-sm font-medium text-fg">{s.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface/50 px-2.5 py-1 font-mono text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

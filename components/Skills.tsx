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
              <h3 className="mb-3 uppercase text-fg">{s.group}</h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="uppercase text-muted"
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

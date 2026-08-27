"use client";

import { PageShell } from "./PageShell";
import { Reveal } from "./Reveal";
import { useLanguage } from "./LanguageProvider";

export function Experience() {
  const { t } = useLanguage();
  const experiences = t.experience.items;

  return (
    <PageShell title={t.experience.title}>
      <ol className="relative border-l border-border pl-6">
        {experiences.map((exp, i) => (
          <Reveal
            key={`${exp.company}-${i}`}
            delay={i * 0.05}
            className={i === experiences.length - 1 ? undefined : "pb-10"}
          >
            <li className="relative">
              <span className="absolute -left-[1.6875rem] top-1.5 h-2 w-2 rounded-full bg-accent ring-4 ring-bg" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-medium text-fg">
                  {exp.role}
                  {exp.href ? (
                    <a
                      href={exp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
                    >
                      {" "}
                      · {exp.company}
                    </a>
                  ) : (
                    <span className="text-muted"> · {exp.company}</span>
                  )}
                </h3>
                <span className="uppercase text-muted">{exp.period}</span>
              </div>
              {(exp.type || exp.location) && (
                <div className="mt-2 flex flex-wrap items-center gap-x-3 uppercase text-muted">
                  {exp.type && (
                    <span className="text-fg/70">
                      {exp.type}
                    </span>
                  )}
                  {exp.location && (
                    <span className="inline-flex items-center gap-1">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {exp.location}
                    </span>
                  )}
                </div>
              )}
              <p className="mt-3 text-pretty leading-relaxed text-muted">
                {exp.description}
              </p>
              {exp.tags && exp.tags.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <li
                      key={t}
                      className="uppercase text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </Reveal>
        ))}
      </ol>
    </PageShell>
  );
}

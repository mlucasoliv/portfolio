"use client";

import Link from "next/link";
import { profile } from "@/lib/data";

export function PageShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="mb-12">
        <Link
          href="/"
          className="group inline-flex items-baseline gap-2 uppercase text-muted transition-colors duration-200 ease-out hover:text-fg"
        >
          {/* aria-hidden: a seta é decorativa, o texto do link já diz o destino */}
          <span
            aria-hidden="true"
            className="transition-transform duration-200 ease-out group-hover:-translate-x-1"
          >
            ←
          </span>
          <span className="underline decoration-border underline-offset-4 group-hover:decoration-current">
            {profile.name}
          </span>
        </Link>
        <h1 className="mt-6 uppercase text-fg">{title}</h1>
      </header>
      {children}
    </>
  );
}

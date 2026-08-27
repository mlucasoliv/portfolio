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
          className="uppercase text-muted underline decoration-border underline-offset-4 transition-colors duration-200 ease-out hover:text-fg hover:decoration-current"
        >
          {profile.name}
        </Link>
        <h1 className="mt-6 uppercase text-fg">{title}</h1>
      </header>
      {children}
    </>
  );
}

import type { Metadata } from "next";
import { Skills } from "@/components/Skills";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/skills",
  title: "Skills",
  description:
    "Tecnologias que o Marcelo Lucas usa no dia a dia: TypeScript, React, Next.js, Node.js, PostgreSQL, Docker e mais.",
});

export default function Page() {
  return <Skills />;
}

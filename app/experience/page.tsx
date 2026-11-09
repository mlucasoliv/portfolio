import type { Metadata } from "next";
import { Experience } from "@/components/Experience";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/experience",
  title: "Experiência",
  description:
    "Experiência do Marcelo Lucas como desenvolvedor full-stack e backend em Maceió: Kode.Lab e SECTI Alagoas (Programa OxeTech).",
});

export default function Page() {
  return <Experience />;
}

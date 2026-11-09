import type { Metadata } from "next";
import { About } from "@/components/About";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "Sobre",
  description:
    "Conheça o Marcelo Lucas, desenvolvedor de software em Maceió (AL) focado em backend e full-stack, com atenção a cada detalhe da interface.",
});

export default function Page() {
  return <About />;
}

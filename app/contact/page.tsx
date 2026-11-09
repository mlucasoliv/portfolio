import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: "Contato",
  description:
    "Fale com o Marcelo Lucas, desenvolvedor em Maceió (AL). Aberto a projetos sob encomenda e freelas: email, LinkedIn e GitHub.",
});

export default function Page() {
  return <Contact />;
}

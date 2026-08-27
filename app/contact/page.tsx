import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contato",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <Contact />;
}

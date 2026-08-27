import type { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "Sobre",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <About />;
}

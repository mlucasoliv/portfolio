import type { Metadata } from "next";
import { Skills } from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills",
  alternates: { canonical: "/skills" },
};

export default function Page() {
  return <Skills />;
}

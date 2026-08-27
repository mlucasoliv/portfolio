import type { Metadata } from "next";
import { Experience } from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experiência",
  alternates: { canonical: "/experience" },
};

export default function Page() {
  return <Experience />;
}

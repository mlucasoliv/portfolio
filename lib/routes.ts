import type { Dictionary } from "./data";

export const routes = [
  { href: "/about", key: "sobre" },
  { href: "/experience", key: "experiencia" },
  { href: "/skills", key: "skills" },
  { href: "/contact", key: "contato" },
] as const;

export function routeLabel(t: Dictionary, key: (typeof routes)[number]["key"]) {
  return t.nav[key];
}

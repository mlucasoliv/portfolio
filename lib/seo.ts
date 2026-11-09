import type { Metadata } from "next";
import { dictionaries, profile, siteUrl } from "./data";

const { city, region, country } = profile.location;

// Título e descrição da home: é o que aparece no Google ao buscar o nome
// ou "desenvolvedor em Maceió". Até ~60 e ~155 caracteres, respectivamente.
export const homeTitle = `${profile.name} — ${profile.jobTitle} em ${city}, ${region}`;
export const homeDescription =
  `${profile.jobTitle} em ${city} (${region}). Crio APIs, sistemas web e interfaces ` +
  "com Node.js, React e Next.js. Aberto a projetos e freelas.";

export const baseOpenGraph = {
  type: "website" as const,
  locale: "pt_BR",
  alternateLocale: ["en_US"],
  siteName: profile.name,
};

// Mesma imagem gerada por app/opengraph-image.tsx.
const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: `${profile.name} — ${dictionaries.pt.hero.role}`,
};

// No App Router, `openGraph` e `twitter` de uma página substituem os do layout
// por inteiro (inclusive a imagem do opengraph-image.tsx), então cada página
// repassa a base inteira, a imagem e a própria URL.
export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  const fullTitle = `${title} — ${profile.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...baseOpenGraph,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

const skills = dictionaries.pt.skills.groups.flatMap((g) => g.items);

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
      jobTitle: profile.jobTitle,
      description: homeDescription,
      email: `mailto:${profile.links.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        addressRegion: region,
        addressCountry: country,
      },
      worksFor: dictionaries.pt.experience.items.map((e) => ({
        "@type": "Organization",
        name: e.company,
      })),
      knowsAbout: skills,
      sameAs: [profile.links.linkedin, profile.links.github],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: profile.name,
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

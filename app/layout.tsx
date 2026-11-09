import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { profile, siteUrl } from "@/lib/data";
import { baseOpenGraph, homeDescription, homeTitle, jsonLd } from "@/lib/seo";
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const title = homeTitle;
const description = homeDescription;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    profile.name,
    "desenvolvedor Maceió",
    "programador Maceió",
    "desenvolvedor full-stack",
    "desenvolvedor Alagoas",
    "Software Engineer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "portfólio",
  ],
  alternates: {
    canonical: "/",
  },
  // Código do Google Search Console (verificação por tag HTML). Fica vazio até
  // a variável existir na Vercel; sem ela, nenhuma tag é gerada.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    ...baseOpenGraph,
    url: siteUrl,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={mono.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider>
          <LanguageProvider>
            {/* m-auto (e não justify-center) centraliza sem cortar o topo
                quando o conteúdo é mais alto que a viewport. */}
            <div className="flex min-h-screen flex-col">
              <div className="m-auto w-full max-w-content px-6 py-20">
                <main>{children}</main>
                <SiteFooter />
              </div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

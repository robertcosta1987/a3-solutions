import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";

// Mono cut only — display + body come from Fontshare CDN (Cabinet Grotesk +
// Satoshi). Loading Geist's sans cut would pull us into the same "Vercel
// default" look the brief explicitly wants to avoid.
const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://www.rubix360.com.br";
const BRAND = "Rubix360";
const TITLE = "Rubix360 — Transformando Complexidade em Inteligência";
const DESCRIPTION =
  "Conectamos sistemas, processos, pessoas e inteligência artificial em um único ecossistema. Software sob medida, IA, automação, cloud e produtos SaaS desenvolvidos junto com a sua empresa.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s · ${BRAND}` },
  description: DESCRIPTION,
  applicationName: BRAND,
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description:
      "Conectamos os sistemas da sua empresa em uma única visão. Software, IA e automação desenvolvidos junto com você, não para você.",
    url: "/",
    siteName: BRAND,
    type: "website",
    locale: "pt_BR",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  ...(process.env.GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } } : {}),
};

// Structured data: Organization + WebSite + Service (software house B2B).
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: BRAND, url: SITE_URL, logo: `${SITE_URL}/apple-icon`, description: DESCRIPTION },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: BRAND, url: SITE_URL, description: DESCRIPTION, inLanguage: "pt-BR", publisher: { "@id": `${SITE_URL}/#organization` } },
    {
      "@type": "Service",
      name: "Desenvolvimento de software, IA e automação",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Brasil" },
      serviceType: ["Software sob medida", "Inteligência artificial", "Automação", "Cloud", "Produtos SaaS"],
      description: DESCRIPTION,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${mono.variable} h-full antialiased scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&f[]=satoshi@300,400,500,700,900&display=swap"
        />
      </head>
      <body className="min-h-full bg-[var(--bg)] text-[var(--ink)]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
        <TopNav />
        {children}
        <Footer />
        {/* Assistente 360 — widget de atendimento (tenant de produção: rubix) */}
        <Script id="assistente360-widget" strategy="afterInteractive">{`
  (function (d) {
    var s = d.createElement('script');
    s.src = 'https://assistente360.com.br/widget.js';
    s.async = true;
    s.setAttribute('data-tenant', "rubix");
    s.setAttribute('data-name', "Rubix360");
    s.setAttribute('data-color', "#0a4eff");
    s.setAttribute('data-position', "bottom-right");
    s.setAttribute('data-greeting', "Olá! Aqui é o Robert, do time de Engenharia da Rubix. Como posso ajudar?");
    d.body.appendChild(s);
  })(document);
`}</Script>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Rubix360 — Transformando Complexidade em Inteligência",
  description:
    "Conectamos sistemas, processos, pessoas e inteligência artificial em um único ecossistema. Software sob medida, IA, automação, cloud e produtos SaaS desenvolvidos junto com a sua empresa.",
  metadataBase: new URL("https://rubix360.com.br"),
  openGraph: {
    title: "Rubix360 — Transformando Complexidade em Inteligência",
    description:
      "Conectamos os sistemas da sua empresa em uma única visão. Software, IA e automação desenvolvidos junto com você, não para você.",
    type: "website",
    locale: "pt_BR",
  },
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
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rubix360 — Transformando Complexidade em Inteligência",
    short_name: "Rubix360",
    description: "Software sob medida, IA, automação, cloud e produtos SaaS desenvolvidos junto com a sua empresa.",
    start_url: "/",
    display: "standalone",
    lang: "pt-BR",
    background_color: "#ffffff",
    theme_color: "#0a4eff",
    icons: [{ src: "/apple-icon", sizes: "180x180", type: "image/png" }],
  };
}

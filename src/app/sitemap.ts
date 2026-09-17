import type { MetadataRoute } from "next";

const BASE = "https://www.rubix360.com.br";

// Institutional site: the home plus the legal pages.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/termos`, lastModified: new Date("2026-09-17"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/privacidade`, lastModified: new Date("2026-09-17"), changeFrequency: "yearly", priority: 0.2 },
  ];
}

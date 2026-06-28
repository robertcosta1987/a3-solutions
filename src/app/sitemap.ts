import type { MetadataRoute } from "next";

const BASE = "https://www.rubix360.com.br";

// Single-page institutional site — the home is the only public, indexable URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
  ];
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

// Required by "output: export" — metadata routes must be explicitly static.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

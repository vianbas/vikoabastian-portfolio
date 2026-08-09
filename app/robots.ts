import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

// Required by "output: export" — metadata routes must be explicitly static.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

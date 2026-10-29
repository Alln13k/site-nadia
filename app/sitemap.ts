import type { MetadataRoute } from "next";
import { nav, siteOrigin } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin();
  return nav.map((item) => ({
    url: new URL(item.href, origin).toString(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}

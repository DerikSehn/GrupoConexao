import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

const routes = ["/", "/assessoria-de-credito", "/pessoa-juridica", "/privacy-policy"]

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) {
    return []
  }

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: new Date(),
  }))
}
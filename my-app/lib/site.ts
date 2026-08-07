const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()

export const siteUrl = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined

export const absoluteUrl = (path: string) =>
  siteUrl ? new URL(path, siteUrl).toString() : undefined
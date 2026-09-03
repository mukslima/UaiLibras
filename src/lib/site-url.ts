export function getConfiguredSiteUrl() {
  const value = process.env.UAILIBRAS_SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL;
  const normalized = value?.trim().replace(/\/$/, "");

  return normalized || null;
}

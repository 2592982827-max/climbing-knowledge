export function getLocalizedUrl(path: string, locale: string): string {
  return `/${locale}${path}`;
}

export function getAlternateUrl(path: string, fromLocale: string): string {
  const toLocale = fromLocale === "zh" ? "en" : "zh";
  return path.replace(`/${fromLocale}/`, `/${toLocale}/`);
}

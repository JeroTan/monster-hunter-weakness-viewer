export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (['en', 'es', 'fr'].includes(lang)) return lang;
  return 'en';
}
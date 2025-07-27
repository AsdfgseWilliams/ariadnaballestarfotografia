import { defaultLang, ui, showDefaultLang } from "./ui";



export function getLangFromUrl(url: URL) {
  const maybeLang = url.pathname.split('/')[1];
  // Si hay prefijo válido, lo devolvemos
  if (maybeLang && maybeLang in ui) {
    return maybeLang as keyof typeof ui;
  }
  // Si no hay, asumimos idioma por defecto (es)
  return defaultLang;
}



export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}
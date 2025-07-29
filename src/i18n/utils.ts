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
  return function t(key: string) {
    const [section, ...rest] = key.split('.');
    const subKey = rest.join('.');
    
    const sectionObj = ui[lang][section];
    const defaultSectionObj = ui[defaultLang][section];

    if (sectionObj && subKey in sectionObj) {
      return sectionObj[subKey as keyof typeof sectionObj];
    }
    if (defaultSectionObj && subKey in defaultSectionObj) {
      return defaultSectionObj[subKey as keyof typeof defaultSectionObj];
    }

    return `[missing translation: ${key}]`;
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}
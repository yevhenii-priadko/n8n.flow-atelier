import { en } from './en';
import { uk } from './uk';
import type { Dictionary } from './en';

export const locales = ['en', 'uk'] as const;
export type Locale = (typeof locales)[number];

const dictionaries: Record<Locale, Dictionary> = { en, uk };

export function getDictionary(lang: Locale): Dictionary {
	return dictionaries[lang];
}

/** Swap the locale segment of a pathname, e.g. /en/ -> /uk/, /en/#faq -> /uk/#faq */
export function getAlternateUrl(pathname: string, targetLang: Locale): string {
	const stripped = pathname.replace(/^\/(en|uk)(\/|$)/, '/');
	return `/${targetLang}${stripped}`.replace(/\/+$/, '/') || `/${targetLang}/`;
}

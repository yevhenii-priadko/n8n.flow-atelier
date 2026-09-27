// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://flow-atelier.studio',
	i18n: {
		locales: ['en', 'uk'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: true,
		},
	},
});

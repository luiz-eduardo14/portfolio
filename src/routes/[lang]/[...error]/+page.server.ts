import { supportedLanguagesSsr } from '$lib/translations';
const errors = ["301", "401", "404", "403", "500"];

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return supportedLanguagesSsr.reduce((acc: any, lang: any) => {
		return [...acc, ...errors.map((error) => {
			return {
				lang: lang.lang,
				error
			};
		})];
	}, []);
}

export const prerender = true;
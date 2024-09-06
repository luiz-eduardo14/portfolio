import { supportedLanguagesSsr } from '$lib/translations';

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return supportedLanguagesSsr;
}

export const prerender = true;
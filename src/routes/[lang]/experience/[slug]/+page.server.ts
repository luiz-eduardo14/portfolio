import { supportedLanguagesSsr } from "$lib/translations";
import { items as experiences } from "$lib/data/experience";

export const prerender = true;

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return supportedLanguagesSsr.reduce((acc, lang) => {
        return [...acc, ...experiences.map((experience) => {
            return {
                lang: lang.lang,
                slug: experience.slug
            }
        })];
    }, []);
}
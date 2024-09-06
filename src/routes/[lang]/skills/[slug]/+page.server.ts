import { supportedLanguagesSsr } from "$lib/translations";
import { items as skills } from "$lib/data/skills";

export const prerender = true;

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return supportedLanguagesSsr.reduce((acc, lang) => {
        return [...acc, ...skills.map((projects) => {
            return {
                lang: lang.lang,
                slug: projects.slug
            }
        })];
    }, []);
}
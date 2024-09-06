import { supportedLanguagesSsr } from "$lib/translations";
import { items as projects } from "$lib/data/projects";

export const prerender = true;

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return supportedLanguagesSsr.reduce((acc, lang) => {
        return [...acc, ...projects.map((projects) => {
            return {
                lang: lang.lang,
                slug: projects.slug
            }
        })];
    }, []);
}
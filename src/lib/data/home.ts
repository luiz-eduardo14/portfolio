import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Luiz Eduardo';

export const lastName = 'Sagaz Carvalho';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/luiz-eduardo14' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/luiz-eduardo-sagaz-carvalho-365316239'
	},
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'rust', 'ts');


export default {
	title,
	name,
	lastName,
	links,
	skills
}
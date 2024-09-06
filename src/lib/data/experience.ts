import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date() },
		skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js', 'rust'),
		name: 'Freelancer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'trainee-radar',
		company: 'Radar Saúde',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'São josé (SC) - Brazil',
		period: { from: new Date(2022, 7, 0), to: new Date(2023, 6, 0) },
		skills: getSkills('ts', 'js', 'java', 'reactjs'),
		name: 'Open Source Developer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome tools for developers.'
	},
];

export const title = 'Experience';

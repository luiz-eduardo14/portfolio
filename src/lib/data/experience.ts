import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'junior-software-developer',
		company: 'Radar Saúde',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'São josé (SC) - Brazil',
		period: { from: new Date(2023, 7, 0) },
		skills: getSkills('ts', 'css', 'html', 'js', 'rust'),
		name: 'Freelancer',
		color: 'blue',
		links: [{
			label: 'Radar Saúde',
			to: 'https://radarsaude.com.br',
		}],
		logo: Assets.RadarSaude,
		shortDescription: 'Creating awesome applications for customers.'
	},
	{
		slug: 'trainee-radar',
		company: 'Radar Saúde',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'São josé (SC) - Brazil',
		period: { from: new Date(2022, 7, 0), to: new Date(2023, 6, 0) },
		skills: getSkills('java', 'ts', 'js', 'reactjs'),
		name: 'trainee-radar',
		color: 'blue',
		links: [{
			label: 'Radar Saúde',
			to: 'https://radarsaude.com.br',
		}],
		logo: Assets.RadarSaude,
		shortDescription: 'Creating awesome tools for developers.'
	},
];

export const title = 'Experience';

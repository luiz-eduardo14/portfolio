import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Tecnólogo em análise e desenvolvimento de sistemas',
		description: '',
		shortDescription: '',
		location: 'Brazil',
		logo: Assets.Senac,
		name: '',
		organization: 'Senac',
		period: { from: new Date(2022, 1, 1), to: new Date(2024, 6, 1) },
		slug: 'dummy-education-item',
		subjects: ['Spring Boot', 'MySQL', 'Javascript', 'React', 'React Native', 'HTML', 'CSS', 'Git']
	},
	{
		degree: 'Jovem Programador',
		description: '',
		shortDescription: '',
		location: 'Brazil',
		logo: Assets.Senac,
		name: '',
		organization: 'Senac',
		period: { from: new Date(2021, 5, 1), to: new Date(2022, 6, 1) },
		slug: 'dummy-education-item-2',
		subjects: ['Spring Boot', 'MySQL', 'Javascript', 'HTML', 'CSS', 'Java SE', 'Java EE', 'Git']
	}
];

export const title = 'Education';

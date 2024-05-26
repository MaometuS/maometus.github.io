import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Uzbekistan',
		logo: Assets.Tatu,
		name: '',
		organization: 'Tashkent University of Information Technologies',
		period: { from: new Date(2016, 9, 1), to: new Date(2020, 6, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithms and Data Structures', 'Python', 'C++', 'Java', "Software Architechture"]
	},
	{
		degree: 'Master of Arts in Machine Learning',
		description: '',
		location: 'Japan',
		logo: Assets.Tohoku,
		name: '',
		organization: 'Tohoku University',
		period: { from: new Date(2023, 4, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Python', 'Computer Vision', 'Machine Learning', 'Data Science']
	}
];

export const title = 'Education';

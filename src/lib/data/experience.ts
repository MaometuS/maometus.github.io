import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience} from '../types';

export const items: Array<Experience> = [
	{
		slug: 'freelance',
		company: 'Freelance',
		description: 'Creating accounting systems for drug stores.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2016, 0, 1), to: new Date(2018, 6, 1) },
		skills: getSkills('delphi'),
		name: 'Desktop developer',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating accounting systems for drug stores.'
	},
	{
		slug: 'qoob-creation',
		company: 'Qoob Creation',
		description: 'Making different types of web solutions for businesses. Landing pages, portals, accounting web systems, CRM style web systems.',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Urgench city. Uzbekistan',
		period: { from: new Date(2018, 6, 1), to: new Date(2019, 4, 1) },
		skills: getSkills('ts', 'sass', 'css', 'html', 'js', 'php', 'nodejs'),
		name: 'Web developer',
		color: 'blue',
		links: [
			{
				to: "qoob.uz",
				label: 'Website'
			}
		],
		logo: Assets.Qoob,
		shortDescription: 'Making web solutions for customers'
	},
	{
		slug: 'reqlama-uz',
		company: 'Qoob Creation',
		description: 'Developing an extensive advertising aggregation system called Reqlama.uz.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Urgench city. Uzbekistan',
		period: { from: new Date(2019, 4, 1)},
		skills: getSkills('go', 'flutter', 'dart', 'postgresql', 'redis', 'nginx', 'angular', 'html', 'css', 'js', 'linux'),
		name: 'Software Engineer',
		color: 'green',
		links: [
			{
				to: 'https://play.google.com/store/apps/details?id=com.reqlamauz.reqlamauz&hl=en&gl=US',
				label: 'Play Store',
			},
			{
				to: 'https://apps.apple.com/us/app/reqlama-uz/id1593998995',
				label: 'App Store',
			},
		],
		logo: Assets.Reqlama,
		shortDescription: 'Creating reqlama.uz platform.'
	}
];

export const title = 'Experience';

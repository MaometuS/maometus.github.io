import Assets from './assets';
import {screenshot} from './assets'
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'reqlama',
		color: 'green',
		description:
			'This project started as a platform where people could place small ads on local television or radio. However, we realized that there might be a greater potential and decided to make the platform more expansive. At the current state, platform has full capabilities of online peer-to-peer marketplace. On top of that platform still supports the advertising aggregation functionality, letting users put their ads on social media, tv, radio, pubications, targeted ads etc. Due to the fact that this project was a startup, I had a challenge to make the system as efficient as possible in order to minimize initial maintenance costs. For the reason mentioned, I decided to choose go as the language for the development of the server side, as I thought it is a good balance between resource consumption, complexity and developer experience. Also we needed apps for both mainstream operation systems(iOS, Androdi), so we decided to proceed with crossplatform mobile development. Initially the app was developed using Apache Cordova, but we soon realised that the technology was too limiting, so we swtiched to flutter going forward. Currently the platform is functioning well and growing in number of users.',
		shortDescription:
			'Advertising aggreagation platform based on an online marketplace',
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
		name: 'Reqlama.uz',
		period: {
 			from: new Date(2019, 4, 1),
			to: new Date(2023, 12, 1)
		},
		skills: getSkills('go', 'flutter', 'dart', 'postgresql', 'redis', 'nginx', 'angular', 'html', 'css', 'js', 'linux'),
		type: 'Advertising aggregation platform',
		screenshots: [
			{
				label: 'Main Screen',
				src: screenshot('rq_main_screen.png')
			},
			{
				label: 'Profile Screen',
				src: screenshot('rq_profile_screen.png')
			},
			{
				label: 'Create Post Screen',
				src: screenshot('rq_create_post_screen.png')
			},
			{
				label: 'Favorites Screen',
				src: screenshot('rq_favorites_screen.png')
			},
			{
				label: 'Chat Screen',
				src: screenshot('rq_chat_screen.png')
			},
			{
				label: 'Chat Messaging Screen',
				src: screenshot('rq_chat_messaging_screen.png')
			},
			{
				label: 'Admin Panel',
				src: screenshot('rq_admin_panel.png')
			},
			{
				label: 'AdAM',
				src: screenshot('rq_adam_panel.png')
			},
		],
	},
	{
		slug: 'piarmenu',
		color: 'orange',
		description:
			"Website that offers a digital QR code menu service for restaurants, cafes, and bars. The features of QR code menu service include unlimited categories and items, both mobile and desktop versions of the menu, remote editing capabilities, multi-language support, unlimited photos and descriptions, and additional restaurant information. The service also provides a QR code generator for menus, allowing for easy placement on tables, windows, and other locations.",
		shortDescription:
			'QR menu for cafes and resturants',
		links: [
			{ to: 'https://piarmenu.com/e/doppi', label: 'Menu Example' },
			{ to: 'https://github.com/MaometuS/qr_menu', label: 'GitHub' },
		],
		logo: Assets.Unknown,
		name: 'Piar Menu',
		period: {
			from: new Date(2024, 2, 1),
			to: new Date(2024, 3, 1)
		},
		skills: getSkills('go', 'htmx', 'postgresql', 'html', 'css', 'js'),
		type: 'Web Service',
		screenshots: [
			{
				label: 'Admin Screen',
				src: screenshot('piarmenu_admin.png'),
			},
			{
				label: 'Menu Edit Screen',
				src: screenshot('piarmenu_menu_edit.png'),
			},
			{
				label: 'Menu Screen (categories)',
				src: screenshot('piarmenu_menu_categories.png'),
			},
			{
				label: 'Menu Screen (items)',
				src: screenshot('piarmenu_menu_items.png'),
			},
			{
				label: 'Order Screen',
				src: screenshot('piarmenu_order.png'),
			},
		]
	}
];

export const title = 'Projects';

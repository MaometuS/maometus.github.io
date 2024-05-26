import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Mukhammad';

export const lastName = 'Rakhimov';

export const description =
	'I have been fascinated with coding all my conscious life. I build my first program at the age of 10 and never looked back since. I have been exploring the world of coding both professionally and as a leisure. I am always excited solve complex problems by building versatile systems. One of my proudest projects is the platform Reqlama.uz, which is a large advertising aggregation system. Looking forward to helping more clients with their various automation issues. If you are interested in working with me, please reach out. I will be glad to talk to you.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/MaometuS' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/maometus/'
	},
	{
		platform: Platform.Email,
		link: 'maometusu@gmail.com'
	},
];

export const skills = getSkills('go', 'flutter', 'dart', 'postgresql', 'redis', 'nginx', 'angular', 'html', 'css', 'js', 'docker', 'rabbitmq');

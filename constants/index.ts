import {
	IAchievement,
	INavLink,
	IPortfolioItem,
	IProjectSpotlightItem,
} from '@/types'
const me = useMe()

const links: INavLink[] = [
	{ name: 'Projects', href: 'projects', id: me.uniqueId() },
	{ name: 'About ', href: 'about', id: me.uniqueId() },
	{ name: 'Contact', href: 'contact', id: me.uniqueId() },
	{ name: 'Blog', href: 'blog', id: me.uniqueId() },
]

const awards: IAchievement[] = [
	{
		id: me.uniqueId(),
		name: 'Digital Freelancer Nanodegree',
		url: 'https://confirm.udacity.com/G5KDSLSK',
		src: 'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/0e4e7509-edd9-44f2-b066-d8242a3fa1c6.svg',
		description:
			'Master the skills necessary to become a successful digital freelancer. Learn how to market your services to clients, scope projects and manage client relationships.',
	},
	{
		id: me.uniqueId(),
		name: 'Cloud Developer Nanodegree',
		url: 'https://confirm.udacity.com/FUDFQLXD',
		src: 'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/1454e7a8-3283-4289-b3fb-d7e441f913ee.svg',
		description:
			'Cloud Developer Nanodegree helps you with the fundamentals of cloud development and deployment with AWS. Then, build different apps leveraging microservices, Kubernetes clusters, and serverless application technology.',
	},
	{
		id: me.uniqueId(),
		name: 'Mentorship Nanodegree',
		url: 'https://confirm.udacity.com/JKLELCJP',
		src: 'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/a927a31e-9139-403f-9956-9ace9a96620d.svg',
		description:
			'Udacity Mentorship Nanodegree provides the knowledge and best practices to support students by providing comprehensive, personalised and timely technical support and feedback.',
	},
	{
		id: me.uniqueId(),
		name: 'Machine Learning Engineer Nanodegree',
		url: 'https://confirm.udacity.com/JPPH5G4X',
		src: 'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/912d7eb4-d692-4239-b869-dc1208e891f7.svg',
		description: `Machine Learning Engineer Nanodegree help students learn the essential skills they need to perform well as machine learning engineer.
		A graduate of this program will test Python code, build a Python package of their own, build predictive models using a variety of unsupervised and supervised machine learning techniques.`,
	},
	{
		id: me.uniqueId(),
		name: 'Introduction to Programming Nanodegree',
		url: 'https://confirm.udacity.com/PEK6UQNW',
		src: 'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/baac08cc-7290-4718-bb08-c5e2cf896eed.svg',
		description: `Introduction to Programming Nanodegree gives the basics of programming through HTML, CSS, Python, and JavaScript.
					Get extensive practice with hands-on exercises and projects that demonstrate your grasp of coding fundamentals and build confidence
					in your ability to think and problem-solve like a programmer.`,
	},
]

const projectSpotlight: IProjectSpotlightItem[] = [
	{
		description:
			'Elder Care Solution with Adaptive Exercises and Facilities Management',
		client: {
			name: 'Actifage LDA',
			website: 'https://www.actif.online/',
		},
		url: 'https://pro.actif.online/login',
		contributions: [
			'Design and develop the user interface from scratch using Nuxt.js and Vuex.',
			'Design and develop the RESTful APIs using Node.js and other technologies such as Express to allow communication between the client and server',
			'Migrate the platform from Nuxt2 to Vue3 and Vuex to Pinia.',
			'Co-founder and CTO.',
			'Introduce frontend unit tests based on cypress.',
			'Manage and develop database schema and queries using NoSQL databases like MongoDB or relational databases like MySQL or PostgreSQL.',
			'Test and debug code to ensure it meets quality standards and works as expected.',
			'Implement continuous integration and deployment to deliver changes to production as fast as possible.',
			'Manage application deployment on cloud platforms like AWS, Azure and Google Cloud.',
		],

		techStack: [
			'Nuxt',
			' Vue 3',
			'Vuex',
			'Pinia',
			'TypeScript',
			'JavaScript',
			'Vite',
			'Cypress',
			'Express',
			'MongoDB',
			'Firebase',
			'Google Cloud',
			'Microsoft Azure',
		],
	},
	{
		description: 'Elder Care Solution with Adaptive Exercises for Individuals.',
		client: {
			name: 'Actifage LDA',
			website: 'https://www.actif.online/',
		},
		url: 'https://me.actif.online/login',
		contributions: [
			'Design and develop the user interface using Vue3, Composition API and Pinia.',
			'Design and develop the RESTful APIs using Express running on Node.js to allow communication between the user interface and server.',
			'Develop a forum using web sockets for real-time communication.',
			'Co-founder and CTO.',
			'Introduce frontend unit tests based on cypress.',
			'Manage and develop database schema and queries using NoSQL databases like MongoDB.',
			'Test and debug code to ensure it meets quality standards and works as expected.',
			'Implement continuous integration and deployment to deliver changes to production as fast as possible.',
			'Manage application deployment on cloud platforms like AWS.',
		],
		techStack: [
			'Vue 3',
			'Pinia',
			'Highchart',
			'Socket.io',
			'Web Audio and Video API',
			'TypeScript',
			'JavaScript',
			'Vite',
			'Cypress',
			'Express',
			'MongoDB',
			'Firebase',
			'Google Cloud',
			'Microsoft Azure',
		],
	},
	{
		description: 'Actif Blog',
		client: {
			name: 'Actifage LDA',
			website: 'https://www.actif.online/',
		},
		url: 'https://actif.online/blog',
		contributions: [
			'Design and develop the blog using Nuxt2 and Vuex.',
			'Integrate Strapi (Open source Node.js Headless CMS) with the blog.',
			'Deploy blog to Google Cloud.',
			'Set up DNS mapping for the blog.',
			'Develop image rescaling and compression algorithm for blog media and deploy on Google Cloud Function.',
		],
		techStack: [
			'Nuxt',
			'Vuex',
			'TypeScript',
			'JavaScript',
			'Python',
			'Postgre SQL',
			'Google Cloud Function',
		],
	},
]

const projects: IPortfolioItem[] = [
	{
		id: me.uniqueId(),
		name: 'Actifage LDA | Actif Online',
		websiteUrl: 'https://www.actif.online/',
		description:
			'A tech company focusing on empowering older adults through exercise, anytime and everywhere.',
		type: 'project',
	},

	{
		id: me.uniqueId(),
		name: 'Nuxt-validate ',
		websiteUrl: 'https://www.npmjs.com/package/nuxt-validate',
		description:
			'A Simple Nuxt input validation module using vee-validate library. I am actively contributing to this project.',
		type: 'open-source',
	},
	{
		id: me.uniqueId(),
		name: 'TodoApp',
		websiteUrl: 'https://github.com/damisparks/todo_app',
		description: `
				This app is a  Full Stack Todo App Using Vue.JS for the front end and Adonis.JS on the backend.
				The app demonstrates the basic concepts in Vue.JS and AdonisJS. I am still maintaining the app. I have plans to update the app to Vue3.
				`,
		type: 'open-source',
	},
	{
		id: me.uniqueId(),
		name: 'How to become Microsoft Certified: Azure AI Engineer Associate',
		websiteUrl:
			'https://github.com/damisparks/microsoft-azure-ai-engineer-associate',
		description: `Here are notes and resources I used for those pursuing certification in Cloud Solution Architecture, Azure AI, and development. Happy to share.`,
		type: 'open-source',
	},
	{
		id: me.uniqueId(),
		name: 'Actifage LDA | Actif for Professionals',
		description:
			'Elder Care Solution with Adaptive Exercises and Facilities Management',
		websiteUrl: 'https://pro.actif.online/login',
		type: 'project',
	},
	{
		id: me.uniqueId(),
		name: 'Actifage LDA | Actif for Individuals',
		description: 'Elder Care Solution with Adaptive Exercises for Individuals.',
		websiteUrl: 'https://me.actif.online/login',
		type: 'project',
	},
	{
		id: me.uniqueId(),
		name: '@nuxtjs/eslint-module',
		description: 'ESLint module for Nuxt.js',
		websiteUrl: 'https://github.com/nuxt-modules/eslint',
		type: 'open-source',
	},
	{
		id: me.uniqueId(),
		name: '@nuxtjs/google-fonts',
		description: 'Google Fonts module for NuxtJS',
		websiteUrl: 'https://github.com/nuxt-modules/google-fonts',
		type: 'open-source',
	},
]
export { links, awards, projectSpotlight, projects }

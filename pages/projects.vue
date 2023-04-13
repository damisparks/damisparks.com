<script lang="ts" setup>
const title = ref<string>('Projects')
const description = ref<string>(
	'Explore our curated list of projects I have worked on. Here are some of the other projects I have worked on in the past — some still actively maintained, and others retired or on pause.'
)
const intro = ref([
	{
		name: 'My main focus these days is Actif — a tech company focusing on improving the health of older people with fitness and cognitive programs.'
	},
	{
		name: 'I decided to work on it full-time beginning in late 2020, and have a lot of plans for continuing to improve the platform, grow the community, and expand the ecosystem.'
	},
	{
		name: `Here are some of the other projects I've worked on in the past — some still actively maintained, and others retired or on pause.`
	}
])

const projects = ref([
	{
		title: 'Actif',
		url: 'https://www.actif.online/',
		shortDescription:
			'A tech company focusing on improving the health of older people with fitness and cognitive programs.'
	},
	{
		title: 'Nuxt-validate ',
		url: 'https://www.npmjs.com/package/nuxt-validate',
		shortDescription:
			'A Simple Nuxt input validation module using vee-validate library. I am actively contributing to this project.'
	},
	{
		title: 'TodoApp',
		url: 'https://github.com/damisparks/todo_app',
		shortDescription: `
				This app is a  Full Stack Todo App Using Vue.JS for the front end and Adonis.JS on the backend.
				The app demonstrates the basic concepts in Vue.JS and AdonisJS. I am still maintaining the app. I have plans to update the app to Vue3.
				`
	},
	{
		title: 'How to become Microsoft Certified: Azure AI Engineer Associate',
		url: 'https://github.com/damisparks/microsoft-azure-ai-engineer-associate',
		shortDescription: `This resource is a draft of how I became certified, and I am glad to share my resources and notes to help others.
					This resource aim at Cloud Solution Architects, Azure artificial intelligence designers, Azure Trainers and AI developers.
					I am still maintaining it. However, I have not worked on it in a while.`
	}
])

// page title
useHead({
	title: title.value,
	meta: [
		{ key: 'description', name: 'description', content: description.value }
	],
	link: [
		{
			key: 'canonical',
			rel: 'canonical',
			href: `https://damisparks.com/projects`
		}
	]
})
</script>

<template>
	<NuxtLayout>
		<AppPageHeader>
			<AppTitle>Projects</AppTitle>
		</AppPageHeader>
		<header class="max-w-2xl mx-auto mt-16 md:mt-32">
			<h1
				class="text-4xl font-montserrat font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-center sm:text-5xl"
			>
				Things I’ve built trying to put my dent in the universe.
			</h1>
			<h2
				class="mt-6 space-y-7 text-base font-firasans text-zinc-600 dark:text-zinc-400 sm:text-center"
			>
				<p v-for="{ name } in intro" :key="name">
					{{ name }}
				</p>
			</h2>
		</header>
		<div class="max-w-7xl mx-auto space-y-6">
			<section class="max-w-2xl mx-auto space-y-6 mt-12 font-firasans">
				<div
					v-for="(project, index) in projects"
					:key="index"
					class="space-y-1"
				>
					<h1 class="text-ds-blue dark:text-ds-teal text-xl font-semibold">
						{{ project.title }}
					</h1>
					<p class="text-zinc-500 dark:text-ds-smokewhite">
						{{ project.shortDescription }}
					</p>
					<NuxtLink
						:to="project.url"
						class="block hover:underline text-zinc-600 dark:text-zinc-400"
					>
						<i>Check it out</i>
					</NuxtLink>
				</div>
			</section>
		</div>
	</NuxtLayout>
</template>

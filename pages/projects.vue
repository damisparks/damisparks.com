<template>
	<div>
		<app-title>
			<span class="text-ds-primary">Portfolio</span>
		</app-title>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<app-intro class="mt-8">
				<div class="space-y-6 max-w-4xl">
					<p v-for="{ name } in intro" :key="name" class="text-gray-700">
						{{ name }}
					</p>
				</div>
			</app-intro>

			<section class="max-w-2xl mx-auto space-y-6 mt-12">
				<div
					v-for="(project, index) in projects"
					:key="index"
					class="space-y-1"
				>
					<h1 class="text-ds-primary text-xl font-semibold">
						{{ project.title }}
					</h1>
					<p>{{ project.shortDescription }}</p>
					<a :href="project.url" class="block"
						><span class="text-gray-500"><i>Check it out</i></span></a
					>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import AppIntro from '~/components/AppIntro.vue'
import AppTitle from '~/components/AppTitle.vue'
export default {
	name: 'PortfolioPage',
	components: { AppTitle, AppIntro },
	data: () => {
		return {
			title: 'Projects - Dami Sparks',
			description:
				'Explore our curated list of projects I have worked on. Here are some of the other projects I have worked on in the past — some still actively maintained, and others retired or on pause.',
			intro: [
				{
					name: 'My main focus these days is Actif — a tech company focusing on improving the health of older people with fitness and cognitive programs.',
				},
				{
					name: 'I decided to work on it full-time beginning in late 2020, and have a lot of plans for continuing to improve the platform, grow the community, and expand the ecosystem.',
				},
				{
					name: `Here are some of the other projects I've worked on in the past — some still actively maintained, and others retired or on pause.`,
				},
			],
			projects: [
				{
					title: 'Actif',
					url: 'https://www.actif.online/',
					shortDescription:
						'A tech company focusing on improving the health of older people with fitness and cognitive programs.',
				},
				{
					title: 'Nuxt-validate ',
					url: '//www.npmjs.com/package/nuxt-validate',
					shortDescription:
						'A Simple Nuxt input validation module using vee-validate library. I am actively contributing to this project.',
				},
				{
					title: 'TodoApp',
					url: '//github.com/damisparks/todo_app',
					shortDescription: `
				This app is a  Full Stack Todo App Using Vue.JS for the front end and Adonis.JS on the backend.
				The app demonstrates the basic concepts in Vue.JS and AdonisJS. I am still maintaining the app. I have plans to update the app to Vue3.
				`,
				},
				{
					title:
						'How to become Microsoft Certified: Azure AI Engineer Associate',
					url: '//github.com/damisparks/microsoft-azure-ai-engineer-associate',
					shortDescription: `This resource is a draft of how I became certified, and I am glad to share my resources and notes to help others.
					This resource aim at Cloud Solution Architects, Azure artificial intelligence designers, Azure Trainers and AI developers.
					I am still maintaining it. However, I have not worked on it in a while.`,
				},
			],
		}
	},
	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.description,
				},
			],
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					href: `https://damisparks.com/projects`,
				},
			],
		}
	},
}
</script>

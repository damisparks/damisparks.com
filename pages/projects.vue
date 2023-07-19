<script lang="ts" setup>
import { projects } from '@/constants'
import { IPortfolioItem } from '@/types'
const pageTitle = ref('Projects')
const description = ref(
	`Explore Dami Sparks' portfolio of previous projects, including custom web applications, e-commerce development, CMS development, and more.`
)
const keywords = ref(
	'Dami Sparks, Projects, Portfolio, Web Development, Mobile Development, Custom Web Applications, E-commerce Development, CMS Development, UI/UX Design, Cross-Platform Development, Progressive Web Applications, Single Page Applications, Server-Side Rendering, Front-end Development, Back-end Development, Database Development, Vue.js, Nuxt.js, JavaScript, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, RESTful APIs, AWS, Azure, Google Cloud'
)

const projectList = projects.filter(
	(project: IPortfolioItem) => project.type === 'project'
)

const openSourceList = projects.filter(
	(project: IPortfolioItem) => project.type === 'open-source'
)

useHead({
	title: pageTitle.value,
	meta: [
		{ name: 'description', content: description },
		{ name: 'keywords', content: keywords }
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
				Things I&#39;ve built trying to put my dent in the universe.
			</h1>
			<h2
				class="mt-6 space-y-7 text-base font-firasans text-zinc-600 dark:text-zinc-400 sm:text-center"
			>
				My main focus these days is Actif — a tech company focusing on improving
				the health of older people with fitness and cognitive programs
			</h2>
		</header>

		<section class="max-w-7xl mx-auto space-y-6">
			<div class="max-w-2xl mx-auto space-y-6 mt-12 font-firasans">
				<ProjectDivider>Business Projects Spotlight</ProjectDivider>
				<p
					class="mt-6 space-y-7 text-base font-firasans text-zinc-600 dark:text-zinc-400 sm:text-center"
				>
					Here, I summarised the business projects I've worked on. It could give
					you a better idea of how I've helped my clients in the past.
				</p>
				<ProjectList :projects="projectList" />
			</div>
			<div class="max-w-2xl mx-auto space-y-6 mt-12 font-firasans">
				<ProjectDivider>Open Source Spotlight</ProjectDivider>
				<p
					class="mt-6 space-y-7 text-base font-firasans text-zinc-600 dark:text-zinc-400 sm:text-center"
				>
					Here are some open-source projects I've worked on — some still
					actively maintained, and others retired or on pause.
				</p>
				<ProjectList :projects="openSourceList" />
			</div>
		</section>
	</NuxtLayout>
</template>

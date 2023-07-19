<script lang="ts" setup>
import { ISocialsNavigation } from '@/types'
const pageTitle = ref<string>('Contact')
const description = ref<string>(
	'Get in touch with Dami Sparks for custom web development, mobile development, UI/UX design, and more. Fill out the contact form or reach out on social media'
)
const pageKeyword = ref(
	'Dami Sparks, Contact, Web Development, Mobile Development, UI/UX Design, Custom Web Applications, E-commerce Development, CMS Development, Cross-Platform Development, Progressive Web Applications, Single Page Applications, Server-Side Rendering, Front-end Development, Back-end Development, Database Development, Vue.js, Nuxt.js, JavaScript, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, RESTful APIs, AWS, Azure, Google Cloud, Social Media'
)

const me = useMe()
const socials: ISocialsNavigation[] = [
	{
		id: me.uniqueId(),
		iconKey: 'uil:linkedin',
		href: 'https://www.linkedin.com/in/damisparks',
		name: 'Dami Sparks'
	},
	{
		id: me.uniqueId(),
		iconKey: 'uil:twitter',
		href: 'https://www.twitter.com/DamiSparks',
		name: '@damisparks'
	}
]

useHead({
	title: pageTitle.value,
	meta: [
		{ name: 'description', content: description.value },
		{ name: 'keywords', content: pageKeyword }
	]
})
</script>

<template>
	<NuxtLayout>
		<AppPageHeader>
			<AppTitle>Want to get in touch?</AppTitle>
		</AppPageHeader>
		<div class="max-w-7xl mx-auto py-16 sm:py-24 sm:px-6 lg:px-8 font-firasans">
			<div
				class="relative shadow-lg rounded-md overflow-hidden dark:border border-zinc-700"
			>
				<h2 class="sr-only">Want to get in touch?</h2>
				<div class="grid grid-cols-1 lg:grid-cols-3">
					<div
						class="relative overflow-hidden py-10 px-6 bg-ds-blue dark:bg-zinc-700 sm:px-10 xl:p-12"
					>
						<div
							class="absolute inset-0 pointer-events-none sm:hidden"
							aria-hidden="true"
						>
							<svg
								class="absolute inset-0 w-full h-full"
								width="343"
								height="388"
								viewBox="0 0 343 388"
								fill="none"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
									fill="url(#linear1)"
									fill-opacity=".1"
								/>
								<defs>
									<linearGradient
										id="linear1"
										x1="254.553"
										y1="107.554"
										x2="961.66"
										y2="814.66"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#fff"></stop>
										<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div
							class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
							aria-hidden="true"
						>
							<svg
								class="absolute inset-0 w-full h-full"
								width="359"
								height="339"
								viewBox="0 0 359 339"
								fill="none"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
									fill="url(#linear2)"
									fill-opacity=".1"
								/>
								<defs>
									<linearGradient
										id="linear2"
										x1="192.553"
										y1="28.553"
										x2="899.66"
										y2="735.66"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#fff"></stop>
										<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div
							class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
							aria-hidden="true"
						>
							<svg
								class="absolute inset-0 w-full h-full"
								width="160"
								height="678"
								viewBox="0 0 160 678"
								fill="none"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
									fill="url(#linear3)"
									fill-opacity=".1"
								/>
								<defs>
									<linearGradient
										id="linear3"
										x1="192.553"
										y1="325.553"
										x2="899.66"
										y2="1032.66"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#fff"></stop>
										<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
									</linearGradient>
								</defs>
							</svg>
						</div>
						<h3 class="text-lg font-medium text-white">Contact information</h3>
						<p class="mt-6 text-base text-ds-smokewhite max-w-3xl">
							Hey there. If you want to contact me, you can use this form. You
							will probably reach me quicker on Twitter or LinkedIn.
						</p>
						<ul role="list" class="mt-8 flex flex-col space-y-4">
							<li v-for="item in socials" :key="`socials-${item.name}`">
								<NuxtLink
									class="text-ds-smokewhite hover:text-indigo-100"
									:to="item.href"
									rel="noopener noreferrer"
									target="_blank"
								>
									<span class="sr-only">{{ item.name }}</span>
									<div class="flex">
										<Icon
											:name="item.iconKey"
											class="h-6 w-6"
											aria-hidden="true"
										/>
										<span class="ml-3">{{ item.name }}</span>
									</div>
								</NuxtLink>
							</li>
						</ul>
					</div>

					<!-- Contact form -->
					<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
						<h3 class="text-lg font-medium text-ds-blue dark:text-ds-orange">
							Drop me a message
						</h3>
						<form
							id="contact_form"
							name="contact"
							method="POST"
							data-netlify="true"
							action="/thank-you/"
							netlify-honeypot="bot-field"
							class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
						>
							<input type="hidden" name="form-name" value="contact" />
							<!--  spam prevention starts -->
							<p class="hidden">
								<label>
									Don’t fill this out if you’re human:
									<input name="bot-field" />
								</label>
							</p>
							<!--  spam prevention ends -->

							<fieldset>
								<label for="your-name" class="app-input-label">Your name</label>
								<AppTextInput
									id="your-name"
									required
									type="text"
									name="your-name"
									placeholder="Your name"
									autocomplete="given-name"
									class="mt-1"
								/>
							</fieldset>
							<fieldset>
								<label for="email" class="app-input-label">Email</label>
								<AppTextInput
									id="email"
									required
									name="email"
									type="email"
									autocomplete="email"
									placeholder="Your email address"
									class="mt-1"
								/>
							</fieldset>
							<fieldset class="sm:col-span-2">
								<label for="subject" class="app-input-label">Subject</label>
								<AppTextInput
									id="subject"
									required
									type="text"
									name="subject"
									placeholder="Your subject"
									class="mt-1"
								/>
							</fieldset>
							<fieldset class="sm:col-span-2">
								<div class="flex justify-between">
									<label for="message" class="app-input-label">
										A message to me
									</label>
									<span id="message-max" class="text-sm text-zinc-500">
										Max. 500 characters
									</span>
								</div>
								<AppTextarea
									id="message"
									required
									name="message"
									rows="4"
									class="mt-1"
								/>
							</fieldset>
							<button type="submit" class="btn btn-ds-blue">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>

<template>
	<div class="space-y-4">
		<section>
			<AppTopBlurb>
				<AppBlurb>
					Dami
					<span style="color: hsla(217, 89%, 61%, 1)">envisions</span> ideas and
					<span style="color: hsla(328, 100%, 54%, 1)">turns</span> them into
					scalable digital products while
					<span style="color: hsla(136, 53%, 43%, 1)">igniting</span> a passion
					for coding in
					<span style="color: hsla(41, 100%, 49%, 1)">others</span> — currently
					working at Tricentis.
				</AppBlurb>
			</AppTopBlurb>
		</section>
		<section class="py-8 text-center space-y-3">
			<p
				class="font-montserrat font-medium text-xl leading-7 lg:leading-8 lg:text-2xl py-8"
			>
				✨ Things I&#39;ve built trying to put my dent in the universe ✨
			</p>
			<div class="inline-flex space-x-4">
				<NuxtLink
					class="rounded-md bg-button hover:bg-button-hover text-white px-2.5 py-1.5"
					to="/projects"
				>
					All works
				</NuxtLink>
				<NuxtLink
					class="rounded-md hover:bg-button-outlined-hover text-color px-2.5 py-1.5 ring-1 ring-inset ring-divider hover:ring-color"
					to="/bio"
				>
					Read my bio
				</NuxtLink>
			</div>
			<AppBlurbList />
		</section>

		<section class="space-y-3 max-w-xl mx-auto">
			<p class="text-sm">
				Read more about me on my 👉🏾
				<NuxtLink
					class="border-b border-divider hover:border-gray-300"
					to="/bio"
				>
					bio
				</NuxtLink>
			</p>
			<p>Find me on</p>
			<AppSocials show-text icon-size="16px" />
			<p class="text-gray-300 dark:text-gray-400 inline-flex">
				Or mail me at
				<span class="ml-2 inline-flex items-center">
					rethinkwithdami<Icon name="carbon:at" size="20px" />gmail.com
				</span>
			</p>
		</section>
	</div>
</template>
<!-- TODO: Add smooth transition into page like antfu did -->

<template>
	<div class="space-y-4 slide-enter">
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
			<div class="inline-flex items-center space-x-4">
				<NuxtLink
					class="rounded-md bg-primary-500 text-white hover:bg-primary-600 px-2.5 py-1.5"
					to="/projects"
				>
					All works
				</NuxtLink>
				<NuxtLink
					class="rounded-md shadow-sm px-2.5 py-1.5 bg-transparent text-primary-500 ring-1 ring-inset ring-primary-500 focus:ring-1 focus:ring-primary-500 hover:text-primary-600 hover:border-primary-600"
					to="/bio"
				>
					Read my bio
				</NuxtLink>
			</div>
			<AppBlurbList />
		</section>
	</div>
</template>
<!-- TODO: Add smooth transition into page -->

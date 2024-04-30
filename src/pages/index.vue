<template>
	<div class="space-y-4 slide-enter">
		<section>
			<AppTopBlurb>
				<AppBlurb>
					Committed to
					<span style="color: hsla(217, 89%, 61%, 1)">envisioning</span> ideas
					and <span style="color: hsla(328, 100%, 54%, 1)">turning</span> them
					into scalable digital products while
					<span style="color: hsla(136, 53%, 43%, 1)">igniting</span> a passion
					for coding in
					<span style="color: hsla(41, 100%, 49%, 1)">others</span> — currently
					working at Tricentis.
				</AppBlurb>
			</AppTopBlurb>
		</section>
		<section class="py-8 text-center space-y-3">
			<AppHeadlineFluid class="py-8">
				Digital products. Built with you in mind.
			</AppHeadlineFluid>
			<div class="inline-flex items-center space-x-4">
				<NuxtLink
					class="rounded-md flex bg-primary-500 text-white hover:bg-primary-600 px-4 py-2 font-normal"
					to="/projects"
				>
					All works
				</NuxtLink>
				<NuxtLink
					class="rounded-md flex shadow-sm px-4 py-2 bg-transparent text-primary-500 ring-1 ring-inset ring-primary-500 focus:ring-1 focus:ring-primary-500 hover:text-primary-600 hover:border-primary-600 font-normal"
					to="/bio"
				>
					See my bio
				</NuxtLink>
			</div>
			<AppBlurbList />
		</section>
	</div>
</template>
<!-- TODO: Add smooth transition into page -->

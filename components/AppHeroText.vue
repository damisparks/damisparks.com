<template>
	<div
		class="lg:max-w-3xl mx-auto pt-8 lg:pt-16 content-visibility-auto contain-intrinsic-size-[auto_400px] border"
	>
		<div class="flex flex-col gap-9">
			<h1
				class="text-center font-firasans font-light leading-snug text-3xl md:text-4xl lg:text-5xl text-zinc-800 dark:text-zinc-100"
			>
				<slot>
					<!-- hero title content -->
					Hero title
				</slot>
			</h1>
			<div
				class="text-zinc-600 dark:text-zinc-400 text-center text-sm lg:text-base px-0 md:px-14 lg:px-24"
			>
				<slot name="description">
					<!-- hero description -->
					Hero description
				</slot>
			</div>
		</div>
	</div>
</template>

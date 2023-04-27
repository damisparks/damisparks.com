<script setup lang="ts">
const consented = useCookie('ds-ds_gdpr_consent', { sameSite: 'lax' })
const setConsent = (choice: boolean) => {
	consented.value = JSON.stringify(choice)
	if (choice) useGtagConsent(choice)
}
</script>
<template>
	<div
		v-if="typeof consented === 'undefined'"
		class="fixed bottom-0 py-2 px-4 sm:py-3 sm:px-6 z-10 bg-zinc-100 dark:bg-zinc-800 dark:ring-zinc-500/20 w-full left-0"
	>
		<div class="max-w-7xl mx-auto flex items-center justify-between">
			<div class="flex-1">
				<p class="text-sm sm:text-base font-firasans">
					Our website uses cookies, including Google Analytics, to enhance your
					browsing experience. Click 'Accept' to consent to the use of cookies,
					or 'Deny' to decline. For more information, please refer to our
					<NuxtLink class="underline font-normal" to="/privacy">
						privacy policy </NuxtLink
					>.
				</p>
			</div>
		</div>
		<div class="flex items-end justify-end">
			<button
				type="button"
				class="btn btn-ds-blue mr-3"
				@click="setConsent(true)"
			>
				Accept
			</button>
			<button
				type="button"
				class="btn bg-ds-smokewhite text-ds-blue shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-ds-blue-accent-200"
				@click="setConsent(false)"
			>
				Deny
			</button>
		</div>
	</div>
</template>

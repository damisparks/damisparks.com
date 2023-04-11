<script setup lang="ts">
import { object, string } from 'yup'
import { useForm } from 'vee-validate'

const validationSchema = object({
	name: string().required(),
	email: string().required(),
	description: string().required(),
	subject: string().required()
})
const { handleSubmit } = useForm({ validationSchema })

const onContact = handleSubmit(values => {
	console.log(values)
})
</script>
<template>
	<form class="rounded-lg shadow-lg p-4 space-y-6" @submit="onContact">
		<fieldset>
			<label
				for="your-name"
				class="block text-sm font-medium text-zinc-500 dark:text-zinc-400"
			>
				Your name
			</label>
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
			<label
				for="email"
				class="block text-sm font-medium text-zinc-500 dark:text-zinc-400"
			>
				Email
			</label>
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
		<fieldset>
			<label
				for="subject"
				class="block text-sm font-medium text-zinc-500 dark:text-zinc-400"
			>
				Subject
			</label>
			<AppTextInput
				id="subject"
				required
				type="text"
				name="subject"
				placeholder="Your subject"
				class="mt-1"
			/>
		</fieldset>
	</form>
</template>

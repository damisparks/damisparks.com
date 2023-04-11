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

const message = ref('')
const onContact = handleSubmit(values => {
	console.log(values)
})
</script>
<template>
	<form class="rounded-lg shadow-lg p-4 space-y-6" @submit="onContact">
		<fieldset>
			<label for="your-name" class="app-input-label"> Your name </label>
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
			<label for="email" class="app-input-label"> Email </label>
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
			<label for="subject" class="app-input-label"> Subject </label>
			<AppTextInput
				id="subject"
				required
				type="text"
				name="subject"
				placeholder="Your subject"
				class="mt-1"
			/>
		</fieldset>
		<fieldset>
			<div class="flex justify-between">
				<label for="message" class="app-input-label"> A message to me </label>
				<span id="message-max" class="text-sm text-zinc-500">
					Max. 500 characters
				</span>
			</div>
			<AppTextarea
				id="message"
				v-model="message"
				required
				name="message"
				rows="4"
				class="mt-1"
			/>
		</fieldset>
	</form>
</template>

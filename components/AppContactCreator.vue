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
const name = ref('')

const onContact = handleSubmit(values => {
	console.log(values)
})
</script>
<template>
	<form class="rounded-lg shadow-lg p-4" @submit="onContact">
		<AppInput v-model="name" type="text" name="name" placeholder="Your name" />
	</form>
</template>

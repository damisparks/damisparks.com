<script setup lang="ts">
const { capitalizeWords } = useMe()
const cookiePolicy = reactive({
	name: 'privacy policy',
	content: `
	Learn how Dami Sparks uses cookies on their website to enhance user experience and track website usage. Our cookie policy provides clear information about the types of cookies used, how they are used, and how you can control and manage your cookie preferences. By continuing to browse the site, you consent to the use of cookies. Contact Dami Sparks for any questions or concerns about our cookie policy.`
})

useHead({
	title: capitalizeWords(cookiePolicy.name),
	meta: [
		{ key: 'description', name: 'description', content: cookiePolicy.content }
	],
	link: [
		{
			key: 'canonical',
			rel: 'canonical',
			href: `https://damisparks.com/cookie-policy`
		}
	]
})
</script>
<template>
	<NuxtLayout>
		<AppPageHeader>
			<AppTitle>{{ capitalizeWords(cookiePolicy.name) }}</AppTitle>
		</AppPageHeader>

		<section class="space-y-6">
			<h1>Privacy Policy for damisparks.com</h1>
			<p>
				This Privacy Policy outlines how the website, Damisparks collects, uses,
				and protects your personal information. The website protects your
				privacy and keeps your personal info confidential.
			</p>
			<p>Information Collection and Use</p>
			<p>
				The website may collect personal information such as your name, email
				address, phone number, and other contact details that you provide when
				you contact the developer. This information is collected to respond to
				your inquiries and provide services.
			</p>
			<p>
				The website may also collect non-personal information such as browser
				type, IP address, and other technical information. This information is
				collected to improve the website's performance and user experience.
			</p>
			<p>Information Sharing and Disclosure</p>
			<p>
				The website does not share or disclose your personal information to any
				third party without your consent except as required by law.
			</p>
			<p>
				The website may use third-party service providers such as Google
				Analytics to track usage and analytics. In addition, these service
				providers may collect non-personal information on behalf of the website.
			</p>

			<div>
				<p>Data Security</p>
				<p>
					The website takes reasonable measures to protect your personal
					information from unauthorised access, use, or disclosure. However, no
					transmission over the internet can be guaranteed to be 100% secure.
					Therefore, while the website strives to protect your personal
					information, it cannot guarantee the security of any information you
					transmit.
				</p>
			</div>
			<div>
				<p>Cookies</p>
				<p>
					The website may use cookies to enhance user experience and track
					website usage. By using the website, you consent to the use of
					cookies.
				</p>
			</div>
			<div>
				<p>Changes to the Privacy Policy</p>
				<p>
					The website reserves the right to change this Privacy Policy at
					anytime and for any reason. Any changes or modifications will be
					effective immediately upon posting the updated Privacy Policy on the
					website. Your continued use of the website after any changes or
					modifications to the Privacy Policy will constitute your acceptance of
					such changes or modifications.
				</p>
			</div>
			<div>
				<p>Contact Information</p>
				<p>
					If you have any questions or concerns about this Privacy Policy, don't
					hesitate to contact me at damisparks@outlook.com or through the
					contact information provided on the website.
				</p>
			</div>
			<div class="max-w-lg mx-auto">
				<h2 class="text-2xl font-bold mb-4">Changes to the Privacy Policy</h2>
				<p class="mb-4">
					The website reserves the right to change this Privacy Policy at
					anytime and for any reason. Any changes or modifications will be
					effective immediately upon posting the updated Privacy Policy on the
					website. Your continued use of the website after any changes or
					modifications to the Privacy Policy will constitute your acceptance of
					such changes or modifications.
				</p>

				<h2 class="text-2xl font-bold mb-4">Contact Information</h2>
				<p class="mb-4">
					If you have any questions or concerns about this Privacy Policy, don't
					hesitate to contact me at damisparks@outlook.com or through the
					contact information provided on the website.
				</p>
			</div>
		</section>
	</NuxtLayout>
</template>

<template>
	<div>
		<app-title>
			<span class="text-ds-teal">Hi there!</span>
		</app-title>
		<div class="relative py-16">
			<div
				class="hidden absolute top-0 inset-x-0 h-1/2 lg:block"
				aria-hidden="true"
			></div>
			<div class="max-w-7xl mx-auto bg-ds-primary lg:bg-transparent lg:px-8">
				<div class="lg:grid lg:grid-cols-12">
					<div
						class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent"
					>
						<div
							class="absolute inset-x-0 h-1/2 bg-white lg:hidden"
							aria-hidden="true"
						></div>
						<div
							class="max-w-md mx-auto px-4 sm:max-w-md sm:px-6 lg:max-w-none lg:p-0"
						>
							<div
								class="aspect-w-3 aspect-h-3 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-1"
							>
								<NuxtImg
									class="object-cover object-center rounded-3xl shadow-2xl"
									provider="cloudinary"
									src="w_1000,ar_1:1,c_fill,g_auto/damisparks/dami.png"
									height="1078"
									width="984"
									quality="80"
									format="webp"
									alt="dami sparks omifare"
								/>
							</div>
						</div>
					</div>

					<div
						class="relative bg-ds-primary py-6 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center"
					>
						<div
							class="relative max-w-lg mx-auto py-12 px-4 space-y-6 sm:max-w-4xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6"
						>
							<div class="space-y-4 sm:space-y-6">
								<h2 class="text-3xl font-extrabold text-ds-secondary">
									I'm Dami
								</h2>
								<p class="text-lg text-white">
									Damilola is the CTO and co-founder of Actif, a tech company
									focusing on improving the health of older people with fitness
									and cognitive programs.
								</p>
								<p class="text-lg text-white">
									He is a Certified Mentor, Machine Learning Engineer and Cloud
									Developer with experience in front-end and back-end design and
									development. Over the last five years, He has gained expertise
									in designing and developing web applications, writing
									technical documentation, and mentoring others working for tech
									companies like Udacity, Photoweb, PrimeIT, Fujitsu.
								</p>
								<p class="text-lg text-white">
									He hosted the Ask Me Anything Session organised by Udacity
									Introduction to Programming Nanodegree. His Team won the
									Demium AllStartup Weekend 2020. Damilola loves what he does,
									and he inspires others to do what they love and become their
									heroes.
								</p>
							</div>
							<span class="text-ds-teal block uppercase"> to add resume..</span>
							<a
								class="block w-full py-3 px-5 text-center bg-ds-smokewhite border border-transparent rounded-md shadow-md text-base font-bold text-ds-primary sm:inline-block sm:w-auto"
								href="#"
								>View Resume</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AppTitle from '~/components/AppTitle.vue'
export default {
	name: 'AboutPage',
	components: { AppTitle },
}
</script>

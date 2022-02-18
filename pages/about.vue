<template>
	<div>
		<app-title>
			<span class="text-ds-teal">Hi there!</span>
		</app-title>
		<div class="relative py-16 md:px-4">
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
							<a
								class="block w-full py-3 px-5 text-center bg-ds-smokewhite border border-transparent rounded-md shadow-md text-base font-bold text-ds-primary sm:inline-block sm:w-auto"
								rel="noopener noreferrer"
								href="//drive.google.com/uc?export=download&id=1qRSxju1bsJWOt098a9EXPpx8rOsgL-8m"
								>View Resume</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--  skills starts-->
		<div class="bg-white">
			<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
				<div>
					<h1
						class="text-3xl font-extrabold text-ds-primary tracking-tight sm:text-4xl"
					>
						Skills
					</h1>
					<div
						class="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2"
					>
						<ul
							v-for="(skill, index) in skills"
							:key="index"
							role="list"
							class="divide-y divide-gray-200"
						>
							<li class="py-4 flex md:py-0 md:pb-4">
								<svg
									class="flex-shrink-0 h-8 w-8 text-ds-teal"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									/>
								</svg>
								<span class="ml-3 text-base text-gray-500">
									{{ skill.name }}
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!--  skills ends-->

		<!-- services starts  -->
		<!-- services I provide. -->
		<!-- services ends -->

		<!-- acheivement starts -->
		<div class="bg-white">
			<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
				<div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
					<h1
						class="text-3xl font-extrabold text-ds-primary tracking-tight sm:text-4xl"
					>
						Achievements
					</h1>
					<div class="lg:col-span-3">
						<ul
							role="list"
							class="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
						>
							<li v-for="(award, index) in awards" :key="index" class="sm:py-8">
								<div
									class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0"
								>
									<div class="aspect-w-2 aspect-h-2">
										<img
											class="object-cover shadow-lg rounded-lg border border-t-ds-primary border-t-4"
											:src="award.imageUrl"
											:alt="award.name"
										/>
									</div>
									<div class="sm:col-span-2">
										<div class="space-y-4">
											<div class="text-lg leading-6 font-bold space-y-1">
												<a
													:href="award.url"
													target="_blank "
													rel="noopener noreferrer"
													class="text-ds-teal"
													>{{ award.name }}</a
												>
											</div>
											<div class="text-lg">
												<p class="text-gray-500">
													{{ award.shortDescription }}
												</p>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<!-- acheivement ends -->
	</div>
</template>

<script>
import AppTitle from '~/components/AppTitle.vue'
export default {
	name: 'AboutPage',
	components: { AppTitle },
	data: () => {
		return {
			about: {
				title: 'About Dami and his experience as a developer and mentor',
				description:
					'CTO at Actif, Cloud Developer, VueJS Developer, NuxtJS Developer, Freelancer, Knowledge and Code Reviewer at Udacity, Data Scientist at Lisbon Project, Demium AllStartup Weekend Winning Team',
			},
			skills: [
				{ name: 'Javascript' },
				{ name: 'Typescript' },
				{ name: 'Python' },
				{ name: 'VueJs' },
				{ name: 'NuxtJS' },
				{ name: 'NodeJS' },
				{ name: 'ExpressJS' },
				{ name: 'MongoDB & Postgre' },
				{ name: 'Google Cloud' },
				{ name: 'ServiceNow' },
				{ name: 'Google Workspace' },
				{ name: 'Google Firebase' },
				{ name: 'Article Writing' },
				{ name: 'Mentoring' },
			],
			services: [],
			awards: [
				{
					name: 'Cloud Developer Nanodegree',
					url: 'https://confirm.udacity.com/FUDFQLXD',
					imageUrl:
						'//s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/1454e7a8-3283-4289-b3fb-d7e441f913ee.svg',
					shortDescription:
						'Cloud Developer Nanodegree helps you with the fundamentals of cloud development and deployment with AWS. Then, build different apps leveraging microservices, Kubernetes clusters, and serverless application technology.',
				},
				{
					name: 'Mentorship Nanodegree',
					url: '//confirm.udacity.com/JKLELCJP',
					imageUrl:
						'//s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/a927a31e-9139-403f-9956-9ace9a96620d.svg',
					shortDescription:
						'Udacity Mentorship Nanodegree provides the knowledge and best practices to support students by providing comprehensive, personalised and timely technical support and feedback.',
				},
				{
					name: 'Machine Learning Engineer Nanodegree',
					url: '//confirm.udacity.com/JPPH5G4X',
					imageUrl:
						'//s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/912d7eb4-d692-4239-b869-dc1208e891f7.svg',
					shortDescription: `Machine Learning Engineer Nanodegree help students learn the essential skills they need to perform well as machine learning engineer.
					A graduate of this program will test Python code, build a Python package of their own, build predictive models using a variety of unsupervised and supervised machine learning techniques.`,
				},
				{
					name: 'Introduction to Programming Nanodegree',
					url: '//confirm.udacity.com/PEK6UQNW',
					imageUrl:
						'//s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/baac08cc-7290-4718-bb08-c5e2cf896eed.svg',
					shortDescription: `Introduction to Programming Nanodegree gives the basics of programming through HTML, CSS, Python, and JavaScript.
					Get extensive practice with hands-on exercises and projects that demonstrate your grasp of coding fundamentals and build confidence
					in your ability to think and problem-solve like a programmer.`,
				},
			],
		}
	},
	head() {
		return {
			title: this.about.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.about.description,
				},
			],
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					href: `https://damisparks.com/about`,
				},
			],
		}
	},
}
</script>

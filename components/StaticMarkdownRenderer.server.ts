import { h } from 'vue'
import { ContentRendererMarkdown } from '#components'

export default defineComponent({
	// eslint-disable-next-line vue/require-default-prop
	props: { path: String },
	async setup(props) {
		if (process.dev) {
			const { data } = await useAsyncData(() =>
				queryContent(props.path!).findOne()
			)
			return () => h(ContentRendererMarkdown, { value: data.value! })
		}
		// eslint-disable-next-line vue/no-setup-props-destructure
		const value = await queryContent(props.path!).findOne()
		return () => h(ContentRendererMarkdown, { value })
	},
})

export default {
	base: 'flex items-center justify-between',
	paddingX: 'px-4 md:px-6 lg:px-8 mx-auto',
	position: 'fixed top-0 left-0 w-full z-50',
	height: 'h-11 max-h-11',
	background: 'bg-nav',
	color: 'text-gray-700 dark:text-gray-300',
	backdrop: 'backdrop-saturate-100 backdrop-blur-[20px]',
	inner: {
		base: 'flex items-center justify-end space-x-4 w-full',
		font: 'font-medium',
		textSize: 'text-sm',
	},
}

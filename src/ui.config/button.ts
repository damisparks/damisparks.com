export default {
	variant: {
		solid: '',
		outlined: '',
		// ghost: '',
	},
	base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 cursor-pointer transition duration-300 ease-in-out',
	disabled: 'disabled:cursor-not-allowed disabled:opacity-50',
	color: {
		primary: {
			solid: 'bg-primary-500 text-white hover:bg-primary-600',
			outlined: 'bg-transparent text-primary-500 ring-1 ring-inset ring-primary-500 focus:ring-1 focus:ring-primary-500 hover:text-primary-600 hover:border-primary-600 font-normal',
		},
		gray: {
			solid: 'bg-zinc-500 text-white hover:bg-zinc-600',
			outlined: 'bg-transparent text-zinc-500 ring-1 ring-inset ring-zinc-500 focus:ring-1 focus:ring-zinc-500 hover:text-zinc-600 hover:border-zinc-600 font-normal',
		},
	},
	rounded: 'rounded-md',
	block: 'w-full flex justify-center items-center',
	inline: 'inline-flex items-center',
	size: {
    sm: 'px-2.5 py-1.5',
    md: 'px-4 py-2',
    lg: 'px-3.5 py-2.5',
  },
}

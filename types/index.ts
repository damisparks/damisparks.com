export interface INavLink {
	name: string
	href: string
}
export interface ISocialsNavigation extends INavLink {
	iconKey: string
}

export interface IAchievement {
	name: string
	url: string
	src: string
	description: string
}

export interface INavLink {
	name: string
	href: string
	id: string
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

export interface ISpotlightClient {
	name: string
	website: string
}
export interface IProjectSpotlightItem {
	description: string
	client: ISpotlightClient
	url: string
	contributions: string[]
	techStack: string[]
}

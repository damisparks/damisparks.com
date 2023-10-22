type IPortforlioItemType = 'project' | 'open-source'

export type INavLink = {
	name: string
	href: string
	id: string
}
export type ISocialsNavigation = {
	iconKey: string
} & INavLink

export type IAchievement = {
	id: string
	name: string
	url: string
	src: string
	description: string
}

export type ISpotlightClient = {
	name: string
	website: string
}
export type IProjectSpotlightItem = {
	description: string
	client: ISpotlightClient
	url: string
	contributions: string[]
	techStack: string[]
}

export type IPortfolioItem = {
	id: string
	name: string
	description: string
	websiteUrl: string
	type: IPortforlioItemType
}

export interface NavItem {
  name: string
  href: string
  iconKey?: string
}

export interface ProjectItem {
  id: string
  name: string
  description: string
  websiteUrl: string
  imageUrl: string
  type: ProjectType
  featured?: boolean
}

export type ProjectType = 'open-source' | 'commercial' | 'personal'

export type NoteTag = 'cloud' | 'typescript' | 'vue' | 'nuxt' | 'personal' | 'books'

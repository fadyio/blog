export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'Fady Nagh',
  DESCRIPTION:
    'Explore DevOps land with me, Insights on cloud, Kubernetes, and automation. Learn AWS, Docker, Terraform & GoLang best practices.',
  EMAIL: 'Fady@Fadyio.com',
  NUM_POSTS_ON_HOMEPAGE: 3,
  POSTS_PER_PAGE: 5,
  SITEURL: 'https://fadyio.com',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'blog' },
  { href: '/pgp-key.txt', label: 'PGP Key'},
  { href: '/about', label: 'about' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/fadyio', label: 'GitHub' },
  { href: 'fady@fadyio.com', label: 'Email' },
  { href: 'http://linkedin.com/in/fadyio', label: 'LinkedIn' },
  { href: '/rss.xml', label: 'RSS' },
]

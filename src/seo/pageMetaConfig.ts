export const SITE_ORIGIN = 'https://www.gutsphere.com'

export interface PageMetaConfig {
  title: string
  description: string
  path: string
}

const DEFAULT_DESCRIPTION =
  'From gut anxiety to gut confidence. Gutsphere is the copilot that helps you make sense of symptoms, act on them, and walk into every appointment prepared.'

export const HOME_META: PageMetaConfig = {
  title: 'Gutsphere — From gut anxiety to gut confidence',
  description: DEFAULT_DESCRIPTION,
  path: '/',
}

export const OG_IMAGE = {
  url: `${SITE_ORIGIN}/images/web-image.png`,
  type: 'image/png',
  width: '2880',
  height: '1620',
  alt: 'Gutsphere — Stop managing your gut in five places.',
} as const

const STATIC_META: Record<string, PageMetaConfig> = {
  '/': HOME_META,
  '/for': {
    title: 'Who Gutsphere is for — digestive health journeys',
    description:
      'Whether you have a diagnosis, are still searching, or care for someone with gut symptoms — see how Gutsphere fits your stage.',
    path: '/for',
  },
  '/about': {
    title: 'About Gutsphere — built from a real GI journey',
    description:
      'Gutsphere was built by someone who lived the confusion. Learn the story behind the digestive-health copilot.',
    path: '/about',
  },
  '/privacy': {
    title: 'Privacy Policy — Gutsphere',
    description:
      'How Gutsphere collects, uses, and protects your personal and health information when you use our services.',
    path: '/privacy',
  },
  '/terms': {
    title: 'Terms and Conditions — Gutsphere',
    description:
      'Terms that govern your use of Gutsphere’s website, apps, and digestive-health services.',
    path: '/terms',
  },
  '/faq': {
    title: 'FAQ — Gutsphere digestive-health copilot',
    description:
      'Is this medical advice? How is data handled? Do I need a diagnosis? Answers to common questions about Gutsphere.',
    path: '/faq',
  },
  '/journey': {
    title: 'Your gut health journey — Gutsphere',
    description:
      'See the stages from flare confusion to clearer care conversations — and where Gutsphere helps at each step.',
    path: '/journey',
  },
  '/compare': {
    title: 'Compare Gutsphere — trackers, AI chat, telehealth, test kits',
    description:
      'Honest side-by-side guides: how a connected gut copilot differs from symptom trackers, AI chat, telehealth, and test kits.',
    path: '/compare',
  },
}

export function resolvePageMeta(pathname: string): PageMetaConfig {
  const exact = STATIC_META[pathname]
  if (exact) return exact

  if (pathname.startsWith('/conditions/')) {
    const slug = pathname.slice('/conditions/'.length)
    const label = slug.replace(/-/g, ' ')
    return {
      title: `${label.toUpperCase().slice(0, 1)}${label.slice(1)} — Gutsphere`,
      description: `How Gutsphere helps with ${label}: tracking, patterns, and clearer conversations with your care team.`,
      path: pathname,
    }
  }

  if (pathname.startsWith('/compare/')) {
    const slug = pathname.slice('/compare/'.length).replace(/-/g, ' ')
    return {
      title: `Gutsphere vs ${slug} — compare`,
      description: `See how Gutsphere compares with ${slug}: what each does well, and when a connected gut copilot fits better.`,
      path: pathname,
    }
  }

  if (pathname.startsWith('/features/')) {
    const slug = pathname.slice('/features/'.length).replace(/-/g, ' ')
    return {
      title: `${slug.charAt(0).toUpperCase()}${slug.slice(1)} — Gutsphere features`,
      description: `Learn how Gutsphere ${slug} support your digestive-health journey — calm, practical, and care-ready.`,
      path: pathname,
    }
  }

  return {
    title: HOME_META.title,
    description: HOME_META.description,
    path: pathname,
  }
}

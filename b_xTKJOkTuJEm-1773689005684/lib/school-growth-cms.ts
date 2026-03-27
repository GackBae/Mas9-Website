export type BlogPostStatus = "draft" | "published"

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt: string
  readTime: string
  views: number
  thumbnail: string
  category: string
  featured: boolean
  status: BlogPostStatus
}

const STORAGE_KEY = "mas9_school_growth_posts"

const DEFAULT_BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "5 Tips for Martial Arts School Growth",
    excerpt:
      "Discover proven strategies to expand your martial arts school and attract more students. In this comprehensive guide, we'll explore the most effective methods for sustainable growth...",
    content:
      "Discover proven strategies to expand your martial arts school and attract more students. Focus on retention, clear onboarding, and measurable marketing campaigns.",
    author: "Admin User",
    publishedAt: "2024-03-20",
    updatedAt: "2024-03-20",
    readTime: "8 min read",
    views: 1250,
    thumbnail: "/api/placeholder/400/250",
    category: "Growth Strategies",
    featured: true,
    status: "published",
  },
  {
    id: "2",
    title: "The Importance of Student Retention",
    excerpt:
      "Learn why keeping existing students is crucial for long-term success in martial arts education. Retention strategies can make or break your school's profitability...",
    content:
      "Retention is the foundation of sustainable growth. Improve communication, track engagement, and build stronger student relationships.",
    author: "Admin User",
    publishedAt: "2024-03-18",
    updatedAt: "2024-03-18",
    readTime: "6 min read",
    views: 890,
    thumbnail: "/api/placeholder/400/250",
    category: "Student Management",
    featured: false,
    status: "published",
  },
  {
    id: "3",
    title: "Digital Marketing for Dojo Owners",
    excerpt:
      "Essential digital marketing strategies every martial arts school owner should know. From social media to local SEO, learn how to attract more students online...",
    content:
      "Build a local content strategy, optimize your Google Business profile, and create lead magnets that convert visitors into trial students.",
    author: "Admin User",
    publishedAt: "2024-03-15",
    updatedAt: "2024-03-15",
    readTime: "10 min read",
    views: 620,
    thumbnail: "/api/placeholder/400/250",
    category: "Marketing",
    featured: false,
    status: "published",
  },
  {
    id: "4",
    title: "Building Community Through Events",
    excerpt:
      "How to create engaging events that strengthen your martial arts school community. Events are powerful tools for student engagement and retention...",
    content:
      "Events build trust and loyalty. Plan recurring family events, belt-test gatherings, and open houses to strengthen your member community.",
    author: "Admin User",
    publishedAt: "2024-03-12",
    updatedAt: "2024-03-12",
    readTime: "7 min read",
    views: 567,
    thumbnail: "/api/placeholder/400/250",
    category: "Community",
    featured: false,
    status: "published",
  },
  {
    id: "5",
    title: "Effective Teaching Methods for Kids",
    excerpt:
      "Best practices for teaching martial arts to children and keeping them engaged. Age-appropriate teaching methods can significantly improve student retention...",
    content:
      "Kids classes require structure, fun, and progression visibility. Use clear milestones and parent communication to improve outcomes.",
    author: "Admin User",
    publishedAt: "2024-03-10",
    updatedAt: "2024-03-10",
    readTime: "9 min read",
    views: 2100,
    thumbnail: "/api/placeholder/400/250",
    category: "Teaching",
    featured: true,
    status: "published",
  },
  {
    id: "6",
    title: "Financial Management for Martial Arts Schools",
    excerpt:
      "Essential financial strategies for running a profitable martial arts business. Learn about pricing, revenue streams, and cost management...",
    content:
      "Track core metrics weekly, optimize pricing tiers, and reduce churn through predictable customer success workflows.",
    author: "Admin User",
    publishedAt: "2024-03-08",
    updatedAt: "2024-03-08",
    readTime: "12 min read",
    views: 430,
    thumbnail: "/api/placeholder/400/250",
    category: "Business",
    featured: false,
    status: "published",
  },
]

const toReadTime = (content: string) => {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
}

const sortLatest = (posts: BlogPost[]) => {
  return [...posts].sort((a, b) => {
    const aDate = new Date(a.publishedAt || a.updatedAt).getTime()
    const bDate = new Date(b.publishedAt || b.updatedAt).getTime()
    return bDate - aDate
  })
}

export const getDefaultBlogPosts = () => DEFAULT_BLOG_POSTS

const canUseStorage = () => typeof window !== "undefined"

export const initializeBlogPostsIfNeeded = () => {
  if (!canUseStorage()) return

  const existing = window.localStorage.getItem(STORAGE_KEY)
  if (!existing) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_BLOG_POSTS))
  }
}

export const getStoredBlogPosts = () => {
  if (!canUseStorage()) return DEFAULT_BLOG_POSTS

  initializeBlogPostsIfNeeded()

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_BLOG_POSTS

    const parsed = JSON.parse(raw) as BlogPost[]
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return DEFAULT_BLOG_POSTS
    }

    return parsed
  } catch {
    return DEFAULT_BLOG_POSTS
  }
}

export const saveBlogPosts = (posts: BlogPost[]) => {
  if (!canUseStorage()) return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
}

export const getAdminBlogPosts = () => sortLatest(getStoredBlogPosts())

export const getPublicBlogPosts = () => {
  return sortLatest(getStoredBlogPosts().filter((post) => post.status === "published"))
}

interface UpsertInput {
  id?: string
  title: string
  excerpt: string
  content: string
  author: string
  thumbnail: string
  category: string
  featured: boolean
  status: BlogPostStatus
}

export const upsertBlogPost = (input: UpsertInput) => {
  const now = new Date()
  const today = now.toISOString().slice(0, 10)
  const posts = getStoredBlogPosts()

  if (input.id) {
    const updated = posts.map((post) => {
      if (post.id !== input.id) return post

      return {
        ...post,
        ...input,
        publishedAt: input.status === "published" ? post.publishedAt || today : post.publishedAt,
        updatedAt: today,
        readTime: toReadTime(input.content),
        views: post.views,
      }
    })

    saveBlogPosts(updated)
    return updated.find((post) => post.id === input.id) ?? null
  }

  const createdPost: BlogPost = {
    id: `${Date.now()}`,
    title: input.title,
    excerpt: input.excerpt,
    content: input.content,
    author: input.author,
    publishedAt: input.status === "published" ? today : "",
    updatedAt: today,
    readTime: toReadTime(input.content),
    views: 0,
    thumbnail: input.thumbnail || "/api/placeholder/400/250",
    category: input.category,
    featured: input.featured,
    status: input.status,
  }

  const next = [createdPost, ...posts]
  saveBlogPosts(next)
  return createdPost
}

export const deleteBlogPost = (id: string) => {
  const next = getStoredBlogPosts().filter((post) => post.id !== id)
  saveBlogPosts(next)
}

export const getBlogPostById = (id: string) => {
  return getStoredBlogPosts().find((post) => post.id === id) ?? null
}

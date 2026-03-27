"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import {
  getBlogPostById,
  getDefaultBlogPosts,
  initializeBlogPostsIfNeeded,
  type BlogPost,
} from "@/lib/school-growth-cms"

export default function SchoolGrowthPostPage() {
  const [post, setPost] = useState<BlogPost | null>(null)

  const postId = useMemo(() => {
    if (typeof window === "undefined") return ""
    return new URLSearchParams(window.location.search).get("id") || ""
  }, [])

  useEffect(() => {
    initializeBlogPostsIfNeeded()

    if (!postId) {
      return
    }

    const found = getBlogPostById(postId)
    if (found) {
      setPost(found)
      return
    }

    const fallback = getDefaultBlogPosts().find((item) => item.id === postId) ?? null
    setPost(fallback)
  }, [postId])

  if (!postId) {
    return (
      <main className="min-h-screen bg-white py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600">Invalid post link.</p>
          <Link href="/school-growth" className="mt-4 inline-flex items-center gap-2 text-[#E11D1D]">
            <ArrowLeft className="h-4 w-4" />
            Back to School Growth
          </Link>
        </div>
      </main>
    )
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-white py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600">Loading post...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffaf7_0%,#ffffff_48%,#fff8f3_100%)] py-16">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/school-growth"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#E11D1D] hover:text-red-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to School Growth
        </Link>

        <article className="rounded-2xl border border-[#E8DCD3] bg-white p-6 shadow-[0_24px_55px_-35px_rgba(120,77,47,0.45)] sm:p-10">
          <span className="inline-flex rounded-full bg-[#FFF2E9] px-3 py-1 text-xs font-semibold text-[#A9503C]">
            {post.category}
          </span>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-[#231913] sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#8A7160]">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.publishedAt || post.updatedAt}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <div className="mt-8 prose max-w-none text-[#3D2F25]">
            {post.content.split("\n").map((line, idx) => (
              <p key={`${post.id}-line-${idx}`} className="mb-4 leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </article>
      </div>
    </main>
  )
}

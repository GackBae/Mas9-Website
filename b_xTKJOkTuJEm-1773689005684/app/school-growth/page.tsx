"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  getDefaultBlogPosts,
  getPublicBlogPosts,
  initializeBlogPostsIfNeeded,
  type BlogPost,
} from "@/lib/school-growth-cms"
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Filter,
  Users,
  MessageCircle,
  BookOpen,
} from "lucide-react"

const categories = [
  "All",
  "Growth Strategies",
  "Student Management",
  "Marketing",
  "Community",
  "Teaching",
  "Business",
]

const communityHighlights = [
  {
    title: "Discussion Threads",
    description: "Share real cases and get practical advice from other school owners.",
    icon: MessageCircle,
  },
  {
    title: "Operator Network",
    description: "Connect with instructors, managers, and founders building schools together.",
    icon: Users,
  },
  {
    title: "Playbook Library",
    description: "Save proven templates, scripts, and lesson ideas your team can reuse.",
    icon: BookOpen,
  },
]

export default function SchoolGrowthPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [posts, setPosts] = useState<BlogPost[]>(getDefaultBlogPosts())

  useEffect(() => {
    initializeBlogPostsIfNeeded()
    setPosts(getPublicBlogPosts())
  }, [])

  const postsPerPage = 6

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const totalPages = Math.ceil(regularPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = regularPosts.slice(startIndex, startIndex + postsPerPage)

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffaf7_0%,#ffffff_48%,#fff8f3_100%)]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-0 h-64 w-64 rounded-full bg-[#E11D1D]/10 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E11D1D]/25 bg-[#E11D1D]/8 px-4 py-2 text-sm font-medium text-[#E11D1D]"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#E11D1D]" />
              School Growth Blog
            </motion.div>

            <h1 className="mb-6 text-6xl font-bold leading-tight text-[#221B16] lg:text-7xl">
              Insights & Strategies for
              <span className="block bg-gradient-to-r from-[#E11D1D] to-red-600 bg-clip-text text-transparent">
                Martial Arts Success
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-[#6F5A4D]">
              Expert tips, proven strategies, and industry insights to help your
              martial arts school thrive in today&apos;s competitive landscape.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 flex flex-col gap-6 rounded-2xl border border-[#E8DCD3] bg-white/85 p-5 shadow-[0_18px_45px_-24px_rgba(146,91,54,0.35)] backdrop-blur-sm lg:flex-row"
        >
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-[#A08C7D]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-[#E8DCD3] bg-[#FFFDFB] py-3 pl-12 pr-4 text-[#2B211A] placeholder-[#A08C7D] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#E11D1D]"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-[#A08C7D]" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category)
                    setCurrentPage(1)
                  }}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-[#E11D1D] text-white"
                      : "border border-[#E8DCD3] bg-[#FFF9F4] text-[#6F5A4D] hover:border-[#E11D1D]/30 hover:text-[#E11D1D]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="mb-8 text-2xl font-bold text-[#221B16]">
              Featured Articles
            </h2>

            <div className="grid gap-8 lg:grid-cols-2">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="group overflow-hidden rounded-2xl border border-[#E8DCD3] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#E11D1D]/40 hover:shadow-[0_24px_60px_-30px_rgba(168,70,46,0.5)]"
                >
                  <div className="relative aspect-video overflow-hidden bg-[linear-gradient(145deg,#fff4ec,#ffe3cf)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(225,29,29,0.22),transparent_55%)]" />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-[#E11D1D] px-3 py-1 text-xs font-medium text-white">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-4 flex items-center gap-4 text-sm text-[#9A7E6B]">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {post.publishedAt}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-[#231913] transition-colors group-hover:text-[#E11D1D]">
                      {post.title}
                    </h3>

                    <p className="mb-6 line-clamp-3 text-[#6F5A4D]">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-[#F4E3D6]" />
                        <span className="text-sm text-[#6F5A4D]">
                          {post.author}
                        </span>
                      </div>

                      <Link
                        href={`/school-growth/post?id=${post.id}`}
                        className="inline-flex items-center gap-2 text-[#E11D1D] transition-colors hover:text-red-400"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mb-16 rounded-2xl border border-[#E8DCD3] bg-[linear-gradient(120deg,#fff6ef_0%,#fffdf9_100%)] p-8"
        >
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C55239]">
                Community Hub
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#231913]">
                Build a stronger school community
              </h2>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-[#E11D1D] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              Connect with MAS9
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {communityHighlights.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#EFDFD4] bg-white p-5"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF2E9] text-[#E11D1D]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-[#2B211A]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6F5A4D]">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="mb-8 text-2xl font-bold text-[#221B16]">Latest Articles</h2>

          {currentPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group overflow-hidden rounded-2xl border border-[#E8DCD3] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#E11D1D]/40 hover:shadow-[0_24px_60px_-30px_rgba(168,70,46,0.5)]"
                >
                  <div className="relative aspect-video overflow-hidden bg-[linear-gradient(160deg,#fff8f1,#ffe9d9)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(225,29,29,0.16),transparent_52%)]" />
                  </div>

                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-4 text-sm text-[#9A7E6B]">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {post.publishedAt}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="mb-3 line-clamp-2 text-lg font-bold text-[#231913] transition-colors group-hover:text-[#E11D1D]">
                      {post.title}
                    </h3>

                    <p className="mb-6 line-clamp-3 text-sm text-[#6F5A4D]">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="rounded bg-[#FFF2E9] px-2 py-1 text-xs text-[#A9503C]">
                        {post.category}
                      </span>

                      <Link
                        href={`/school-growth/post?id=${post.id}`}
                        className="inline-flex items-center gap-1 text-sm text-[#E11D1D] transition-colors hover:text-red-400"
                      >
                        Read
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-[#9A7E6B]">
                No articles found matching your criteria.
              </p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-10 flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`h-10 w-10 rounded-lg text-sm font-medium ${
                    currentPage === index + 1
                      ? "bg-[#E11D1D] text-white"
                      : "border border-[#E8DCD3] bg-[#FFF9F4] text-[#6F5A4D] hover:border-[#E11D1D]/30 hover:text-[#E11D1D]"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
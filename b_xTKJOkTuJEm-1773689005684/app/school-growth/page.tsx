"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Search, Filter } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Martial Arts School Growth",
    excerpt:
      "Discover proven strategies to expand your martial arts school and attract more students. In this comprehensive guide, we'll explore the most effective methods for sustainable growth...",
    content: "Full content would go here...",
    author: "Admin User",
    publishedAt: "2024-03-20",
    readTime: "8 min read",
    thumbnail: "/api/placeholder/400/250",
    category: "Growth Strategies",
    featured: true,
  },
  {
    id: 2,
    title: "The Importance of Student Retention",
    excerpt:
      "Learn why keeping existing students is crucial for long-term success in martial arts education. Retention strategies can make or break your school's profitability...",
    content: "Full content would go here...",
    author: "Admin User",
    publishedAt: "2024-03-18",
    readTime: "6 min read",
    thumbnail: "/api/placeholder/400/250",
    category: "Student Management",
    featured: false,
  },
  {
    id: 3,
    title: "Digital Marketing for Dojo Owners",
    excerpt:
      "Essential digital marketing strategies every martial arts school owner should know. From social media to local SEO, learn how to attract more students online...",
    content: "Full content would go here...",
    author: "Admin User",
    publishedAt: "2024-03-15",
    readTime: "10 min read",
    thumbnail: "/api/placeholder/400/250",
    category: "Marketing",
    featured: false,
  },
  {
    id: 4,
    title: "Building Community Through Events",
    excerpt:
      "How to create engaging events that strengthen your martial arts school community. Events are powerful tools for student engagement and retention...",
    content: "Full content would go here...",
    author: "Admin User",
    publishedAt: "2024-03-12",
    readTime: "7 min read",
    thumbnail: "/api/placeholder/400/250",
    category: "Community",
    featured: false,
  },
  {
    id: 5,
    title: "Effective Teaching Methods for Kids",
    excerpt:
      "Best practices for teaching martial arts to children and keeping them engaged. Age-appropriate teaching methods can significantly improve student retention...",
    content: "Full content would go here...",
    author: "Admin User",
    publishedAt: "2024-03-10",
    readTime: "9 min read",
    thumbnail: "/api/placeholder/400/250",
    category: "Teaching",
    featured: true,
  },
  {
    id: 6,
    title: "Financial Management for Martial Arts Schools",
    excerpt:
      "Essential financial strategies for running a profitable martial arts business. Learn about pricing, revenue streams, and cost management...",
    content: "Full content would go here...",
    author: "Admin User",
    publishedAt: "2024-03-08",
    readTime: "12 min read",
    thumbnail: "/api/placeholder/400/250",
    category: "Business",
    featured: false,
  },
]

const categories = [
  "All",
  "Growth Strategies",
  "Student Management",
  "Marketing",
  "Community",
  "Teaching",
  "Business",
]

export default function SchoolGrowthPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)

  const postsPerPage = 6

  const filteredPosts = blogPosts.filter((post) => {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(239_68_68_/_0.1)_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
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
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E11D1D]/30 bg-[#E11D1D]/10 px-4 py-2 text-sm font-medium text-red-400"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#E11D1D]" />
              School Growth Blog
            </motion.div>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-white lg:text-6xl">
              Insights & Strategies for
              <span className="block bg-gradient-to-r from-[#E11D1D] to-red-600 bg-clip-text text-transparent">
                Martial Arts Success
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-slate-300">
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
          className="mb-12 flex flex-col gap-6 lg:flex-row"
        >
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 py-3 pl-12 pr-4 text-white placeholder-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#E11D1D]"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-slate-400" />
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
                      : "border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700"
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
            <h2 className="mb-8 text-2xl font-bold text-white">
              Featured Articles
            </h2>

            <div className="grid gap-8 lg:grid-cols-2">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 transition-all duration-300 hover:border-[#E11D1D]"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E11D1D]/20 to-transparent" />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-[#E11D1D] px-3 py-1 text-xs font-medium text-white">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-4 flex items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {post.publishedAt}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#E11D1D]">
                      {post.title}
                    </h3>

                    <p className="mb-6 line-clamp-3 text-slate-300">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-slate-700" />
                        <span className="text-sm text-slate-400">
                          {post.author}
                        </span>
                      </div>

                      <Link
                        href={`/school-growth/${post.id}`}
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
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="mb-8 text-2xl font-bold text-white">Latest Articles</h2>

          {currentPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 transition-all duration-300 hover:border-[#E11D1D]"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E11D1D]/10 to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {post.publishedAt}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="mb-3 line-clamp-2 text-lg font-bold text-white transition-colors group-hover:text-[#E11D1D]">
                      {post.title}
                    </h3>

                    <p className="mb-6 line-clamp-3 text-sm text-slate-300">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="rounded bg-slate-700 px-2 py-1 text-xs text-slate-300">
                        {post.category}
                      </span>

                      <Link
                        href={`/school-growth/${post.id}`}
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
              <p className="text-slate-400">
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
                      : "border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700"
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
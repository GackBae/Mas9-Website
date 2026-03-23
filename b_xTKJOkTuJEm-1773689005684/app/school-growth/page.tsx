"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Search,
  Filter,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Martial Arts School Growth",
    excerpt: "Discover proven strategies to expand your martial arts school and attract more students. In this comprehensive guide, we'll explore the most effective methods for sustainable growth...",
    content: "Full content would go here...",
    author: "Admin User",
    publishedAt: "2024-03-20",
    readTime: "8 min read",
    thumbnail: "/api/placeholder/400/250",
    category: "Growth Strategies",
    featured: true
  },
  {
    id: 2,
    title: "The Importance of Student Retention",
    excerpt: "Learn why keeping existing students is crucial for long-term success in martial arts education. Retention strategies can make or break your school's profitability...",
    content: "Full content would go here...",
    author: "Admin User",
    publishedAt: "2024-03-18",
    readTime: "6 min read",
    thumbnail: "/api/placeholder/400/250",
    category: "Student Management",
    featured: false
  },
  {
    id: 3,
    title: "Digital Marketing for Dojo Owners",
    excerpt: "Essential digital marketing strategies every martial arts school owner should know. From social media to local SEO, learn how to attract more students online...",
    content: "Full content would go here...",
    author: "Admin User",
    publishedAt: "2024-03-15",
    readTime: "10 min read",
    thumbnail: "/api/placeholder/400/250",
    category: "Marketing",
    featured: false
  },
  {
    id: 4,
    title: "Building Community Through Events",
    excerpt: "How to create engaging events that strengthen your martial arts school community. Events are powerful tools for student engagement and retention...",
    content: "Full content would go here...",
    author: "Admin User",
    publishedAt: "2024-03-12",
    readTime: "7 min read",
    thumbnail: "/api/placeholder/400/250",
    category: "Community",
    featured: false
  },
  {
    id: 5,
    title: "Effective Teaching Methods for Kids",
    excerpt: "Best practices for teaching martial arts to children and keeping them engaged. Age-appropriate teaching methods can significantly improve student retention...",
    content: "Full content would go here...",
    author: "Admin User",
    publishedAt: "2024-03-10",
    readTime: "9 min read",
    thumbnail: "/api/placeholder/400/250",
    category: "Teaching",
    featured: true
  },
  {
    id: 6,
    title: "Financial Management for Martial Arts Schools",
    excerpt: "Essential financial strategies for running a profitable martial arts business. Learn about pricing, revenue streams, and cost management...",
    content: "Full content would go here...",
    author: "Admin User",
    publishedAt: "2024-03-08",
    readTime: "12 min read",
    thumbnail: "/api/placeholder/400/250",
    category: "Business",
    featured: false
  }
]

const categories = ["All", "Growth Strategies", "Student Management", "Marketing", "Community", "Teaching", "Business"]

export default function SchoolGrowthPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  // Pagination
  const totalPages = Math.ceil(regularPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = regularPosts.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(239_68_68_/_0.1)_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#E11D1D]/10 border border-[#E11D1D]/30 rounded-full text-sm font-medium text-red-400 mb-8"
            >
              <span className="w-2 h-2 bg-[#E11D1D] rounded-full animate-pulse"></span>
              School Growth Blog
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Insights & Strategies for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E11D1D] to-red-600">
                Martial Arts Success
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Expert tips, proven strategies, and industry insights to help your martial arts school thrive in today's competitive landscape.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col lg:flex-row gap-6 mb-12"
        >
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E11D1D] focus:border-transparent"
              />
            </div>
          </div>
       { val: "24/7", label: "Support" },
       { val: "100%", label: "Satisfaction" },
      ].map((stat, i) => (
       <div key={i}>
        <div className="text-3xl md:text-4xl font-extrabold mb-1">{stat.val}</div>
        <div className="text-white/50 text-sm uppercase tracking-widest">{stat.label}</div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Community CTA */}
   <section className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-8">Join the Martial Arts School Growth Community</h2>
      <Button size="lg" className="bg-[#E11D1D] hover:bg-[#C11818] text-white px-10 h-14 text-lg font-bold rounded-2xl">
       Get Instant Access
      </Button>
    </div>
   </section>
  </div>
 )
}

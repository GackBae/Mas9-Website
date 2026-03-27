"use client"

import React, { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { AuthGuard } from "@/components/auth-guard"
import {
  deleteBlogPost,
  getAdminBlogPosts,
  initializeBlogPostsIfNeeded,
  type BlogPost,
} from "@/lib/school-growth-cms"
import { 
  Plus, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
} from "lucide-react"

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-slate-900">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 px-6 py-8 border-b border-slate-800">
            <div className="w-10 h-10 bg-gradient-to-br from-[#E11D1D] to-red-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">M9</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">MAS9 Admin</h1>
              <p className="text-slate-400 text-xs">Management Portal</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
            >
              <span className="w-5 h-5">🏠</span>
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link
              href="/admin/blog"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#E11D1D] text-white"
            >
              <span className="w-5 h-5">📝</span>
              <span className="font-medium">Blog Posts</span>
            </Link>
          </nav>

          {/* User Section */}
          <div className="px-4 py-6 border-t border-slate-800">
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                <span className="text-slate-300 text-sm font-medium">A</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">Admin User</p>
                <p className="text-slate-400 text-xs">admin@mas9.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        {/* Page Content */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

export default function BlogManagementPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    initializeBlogPostsIfNeeded()
    setPosts(getAdminBlogPosts())
  }, [])

  const filteredPosts = useMemo(() => posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || post.status === filterStatus
    return matchesSearch && matchesFilter
  }), [posts, searchTerm, filterStatus])

  const handleDelete = (id: string) => {
    deleteBlogPost(id)
    setPosts(getAdminBlogPosts())
  }

  return (
    <AuthGuard>
      <AdminLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Blog Posts</h1>
              <p className="text-slate-600">Manage your School Growth blog content</p>
            </div>
            
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#E11D1D] text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              New Post
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{posts.length}</h3>
              <p className="text-sm text-slate-600">Total Posts</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                {posts.filter(p => p.status === 'published').length}
              </h3>
              <p className="text-sm text-slate-600">Published</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                {posts.filter(p => p.status === 'draft').length}
              </h3>
              <p className="text-sm text-slate-600">Drafts</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-1">
                {posts.filter((p) => p.status === "published").length.toLocaleString()}
              </h3>
              <p className="text-sm text-slate-600">Published Posts</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-500" />
              <span className="text-sm text-slate-600">Filter:</span>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setFilterStatus("all")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  filterStatus === "all"
                    ? "bg-[#E11D1D] text-white"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                All Posts
              </button>
              <button
                onClick={() => setFilterStatus("published")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  filterStatus === "published"
                    ? "bg-[#E11D1D] text-white"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                Published
              </button>
              <button
                onClick={() => setFilterStatus("draft")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  filterStatus === "draft"
                    ? "bg-[#E11D1D] text-white"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                Drafts
              </button>
            </div>
          </div>

          {/* Posts Table */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Post
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Author
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Published
                    </th>
                    <th className="text-right px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredPosts.map((post, index) => (
                    <motion.tr
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="hover:bg-slate-50"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div className="w-16 h-12 bg-slate-200 rounded-lg flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium text-slate-900 truncate">
                              {post.title}
                            </h3>
                            <p className="text-sm text-slate-500 line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                          <span className="text-sm text-slate-600">{post.author}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          post.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-slate-600">{post.views.toLocaleString()}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 text-sm text-slate-600">
                          <Calendar className="w-3 h-3" />
                          {post.publishedAt || "Not published"}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <Link
                            href={`/admin/blog/new?edit=${post.id}`}
                            className="p-1 text-slate-400 hover:text-slate-600 transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">No posts found matching your criteria.</p>
            </div>
          )}
        </motion.div>
      </AdminLayout>
    </AuthGuard>
  )
}

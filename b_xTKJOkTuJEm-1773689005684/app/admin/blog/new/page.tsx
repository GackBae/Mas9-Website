"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { AuthGuard } from "@/components/auth-guard"
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Upload, 
  Image as ImageIcon,
  Bold,
  Italic,
  Link as LinkIcon,
  List,
  Quote,
  Code,
  Heading1,
  Heading2
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

export default function NewBlogPostPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    status: "draft",
    thumbnail: null as File | null,
    thumbnailUrl: ""
  })
  const [isSaving, setIsSaving] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        thumbnail: file,
        thumbnailUrl: URL.createObjectURL(file)
      }))
    }
  }

  const handleSave = async (status: string) => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log("Saving post:", { ...formData, status })
    setIsSaving(false)
    
    if (status === "published") {
      router.push("/admin/blog")
    } else {
      // Show success message for draft
      alert("Draft saved successfully!")
    }
  }

  const insertFormatting = (format: string) => {
    const textarea = document.getElementById("content") as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = formData.content.substring(start, end)
    
    let formattedText = ""
    switch (format) {
      case "bold":
        formattedText = `**${selectedText}**`
        break
      case "italic":
        formattedText = `*${selectedText}*`
        break
      case "heading1":
        formattedText = `# ${selectedText}`
        break
      case "heading2":
        formattedText = `## ${selectedText}`
        break
      case "link":
        formattedText = `[${selectedText}](url)`
        break
      case "list":
        formattedText = `- ${selectedText}`
        break
      case "quote":
        formattedText = `> ${selectedText}`
        break
      case "code":
        formattedText = `\`${selectedText}\``
        break
      default:
        formattedText = selectedText
    }

    const newContent = formData.content.substring(0, start) + formattedText + formData.content.substring(end)
    setFormData(prev => ({ ...prev, content: newContent }))
    
    // Restore cursor position
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + formattedText.length, start + formattedText.length)
    }, 0)
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
            <div className="flex items-center gap-4">
              <Link
                href="/admin/blog"
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Create New Post</h1>
                <p className="text-slate-600">Write and publish your School Growth blog post</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleSave("draft")}
                disabled={isSaving}
                className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors disabled:opacity-50"
              >
                {isSaving ? "Saving..." : "Save Draft"}
              </button>
              <button
                onClick={() => handleSave("published")}
                disabled={isSaving}
                className="px-4 py-2 bg-[#E11D1D] text-white rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {isSaving ? "Publishing..." : "Publish"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Post Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="Enter your post title..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E11D1D] focus:border-transparent"
                />
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Excerpt
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange("excerpt", e.target.value)}
                  placeholder="Brief description of your post..."
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E11D1D] focus:border-transparent resize-none"
                />
              </div>

              {/* Content Editor */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Content
                </label>
                
                {/* Formatting Toolbar */}
                <div className="border border-slate-200 border-b-0 rounded-t-lg bg-slate-50 p-2 flex items-center gap-1">
                  <button
                    onClick={() => insertFormatting("bold")}
                    className="p-2 text-slate-600 hover:bg-slate-200 rounded transition-colors"
                    title="Bold"
                  >
                    <Bold className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => insertFormatting("italic")}
                    className="p-2 text-slate-600 hover:bg-slate-200 rounded transition-colors"
                    title="Italic"
                  >
                    <Italic className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => insertFormatting("heading1")}
                    className="p-2 text-slate-600 hover:bg-slate-200 rounded transition-colors"
                    title="Heading 1"
                  >
                    <Heading1 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => insertFormatting("heading2")}
                    className="p-2 text-slate-600 hover:bg-slate-200 rounded transition-colors"
                    title="Heading 2"
                  >
                    <Heading2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => insertFormatting("link")}
                    className="p-2 text-slate-600 hover:bg-slate-200 rounded transition-colors"
                    title="Link"
                  >
                    <LinkIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => insertFormatting("list")}
                    className="p-2 text-slate-600 hover:bg-slate-200 rounded transition-colors"
                    title="List"
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => insertFormatting("quote")}
                    className="p-2 text-slate-600 hover:bg-slate-200 rounded transition-colors"
                    title="Quote"
                  >
                    <Quote className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => insertFormatting("code")}
                    className="p-2 text-slate-600 hover:bg-slate-200 rounded transition-colors"
                    title="Code"
                  >
                    <Code className="w-4 h-4" />
                  </button>
                </div>
                
                <textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => handleInputChange("content", e.target.value)}
                  placeholder="Start writing your post content..."
                  rows={20}
                  className="w-full px-4 py-3 border border-slate-200 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-[#E11D1D] focus:border-transparent resize-none font-mono text-sm"
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Thumbnail Upload */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Thumbnail Image</h3>
                
                <div className="space-y-4">
                  {formData.thumbnailUrl ? (
                    <div className="relative">
                      <img
                        src={formData.thumbnailUrl}
                        alt="Thumbnail preview"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => setFormData(prev => ({ ...prev, thumbnail: null, thumbnailUrl: "" }))}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <label className="block">
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-slate-400 transition-colors cursor-pointer">
                        <ImageIcon className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-sm text-slate-600">Click to upload thumbnail</p>
                        <p className="text-xs text-slate-500 mt-1">PNG, JPG up to 10MB</p>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Publish Settings */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Publish Settings</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Status
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => handleInputChange("status", e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E11D1D] focus:border-transparent"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Author
                    </label>
                    <input
                      type="text"
                      value="Admin User"
                      disabled
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Publish Date
                    </label>
                    <input
                      type="text"
                      value={new Date().toLocaleDateString()}
                      disabled
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg bg-slate-50 text-slate-500"
                    />
                  </div>
                </div>
              </div>

              {/* Preview Button */}
              <button className="w-full px-4 py-2 border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                Preview Post
              </button>
            </div>
          </div>
        </motion.div>
      </AdminLayout>
    </AuthGuard>
  )
}

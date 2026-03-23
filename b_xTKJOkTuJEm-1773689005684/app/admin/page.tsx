"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AuthGuard } from "@/components/auth-guard"
import { 
  FileText, 
  Settings, 
  BarChart3, 
  Users, 
  Home,
  Plus,
  Search,
  Bell,
  LogOut
} from "lucide-react"

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Blog Posts", href: "/admin/blog", icon: FileText },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]

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
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#E11D1D] text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}
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
              <button className="text-slate-400 hover:text-white transition-colors">
                <LogOut className="w-4 h-4" />
              </button>
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

export default function AdminPage() {
  return (
    <AuthGuard>
      <AdminLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, Admin</h1>
            <p className="text-slate-600">Here's what's happening with your MAS9 platform today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl border border-slate-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm text-green-600 font-medium">+12%</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">24</h3>
              <p className="text-sm text-slate-600">Total Blog Posts</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl border border-slate-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm text-green-600 font-medium">+8%</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">1,429</h3>
              <p className="text-sm text-slate-600">Active Users</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl border border-slate-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm text-green-600 font-medium">+24%</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">8,542</h3>
              <p className="text-sm text-slate-600">Page Views</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl border border-slate-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Bell className="w-6 h-6 text-red-600" />
                </div>
                <span className="text-sm text-slate-600 font-medium">New</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">3</h3>
              <p className="text-sm text-slate-600">Notifications</p>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl border border-slate-200 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/admin/blog/new"
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Plus className="w-5 h-5 text-[#E11D1D]" />
                  <span className="font-medium text-slate-900">Create New Blog Post</span>
                </Link>
                <button className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors w-full text-left">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-slate-900">View Analytics</span>
                </button>
                <button className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors w-full text-left">
                  <Settings className="w-5 h-5 text-slate-600" />
                  <span className="font-medium text-slate-900">Manage Settings</span>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl border border-slate-200 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">New blog post published</p>
                    <p className="text-xs text-slate-500">"5 Tips for Martial Arts School Growth" • 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">New user registration</p>
                    <p className="text-xs text-slate-500">John Doe joined • 5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">Content updated</p>
                    <p className="text-xs text-slate-500">Homepage banner modified • 1 day ago</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AdminLayout>
    </AuthGuard>
  )
}

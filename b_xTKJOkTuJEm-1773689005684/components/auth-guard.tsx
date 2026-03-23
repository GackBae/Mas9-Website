"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Shield, Lock } from "lucide-react"

interface AuthGuardProps {
  children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem("adminAuth")
    
    if (authStatus === "true") {
      setIsAuthenticated(true)
    } else {
      // Redirect to login if not authenticated
      router.push("/admin/login")
    }
    
    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(239_68_68_/_0.1)_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#E11D1D] to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Verifying access...</h2>
          <div className="flex items-center justify-center gap-2">
            <Lock className="w-4 h-4 text-slate-400" />
            <p className="text-slate-400">Checking authentication</p>
          </div>
        </motion.div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect to login
  }

  return <>{children}</>
}

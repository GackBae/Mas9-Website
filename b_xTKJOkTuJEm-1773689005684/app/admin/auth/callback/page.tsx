"use client"

import React, { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Shield, CheckCircle, AlertCircle } from "lucide-react"

export default function AuthCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code')
      const error = searchParams.get('error')

      if (error) {
        setStatus('error')
        setMessage('Authentication failed. Please try again.')
        setTimeout(() => {
          router.push('/admin/login')
        }, 3000)
        return
      }

      if (!code) {
        setStatus('error')
        setMessage('No authorization code received.')
        setTimeout(() => {
          router.push('/admin/login')
        }, 3000)
        return
      }

      try {
        // Exchange authorization code for tokens
        const response = await fetch('/api/auth/google/callback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        })

        if (response.ok) {
          const data = await response.json()
          
          // Store authentication data
          localStorage.setItem("adminAuth", "true")
          localStorage.setItem("adminEmail", data.email)
          localStorage.setItem("adminToken", data.token)
          localStorage.setItem("adminName", data.name)
          
          setStatus('success')
          setMessage('Successfully authenticated with Google!')
          
          // Redirect to admin dashboard
          setTimeout(() => {
            router.push('/admin')
          }, 2000)
        } else {
          setStatus('error')
          setMessage('Failed to authenticate with Google.')
          setTimeout(() => {
            router.push('/admin/login')
          }, 3000)
        }
      } catch (error) {
        setStatus('error')
        setMessage('An error occurred during authentication.')
        setTimeout(() => {
          router.push('/admin/login')
        }, 3000)
      }
    }

    handleCallback()
  }, [searchParams, router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(239_68_68_/_0.1)_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative text-center"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-[#E11D1D] to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
          {status === 'loading' && (
            <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          )}
          {status === 'success' && (
            <CheckCircle className="w-10 h-10 text-white" />
          )}
          {status === 'error' && (
            <AlertCircle className="w-10 h-10 text-white" />
          )}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">
          {status === 'loading' && 'Authenticating...'}
          {status === 'success' && 'Authentication Successful!'}
          {status === 'error' && 'Authentication Failed'}
        </h2>

        <p className="text-slate-300 mb-8">
          {status === 'loading' && 'Please wait while we verify your credentials...'}
          {status === 'success' && message}
          {status === 'error' && message}
        </p>

        {status === 'loading' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2"
          >
            <Shield className="w-4 h-4 text-slate-400" />
            <p className="text-slate-400 text-sm">Securing your session...</p>
          </motion.div>
        )}

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-green-400 text-sm"
          >
            Redirecting to admin dashboard...
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-red-400 text-sm"
          >
            Redirecting back to login...
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

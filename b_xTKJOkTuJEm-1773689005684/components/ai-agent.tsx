"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, Sparkles, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AiAgent() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Welcome to MAS9 Support. I'm your AI Agent. How can I help you dominate your school management today?" }
  ])
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const newMessages = [...messages, { role: "user", content: input }]
    setMessages(newMessages)
    setInput("")

    // Simulate agent response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "I'm processing your request using the MAS9 V2.2 Protocol. Our elite squad will ensure your school's DNA is optimized. Is there anything else you'd like to know about our Growth Engines?" 
      }])
    }, 1000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="mb-4 w-[380px] sm:w-[420px] max-w-[90vw]"
          >
            <Card className="border-slate-200 shadow-2xl overflow-hidden rounded-3xl bg-white/95 backdrop-blur-xl">
              <CardHeader className="bg-black text-white p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-v-grid opacity-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E11D1D]/20 blur-[60px] pointer-events-none" />
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-[#E11D1D] flex items-center justify-center shadow-lg shadow-red-500/20">
                      <Bot className="size-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-black uppercase tracking-tight">MAS9 AGENT</CardTitle>
                      <div className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Protocol 01 Active</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)}
                    className="text-white/70 hover:text-white hover:bg-white/10 rounded-full"
                  >
                    <X className="size-5" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <ScrollArea className="h-[400px] p-6" ref={scrollRef}>
                  <div className="space-y-6">
                    {messages.map((msg, i) => (
                      <motion.div
                        initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={i}
                        className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                      >
                        <Avatar className={`size-8 border ${msg.role === 'user' ? 'border-slate-200' : 'border-[#E11D1D]/20'}`}>
                          {msg.role === 'assistant' ? (
                            <AvatarFallback className="bg-red-50 text-[#E11D1D]">
                              <Sparkles className="size-4" />
                            </AvatarFallback>
                          ) : (
                            <AvatarFallback className="bg-slate-100 text-slate-600">
                              <User className="size-4" />
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div className={`flex flex-col gap-1.5 max-w-[80%]`}>
                          <div className={`p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                            msg.role === 'user' 
                              ? 'bg-black text-white rounded-tr-none' 
                              : 'bg-slate-50 text-slate-800 rounded-tl-none border border-slate-100'
                          }`}>
                            {msg.content}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>

              <CardFooter className="p-4 bg-white border-t border-slate-100">
                <div className="flex w-full items-center gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-1 rounded-full bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-[#E11D1D] h-12 px-6"
                  />
                  <Button 
                    size="icon" 
                    onClick={handleSend}
                    className="bg-[#E11D1D] hover:bg-[#C11818] text-white rounded-full size-12 shadow-lg shadow-red-500/20 shrink-0"
                  >
                    <ArrowRight className="size-5" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`size-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group ${
          isOpen ? 'bg-black rotate-90' : 'bg-[#E11D1D]'
        }`}
      >
        {isOpen ? (
          <X className="size-8 text-white transition-transform" />
        ) : (
          <div className="relative">
            <MessageSquare className="size-8 text-white group-hover:scale-110 transition-transform" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-1 -right-1 size-4 bg-white rounded-full flex items-center justify-center border-2 border-[#E11D1D]"
            >
              <div className="size-1.5 rounded-full bg-[#E11D1D]" />
            </motion.div>
          </div>
        )}
      </motion.button>
    </div>
  )
}

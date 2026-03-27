"use client"

import { Button } from "@/components/ui/button"
import { Settings, Globe, Megaphone, ArrowRight, CheckCircle2, Zap, MessageSquare, Bot, User, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const services = [
 {
  icon: Settings,
  title: "Core Infrastructure",
  description: "The foundational Protocol_01 for elite martial arts schools. A unified OS that eliminates operational friction.",
  features: ["Unified Admin Hub", "Automated Testing Sync", "Real-time Attendance", "Staff Productivity suite"],
  className: "md:col-span-2 bg-white",
  iconBg: "bg-red-50",
  iconColor: "text-[#E11D1D]",
  image: "/dojang.png",
  id: "INFRA"
 },
 {
  icon: Globe,
  title: "Digital Presence",
  description: "Protocol_02: High-performance school websites engineered for #1 rankings and maximum student conversion.",
  features: ["V2.2 Custom Design", "SEO Architecture", "Lead Capture Engine", "Integrated Chatbot"],
  className: "md:col-span-1 bg-black text-white",
  iconBg: "bg-white/10",
  iconColor: "text-white",
  id: "WEB"
 },
 {
  icon: Megaphone,
  title: "Growth Protocols",
  description: "Advanced marketing architectures (Protocol_03) that automate lead generation and trial student acquisition.",
  features: ["Precision Ads", "Behavioral Automation", "Nurture Sequences", "Enrollment Funnels"],
  className: "md:col-span-1 bg-white",
  iconBg: "bg-red-50",
  iconColor: "text-[#E11D1D]",
  image: "/action.png",
  id: "GROWTH"
 },
 {
  icon: Zap,
  title: "Migration & Scaling",
  description: "Protocol_04: Seamless data transition into the MAS9 ecosystem. Shift your dynasty to our V2.2 core with zero downtime.",
  features: ["White-glove Migration", "Elite Staff Training", "24/7 Priority Support", "Architecture Setup"],
  className: "md:col-span-2 bg-slate-50",
  iconBg: "bg-black/5",
  iconColor: "text-black",
  id: "SCALE"
 },
]

const ChatMessage = ({ message, isBot, delay, isTypingEffect = false }: { message: string, isBot: boolean, delay: number, isTypingEffect?: boolean }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [displayedMessage, setDisplayedMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (isVisible && isBot && isTypingEffect) {
      setIsTyping(true)
      setDisplayedMessage('')
      
      let currentIndex = 0
      const typingSpeed = 30 // milliseconds per character
      
      const typeMessage = () => {
        if (currentIndex < message.length) {
          setDisplayedMessage(message.slice(0, currentIndex + 1))
          currentIndex++
          setTimeout(typeMessage, typingSpeed)
        } else {
          setIsTyping(false)
        }
      }
      
      // Start typing after a short delay
      setTimeout(typeMessage, 500)
    } else if (isVisible && !isTypingEffect) {
      setDisplayedMessage(message)
    }
  }, [isVisible, isBot, isTypingEffect, message])

  const currentMessage = isBot && isTypingEffect ? displayedMessage : message

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.2 }} // Reduced from 0.5s to 0.2s
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div className={`flex items-end gap-2 max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`size-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          isBot ? 'bg-[#E11D1D] text-white' : 'bg-gray-200 text-gray-600'
        }`}>
          {isBot ? <Bot className="size-4" /> : <User className="size-4" />}
        </div>
        <div className={`rounded-2xl px-4 py-3 ${
          isBot 
            ? 'bg-gray-100 text-gray-900 rounded-tl-none' 
            : 'bg-[#E11D1D] text-white rounded-tr-none'
        }`}>
          <p className="text-sm leading-relaxed">
            {currentMessage}
            {isBot && isTyping && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-gray-900 ml-1"
              />
            )}
          </p>
          {currentMessage === message && (
            <div className={`text-xs mt-1 ${isBot ? 'text-gray-500' : 'text-red-200'}`}>
              {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const ChatDemo = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [inputMessage, setInputMessage] = useState('')
  const [isInputTyping, setIsInputTyping] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  const chatSteps = [
    { type: 'user', message: "Is there a class for 5-year-old kids?", delay: 0 },
    { type: 'bot', message: "Yes! Our program is perfect for 5-year-olds. We offer specialized classes that focus on coordination, discipline, and fun!", delay: 2000 },
    { type: 'user', message: "What times are available?", delay: 4000 },
    { type: 'bot', message: "We have classes on Monday/Wednesday at 4:00 PM and Tuesday/Thursday at 5:00 PM. Would you like to schedule a free trial?", delay: 6000 },
    { type: 'user', message: "Yes, I'd like to try Monday at 4:00 PM", delay: 8000 },
    { type: 'bot', message: "Perfect! I've booked you for a free trial on Monday at 4:00 PM. Please arrive 10 minutes early. We'll provide a uniform for the trial. See you then! 🥋", delay: 10000 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % (chatSteps.length + 2))
    }, 12000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentStep < chatSteps.length) {
      const step = chatSteps[currentStep]
      if (step.type === 'bot') {
        // Start AI response exactly 0.5 seconds after user message
        setTimeout(() => {
          setIsTyping(true)
          // Adjust typing duration based on message length
          const typingDuration = step.message.length > 50 ? 800 : 200 // Longer for longer messages
          setTimeout(() => setIsTyping(false), typingDuration)
        }, 500) // Exactly 0.5 seconds delay
      } else if (step.type === 'user') {
        // Reset states for new user message
        setMessageSent(false)
        setIsSending(false)
        
        // Type user message in input field
        setIsInputTyping(true)
        setInputMessage('')
        
        let currentIndex = 0
        const typingSpeed = 30 // Fast typing
        
        const typeInput = () => {
          if (currentIndex < step.message.length) {
            setInputMessage(step.message.slice(0, currentIndex + 1))
            currentIndex++
            setTimeout(typeInput, typingSpeed)
          } else {
            setIsInputTyping(false)
            // Start send animation
            setIsSending(true)
            
            // Mark message as sent after animation completes
            setTimeout(() => {
              setMessageSent(true)
              setInputMessage('')
              setIsSending(false)
            }, 400) // Send animation duration
          }
        }
        
        setTimeout(typeInput, 100) // Start typing almost immediately
      }
    }
  }, [currentStep, chatSteps.length])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-6 h-[500px] flex flex-col"
    >
      {/* Chat Header */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-gradient-to-br from-[#E11D1D] to-red-600 flex items-center justify-center text-white">
            <MessageSquare className="size-5" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Tiger Claw Taekwondo</h4>
            <p className="text-xs text-green-500 flex items-center gap-1">
              <span className="size-2 bg-green-500 rounded-full inline-block" />
              Online - Instant replies
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs text-gray-500">Live Chat Demo</div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="size-2 bg-green-500 rounded-full"
          />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-grow overflow-y-auto mb-4">
        <div className="space-y-2">
          {chatSteps.slice(0, currentStep + 1).map((step, index) => {
            // Only show user message if it has been sent
            if (step.type === 'user' && index === currentStep && !messageSent) {
              return null
            }
            
            return (
              <ChatMessage
                key={index}
                message={step.message}
                isBot={step.type === 'bot'}
                delay={0}
                isTypingEffect={false}
              />
            )
          })}
          
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex justify-start mb-4"
              >
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-full bg-[#E11D1D] text-white flex items-center justify-center">
                    <Bot className="size-4" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-3">
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                        className="size-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                        className="size-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                        className="size-2 bg-gray-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Chat Input */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputMessage}
            placeholder="Type your message..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#E11D1D] transition-colors"
            readOnly
          />
          <motion.button 
            className={`size-8 rounded-full flex items-center justify-center transition-colors ${
              isSending 
                ? 'bg-green-500 text-white' 
                : 'bg-[#E11D1D] text-white hover:bg-red-600'
            }`}
            whileHover={{ scale: isSending ? 1 : 1.1 }}
            whileTap={{ scale: isSending ? 0.9 : 0.95 }}
            animate={isSending ? {
              scale: [1, 0.8, 1.2, 1],
              rotate: [0, 0, 360, 360]
            } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={isSending ? {
                x: [0, 0, -20, -100],
                opacity: [1, 1, 0.8, 0]
              } : {}}
              transition={{ duration: 0.6 }}
            >
              {isSending ? (
                <div className="size-4 rounded-full bg-white" />
              ) : (
                <Send className="size-4" />
              )}
            </motion.div>
          </motion.button>
        </div>
        <div className="text-xs text-gray-500 mt-2 text-center">
          This is a demo - actual responses may vary based on availability
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
 return (
  <section id="services" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
   {/* Background Elements */}
   <div className="absolute inset-0" style={{
     backgroundImage: `radial-gradient(circle at 20px 20px, rgba(225,29,29,0.02) 2px, transparent 0)`,
     backgroundSize: '40px 40px'
   }} />
   
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header */}
    <motion.div 
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     className="text-center mb-20"
    >
     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E11D1D]/10 text-[#E11D1D] text-sm font-bold mb-6 tracking-widest uppercase">
      <Zap className="size-4" />
      PROTOCOLS
     </div>
     <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
      Four Protocols. <span className="text-gradient-red">Complete Dominance.</span>
     </h2>
     <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
      The MAS9 ecosystem operates on four core protocols. Each engineered for maximum performance and seamless integration.
     </p>
    </motion.div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
     {services.map((service, index) => (
      <motion.div
       key={service.id}
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ delay: index * 0.1, duration: 0.8 }}
       className={`${service.className} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
      >
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%), linear-gradient(-45deg, rgba(0,0,0,0.05) 25%, transparent 25%)`,
          backgroundSize: '20px 20px'
        }} />
       </div>

       <div className="relative z-10">
        {/* Icon */}
        <motion.div 
         className={`size-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}
         whileHover={{ rotate: [0, -5, 5, 0] }}
         transition={{ duration: 0.3 }}
        >
         <service.icon className={`size-8 ${service.iconColor}`} />
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
        
        {/* Features */}
        <ul className="space-y-3 mb-8">
         {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3">
           <CheckCircle2 className="size-5 text-[#E11D1D] flex-shrink-0" />
           <span className="text-sm">{feature}</span>
          </li>
         ))}
        </ul>
       </div>

       {/* Image */}
       {service.image && (
        <div className="absolute -bottom-4 -right-4 w-1/3 h-1/3 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-500">
         <Image 
          src={service.image} 
          alt={service.title}
          fill
          className="object-cover rounded-2xl"
         />
        </div>
       )}
      </motion.div>
     ))}
    </div>

    {/* Chat Demo Section */}
    <motion.div
     initial={{ opacity: 0, y: 30 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ delay: 0.4 }}
     className="max-w-2xl mx-auto"
    >
     <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Live Chat Assistant</h3>
      <p className="text-gray-600">Experience our AI-powered chatbot that handles inquiries 24/7</p>
     </div>
     <ChatDemo />
    </motion.div>
   </div>
  </section>
 )
}

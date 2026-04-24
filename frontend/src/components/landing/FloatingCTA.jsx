import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, MessageSquare, ArrowRight } from 'lucide-react'

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          {/* Main Floating Button */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex bg-background border border-border shadow-2xl rounded-full px-6 py-3 items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-zinc-100 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Expert" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider leading-none">Ready to help</p>
                <p className="text-xs font-semibold">Talk to an advisor</p>
              </div>
            </motion.div>

            <Button
              size="lg"
              className="rounded-full shadow-2xl h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold flex items-center gap-2 group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Expert Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Quick Actions (Optional smaller buttons) */}
          <div className="flex justify-end gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center shadow-xl border border-zinc-800"
            >
              <Phone className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center shadow-xl border border-zinc-800"
            >
              <MessageSquare className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingCTA

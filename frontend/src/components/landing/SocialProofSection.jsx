import React from 'react'
import { motion } from 'framer-motion'
import { Star, ShieldCheck, Award, ThumbsUp, History } from 'lucide-react'

export default function SocialProofSection() {
  const testimonials = [
    {
      name: "Kirsty Streeter",
      role: "Operations Coordinator",
      company: "Industrial Services",
      text: "Quality product, excellent service, exceptionally quick turn around on branded printing.",
      image: "https://i.pravatar.cc/150?img=32"
    },
    {
      name: "Oliver Smith",
      role: "Team Lead",
      company: "Logistics Pro",
      text: "We got some custom-printed workwear for our team, and the quality turned out to be excellent. The turnaround time was also impressive.",
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Mags",
      role: "Safety Supervisor",
      company: "BuildCorp",
      text: "Very helpful and patient sorting my custom design on hi-vis. Very prompt delivery and very pleased with result.",
      image: "https://i.pravatar.cc/150?img=44"
    }
  ]

  const stats = [
    { label: "Experience", value: "35+ Yrs", icon: History },
    { label: "Compliance", value: "EN ISO", icon: ShieldCheck },
    { label: "Trust", value: "NHS Partner", icon: Award },
    { label: "Rating", value: "4.9/5", icon: Star },
  ]

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.45, 0.32, 0.9] }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-all duration-500 shadow-sm"
              >
                <stat.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </motion.div>
              <div className="text-4xl font-black mb-2 tracking-tighter text-foreground group-hover:text-primary transition-colors">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-bold uppercase tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Global Trust</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-foreground tracking-tight">Trusted by Industry Leaders</h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of businesses that rely on SafetyPlus for their workplace safety and compliance needs.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.21, 0.45, 0.32, 0.9] }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="bg-white border border-zinc-100 p-10 rounded-[2.5rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-500 relative group"
            >
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-primary text-primary group-hover:scale-125 transition-transform" />
                ))}
              </div>
              <p className="text-xl font-medium italic mb-10 leading-relaxed text-foreground">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <motion.img 
                  whileHover={{ scale: 1.2 }}
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-2xl object-cover shadow-md" 
                />
                <div>
                  <div className="font-bold text-lg">{t.name}</div>
                  <div className="text-sm text-muted-foreground font-medium">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Cloud (Simplified) */}
        <div className="mt-24 border-t border-border pt-16">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale transition-all hover:grayscale-0">
             {/* Mock Logos */}
             {['TechSafe', 'BuildPro', 'SafePath', 'GuardLine', 'SecureCorp'].map(logo => (
               <div key={logo} className="text-2xl font-black italic tracking-tighter text-zinc-400">{logo}</div>
             ))}
          </div>
        </div>
      </div>
    </section>
  )
}


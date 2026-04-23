import React from 'react'
import { motion } from 'framer-motion'
import { LayoutGrid, Ruler, FileCheck, GraduationCap } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const SolutionsSection = () => {
  const solutions = [
    { 
      icon: FileCheck, 
      title: "Safety Audits", 
      desc: "Comprehensive 360° safety audits to identify and mitigate risks before accidents happen." 
    },
    { 
      icon: Ruler, 
      title: "Custom Protection", 
      desc: "Bespoke safety guards and physical barriers engineered specifically for your machinery." 
    },
    { 
      icon: GraduationCap, 
      title: "Training Programs", 
      desc: "Certified training modules for workers to ensure a 'Safety First' culture across levels." 
    },
    { 
      icon: LayoutGrid, 
      title: "Dashboard Tracking", 
      desc: "Real-time safety compliance monitoring via our integrated cloud dashboard." 
    }
  ]

  return (
    <section className="py-24" id="solutions">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-primary">Integrated Safety Ecosystem</h2>
          <p className="text-xl text-muted-foreground">More than just equipment—we provide a complete safety infrastructure for your enterprise.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-transparent hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 shrink-0 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection

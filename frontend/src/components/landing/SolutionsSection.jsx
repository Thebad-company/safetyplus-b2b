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
      title: "Certify & Equip", 
      desc: "Certified training modules included with every B2B order to ensure a 'Safety First' culture." 
    },
    { 
      icon: LayoutGrid, 
      title: "Dashboard Tracking", 
      desc: "Real-time safety compliance monitoring via our integrated cloud dashboard." 
    }
  ]

  return (
    <section className="py-24 bg-white" id="solutions">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-slate-900">Integrated Safety Ecosystem</h2>
          <p className="text-xl text-slate-600 font-medium">More than just equipment—we provide a complete safety infrastructure for your enterprise.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group p-8 bg-zinc-50 rounded-3xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 shrink-0 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-lg font-medium">{item.desc}</p>
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

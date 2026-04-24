import React from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, TrendingDown, Clock, ShieldAlert } from 'lucide-react'

const PainPointsSection = () => {
    const points = [
        { icon: ShieldAlert, title: "Unsafe Conditions", desc: "Non-compliant work environments lead to avoidable accidents and massive legal liabilities." },
        { icon: TrendingDown, title: "Profit Drainage", desc: "Poor safety protocols result in massive downtime, absenteeism, and insurance spikes." },
        { icon: AlertTriangle, title: "Compliance Fines", desc: "Failure to meet strict UK safety standards leads to heavy fines and operational shutdowns." },
        { icon: Clock, title: "Supply Delays", desc: "Fragmented procurement leads to missing PPE when you need it most, halting production." }
    ]

    return (
        <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mb-20 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-10 h-[1px] bg-primary"></div>
                        <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">Industry Reality</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                        The High Cost of <br /><span className="text-[#E11D48] italic">Inefficient</span> Safety
                    </h2>
                    <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl">
                        Inconsistent PPE supply and outdated safety protocols aren't just risks—they are active drains on your bottom line.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {points.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-10 bg-white rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-[#E11D48]/30 hover:shadow-[0_40px_80px_-20px_rgba(225,29,72,0.15)] transition-all duration-500 overflow-hidden"
                        >
                            {/* Card Accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#E11D48]/5 rounded-bl-[5rem] -mr-12 -mt-12 group-hover:bg-[#E11D48]/10 transition-colors" />
                            
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-[#E11D48] group-hover:text-white transition-all duration-500 mb-10 shadow-inner group-hover:shadow-[#E11D48]/30 group-hover:-rotate-3">
                                <point.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#E11D48] transition-colors">{point.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm font-medium">{point.desc}</p>
                            
                            {/* Decorative Line */}
                            <div className="mt-8 w-0 group-hover:w-12 h-1 bg-[#E11D48] transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PainPointsSection

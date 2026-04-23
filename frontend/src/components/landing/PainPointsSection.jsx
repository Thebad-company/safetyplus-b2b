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
        <section className="py-20 lg:py-32 bg-zinc-50/50 border-y border-zinc-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mb-16 md:mb-24 text-center md:text-left">
                    <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Industry Reality</span>
                    <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-tight">
                        The High Cost of <br /><span className="text-primary italic">Inefficient</span> Safety
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
                        Inconsistent PPE supply and outdated safety protocols aren't just risks—they are active drains on your bottom line.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {points.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.21, 0.45, 0.32, 0.9] }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="p-8 md:p-10 bg-white border border-zinc-100 rounded-[2rem] shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group"
                        >
                            <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-300 group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-8 shadow-sm group-hover:rotate-6">
                                <point.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{point.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PainPointsSection

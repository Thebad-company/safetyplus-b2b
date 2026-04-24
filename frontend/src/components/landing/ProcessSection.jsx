import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Box, Truck, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Tell Us Your Hazards",
        desc: "Our safety consultants assess your site-specific risks, workforce size, and compliance requirements — free of charge.",
    },
    {
        number: "02",
        icon: Box,
        title: "We Build Your Kit",
        desc: "We curate the perfect combination of certified PPE matched precisely to your hazard zones, industry standards, and budget.",
    },
    {
        number: "03",
        icon: Truck,
        title: "Fast, Safe Delivery",
        desc: "All orders are dispatched same day and delivered within 24-48 hours across the UK, with real-time tracking.",
    },
    {
        number: "04",
        icon: ShieldCheck,
        title: "Stay Audit-Ready",
        desc: "We provide full certification documentation and ongoing compliance support so you're always ready for inspections.",
    },
];

export default function ProcessSection() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden min-h-screen flex items-center bg-slate-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/industrial_warehouse_background_1777034631241.png" 
                    alt="Warehouse Logistics" 
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/90" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Glassmorphism Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-20 p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">How It Works</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
                        Protected in <span className="text-primary">4 Simple Steps</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
                        From first consultation to full compliance — we handle every step so you can focus on running your business.
                    </p>
                </motion.div>

                {/* Step Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col items-start text-left group hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="w-full flex justify-between items-start mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-primary/30 group-hover:rotate-6">
                                    <step.icon className="w-7 h-7" />
                                </div>
                                <span className="text-4xl font-black text-slate-100 group-hover:text-primary/10 transition-colors">
                                    {step.number}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Red CTA Button */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <button className="bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-2xl font-black text-xl shadow-[0_20px_50px_-10px_rgba(225,29,72,0.4)] transition-all hover:scale-105 active:scale-95 group inline-flex items-center gap-3">
                        Start Your Protection Journey
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
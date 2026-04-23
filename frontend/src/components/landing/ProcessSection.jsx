import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Risk & Cost Audit",
        desc: "We analyze your current PPE spend and identify hidden compliance gaps.",
    },
    {
        icon: PenTool,
        title: "Custom Strategy",
        desc: "Receive a consolidated supply plan optimized for cost, safety, and scale.",
    },
    {
        icon: ShieldCheck,
        title: "Active Protection",
        desc: "Go live with automated restocking and 24/7 dedicated support.",
    },
];

export default function ProcessSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle Background Decoration */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">The Blueprint</span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
                        3 Steps to <span className="text-primary italic">Total Workplace Safety</span>
                    </h2>
                    <p className="mt-6 text-muted-foreground text-lg">
                        We've removed the friction from industrial procurement. Here is your roadmap to a safer workforce.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 relative">
                    {/* Desktop Connection Lines */}
                    <div className="hidden lg:block absolute top-1/2 left-[20%] right-[20%] h-px bg-zinc-200 -z-10" />

                    {steps.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.2, ease: [0.21, 0.45, 0.32, 0.9] }}
                            whileHover={{ y: -10 }}
                            className="relative group"
                        >
                            <div className="bg-white border border-zinc-100 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:border-primary/30 transition-all duration-500 flex flex-col items-center text-center h-full relative z-10 overflow-hidden">
                                {/* Hover Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10" />
                                
                                <motion.div 
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] bg-primary/5 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary transition-all duration-500 shadow-sm"
                                >
                                    <s.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-white transition-colors" />
                                </motion.div>
                                
                                <div className="absolute top-6 right-6 md:top-8 md:right-10 text-5xl md:text-7xl font-black text-zinc-50 group-hover:text-primary/10 transition-all duration-700 pointer-events-none select-none">
                                    0{i + 1}
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8 flex-grow">
                                    {s.desc}
                                </p>

                                {i < 2 && (
                                    <div className="lg:hidden flex justify-center my-4">
                                        <ArrowRight className="w-6 h-6 text-primary/40 rotate-90" />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: "smooth" })}
                        className="group inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary transition-all shadow-xl hover:shadow-primary/20"
                    >
                        Start Your Risk Audit
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
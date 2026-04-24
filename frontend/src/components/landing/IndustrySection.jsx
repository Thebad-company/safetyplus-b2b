import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
    {
        title: "Construction",
        image: "https://media.base44.com/images/public/69e9a6627fe3eafd387d661f/206907e39_generated_59c09a9f.png",
        problem: "High PPE turnover rates and inconsistent supply across multiple sites",
        solution: "Scheduled bulk deliveries of certified PPE with site-specific kitting",
        savings: "Up to £15,000/yr on a 50-person team",
    },
    {
        title: "Manufacturing",
        image: "https://media.base44.com/images/public/69e9a6627fe3eafd387d661f/d73f71833_generated_6fc12999.png",
        problem: "Downtime from missing consumables and non-compliant safety gear",
        solution: "Automated restocking with compliance-tracked PPE and consumables",
        savings: "Up to £22,000/yr on a 100-person facility",
    },
    {
        title: "Warehousing & Logistics",
        image: "https://media.base44.com/images/public/69e9a6627fe3eafd387d661f/ab9cffd05_generated_40ee21b4.png",
        problem: "High-vis workwear wear-out, inconsistent branding across shifts",
        solution: "Bulk high-vis with custom branding + hygiene supplies program",
        savings: "Up to £8,500/yr on a 30-person warehouse",
    },
];

export default function IndustrySection() {
    return (
        <section id="industries" className="py-24 lg:py-32 bg-zinc-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Industries We Serve</span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-black text-foreground tracking-tight">
                        Tailored Solutions <span className="text-primary italic">by Sector</span>
                    </h2>
                    <p className="mt-6 text-muted-foreground text-lg">
                        We understand the unique safety challenges and compliance requirements of your industry.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={ind.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="group relative bg-white rounded-[2rem] border border-zinc-100 overflow-hidden hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <motion.img 
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    src={ind.image} 
                                    alt={`${ind.title} industry`} 
                                    className="w-full h-full object-cover" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                                <div className="absolute bottom-6 left-8 right-8">
                                    <h3 className="text-3xl font-black text-white tracking-tight">{ind.title}</h3>
                                    <div className="w-12 h-1 bg-primary mt-3 transition-all duration-500 group-hover:w-full"></div>
                                </div>
                            </div>

                            <div className="p-8 lg:p-10 space-y-8">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></div>
                                        <div className="text-[11px] font-black text-rose-600 uppercase tracking-[0.25em]">The Challenge</div>
                                    </div>
                                    <p className="text-sm text-slate-700 font-bold leading-relaxed">{ind.problem}</p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                        <div className="text-[11px] font-black text-primary uppercase tracking-[0.25em]">Our Solution</div>
                                    </div>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{ind.solution}</p>
                                </div>

                                <div className="pt-8 border-t border-zinc-100">
                                    <div className="flex flex-col mb-6">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Projected ROI</span>
                                        <span className="text-2xl font-black text-slate-900 tracking-tighter">{ind.savings}</span>
                                    </div>
                                    
                                    <Button
                                        variant="outline"
                                        className="w-full h-14 rounded-xl border-zinc-200 hover:border-primary hover:bg-primary/5 hover:text-primary font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                    >
                                        View Case Study 
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
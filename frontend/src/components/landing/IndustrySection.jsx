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

                <div className="grid lg:grid-cols-3 gap-8">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={ind.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.21, 0.45, 0.32, 0.9] }}
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-3xl border border-zinc-100 overflow-hidden shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <motion.img 
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.8 }}
                                    src={ind.image} 
                                    alt={`${ind.title} industry`} 
                                    className="w-full h-full object-cover" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <h3 className="absolute bottom-6 left-6 text-2xl font-black text-white">{ind.title}</h3>
                            </div>
                            <div className="p-8 space-y-6">
                                <div>
                                    <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">The Challenge</div>
                                    <p className="text-sm text-foreground font-medium leading-relaxed">{ind.problem}</p>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">Our Solution</div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{ind.solution}</p>
                                </div>
                                <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
                                    <div>
                                        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Estimated Savings</div>
                                        <div className="text-xl font-black text-primary tracking-tighter">{ind.savings}</div>
                                    </div>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                        className="text-primary font-bold text-sm flex items-center gap-2 group/btn"
                                    >
                                        Case Study <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
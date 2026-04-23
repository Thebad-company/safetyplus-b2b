import React from "react";
import { motion } from "framer-motion";
import { Building, Percent, Truck, Palette, GraduationCap } from "lucide-react";

const reasons = [
    {
        icon: Building,
        title: "One Supplier, Zero Hassle",
        desc: "Replace multiple vendors with a single, reliable partner. One order, one invoice, one delivery.",
        stat: "1",
        statLabel: "Supplier needed",
    },
    {
        icon: Percent,
        title: "Bulk Pricing Advantage",
        desc: "Volume discounts that individual orders simply can't match. The more you order, the more you save.",
        stat: "30%",
        statLabel: "Average savings",
    },
    {
        icon: Truck,
        title: "Fast, Reliable Delivery",
        desc: "Next-day delivery on thousands of products. Emergency stock available for urgent requirements.",
        stat: "24h",
        statLabel: "Delivery turnaround",
    },
    {
        icon: Palette,
        title: "In-House Custom Branding",
        desc: "Professional embroidery and printing done in our own facility. Fast turnaround, consistent quality.",
        stat: "3-5",
        statLabel: "Days for branding",
    },
    {
        icon: GraduationCap,
        title: "35+ Years Industry Expertise",
        desc: "Deep knowledge of HSE compliance, product specifications, and industry-specific requirements.",
        stat: "35+",
        statLabel: "Years of experience",
    },
];

export default function WhyUsSection() {
    return (
        <section id="why-us" className="py-20 lg:py-32 bg-white text-foreground relative overflow-hidden">
            {/* Subtle background pattern/glow */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
                >
                    <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">The Safety Advantage</span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
                        Built for <span className="text-primary italic">Industrial Scale</span>
                    </h2>
                    <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                        We don't just supply products. We solve complex procurement headaches through local expertise and global standards.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={r.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.21, 0.45, 0.32, 0.9] }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`relative bg-white border border-zinc-100 p-8 md:p-10 rounded-3xl md:rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] hover:border-primary/30 transition-all duration-500 group ${i === reasons.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                                }`}
                        >
                            <div className="flex items-start justify-between mb-6 md:mb-8">
                                <motion.div 
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-sm"
                                >
                                    <r.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white transition-colors" />
                                </motion.div>
                                <div className="text-right">
                                    <div className="text-3xl md:text-4xl font-black text-primary leading-none mb-1 tracking-tighter group-hover:scale-110 transition-transform origin-right">{r.stat}</div>
                                    <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{r.statLabel}</div>
                                </div>
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors">{r.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                            
                            {/* Decorative Corner Element */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 group-hover:scale-125 transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, History, Users } from "lucide-react";

const stats = [
    {
        icon: History,
        value: "35+",
        label: "Years Experience",
        description: "Trading since 1988 with deep industry roots."
    },
    {
        icon: Award,
        value: "ISO",
        label: "Certified Standards",
        description: "All footwear meets rigorous EN ISO 20345 standards."
    },
    {
        icon: ShieldCheck,
        value: "Trusted",
        label: "Procurement Partner",
        description: "Recognized supplier to HealthTrust Europe."
    },
    {
        icon: Users,
        value: "B2B",
        label: "Dedicated Support",
        description: "Specialized pricing and support for bulk orders."
    }
];

export default function ExperienceSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our Legacy</span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            Over Three Decades of <span className="text-primary italic">Industrial Excellence</span>
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                            Since 1988, GHC (UK) LTD T/A Safety Plus has been at the forefront of workplace safety.
                            We don't just supply PPE; we partner with businesses to ensure every worker returns home safe.
                        </p>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                            Our long-standing partnership with HealthTrust Europe and adherence to strict UK safety standards
                            reflects our commitment to quality, reliability, and integrity in everything we do.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                                    <Award className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-primary">EN ISO 20345</div>
                                    <div className="text-xs text-muted-foreground">Standard Compliance</div>
                                </div>
                            </div>
                            <div className="bg-accent/5 border border-accent/10 rounded-xl p-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-accent">HealthTrust Europe</div>
                                    <div className="text-xs text-muted-foreground">Approved Supplier</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-xl shadow-primary/5 border border-primary/5 hover:border-accent/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
                                <div className="text-sm font-bold text-accent uppercase tracking-wider mb-3">{stat.label}</div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users } from "lucide-react";

export default function EventSection() {
    const badges = [
        "10,000+ Products",
        "Expert Seminars",
        "Live Demonstrations",
        "Networking Opportunities"
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
                        Upcoming Event
                    </span>
                    
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                        Meet Safety Plus at The Health & Safety Event 2026
                    </h2>
                    
                    <div className="flex flex-wrap items-center justify-center gap-4 text-slate-500 font-medium text-lg mb-6">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary/60" />
                            <span>NEC Birmingham</span>
                        </div>
                        <span className="hidden md:block text-slate-300">•</span>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-primary/60" />
                            <span>28–30 April 2026</span>
                        </div>
                        <span className="hidden md:block text-slate-300">•</span>
                        <div className="flex items-center gap-2 font-bold text-slate-700">
                            <span>Stand 2B90</span>
                        </div>
                    </div>

                    <p className="text-xl font-bold text-slate-900 mb-10 max-w-2xl mx-auto leading-relaxed">
                        The UK’s leading event for workplace safety, innovation & compliance
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {badges.map((badge, idx) => (
                            <span 
                                key={idx} 
                                className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-full text-slate-700 font-semibold text-sm shadow-sm"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>

                    <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                        Join thousands of health & safety professionals and discover the latest PPE, workwear, and safety solutions. 
                        Visit Safety Plus at <span className="text-primary font-bold">Stand 2B90</span> to explore innovative products and expert guidance to improve workplace safety standards.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const WORKWEAR_IMG = "https://media.base44.com/images/public/69e9a6627fe3eafd387d661f/0592c7809_generated_b556f2f2.png";

const features = [
    "In-house embroidery & screen printing",
    "Full range of colours and styles",
    "Minimum orders from just 10 units",
    "Free digital mockup before production",
    "Hi-vis, polos, jackets, trousers & more",
    "Consistent branding across your whole team",
];

export default function WorkwearSection() {
    const categories = [
        { title: "Custom Embroidery", desc: "Precision stitching for a premium, long-lasting brand identity on all apparel." },
        { title: "DTF Printing", desc: "Vibrant, high-definition heat transfers ideal for complex multi-color logos." },
        { title: "High-Visibility Options", desc: "EN ISO 20471 compliant branding on safety vests, jackets, and trousers." }
    ];

    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="workwear">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[2px] bg-primary"></span>
                            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em]">Industrial Branding</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                            Bespoke Corporate <br/>
                            <span className="text-primary italic">Workwear.</span>
                        </h2>
                        
                        <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl font-medium">
                            Elevate your brand with custom-branded, high-durability apparel designed for industrial performance and team unity.
                        </p>

                        <div className="space-y-8 mb-12">
                            {categories.map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                        <div className="text-xs font-black">0{idx + 1}</div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Button
                            size="lg"
                            className="h-16 px-10 rounded-2xl bg-black text-white hover:bg-primary font-bold text-lg group shadow-xl hover:shadow-primary/20"
                        >
                            Request Mockup
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Image decoration */}
                        <div className="absolute -inset-4 border-2 border-zinc-100 rounded-[3rem] -z-10" />
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
                        
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 border-8 border-white">
                            <img
                                src={WORKWEAR_IMG}
                                alt="Industrial Workwear Branding"
                                className="w-full h-[600px] object-cover"
                            />
                            
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1,2,3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200" />
                                        ))}
                                    </div>
                                    <div className="text-white">
                                        <div className="text-xs font-bold uppercase tracking-widest text-white/60">Quality Verified</div>
                                        <div className="text-sm font-black">500+ Teams Branded</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
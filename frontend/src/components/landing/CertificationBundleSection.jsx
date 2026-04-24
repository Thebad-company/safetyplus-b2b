import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Package, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

const CertificationBundleSection = () => {
    const benefits = [
        "Nationally Recognized UK Certification",
        "Unlimited Course Access for Teams",
        "Automated Compliance Dashboard",
        "Instant PDF Certificates (HSE Approved)"
    ];

    return (
        <section className="py-24 bg-zinc-50 relative overflow-hidden" id="certification">
            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 uppercase tracking-wider border border-primary/20">
                            <GraduationCap className="w-4 h-4" />
                            <span>The 360° Safety Circle</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-black text-black mb-8 leading-[1.1]">
                            Equip Your Team. <br/>
                            <span className="text-primary italic">Certify Your Business.</span>
                        </h2>
                        
                        <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-xl font-medium">
                            Don't just hand out gear—ensure your team knows how to use it. Our <span className="text-black font-bold">Bundle Logic</span> eliminates the overhead of separate training providers and ensures your business is fully audit-ready.
                        </p>

                        <div className="bg-white rounded-3xl p-8 border border-zinc-100 shadow-sm mb-10">
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                Included Core Certifications
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: "Manual Handling", level: "L2 Certified" },
                                    { title: "Fire Safety Awareness", level: "UK HSE Aligned" },
                                    { title: "COSHH Awareness", level: "Industrial Grade" },
                                    { title: "Working at Heights", level: "Safety First" },
                                    { title: "First Aid Essentials", level: "Critical Care" },
                                    { title: "Display Screen (DSE)", level: "Office Safety" }
                                ].map((course, i) => (
                                    <div key={i} className="flex flex-col p-3 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-primary/20 transition-colors">
                                        <span className="font-bold text-slate-900 text-sm">{course.title}</span>
                                        <span className="text-[10px] font-black text-primary uppercase tracking-tighter">{course.level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4 mb-10">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white" />
                                    </div>
                                    <span className="font-bold text-zinc-700 text-sm">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="h-16 px-10 rounded-2xl bg-black text-white hover:bg-primary font-bold text-lg group shadow-xl hover:shadow-primary/20">
                                Order & Get Certified
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <div className="flex flex-col justify-center px-6 py-2 rounded-2xl border border-zinc-200 bg-white shadow-sm">
                                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Included Value</span>
                                <span className="text-xl font-black text-green-600">£1,499 FREE</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full"
                    >
                        <div className="relative p-10 bg-white rounded-[3rem] shadow-2xl border border-zinc-100 overflow-hidden">
                            {/* Animated Background Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
                            
                            <div className="space-y-8">
                                <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-100 flex items-center gap-6 group hover:border-primary/20 transition-all">
                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Package className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-xl mb-1 text-slate-900">01. Bulk Gear Order</h4>
                                        <p className="text-zinc-500 text-sm font-medium">Equip your workforce with premium, ISO-certified PPE.</p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-3xl bg-primary/5 border-2 border-primary/20 flex items-center gap-6 relative shadow-lg shadow-primary/5">
                                    <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg animate-pulse">
                                        <GraduationCap className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-xl mb-1 text-primary">02. Automated Enrollment</h4>
                                        <p className="text-primary/70 text-sm font-bold">Your staff is automatically enrolled in H&S certification.</p>
                                    </div>
                                    <div className="absolute -top-3 right-6 px-3 py-1 bg-primary text-white text-[10px] font-black uppercase rounded-full">Automated</div>
                                </div>

                                <div className="p-6 rounded-3xl bg-zinc-900 text-white flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                                        <ShieldCheck className="w-8 h-8 text-green-400 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-xl mb-1">03. Site Compliance</h4>
                                        <p className="text-white/60 text-sm font-medium">Download certificates and satisfy HSE audit requirements instantly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CertificationBundleSection;

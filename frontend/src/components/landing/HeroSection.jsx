import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, ArrowRight } from 'lucide-react'



const HeroSection = () => {
    return (
        <section className="relative min-h-[calc(100vh-64px)] flex items-center pt-12 md:pt-16 pb-20 overflow-hidden bg-white">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] -z-10 overflow-hidden">
                {/* Large Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.04]" 
                     style={{ backgroundImage: 'radial-gradient(circle, #E11D48 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                
                {/* Decorative Shapes */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-10 w-96 h-96 border border-primary/5 rounded-full"
                />
                <div className="absolute bottom-40 right-20 w-64 h-64 border border-primary/5 rounded-full" />
                
                {/* Red Dots */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-20" />
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary rounded-full opacity-10" />
                <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary rounded-full opacity-20" />
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[2px] bg-primary"></span>
                            <span className="text-primary font-bold text-sm uppercase tracking-[0.3em]">The Safety Partner</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                            Equip Your Team. <br/>
                            <span className="relative inline-block text-primary">
                                Certify
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/40" viewBox="0 0 100 12" preserveAspectRatio="none">
                                    <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="4" />
                                </svg>
                            </span> Your Business.
                        </h1>
                        
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
                            The UK's only <span className="text-primary font-bold">360° Safety Partner.</span> We bundle premium B2B PPE procurement with <span className="text-primary underline decoration-2 underline-offset-4">certified</span> health & safety courses.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-lg rounded-2xl bg-slate-900 text-white hover:bg-primary transition-all shadow-xl hover:shadow-primary/20 font-bold group relative overflow-hidden">
                                <span className="relative z-10 flex items-center">
                                    Explore Solutions
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto h-16 px-10 text-lg rounded-2xl border-slate-200 font-bold hover:bg-slate-50 transition-all text-slate-700">
                                Download Catalog
                            </Button>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-semibold">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span>ISO 45001 Certified</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">
                                <CheckCircle className="w-4 h-4 text-primary" />
                                <span>100% On-time delivery</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 relative"
                    >
                        {/* Decorative Backglow */}
                        <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full -z-10" />

                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border-8 border-white bg-white/80 backdrop-blur-sm group transition-all duration-700 hover:border-primary/10">
                            <div className="aspect-square md:aspect-[4/5] lg:aspect-square relative flex items-center justify-center p-8">
                                <img
                                    src="/hero.png"
                                    alt="SafetyPlus Industrial Excellence"
                                    className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

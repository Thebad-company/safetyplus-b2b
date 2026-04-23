import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, ArrowRight } from 'lucide-react'



const HeroSection = () => {
    return (
        <section className="relative pt-28 md:pt-40 pb-20 overflow-hidden bg-white">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-bold mb-8 uppercase tracking-widest">
                            <Shield className="w-4 h-4" />
                            <span>UK's Most Trusted Safety Partner</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
                            Safety is not an <span className="text-primary italic">Option.</span> It's a <span className="relative inline-block">Necessity.<span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10" /></span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            We provide end-to-end industrial safety solutions—from premium certified PPE to automated workplace safety audits.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-lg rounded-2xl bg-black text-white hover:bg-primary transition-all shadow-xl hover:shadow-primary/20 font-bold group">
                                Explore Solutions
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto h-16 px-10 text-lg rounded-2xl border-zinc-200 font-bold hover:bg-zinc-50 transition-all">
                                Download Catalog
                            </Button>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500" />
                                <span>BIS Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500" />
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
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] border border-zinc-100 bg-white">
                            <div className="aspect-square md:aspect-[4/5] lg:aspect-square relative flex items-center justify-center group transition-all duration-700 hover:scale-[1.02]">
                                <img
                                    src="/hero.png"
                                    alt="SafetyPlus Industrial Excellence"
                                    className="w-full h-full object-contain p-4"
                                />
                            </div>
                        </div>
                        {/* Floating stats card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 p-4 bg-background rounded-xl shadow-xl border z-20 hidden md:block"
                        >
                            <div className="text-2xl font-bold text-primary">50k+</div>
                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Workers Protected</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

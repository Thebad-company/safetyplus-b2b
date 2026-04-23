import React from "react";
import { motion } from "framer-motion";
import { Shield, Mail, Phone, MapPin, ShieldCheck, Award, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white pt-24 pb-12 border-t border-zinc-100 overflow-hidden relative">
            {/* Ambient Background Decoration */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
                    {/* Brand */}
                    <div className="space-y-8">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2.5"
                        >
                            <img src="/safety-plus-logo.png" alt="SafetyPlus Logo" className="h-12 w-auto" />
                        </motion.div>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Established in 1988, we are the UK's leading single-source supplier for certified PPE, custom workwear, and industrial safety solutions.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 bg-primary/5 rounded-xl px-4 py-2 border border-primary/10">
                                <ShieldCheck className="w-4 h-4 text-primary" />
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">ISO 9001</span>
                            </div>
                            <div className="flex items-center gap-2 bg-primary/5 rounded-xl px-4 py-2 border border-primary/10">
                                <Award className="w-4 h-4 text-primary" />
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">ISO 14001</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-black text-foreground uppercase tracking-[0.2em] mb-8">Safety Solutions</h4>
                        <ul className="space-y-4">
                            {["PPE Supply", "Custom Workwear", "Hygiene Products", "Industrial Consumables", "Safety Signage"].map(l => (
                                <li key={l}>
                                    <a href="#solutions" className="text-sm text-muted-foreground hover:text-primary transition-all flex items-center group">
                                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries */}
                    <div>
                        <h4 className="text-sm font-black text-foreground uppercase tracking-[0.2em] mb-8">Sectors We Protect</h4>
                        <ul className="space-y-4">
                            {["Construction", "Manufacturing", "Warehousing", "Facilities", "Logistics"].map(l => (
                                <li key={l}>
                                    <a href="#industries" className="text-sm text-muted-foreground hover:text-primary transition-all flex items-center group">
                                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-black text-foreground uppercase tracking-[0.2em] mb-8">Get In Touch</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-muted-foreground text-sm leading-relaxed">
                                    Unit 82B, Rolfe Street, Smethwick, Birmingham, B66 2AX
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <a href="tel:01215558446" className="text-muted-foreground text-sm hover:text-primary transition-colors font-medium">
                                    0121 555 8446
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <a href="mailto:sales@safetyplus.co.uk" className="text-muted-foreground text-sm hover:text-primary transition-colors font-medium">
                                    sales@safetyplus.co.uk
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <p className="text-xs text-zinc-400 font-medium">© 2026 SafetyPlus UK. All rights reserved.</p>
                        <p className="text-[10px] text-zinc-300 uppercase tracking-widest font-bold">Protecting your workforce since 1988</p>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="text-xs text-zinc-400 hover:text-primary transition-colors font-medium">Privacy Policy</a>
                        <a href="#" className="text-xs text-zinc-400 hover:text-primary transition-colors font-medium">Terms of Service</a>
                        <a href="#" className="text-xs text-zinc-400 hover:text-primary transition-colors font-medium">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
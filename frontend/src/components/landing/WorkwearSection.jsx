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
    return (
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <span className="text-accent font-semibold text-sm uppercase tracking-widest">Custom Workwear</span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Your Brand, Their Uniform
                        </h2>
                        <p className="mt-4 text-white/70 text-lg leading-relaxed">
                            Professional branded workwear creates trust, unity, and a polished image. We handle everything from design to delivery.
                        </p>

                        <div className="mt-8 grid sm:grid-cols-2 gap-3">
                            {features.map((f) => (
                                <div key={f} className="flex items-start gap-2.5">
                                    <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-accent" />
                                    </div>
                                    <span className="text-sm text-white/80">{f}</span>
                                </div>
                            ))}
                        </div>

                        <Button
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-5"
                        >
                            Customise Your Workwear <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative">
                            <img
                                src={WORKWEAR_IMG}
                                alt="Custom branded workwear with logos and embroidery"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-primary rounded-xl border border-white/10 shadow-lg p-4">
                                <div className="text-xs text-white/50">Turnaround Time</div>
                                <div className="text-xl font-bold text-accent brightness-125">3–5 Days</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
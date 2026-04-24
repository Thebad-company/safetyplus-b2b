import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingDown, Building, PoundSterling, ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export default function CalculatorSection() {
    const [employees, setEmployees] = useState(50);
    const [monthlySpend, setMonthlySpend] = useState(2000);

    const results = useMemo(() => {
        const annualSpend = monthlySpend * 12;
        const savingsPercent = employees > 100 ? 32 : employees > 50 ? 28 : 22;
        const annualSaving = Math.round(annualSpend * (savingsPercent / 100));
        const supplierReduction = employees > 100 ? 5 : employees > 50 ? 4 : 3;
        return { annualSpend, savingsPercent, annualSaving, supplierReduction };
    }, [employees, monthlySpend]);

    return (
        <section id="calculator" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-0 w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
                >
                    <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">ROI Calculator</span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
                        Estimate Your <span className="text-primary italic">Annual Savings</span>
                    </h2>
                    <p className="mt-6 text-muted-foreground text-base md:text-lg">
                        See how much your business could save by consolidating your safety procurement with SafetyPlus.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="bg-white rounded-[2.5rem] border border-zinc-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
                        <div className="grid lg:grid-cols-2">
                            {/* Inputs */}
                            <div className="p-8 md:p-12 lg:p-16 space-y-10 border-b lg:border-b-0 lg:border-r border-zinc-100">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold text-foreground uppercase tracking-widest">Workforce Size</label>
                                        <span className="text-2xl font-black text-slate-900 tracking-tighter">{employees} <span className="text-xs text-muted-foreground uppercase">Staff</span></span>
                                    </div>
                                    <Slider
                                        value={[employees]}
                                        onValueChange={([v]) => setEmployees(v)}
                                        min={10}
                                        max={500}
                                        step={10}
                                        className="py-4 [&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.relative]:bg-zinc-200 [&_.absolute]:bg-primary h-1.5"
                                    />
                                    <div className="flex justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                        <span>10 Staff</span>
                                        <span>500+ Staff</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <label className="text-sm font-bold text-foreground uppercase tracking-widest">Monthly PPE Spend</label>
                                        <span className="text-2xl font-black text-slate-900 tracking-tighter">£{monthlySpend.toLocaleString()}</span>
                                    </div>
                                    <Slider
                                        value={[monthlySpend]}
                                        onValueChange={([v]) => setMonthlySpend(v)}
                                        min={500}
                                        max={20000}
                                        step={250}
                                        className="py-4 [&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_.relative]:bg-zinc-200 [&_.absolute]:bg-primary h-1.5"
                                    />
                                    <div className="flex justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                        <span>£500 /mo</span>
                                        <span>£20,000+ /mo</span>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                    className="w-full bg-black text-white rounded-2xl py-6 font-bold text-lg hover:bg-primary transition-all shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-3"
                                >
                                    Get Full Audit Report
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </div>

                            {/* Results */}
                            <div className="bg-zinc-50 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-12">
                                <div className="space-y-2">
                                    <h3 className="text-zinc-400 text-xs font-bold uppercase tracking-[0.2em]">Projected Annual Impact</h3>
                                    <p className="text-sm text-muted-foreground">Based on industry-standard consolidation metrics.</p>
                                </div>

                                <div className="space-y-10">
                                    {[
                                        { label: "Annual Savings", value: `£${results.annualSaving.toLocaleString()}`, icon: PoundSterling, color: "bg-primary", iconColor: "text-white" },
                                        { label: "Procurement Efficiency", value: `${results.savingsPercent}%`, icon: TrendingDown, color: "bg-green-500", iconColor: "text-white" },
                                        { label: "Training Value Added", value: "£1,499 Included", icon: Calculator, color: "bg-zinc-900", iconColor: "text-white" }
                                    ].map((res, i) => (
                                        <motion.div 
                                            key={res.label}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-6"
                                        >
                                            <div className={`w-14 h-14 rounded-2xl ${res.color} flex items-center justify-center shrink-0 shadow-lg`}>
                                                <res.icon className={`w-7 h-7 ${res.iconColor}`} />
                                            </div>
                                            <div>
                                                <div className="text-3xl font-black text-slate-900 tracking-tighter">{res.value}</div>
                                                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{res.label}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                
                                <div className="pt-6 border-t border-zinc-200">
                                    <p className="text-xs text-zinc-400 leading-relaxed italic">
                                        *Calculations are estimates based on average client performance. Your actual ROI may vary based on specific compliance requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";


export default function ContactFormSection() {
    const [form, setForm] = useState({
        name: "", company: "", email: "", phone: "",
        industry: "", monthly_spend: "", employee_count: "", products_needed: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitting(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section id="contact" className="py-24 lg:py-32 bg-white">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                        <div className="w-24 h-24 rounded-3xl bg-green-50 flex items-center justify-center mx-auto mb-8 border border-green-100">
                            <CheckCircle2 className="w-12 h-12 text-green-500" />
                        </div>
                        <h2 className="text-4xl font-black text-foreground tracking-tight">Request Received</h2>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                            A dedicated account manager will review your requirements and contact you within 24 hours with your custom procurement strategy.
                        </p>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 lg:py-32 bg-zinc-50/50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Partner With Us</span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
                            Get Your Custom Quote <br/><span className="text-primary italic">in 24 Hours</span>
                        </h2>
                        <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
                            Tell us about your workforce needs and we'll build a tailored supply plan with transparent, volume-based pricing.
                        </p>
                        <div className="mt-10 space-y-6">
                            {[
                                "No obligation, completely free consultation",
                                "Itemised quote with bulk volume discounts",
                                "Dedicated account manager assigned",
                                "Response guaranteed within 24 hours",
                            ].map((item) => (
                                <motion.div 
                                    key={item} 
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-base text-foreground font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] border border-zinc-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] p-8 md:p-12 space-y-6 relative">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Full Name *</Label>
                                    <Input required className="rounded-xl border-zinc-200 h-12 focus:ring-primary/20" placeholder="John Smith" value={form.name} onChange={e => handleChange("name", e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Company *</Label>
                                    <Input required className="rounded-xl border-zinc-200 h-12 focus:ring-primary/20" placeholder="Your Company Ltd" value={form.company} onChange={e => handleChange("company", e.target.value)} />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Work Email *</Label>
                                    <Input required type="email" className="rounded-xl border-zinc-200 h-12 focus:ring-primary/20" placeholder="john@company.co.uk" value={form.email} onChange={e => handleChange("email", e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Phone Number</Label>
                                    <Input className="rounded-xl border-zinc-200 h-12 focus:ring-primary/20" placeholder="07XXX XXX XXX" value={form.phone} onChange={e => handleChange("phone", e.target.value)} />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Industry</Label>
                                    <Select value={form.industry} onValueChange={v => handleChange("industry", v)}>
                                        <SelectTrigger className="rounded-xl border-zinc-200 h-12 focus:ring-primary/20"><SelectValue placeholder="Select industry" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="construction">Construction</SelectItem>
                                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                            <SelectItem value="warehousing">Warehousing & Logistics</SelectItem>
                                            <SelectItem value="facility_management">Facility Management</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Employee Count</Label>
                                    <Input className="rounded-xl border-zinc-200 h-12 focus:ring-primary/20" placeholder="e.g. 50" value={form.employee_count} onChange={e => handleChange("employee_count", e.target.value)} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Project Requirements</Label>
                                <Textarea
                                    className="rounded-xl border-zinc-200 focus:ring-primary/20 min-h-[120px]"
                                    placeholder="Tell us about your PPE, workwear, or hygiene needs..."
                                    value={form.products_needed}
                                    onChange={e => handleChange("products_needed", e.target.value)}
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-black text-white rounded-2xl py-6 font-bold text-lg hover:bg-primary transition-all shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-3 mt-4"
                            >
                                {submitting ? <Loader2 className="w-6 h-6 animate-spin" /> : "Request Your Quote"}
                                {!submitting && <ArrowRight className="w-5 h-5" />}
                            </motion.button>

                            <p className="text-[10px] text-center text-zinc-400 font-medium uppercase tracking-widest pt-2">
                                Your data is protected. response in 24 hours.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
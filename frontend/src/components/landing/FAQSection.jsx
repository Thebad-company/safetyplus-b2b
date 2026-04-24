import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Are all your products genuine and certified?",
        answer: "Absolutely. Every product we sell comes with original manufacturer certification and full compliance documentation. We source directly from ISO-certified manufacturers and conduct independent quality checks before dispatch."
    },
    {
        question: "How fast can I receive bulk orders?",
        answer: "For standard bulk orders (up to 200 units), we typically dispatch within 24 hours and deliver within 2-3 business days across the UK. For enterprise orders above 200 units, a dedicated account manager will coordinate a custom delivery timeline."
    },
    {
        question: "Do you offer customisation (logos, branding)?",
        answer: "Yes! We offer custom branding on helmets, vests, gloves, and bulk PPE kits. Minimum order quantity applies. Contact our enterprise team for samples and pricing."
    },
    {
        question: "What happens if a product is defective?",
        answer: "We offer a 30-day no-questions-asked return policy for all products. For manufacturing defects, we provide free replacement and cover return shipping. Simply contact support@safetyplus.co.uk with photos."
    },
    {
        question: "Can you help with site-specific compliance audits?",
        answer: "Yes! Our certified safety consultants offer on-site compliance assessment services. We'll identify gaps, recommend the right equipment, and help you build an audit-ready safety program."
    },
    {
        question: "Do you provide safety training alongside equipment?",
        answer: "Through our 'Equip & Certify' program, all B2B bulk orders over £1,000 include Health & Safety certification training for your staff, valued at £1,499."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit/debit cards, BACS transfers for enterprise accounts, and offer 30-day credit terms for established corporate partners (subject to credit check)."
    }
];

const FAQItem = ({ faq, isOpen, toggle }) => {
    return (
        <div 
            className={`border rounded-xl mb-4 overflow-hidden transition-all duration-300 ${
                isOpen ? "border-primary/30 shadow-lg ring-1 ring-primary/10" : "border-slate-200 hover:border-primary/20"
            }`}
        >
            <button
                onClick={toggle}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white transition-colors"
            >
                <span className={`text-lg font-semibold transition-colors ${isOpen ? "text-primary" : "text-slate-900"}`}>
                    {faq.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className={`w-5 h-5 ${isOpen ? "text-primary" : "text-slate-400"}`} />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-slate-50 bg-slate-50/30">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-[#FCFDFF] relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <HelpCircle className="w-4 h-4 text-primary" />
                        <span className="text-primary font-bold tracking-widest text-xs uppercase">FAQS</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                        Got Questions? <span className="text-primary">We've Got Answers</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Everything you need to know before placing your order.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FAQItem 
                            key={index} 
                            faq={faq} 
                            isOpen={openIndex === index} 
                            toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

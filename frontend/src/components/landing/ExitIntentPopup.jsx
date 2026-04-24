import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Tag, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExitIntentPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        const handleMouseLeave = (e) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, [hasShown]);

    const closePopup = () => setIsVisible(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle subscription logic here
        console.log("Subscribing email:", email);
        closePopup();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden"
                    >
                        {/* Top Accent Bar */}
                        <div className="h-1.5 bg-[#DC2626] w-full" />

                        {/* Close Button */}
                        <button 
                            onClick={closePopup}
                            className="absolute top-4 right-4 p-1 rounded-full text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="px-8 pt-12 pb-10 text-center">
                            {/* Tag Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-zinc-50 rounded-xl mb-8 border border-zinc-100">
                                <Tag className="w-8 h-8 text-zinc-900" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4 leading-tight">
                                Wait! Get 10% Off Your First Bulk Order
                            </h2>

                            <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
                                Lock in your special introductory rate. <br/>
                                <span className="font-semibold text-zinc-800 tracking-tight">Valid for orders over £1,000.</span>
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Enter your business email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full h-14 px-5 bg-zinc-50 border border-zinc-200 rounded-lg outline-none focus:border-[#DC2626] transition-all text-zinc-900"
                                    />
                                </div>

                                <Button 
                                    type="submit"
                                    className="w-full h-14 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-lg font-bold rounded-lg shadow-lg shadow-red-600/20 uppercase tracking-wide"
                                >
                                    Claim 10% Discount
                                </Button>
                            </form>

                            <button 
                                onClick={closePopup}
                                className="mt-6 text-zinc-400 font-bold text-xs uppercase tracking-[0.2em] hover:text-zinc-600 transition-colors"
                            >
                                No thanks, I prefer full price
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ExitIntentPopup;

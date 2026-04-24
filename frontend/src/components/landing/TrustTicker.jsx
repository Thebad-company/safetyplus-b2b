import React from "react";
import { motion } from "framer-motion";

const items = [
    "Extra Discount on Bulk Orders — Buy More Save More!",
    "30 Days Returns Policy",
    "ISO 45001 Certified Products",
    "Same-Day Dispatch Before 3 PM",
    "24/7 Expert Safety Support",
];

const TrustTicker = () => {
    return (
        <div className="bg-[#050B1A] border-y border-white/5 py-2.5 overflow-hidden select-none">
            <div className="flex whitespace-nowrap overflow-hidden">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                    className="flex items-center gap-12 px-6"
                >
                    {[...items, ...items, ...items].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-white/90 text-sm font-bold uppercase tracking-wider">
                            <span className="text-zinc-500 text-lg">✦</span>
                            <span>{item}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TrustTicker;

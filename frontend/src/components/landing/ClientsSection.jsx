import React from "react";
import { motion } from "framer-motion";

const logos = [
    "/clients/logo-1.webp",
    "/clients/logo-2.avif",
    "/clients/logo-3.webp",
    "/clients/logo-4.avif",
    "/clients/logo-5.webp",
    "/clients/logo-6.avif",
    "/clients/logo-7.avif"
];

const ClientsSection = () => {
    return (
        <section className="py-12 bg-white border-b border-zinc-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-8">
                <div className="text-center">
                    <h2 className="text-sm font-black text-zinc-400 uppercase tracking-[0.3em]">Trusted by Industry Leaders</h2>
                </div>
            </div>

            <div className="relative flex overflow-hidden group">
                <motion.div
                    animate={{ x: [0, -1600] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    className="flex items-center gap-20 px-10 whitespace-nowrap"
                >
                    {[...logos, ...logos, ...logos].map((logo, i) => (
                        <div
                            key={i}
                            className="w-56 md:w-72 h-24 flex items-center justify-center transition-all duration-300 flex-shrink-0"
                        >
                            <img
                                src={logo}
                                alt={`Partner Logo ${i + 1}`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientsSection;

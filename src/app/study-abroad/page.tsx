"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import CountrySection from "@/components/CountrySection";
import BackgroundPaths from "@/components/ui/modern-background-paths";

export default function StudyAbroadPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen bg-[var(--color-bg-primary)]"
        >
            {/* Hero Section */}
            <section className="relative w-full pt-28 sm:pt-32 pb-16 sm:pb-20 md:pb-28 bg-[var(--color-bg-section)] border-b border-[var(--color-border)] overflow-hidden">
                <BackgroundPaths />
                {/* Subtle decorative globe */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.04] pointer-events-none">
                    <Globe size={500} strokeWidth={0.5} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-2xl">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-[var(--color-accent-gold)] tracking-[0.3em] uppercase text-xs mb-4"
                        >
                            Global Strategy
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-bungee text-2xl sm:text-3xl md:text-4xl text-gold-glow tracking-wide mb-4"
                        >
                            Study Abroad
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-[var(--color-accent-gold)] text-sm tracking-[0.2em] uppercase mb-6"
                        >
                            Open for Registration
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-[var(--color-text-muted)] text-base leading-relaxed mb-8 max-w-lg"
                        >
                            Unlock global opportunities with our expert international admission handling, university selection, and complete visa support from start to finish.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="btn-primary px-8 py-3 text-xs tracking-[0.15em] uppercase"
                        >
                            Enroll Now
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Country Cards Grid */}
            <section className="mx-auto w-full py-12 sm:py-16 md:py-20 relative z-30">
                <CountrySection />
            </section>
        </motion.div>
    );
}

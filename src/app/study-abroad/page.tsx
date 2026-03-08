"use client";

import { motion } from "motion/react";
import { Globe } from "lucide-react";
import CountrySection from "@/components/CountrySection";
import BackgroundPaths from "@/components/ui/modern-background-paths";

export default function StudyAbroadPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen"
        >
            {/* Fixed Background */}
            <div className="fixed inset-0 z-0">
                <BackgroundPaths />
            </div>

            {/* Hero Section */}
            <section className="relative w-full pt-28 sm:pt-32 pb-16 sm:pb-20 md:pb-28 border-b border-[var(--color-border)] overflow-hidden z-10">
                {/* Subtle decorative globe */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.04] pointer-events-none">
                    <Globe size={500} strokeWidth={0.5} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-2xl">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2, ease: "linear" }}
                            className="text-[#C5A55A] tracking-[0.3em] uppercase text-xs mb-4 drop-shadow-[0_0_5px_rgba(197,165,90,0.5)]"
                        >
                            &gt; Global Strategy
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
                            className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl text-gradient-sunset tracking-wide mb-4"
                        >
                            Study Abroad
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.2, ease: "linear" }}
                            className="text-[#C5A55A] text-sm tracking-[0.2em] uppercase mb-6 drop-shadow-[0_0_4px_rgba(197,165,90,0.4)]"
                        >
                            Open for Registration
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.2, ease: "linear" }}
                            className="text-[var(--color-text-muted)] text-base leading-relaxed mb-8 max-w-lg"
                        >
                            Unlock global opportunities with our expert international admission handling, university selection, and complete visa support from start to finish.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.2, ease: "linear" }}
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

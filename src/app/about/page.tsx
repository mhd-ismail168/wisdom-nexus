"use client";

import { motion } from "framer-motion";
import { Target, Eye, Globe, BookOpen, Users, Lightbulb, ShieldCheck, GraduationCap, Briefcase, Workflow, CheckCircle2, HeartHandshake, Building2 } from "lucide-react";
import BackgroundPaths from "@/components/ui/modern-background-paths";
import { CyberneticBentoGrid } from "@/components/ui/cybernetic-bento-grid";
import StackingCards from "@/components/ui/stacking-card";

export default function AboutPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full min-h-screen"
        >
            {/* Fixed Background */}
            <div className="fixed inset-0 z-0">
                <BackgroundPaths pattern="flow" />
            </div>

            {/* Hero */}
            <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 md:pb-24 border-b border-[var(--color-border)] text-center px-4 relative overflow-hidden z-10">
                <div className="max-w-5xl mx-auto relative z-10 mt-4 sm:mt-8">
                    <p className="text-[#C5A55A] tracking-[0.3em] uppercase text-xs mb-4 sm:mb-6 drop-shadow-[0_0_5px_rgba(197,165,90,0.5)]">&gt; About Us</p>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, ease: "linear" }}
                        className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold text-gradient-sunset tracking-wide mb-4 sm:mb-6 leading-tight"
                    >
                        Wisdom Nexus Foundation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
                        className="text-[var(--color-text-muted)] text-base max-w-2xl mx-auto"
                    >
                        Advancing Education. Empowering Youth. Enabling Global Futures.
                    </motion.p>
                </div>
            </section>

            {/* Who We Are · Vision · Mission — Stacking Cards */}
            <StackingCards />

            {/* Strategic Focus Areas */}
            <section className="py-16 sm:py-20 md:py-24 border-y border-[var(--color-border)] relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <p className="text-[#C5A55A] tracking-[0.3em] uppercase text-xs mb-4 drop-shadow-[0_0_5px_rgba(197,165,90,0.5)]">&gt; Core Initiatives</p>
                        <h2 className="text-xl sm:text-2xl font-orbitron font-bold text-gradient-sunset tracking-wide mb-4">
                            Strategic Focus Areas
                        </h2>
                        <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-[#C5A55A]/50 to-transparent shadow-[0_0_8px_rgba(197,165,90,0.3)]"></div>
                    </div>

                    <CyberneticBentoGrid />
                </div>
            </section>

            {/* Target Beneficiaries & Values */}
            <section className="py-16 sm:py-20 md:py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">

                        {/* Target Beneficiaries */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-lg sm:text-xl font-orbitron font-bold text-[#C5A55A] drop-shadow-[0_0_5px_rgba(197,165,90,0.5)] mb-6 sm:mb-8 tracking-wide flex items-center gap-3">
                                <Building2 className="text-[#C5A55A]" size={20} /> Target Beneficiaries
                            </h2>
                            <div className="space-y-4">
                                {[
                                    "Students pursuing higher education and career advancement",
                                    "Youth from underserved, emerging, and transitioning communities",
                                    "Early-career professionals and aspiring entrepreneurs",
                                    "Educational institutions and workforce development partners"
                                ].map((item, i) => (
                                    <div key={i} className="bg-[var(--color-bg-section)] p-5 border border-[var(--color-border)] border-l-2 border-l-[#C5A55A]/40 flex items-center gap-4 hover:border-[#C5A55A]/30 hover:shadow-[0_0_15px_rgba(197,165,90,0.05)] transition-all duration-200">
                                        <div className="w-8 h-8 bg-[#C5A55A]/5 border border-[#C5A55A]/20 flex items-center justify-center shrink-0 rotate-45">
                                            <Target size={14} className="text-[#C5A55A] -rotate-45" />
                                        </div>
                                        <p className="text-[var(--color-text-secondary)] text-sm">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Values & Principles */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <h2 className="text-lg sm:text-xl font-orbitron font-bold text-[#C5A55A] drop-shadow-[0_0_5px_rgba(197,165,90,0.5)] mb-6 sm:mb-8 tracking-wide flex items-center gap-3">
                                <ShieldCheck className="text-[#C5A55A]" size={20} /> Values & Principles
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { title: "Equity & Inclusion", desc: "Expanding opportunity through accessible education" },
                                    { title: "Excellence", desc: "Maintaining high standards in programs and outcomes" },
                                    { title: "Integrity & Accountability", desc: "Ethical, transparent governance" },
                                    { title: "Collaboration", desc: "Strong partnerships for sustainable impact" },
                                    { title: "Innovation & Impact", desc: "Forward-looking, outcome-driven solutions" }
                                ].map((val, i) => (
                                    <div key={i} className="bg-[var(--color-bg-section)] p-5 border border-[var(--color-border)] flex items-start gap-4">
                                        <div className="w-6 h-6 bg-[#C5A55A] flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle2 size={12} className="text-[var(--color-bg-primary)]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[var(--color-text-primary)] text-sm mb-0.5">{val.title}</h4>
                                            <p className="text-[var(--color-text-muted)] text-xs">{val.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Commitment Banner */}
            <section className="py-12 sm:py-16 md:py-20 border-y border-[var(--color-border)] relative z-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Globe size={28} className="text-[#C5A55A] mx-auto mb-4 sm:mb-6 sm:hidden drop-shadow-[0_0_8px_rgba(197,165,90,0.5)]" />
                    <Globe size={32} className="text-[#C5A55A] mx-auto mb-4 sm:mb-6 hidden sm:block drop-shadow-[0_0_8px_rgba(197,165,90,0.5)]" />
                    <h2 className="text-lg sm:text-xl md:text-2xl font-orbitron font-bold text-gradient-sunset tracking-wide mb-4 sm:mb-6">Our Global Commitment</h2>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-3xl mx-auto">
                        Wisdom Nexus Foundation operates with a global perspective, collaborating with governments, academic institutions, industry partners, and civil society organizations to design scalable solutions that strengthen education-to-employment pathways and empower the next generation of leaders.
                    </p>
                </div>
            </section>

            {/* Founder Message Section */}
            <section className="py-16 sm:py-20 md:py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <HeartHandshake size={18} className="text-[#C5A55A]" />
                            <span className="text-[#C5A55A] text-[10px] tracking-[0.3em] uppercase drop-shadow-[0_0_4px_rgba(197,165,90,0.5)]">&gt; Leadership</span>
                        </div>
                        <h2 className="text-2xl font-orbitron font-bold text-gradient-sunset tracking-wide">
                            Message from the Founder
                        </h2>
                    </div>

                    <div className="bg-[var(--color-bg-section)] border border-[var(--color-border)] p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
                        <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center relative z-10">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-[var(--color-surface)] shrink-0 border border-[var(--color-border)] relative overflow-hidden flex items-center justify-center">
                                <Users size={48} className="text-[var(--color-text-muted)] opacity-30" />
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-orbitron font-bold text-[#C5A55A] drop-shadow-[0_0_6px_rgba(197,165,90,0.5)] mb-2 tracking-wide">Dr. R. Karthikeyan</h3>
                                <p className="text-[#C5A55A] text-[10px] tracking-[0.2em] uppercase mb-8">&gt; Founder & Chief Consultant</p>
                                <p className="text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed italic mb-8 border-l-2 border-[#C5A55A]/40 pl-6 py-2">
                                    &ldquo;Education is the single most powerful tool to change lives. At Wisdom, we don&apos;t just fill forms; we sculpt futures. Every student is unique, and our goal is to find the environment where they will thrive.&rdquo;
                                </p>
                                <div className="h-[1px] w-24 bg-gradient-to-r from-[#C5A55A]/50 to-transparent shadow-[0_0_8px_rgba(197,165,90,0.3)]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

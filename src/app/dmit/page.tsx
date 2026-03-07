"use client";

import { motion } from "framer-motion";
import { Brain, Fingerprint, CheckCircle2, ClipboardList, TrendingUp, CalendarCheck, FileBadge, Check, Award, ArrowUpRight, Lightbulb, Sparkles, Search, Dna, ShieldCheck, Clock, Zap, BarChart3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import BackgroundPaths from "@/components/ui/modern-background-paths";
import { ReactNode, useState } from "react";

/* ── Flip Comparison Card ── */
function ComparisonCard({ icon, title, subtitle, badge, items, description, delay }: {
    icon: ReactNode;
    title: string;
    subtitle: string;
    badge: string;
    items: { icon: ReactNode; text: string }[];
    description: string;
    delay: number;
}) {
    const [flipped, setFlipped] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="relative cursor-pointer group"
            style={{ perspective: 1200 }}
            onClick={() => setFlipped(!flipped)}
        >
            <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full min-h-[420px] sm:min-h-[460px]"
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden border border-[var(--color-border)] p-6 sm:p-8 md:p-10 flex flex-col justify-between hover:border-[#C5A55A]/30 hover:shadow-[0_0_25px_rgba(197,165,90,0.08)] transition-all duration-300" style={{ backfaceVisibility: "hidden" }}>
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-[#C5A55A]/10 border border-[#C5A55A]/20 flex items-center justify-center rotate-45">
                                <span className="text-[#C5A55A] -rotate-45">{icon}</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-orbitron font-bold text-[#C5A55A] drop-shadow-[0_0_8px_rgba(197,165,90,0.5)] tracking-wide">{title}</h3>
                                <p className="text-[var(--color-text-muted)] text-xs tracking-wider uppercase">{subtitle}</p>
                            </div>
                        </div>
                        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">{description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="inline-block bg-[#C5A55A]/15 text-[#C5A55A] border border-[#C5A55A]/20 px-4 py-2 text-xs font-medium tracking-wider uppercase">
                            {badge}
                        </span>
                        <span className="text-[var(--color-text-muted)] text-xs tracking-wider group-hover:text-[#C5A55A] transition-colors">TAP TO REVEAL &rarr;</span>
                    </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden border border-[#C5A55A]/30 p-6 sm:p-8 md:p-10 flex flex-col justify-center shadow-[0_0_30px_rgba(197,165,90,0.08)]" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                    <h4 className="text-lg font-orbitron font-bold text-[#C5A55A] drop-shadow-[0_0_6px_rgba(197,165,90,0.5)] mb-6 tracking-wide">{title} — Key Features</h4>
                    <ul className="space-y-5">
                        {items.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={flipped ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ delay: 0.15 + i * 0.08 }}
                                className="flex items-center gap-3 text-[var(--color-text-secondary)] text-sm"
                            >
                                <span className="text-[#C5A55A]">{item.icon}</span>
                                {item.text}
                            </motion.li>
                        ))}
                    </ul>
                    <div className="mt-8 pt-4 border-t border-[var(--color-border)]">
                        <span className="text-[var(--color-text-muted)] text-xs tracking-wider">&larr; TAP TO FLIP BACK</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function DmitPage() {
    const processSteps = [
        { icon: <ClipboardList size={28} />, title: "Register", desc: "Book your assessment slot online." },
        { icon: <CheckCircle2 size={28} />, title: "Take Test", desc: "Complete the offline/online test." },
        { icon: <FileBadge size={28} />, title: "Get Detailed Report", desc: "Receive a comprehensive multi-page analysis." },
        { icon: <TrendingUp size={28} />, title: "Career Guidance", desc: "1-on-1 counseling session with experts." }
    ];

    const comparison = [
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full"
        >
            {/* Fixed Background */}
            <div className="fixed inset-0 z-0">
                <BackgroundPaths pattern="neural" />
            </div>

            {/* Hero Section */}
            <section className="relative w-full pt-28 sm:pt-32 pb-16 sm:pb-20 md:pb-28 border-b border-[var(--color-border)] overflow-hidden z-10">
                {/* Subtle background elements */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none">
                    <Fingerprint size={500} strokeWidth={0.5} />
                </div>
                <div className="absolute top-1/4 left-0 -translate-x-1/4 opacity-[0.03] pointer-events-none">
                    <Brain size={400} strokeWidth={0.5} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-2xl">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2, ease: "linear" }}
                            className="text-[#C5A55A] tracking-[0.3em] uppercase text-xs mb-4 drop-shadow-[0_0_5px_rgba(197,165,90,0.5)]"
                        >
                            &gt; Aptitude Mapping
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
                            className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl text-gradient-sunset tracking-wide mb-2"
                        >
                            DMIT Analysis
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.2, ease: "linear" }}
                            className="text-[#C5A55A] text-sm tracking-[0.1em] uppercase mb-6 drop-shadow-[0_0_4px_rgba(197,165,90,0.4)]"
                        >
                            Discover Your True Potential
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.2, ease: "linear" }}
                            className="text-[var(--color-text-muted)] text-base leading-relaxed mb-8 max-w-lg"
                        >
                            Uncover your inborn talents, multiple intelligences, and ideal career path through scientific dermatoglyphics assessment.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.2, ease: "linear" }}
                            className="btn-primary px-8 py-3 text-xs tracking-[0.15em] uppercase"
                        >
                            Book Assessment
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* What is DMIT? */}
            <section className="py-16 sm:py-20 md:py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[var(--color-bg-section)] border border-[var(--color-border)] p-5 sm:p-8 md:p-10 relative"
                        >
                            <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                <Fingerprint size={20} className="text-[#C5A55A] sm:hidden" />
                                <Fingerprint size={24} className="text-[#C5A55A] hidden sm:block" />
                                <h2 className="text-lg sm:text-xl font-orbitron font-bold text-[#C5A55A] drop-shadow-[0_0_5px_rgba(197,165,90,0.5)] tracking-wide">What is DMIT?</h2>
                            </div>
                            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
                                <strong className="text-[var(--color-text-secondary)]">Dermatoglyphics Multiple Intelligence Test (DMIT)</strong> is a truly scientific study of fingerprint patterns. It helps in understanding an individual's potential & personality type.
                            </p>
                            <ul className="space-y-4">
                                {['Discover Inborn Talent', 'Understand Learning Style', 'Identify Brain Dominance'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[var(--color-text-secondary)] text-sm">
                                        <CheckCircle2 className="text-[#C5A55A]" size={16} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[var(--color-bg-section)] border border-[var(--color-border)] p-5 sm:p-8 md:p-10 relative"
                        >
                            <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                <Brain size={20} className="text-[#C5A55A] sm:hidden" />
                                <Brain size={24} className="text-[#C5A55A] hidden sm:block" />
                                <h2 className="text-lg sm:text-xl font-orbitron font-bold text-[#C5A55A] drop-shadow-[0_0_5px_rgba(197,165,90,0.5)] tracking-wide">Psychometric Test</h2>
                            </div>
                            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
                                <strong className="text-[var(--color-text-secondary)]">Psychometric profiling</strong> scientifically measures current cognitive abilities, personality traits, and situational behaviors through self-reported questionnaires.
                            </p>
                            <ul className="space-y-4">
                                {['Current Aptitude & IQ Mapping', 'Assess Personality Traits', 'Measure Emotional Quotient'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[var(--color-text-secondary)] text-sm">
                                        <CheckCircle2 className="text-[#C5A55A]" size={16} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* DMIT Highlight Section */}
            <section className="py-10 sm:py-12 md:py-16 border-y border-[var(--color-border)] relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 sm:flex-row">
                        <Award size={32} className="text-[#C5A55A] sm:hidden" />
                        <Award size={40} className="text-[#C5A55A] hidden sm:block" />
                        <h2 className="text-base sm:text-xl md:text-2xl font-orbitron font-bold text-gradient-sunset tracking-wide">
                            India&apos;s Top
                            <span className="text-[var(--color-text-muted)] px-2 sm:px-3">|</span>
                            Kerala&apos;s 1st DMIT Lab
                        </h2>
                    </div>
                </div>
            </section>

            {/* DMIT vs Psychometric — Animated Comparison */}
            <section className="py-16 sm:py-20 md:py-24 relative z-10">
                <div className="text-center pb-6 sm:pb-8 px-4">
                    <p className="text-[#C5A55A] tracking-[0.3em] uppercase text-xs mb-4 drop-shadow-[0_0_5px_rgba(197,165,90,0.5)]">&gt; Methodology</p>
                    <h2 className="text-xl sm:text-2xl font-orbitron font-bold text-gradient-sunset tracking-wide mb-4">
                        DMIT <span className="text-[var(--color-text-muted)]">vs</span> Psychometric
                    </h2>
                    <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-[#C5A55A]/50 to-transparent shadow-[0_0_8px_rgba(197,165,90,0.3)] mb-6"></div>
                    <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-sm">Tap a card to reveal the details. Two powerful methodologies compared side by side.</p>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* DMIT Card */}
                        <ComparisonCard
                            icon={<Fingerprint size={28} />}
                            title="DMIT"
                            subtitle="Biometric Intelligence Mapping"
                            badge="Science-Backed"
                            items={[
                                { icon: <Dna size={16} />, text: "Biometric fingerprint-based" },
                                { icon: <ShieldCheck size={16} />, text: "High accuracy — doesn't change over time" },
                                { icon: <Clock size={16} />, text: "10–15 minute scan" },
                                { icon: <Zap size={16} />, text: "Suitable from age 3 onwards" },
                                { icon: <Sparkles size={16} />, text: "Reveals inborn talent & learning style" },
                            ]}
                            description="Dermatoglyphics Multiple Intelligence Test — a biometric analysis of fingerprint patterns that reveals inborn talents, brain dominance, and multiple intelligences."
                            delay={0}
                        />

                        {/* Psychometric Card */}
                        <ComparisonCard
                            icon={<Brain size={28} />}
                            title="Psychometric"
                            subtitle="Behavioral Profiling System"
                            badge="Behavior-Driven"
                            items={[
                                { icon: <BarChart3 size={16} />, text: "Questionnaire / self-report based" },
                                { icon: <Search size={16} />, text: "Variable — depends on mood & honesty" },
                                { icon: <Clock size={16} />, text: "30–60 minute test" },
                                { icon: <Lightbulb size={16} />, text: "Best suited from age 13+" },
                                { icon: <Award size={16} />, text: "Maps aptitude, personality & interest" },
                            ]}
                            description="Self-reported questionnaire that measures current cognitive abilities, personality traits, emotional quotient, and situational behavioral patterns."
                            delay={0.15}
                        />
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 sm:py-20 md:py-24 border-y border-[var(--color-border)] relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <p className="text-[#C5A55A] tracking-[0.3em] uppercase text-xs mb-4 drop-shadow-[0_0_5px_rgba(197,165,90,0.5)]">&gt; Process</p>
                        <h2 className="text-xl sm:text-2xl font-orbitron font-bold text-gradient-sunset tracking-wide mb-4">How it Works</h2>
                        <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-[#C5A55A]/50 to-transparent shadow-[0_0_8px_rgba(197,165,90,0.3)]"></div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-4 lg:gap-8 relative">
                        {/* Connecting Line background for desktop */}
                        <div className="hidden md:block absolute top-[48px] left-[12%] w-[76%] h-px bg-[var(--color-border)] z-0"></div>

                        {processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[var(--color-bg-primary)] border-2 border-[var(--color-border)] flex items-center justify-center mb-4 sm:mb-6 md:mb-8 group-hover:border-[#C5A55A]/40 group-hover:shadow-[0_0_15px_rgba(197,165,90,0.15)] transition-all duration-200 relative">
                                    <div className="text-[#C5A55A] transition-transform duration-200 group-hover:scale-110">{step.icon}</div>
                                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 bg-[#C5A55A] flex items-center justify-center text-[var(--color-bg-primary)] text-[10px] sm:text-xs font-medium shadow-[0_0_10px_rgba(197,165,90,0.4)]">
                                        {i + 1}
                                    </div>
                                </div>

                                <h3 className="text-sm font-medium text-[var(--color-text-primary)] mb-2">{step.title}</h3>
                                <p className="text-[var(--color-text-muted)] text-xs px-4 leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 sm:py-20 md:py-24 border-b border-[var(--color-border)] relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
                        {/* Animation Container */}
                        <div className="w-full md:w-[40%] flex justify-center">
                            <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] pointer-events-none">
                                <DotLottieReact
                                    src="/Thinking.lottie"
                                    loop
                                    autoplay
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full md:w-[60%] text-center md:text-left">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-orbitron font-bold text-gradient-sunset tracking-wide mb-4 sm:mb-6 leading-tight">
                                Wanna know more <br /> about these?
                            </h2>
                            <p className="text-[var(--color-text-muted)] text-sm mb-10 max-w-lg leading-relaxed">
                                Connect with our experts today and discover how our scientific assessments can transform your career trajectory.
                            </p>
                            <Link href="/contact" className="btn-primary px-8 py-3.5 text-xs tracking-[0.15em] uppercase inline-flex items-center gap-3">
                                Then Contact Us <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

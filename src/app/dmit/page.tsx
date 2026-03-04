"use client";

import { motion } from "framer-motion";
import { Brain, Fingerprint, CheckCircle2, ClipboardList, TrendingUp, CalendarCheck, FileBadge, Check, Award, ArrowUpRight, Lightbulb, Sparkles, Search, Dna, ShieldCheck, Clock, Zap, BarChart3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import dynamic from "next/dynamic";

const LightningSplit = dynamic(() => import("@/components/ui/lightning-split").then(mod => ({ default: mod.Component })), { ssr: false });

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
            className="w-full bg-[var(--color-bg-primary)]"
        >
            {/* Hero Section */}
            <section className="relative w-full pt-32 pb-20 md:pb-28 bg-[var(--color-bg-section)] border-b border-[var(--color-border)] overflow-hidden">
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
                            transition={{ duration: 0.6 }}
                            className="text-[var(--color-accent-gold)] tracking-[0.3em] uppercase text-xs mb-4"
                        >
                            Aptitude Mapping
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-bungee text-3xl sm:text-3xl md:text-4xl text-gold-glow tracking-wide mb-2"
                        >
                            DMIT Analysis
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-[var(--color-text-secondary)] text-sm tracking-[0.1em] uppercase mb-6"
                        >
                            Discover Your True Potential
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-[var(--color-text-muted)] text-base leading-relaxed mb-8 max-w-lg"
                        >
                            Uncover your inborn talents, multiple intelligences, and ideal career path through scientific dermatoglyphics assessment.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="btn-primary px-8 py-3 text-xs tracking-[0.15em] uppercase"
                        >
                            Book Assessment
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* What is DMIT? */}
            <section className="py-24 bg-[var(--color-bg-primary)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[var(--color-bg-section)] border border-[var(--color-border)] p-8 md:p-10 relative"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Fingerprint size={24} className="text-[var(--color-accent-gold)]" />
                                <h2 className="text-xl font-bungee text-gold-glow tracking-wide">What is DMIT?</h2>
                            </div>
                            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
                                <strong className="text-[var(--color-text-secondary)]">Dermatoglyphics Multiple Intelligence Test (DMIT)</strong> is a truly scientific study of fingerprint patterns. It helps in understanding an individual's potential & personality type.
                            </p>
                            <ul className="space-y-4">
                                {['Discover Inborn Talent', 'Understand Learning Style', 'Identify Brain Dominance'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[var(--color-text-secondary)] text-sm">
                                        <CheckCircle2 className="text-[var(--color-accent-gold)]" size={16} />
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
                            className="bg-[var(--color-bg-section)] border border-[var(--color-border)] p-8 md:p-10 relative"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Brain size={24} className="text-[var(--color-accent-gold)]" />
                                <h2 className="text-xl font-bungee text-gold-glow tracking-wide">Psychometric Test</h2>
                            </div>
                            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
                                <strong className="text-[var(--color-text-secondary)]">Psychometric profiling</strong> scientifically measures current cognitive abilities, personality traits, and situational behaviors through self-reported questionnaires.
                            </p>
                            <ul className="space-y-4">
                                {['Current Aptitude & IQ Mapping', 'Assess Personality Traits', 'Measure Emotional Quotient'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[var(--color-text-secondary)] text-sm">
                                        <CheckCircle2 className="text-[var(--color-accent-gold)]" size={16} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* DMIT Highlight Section */}
            <section className="py-16 bg-[var(--color-bg-section)] border-y border-[var(--color-border)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Award size={40} className="text-[var(--color-accent-gold)]" />
                        <h2 className="text-xl md:text-2xl font-bungee text-gold-glow tracking-wide">
                            India&apos;s Top
                            <span className="text-[var(--color-text-muted)] px-3">|</span>
                            Kerala&apos;s 1st DMIT Lab
                        </h2>
                    </div>
                </div>
            </section>

            {/* DMIT vs Psychometric — Lightning Split */}
            <section className="relative bg-[var(--color-bg-primary)]">
                <div className="text-center pt-24 pb-8 px-4">
                    <p className="text-[var(--color-accent-gold)] tracking-[0.3em] uppercase text-xs mb-4">Methodology</p>
                    <h2 className="text-2xl font-bungee text-gold-glow tracking-wide mb-4">
                        DMIT <span className="text-[var(--color-text-muted)]">vs</span> Psychometric
                    </h2>
                    <div className="gold-divider mx-auto mb-6"></div>
                    <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-sm">Hover each side to explore. An electric divide between two powerful methodologies.</p>
                </div>

                <LightningSplit
                    leftComponent={
                        <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#0D0B06] via-[#100D08] to-black px-8 md:px-16">
                            <div className="max-w-md space-y-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent-gold)]/10 border border-[var(--color-accent-gold)]/20 flex items-center justify-center">
                                        <Fingerprint size={24} className="text-[var(--color-accent-gold)]" />
                                    </div>
                                    <h3 className="text-3xl font-bungee text-[var(--color-accent-gold)] tracking-wide">DMIT</h3>
                                </div>
                                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                    Dermatoglyphics Multiple Intelligence Test — a biometric analysis of fingerprint patterns that reveals
                                    inborn talents, brain dominance, and multiple intelligences.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        { icon: <Dna size={16} />, text: "Biometric fingerprint-based" },
                                        { icon: <ShieldCheck size={16} />, text: "High accuracy — doesn't change over time" },
                                        { icon: <Clock size={16} />, text: "10–15 minute scan" },
                                        { icon: <Zap size={16} />, text: "Suitable from age 3 onwards" },
                                        { icon: <Sparkles size={16} />, text: "Reveals inborn talent & learning style" },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[var(--color-text-primary)]/80 text-sm">
                                            <span className="text-[var(--color-accent-gold)]">{item.icon}</span>
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-2">
                                    <span className="inline-block bg-[var(--color-accent-gold)]/15 text-[var(--color-accent-gold)] border border-[var(--color-accent-gold)]/20 px-4 py-2 text-xs font-medium tracking-wider uppercase rounded-full">
                                        Science-Backed
                                    </span>
                                </div>
                            </div>
                        </div>
                    }
                    rightComponent={
                        <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-bl from-[#080808] via-[#0A0A0A] to-[#050505] px-8 md:px-16">
                            <div className="max-w-md space-y-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-text-secondary)]/10 border border-[var(--color-text-secondary)]/20 flex items-center justify-center">
                                        <Brain size={24} className="text-[var(--color-text-secondary)]" />
                                    </div>
                                    <h3 className="text-3xl font-bungee text-[var(--color-text-primary)] tracking-wide">Psychometric</h3>
                                </div>
                                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                                    Self-reported questionnaire that measures current cognitive abilities, personality traits,
                                    emotional quotient, and situational behavioral patterns.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        { icon: <BarChart3 size={16} />, text: "Questionnaire / self-report based" },
                                        { icon: <Search size={16} />, text: "Variable — depends on mood & honesty" },
                                        { icon: <Clock size={16} />, text: "30–60 minute test" },
                                        { icon: <Lightbulb size={16} />, text: "Best suited from age 13+" },
                                        { icon: <Award size={16} />, text: "Maps aptitude, personality & interest" },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[var(--color-text-primary)]/70 text-sm">
                                            <span className="text-[var(--color-text-secondary)]">{item.icon}</span>
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-2">
                                    <span className="inline-block bg-[var(--color-text-secondary)]/10 text-[var(--color-text-secondary)] border border-[var(--color-text-secondary)]/20 px-4 py-2 text-xs font-medium tracking-wider uppercase rounded-full">
                                        Behavior-Driven
                                    </span>
                                </div>
                            </div>
                        </div>
                    }
                />
            </section>

            {/* Process Section */}
            <section className="py-24 bg-[var(--color-bg-section)] border-y border-[var(--color-border)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <p className="text-[var(--color-accent-gold)] tracking-[0.3em] uppercase text-xs mb-4">Process</p>
                        <h2 className="text-2xl font-bungee text-gold-glow tracking-wide mb-4">How it Works</h2>
                        <div className="gold-divider mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 relative">
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
                                <div className="w-24 h-24 bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center mb-8 group-hover:border-[var(--color-accent-gold)]/40 transition-colors relative">
                                    <div className="text-[var(--color-accent-gold)] transition-transform duration-300 group-hover:scale-110">{step.icon}</div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-[var(--color-accent-gold)] flex items-center justify-center text-[var(--color-bg-primary)] text-xs font-medium">
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
            <section className="py-24 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Animation Container */}
                        <div className="w-full md:w-[40%] flex justify-center">
                            <div className="w-full max-w-[350px] pointer-events-none">
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
                            <h2 className="text-2xl md:text-3xl font-bungee text-gold-glow tracking-wide mb-6 leading-tight">
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

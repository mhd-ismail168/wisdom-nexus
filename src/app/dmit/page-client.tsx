"use client";

import { motion } from "motion/react";
import { Brain, Fingerprint, CheckCircle2, ClipboardList, TrendingUp, CalendarCheck, FileBadge, Check, Award, ArrowUpRight, Lightbulb, Sparkles, Search, Dna, ShieldCheck, Clock, Zap, BarChart3, CalendarDays, User, Users, Phone, Mail, MapPin, FileText, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BackgroundPaths from "@/components/ui/modern-background-paths";
import { ReactNode, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Left: Text */}
                        <div>
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
                                onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Book Assessment
                            </motion.button>
                        </div>

                        {/* Right: Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="relative border-4 border-[#C5A55A]/30 rounded-2xl shadow-[0_0_30px_rgba(197,165,90,0.1)] overflow-hidden">
                                <Image
                                    src="/dmit_head.jpg"
                                    alt="DMIT fingerprint analysis revealing multiple intelligences and brain mapping"
                                    width={720}
                                    height={480}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>
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

            {/* DMIT Slot Booking Form */}
            <section className="py-16 sm:py-20 md:py-24 border-b border-[var(--color-border)] relative z-10" id="book">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <p className="text-[#C5A55A] tracking-[0.3em] uppercase text-xs mb-4 drop-shadow-[0_0_5px_rgba(197,165,90,0.5)]">&gt; Book a slot</p>
                        <h2 className="text-xl sm:text-2xl font-orbitron font-bold text-gradient-sunset tracking-wide mb-4">
                            Book Your DMIT Assessment Slot
                        </h2>
                        <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-[#C5A55A]/50 to-transparent shadow-[0_0_8px_rgba(197,165,90,0.3)] mb-4"></div>
                        <p className="text-[var(--color-text-muted)] max-w-xl mx-auto text-sm">
                            Reserve your preferred time for a Dermatoglyphics Multiple Intelligence Test session.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                        {/* Form */}
                        <div className="lg:col-span-2">
                            <BookingForm />
                        </div>

                        {/* Info Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[var(--color-bg-section)]/60 backdrop-blur-sm border border-[var(--color-border)] p-6 sm:p-8 h-fit"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Fingerprint size={22} className="text-[#C5A55A]" />
                                <h3 className="text-sm font-orbitron font-bold text-[#C5A55A] tracking-wide">What to Expect</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "10–15 minute fingerprint scan",
                                    "Detailed 40+ page analysis report",
                                    "1-on-1 career counseling session",
                                    "Suitable for ages 3 and above",
                                    "Scientific & non-invasive process",
                                    "Report delivered within 7 days",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[var(--color-text-secondary)] text-sm">
                                        <CheckCircle2 className="text-[#C5A55A] shrink-0 mt-0.5" size={14} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                                <p className="text-[var(--color-text-muted)] text-xs leading-relaxed">
                                    Need help booking? Call us at{" "}
                                    <a href="tel:+919037221362" className="text-[#C5A55A] hover:underline">+91 90372 21362</a>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

/* ── Form styling constants ── */

import { useMemo } from "react";

const inputClass = "w-full bg-[#121212] border border-[#C5A55A]/20 focus:border-[#C5A55A] focus:shadow-[0_0_10px_rgba(197,165,90,0.15)] px-4 py-3 outline-none text-[var(--color-text-primary)] text-sm transition-all duration-200 placeholder:text-[var(--color-text-muted)] [color-scheme:dark]";
const labelClass = "text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.15em]";
const sectionHeadingClass = "text-xs font-orbitron font-bold text-[#C5A55A] tracking-[0.15em] uppercase mb-5 flex items-center gap-2.5";

function BookingForm() {
    const [state, handleSubmit] = useForm("mwvaqnkz");
    // Memoize cities and timeSlots to avoid re-creating arrays on every render
    const cities = useMemo(() => [
        "Thiruvananthapuram", "Alappuzha", "Kochi", "Malappuram", "Palakkad"
    ], []);
    const timeSlots = useMemo(() => [
        "10:00 AM – 11:00 AM", "11:30 AM – 12:30 PM", "02:00 PM – 03:00 PM", "04:00 PM – 05:00 PM"
    ], []);

    if (state.succeeded) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-[var(--color-bg-section)]/60 backdrop-blur-sm border border-[#C5A55A]/30 p-8 sm:p-12 md:p-16 text-center shadow-[0_0_40px_rgba(197,165,90,0.08)]"
            >
                {/* Success Icon */}
                <div className="w-20 h-20 bg-[#C5A55A]/10 border border-[#C5A55A]/30 flex items-center justify-center mx-auto mb-8 rotate-45">
                    <CheckCircle2 className="text-[#C5A55A] -rotate-45" size={32} />
                </div>

                <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-[#C5A55A] drop-shadow-[0_0_8px_rgba(197,165,90,0.5)] tracking-wide mb-4">
                    Slot Request Received
                </h3>

                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-lg mx-auto mb-3">
                    Your DMIT slot request has been received.
                </p>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-lg mx-auto mb-10">
                    Our team will contact you shortly to confirm the assessment time.
                </p>

                {/* Divider */}
                <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#C5A55A]/40 to-transparent mb-10"></div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/919037221362"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-[#C5A55A]/40 text-[var(--color-text-primary)] text-xs tracking-[0.12em] uppercase font-bold hover:border-[#C5A55A] hover:shadow-[0_0_20px_rgba(197,165,90,0.2)] transition-all duration-300"
                    >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366]" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Chat With Us on WhatsApp
                    </a>

                    {/* Back to Home */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C5A55A] text-[var(--color-bg-primary)] text-xs tracking-[0.12em] uppercase font-bold hover:shadow-[0_0_25px_rgba(197,165,90,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-bg-section)]/60 backdrop-blur-sm border border-[var(--color-border)] p-6 sm:p-8 md:p-10"
        >
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">

                {/* ── Section 1: Student Information ── */}
                <fieldset className="space-y-5">
                    <legend className={sectionHeadingClass}>
                        <User size={14} className="text-[#C5A55A]" />
                        Student Information
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                        <div className="space-y-2">
                            <label className={labelClass}>First Name *</label>
                            <input name="firstName" type="text" required placeholder="Enter student's first name" className={inputClass} />
                            <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                        </div>
                        <div className="space-y-2">
                            <label className={labelClass}>Last Name *</label>
                            <input name="lastName" type="text" required placeholder="Enter student's last name" className={inputClass} />
                            <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                        </div>
                        <div className="space-y-2">
                            <label className={labelClass}>Student Age *</label>
                            <input name="studentAge" type="number" required min={3} max={99} placeholder="Enter student's age" className={inputClass} />
                            <ValidationError prefix="Student Age" field="studentAge" errors={state.errors} />
                        </div>
                    </div>
                </fieldset>

                {/* Divider */}
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent"></div>

                {/* ── Section 2: Parent / Guardian Contact ── */}
                <fieldset className="space-y-5">
                    <legend className={sectionHeadingClass}>
                        <Users size={14} className="text-[#C5A55A]" />
                        Parent / Guardian Contact
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                        <div className="space-y-2">
                            <label className={labelClass}>Parent / Guardian Name *</label>
                            <input name="guardianName" type="text" required placeholder="Name of parent or guardian" className={inputClass} />
                            <ValidationError prefix="Guardian Name" field="guardianName" errors={state.errors} />
                        </div>
                        <div className="space-y-2">
                            <label className={labelClass}>Phone Number *</label>
                            <input name="phone" type="tel" required placeholder="Enter contact number for confirmation" className={inputClass} />
                            <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                        </div>
                        <div className="space-y-2">
                            <label className={labelClass}>Email Address *</label>
                            <input name="email" type="email" required placeholder="Enter email for report delivery" className={inputClass} />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                    </div>
                </fieldset>

                {/* Divider */}
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent"></div>

                {/* ── Section 3: Booking Details ── */}
                <fieldset className="space-y-5">
                    <legend className={sectionHeadingClass}>
                        <CalendarDays size={14} className="text-[#C5A55A]" />
                        Booking Details
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                        <div className="space-y-2">
                            <label className={labelClass}>Preferred City *</label>
                            <select name="city" required defaultValue="" className={`${inputClass} appearance-none cursor-pointer`}>
                                <option value="" disabled>Select city</option>
                                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className={labelClass}>Preferred Date *</label>
                            <input name="date" type="date" required min={new Date().toISOString().split('T')[0]} className={`${inputClass} cursor-pointer`} />
                        </div>
                        <div className="space-y-2">
                            <label className={labelClass}>Preferred Time Slot *</label>
                            <select name="timeSlot" required defaultValue="" className={`${inputClass} appearance-none cursor-pointer`}>
                                <option value="" disabled>Select time slot</option>
                                {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                    </div>
                </fieldset>

                {/* Divider */}
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent"></div>

                {/* ── Section 4: Additional Notes ── */}
                <fieldset className="space-y-5">
                    <legend className={sectionHeadingClass}>
                        <FileText size={14} className="text-[#C5A55A]" />
                        Additional Notes
                    </legend>
                    <textarea name="notes" rows={3} placeholder="Any special requests or questions about the DMIT assessment" className={`${inputClass} resize-none`} />
                    <ValidationError prefix="Notes" field="notes" errors={state.errors} />
                </fieldset>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-[#C5A55A] text-[var(--color-bg-primary)] text-xs tracking-[0.15em] uppercase font-bold hover:shadow-[0_0_25px_rgba(197,165,90,0.3)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none"
                >
                    {state.submitting ? "Submitting…" : "Book DMIT Slot"} <Send size={14} />
                </button>
                <ValidationError errors={state.errors} />
            </form>
        </motion.div>
    );
}

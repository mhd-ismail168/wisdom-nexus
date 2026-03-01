"use client";

import { motion } from "framer-motion";
import { Brain, Fingerprint, CheckCircle2, ClipboardList, TrendingUp, CalendarCheck, FileBadge, Check, Award, ArrowUpRight, Lightbulb, Sparkles, Search, Dna } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function DmitPage() {
    const processSteps = [
        { icon: <ClipboardList size={32} />, title: "Register", desc: "Book your assessment slot online." },
        { icon: <CheckCircle2 size={32} />, title: "Take Test", desc: "Complete the offline/online test." },
        { icon: <FileBadge size={32} />, title: "Get Detailed Report", desc: "Receive a comprehensive multi-page analysis." },
        { icon: <TrendingUp size={32} />, title: "Career Guidance", desc: "1-on-1 counseling session with experts." }
    ];

    const comparison = [
        { feature: "Basis of Assessment", dmit: "Biometric (Fingerprints)", psych: "Questionnaire (Self-report)" },
        { feature: "Age Group", dmit: "From age 3 onwards", psych: "Typically from age 13+" },
        { feature: "Focus Area", dmit: "Inbort talents, learning styles", psych: "Current aptitude, personality, interest" },
        { feature: "Accuracy", dmit: "High (Does not change over time)", psych: "Variable (Depends on mood/honesty)" },
        { feature: "Duration", dmit: "10-15 mins scanning", psych: "30-60 mins test" }
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative w-full pt-32 pb-20 md:pb-32 overflow-hidden bg-[--color-bg-page]">
                {/* Decorative Elements */}
                <div className="absolute top-40 left-10 text-[#1d3540] font-extrabold text-2xl opacity-20 rotate-45">+</div>
                <div className="absolute top-24 right-[55%] text-[#1d3540] font-extrabold text-2xl opacity-20">+</div>
                <div className="absolute bottom-20 left-[40%] text-[#1d3540] font-extrabold text-2xl opacity-20 -rotate-12">+</div>

                {/* Decorative Sparkles */}
                <div className="absolute top-32 right-[45%] text-[#FA9C0F] opacity-30 transform -rotate-12">
                    <Sparkles size={48} strokeWidth={1.5} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center mt-8 md:mt-0">
                    {/* Left Typography Side */}
                    <div className="w-full md:w-1/2 lg:w-5/12 text-left mb-16 md:mb-0 relative z-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
                            className="flex flex-col tracking-tight"
                        >
                            <span className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-black leading-[0.85] text-[#2aa5ae] font-[family-name:var(--font-heading)] uppercase drop-shadow-sm">DMIT</span>
                            <span className="text-5xl md:text-[4rem] lg:text-[5rem] font-black leading-[0.85] text-[#FA9C0F] font-[family-name:var(--font-heading)] uppercase drop-shadow-sm mt-1">Analysis</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-xl md:text-2xl font-extrabold text-[#111] tracking-widest uppercase mt-6 mb-4"
                        >
                            Discover Your True Potential
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-[--color-text-gray] text-lg font-medium leading-relaxed max-w-sm lg:max-w-md mb-8"
                        >
                            Uncover your inborn talents, multiple intelligences, and ideal career path through scientific dermatoglyphics assessment.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
                            className="px-8 py-3.5 bg-[#2aa5ae] hover:bg-[#16636a] text-white rounded-full font-extrabold tracking-wide uppercase shadow-[0_8px_20px_rgba(42,165,174,0.3)] transition-all hover:shadow-[0_12px_25px_rgba(42,165,174,0.4)] hover:-translate-y-1"
                        >
                            Book Assessment
                        </motion.button>
                    </div>

                    {/* Right Animated CSS Doodle Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }}
                        className="w-full md:w-1/2 lg:w-7/12 relative flex justify-center items-end h-[450px] md:h-[500px]"
                    >
                        {/* Background Silhouettes & Glows */}
                        <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none">
                            <div className="absolute w-[300px] h-[300px] bg-[#2aa5ae]/10 rounded-full blur-[60px] top-1/2 left-1/4 transform -translate-y-1/2"></div>
                            <div className="absolute w-[250px] h-[250px] bg-[#FA9C0F]/10 rounded-full blur-[60px] top-1/4 right-1/4"></div>

                            {/* Abstract Fingerprint Background SVG */}
                            <motion.div animate={{ opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -left-10 text-[#2aa5ae]">
                                <Fingerprint size={350} strokeWidth={0.5} />
                            </motion.div>

                            {/* Abstract Brain Background SVG */}
                            <motion.div animate={{ opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute right-0 top-10 text-[#FA9C0F]">
                                <Brain size={250} strokeWidth={0.5} />
                            </motion.div>
                        </div>

                        {/* Ground Line */}
                        <div className="absolute bottom-5 w-[110%] h-1 bg-gray-800 rounded-full z-10 opacity-30"></div>

                        {/* Floating Brain Node */}
                        <motion.div
                            animate={{ y: [-15, 15, -15], rotate: [-5, 5, -5] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute top-10 right-10 md:top-16 md:right-16 z-30 glass bg-white/80 p-5 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white"
                        >
                            <div className="bg-[#FA9C0F] w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
                                <Brain size={32} className="text-white" />
                            </div>
                        </motion.div>

                        {/* Floating Fingerprint Scanner */}
                        <motion.div
                            animate={{ y: [15, -15, 15] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 left-4 md:bottom-28 md:left-10 z-30 glass bg-white/80 p-5 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white"
                        >
                            <div className="bg-[#2aa5ae] w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 relative overflow-hidden">
                                <Fingerprint size={36} className="text-white opacity-80" />
                                <motion.div animate={{ y: [-20, 60, -20] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-0 w-full h-1 bg-white/60 shadow-[0_0_10px_white]"></motion.div>
                            </div>
                        </motion.div>

                        {/* Floating Lightbulb */}
                        <motion.div
                            animate={{ y: [-8, 8, -8], scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-1/4 left-8 md:top-1/3 md:-left-4 z-30 bg-white p-3 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.1)] border border-white"
                        >
                            <Lightbulb size={36} className="text-[#FA9C0F]" fill="#FA9C0F" color="#FA9C0F" />
                        </motion.div>

                        {/* Holographic Chart/Screen */}
                        <div className="absolute bottom-5 right-20 sm:right-28 z-20 flex flex-col items-center">
                            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-28 h-40 bg-white/60 backdrop-blur-md rounded-2xl border-4 border-white shadow-xl p-3 flex flex-col gap-3 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#2aa5ae]/10 to-transparent"></div>
                                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <motion.div animate={{ width: ['30%', '80%', '40%'] }} transition={{ duration: 5, repeat: Infinity }} className="h-full bg-[#2aa5ae]"></motion.div>
                                </div>
                                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <motion.div animate={{ width: ['70%', '40%', '90%'] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-[#FA9C0F]"></motion.div>
                                </div>
                                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                    <motion.div animate={{ width: ['50%', '90%', '60%'] }} transition={{ duration: 6, repeat: Infinity }} className="h-full bg-[#3bb3bc]"></motion.div>
                                </div>
                                {/* DNA icon overlay */}
                                <div className="mt-auto flex justify-center opacity-40">
                                    <Search size={24} className="text-[#2aa5ae] -mb-1 animate-pulse" />
                                </div>
                            </motion.div>
                            <div className="w-16 h-4 bg-gray-200 rounded-b-lg border-t-2 border-gray-300 shadow-sm mt-2"></div>
                        </div>

                        {/* Central Data Core (Replacing Character) */}
                        <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative z-30 flex flex-col items-center bottom-20 mr-10 sm:mr-32">
                            {/* Glowing Aura Base */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FA9C0F]/20 rounded-full blur-[40px] z-0"></div>

                            {/* Main Hexagon Container */}
                            <div className="relative z-10 w-44 h-44 bg-gradient-to-br from-[#2aa5ae]/80 to-[#16636a]/90 backdrop-blur-xl border border-white/40 shadow-[0_20px_50px_rgba(42,165,174,0.3)] rounded-[2rem] flex items-center justify-center overflow-hidden transform rotate-12">
                                <motion.div animate={{ rotate: -12 }} className="relative z-20 flex items-center justify-center">
                                    <Brain size={100} className="text-white drop-shadow-md" strokeWidth={1} />
                                    {/* Scanning line */}
                                    <motion.div animate={{ y: [-40, 40, -40] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute w-32 h-1 bg-white/80 shadow-[0_0_15px_white] left-1/2 transform -translate-x-1/2"></motion.div>
                                </motion.div>

                                {/* Background Grid overlay */}
                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "10px 10px" }}></div>
                            </div>

                            {/* Floating Analytics Paper 1 */}
                            <motion.div
                                animate={{ y: [-8, 8, -8], rotate: [-10, -5, -10] }}
                                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -top-12 -left-12 z-20 w-24 h-32 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100 p-3 flex flex-col gap-2"
                            >
                                <div className="w-8 h-8 rounded-lg bg-[#FA9C0F]/20 flex items-center justify-center mb-1">
                                    <Fingerprint size={16} className="text-[#FA9C0F]" />
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full"></div>
                                <div className="w-4/5 h-1.5 bg-gray-100 rounded-full"></div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2"></div>
                            </motion.div>

                            {/* Floating Analytics Paper 2 */}
                            <motion.div
                                animate={{ y: [8, -8, 8], rotate: [10, 15, 10] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-8 -right-12 z-20 w-28 h-24 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100 p-3 flex flex-col gap-2 justify-center"
                            >
                                <div className="flex justify-between items-end h-10 w-full px-1 border-b border-gray-100 pb-1">
                                    <motion.div animate={{ height: ['40%', '80%', '40%'] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 bg-[#2aa5ae] rounded-t-sm"></motion.div>
                                    <motion.div animate={{ height: ['70%', '30%', '70%'] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-3 bg-[#FA9C0F] rounded-t-sm"></motion.div>
                                    <motion.div animate={{ height: ['20%', '90%', '20%'] }} transition={{ duration: 3, repeat: Infinity }} className="w-3 bg-[#1d3540] rounded-t-sm"></motion.div>
                                    <motion.div animate={{ height: ['60%', '50%', '60%'] }} transition={{ duration: 3.5, repeat: Infinity }} className="w-3 bg-[#3bb3bc] rounded-t-sm"></motion.div>
                                </div>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full mt-1"></div>
                            </motion.div>

                            {/* Glowing Orbit Rings */}
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 w-[280px] h-[280px] border border-[#2aa5ae]/30 rounded-full border-dashed transform -translate-x-1/2 -translate-y-1/2 -z-10"></motion.div>
                            <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 w-[340px] h-[340px] border border-[#FA9C0F]/20 rounded-full border-dotted transform -translate-x-1/2 -translate-y-1/2 -z-10"></motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* What is DMIT? */}
            <section className="py-24 bg-[--color-bg-light]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass bg-white/50 border border-gray-100 p-10 rounded-[3rem] shadow-2xl relative">
                            <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#2aa5ae] rounded-2xl flex items-center justify-center text-white shadow-lg rotate-12">
                                <Fingerprint size={40} />
                            </div>
                            <h2 className="text-4xl font-bold text-[#111] mb-6 font-[family-name:var(--font-heading)] pt-4">What is DMIT?</h2>
                            <p className="text-[--color-text-gray] text-lg leading-relaxed mb-6 font-medium">
                                <strong>Dermatoglyphics Multiple Intelligence Test (DMIT)</strong> is a truly scientific study of fingerprint patterns. It helps in understanding an individual's potential & personality type.
                            </p>
                            <ul className="space-y-4">
                                {['Discover Inborn Talent', 'Understand Learning Style', 'Identify Brain Dominance'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[#111] font-bold">
                                        <CheckCircle2 className="text-[#2aa5ae]" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass bg-white/50 border border-gray-100 p-10 rounded-[3rem] shadow-2xl relative">
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#FA9C0F] rounded-2xl flex items-center justify-center text-white shadow-lg -rotate-12">
                                <Brain size={40} />
                            </div>
                            <h2 className="text-4xl font-bold text-[#111] mb-6 font-[family-name:var(--font-heading)] pt-4">Psychometric Test</h2>
                            <p className="text-[--color-text-gray] text-lg leading-relaxed mb-6 font-medium">
                                <strong>Psychometric profiling</strong> scientifically measures current cognitive abilities, personality traits, and situational behaviors through self-reported questionnaires.
                            </p>
                            <ul className="space-y-4">
                                {['Current Aptitude & IQ Mapping', 'Assess Personality Traits', 'Measure Emotional Quotient'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[#111] font-bold">
                                        <CheckCircle2 className="text-[#FA9C0F]" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* DMIT Highlight Section */}
            <section className="pt-8 pb-20 bg-[--color-bg-page] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex flex-col md:flex-row items-center justify-center gap-8 px-10 md:px-16 py-10 rounded-[3rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-t-4 border-[#FA9C0F] group hover:shadow-[0_8px_30px_rgba(250,156,15,0.15)] transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Interactive glow effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FA9C0F] opacity-5 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-1000"></div>

                        <motion.div
                            animate={{ rotate: [-5, 5, -5] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FA9C0F] to-[#FFB340] flex items-center justify-center text-white shadow-xl shadow-[#FA9C0F]/30 shrink-0"
                        >
                            <Award size={48} className="text-white drop-shadow-md" strokeWidth={2.5} />
                        </motion.div>
                        <div className="text-center md:text-left z-10">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111] uppercase tracking-wide leading-tight"
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2aa5ae] to-[#3bb3bc]">India's Top</span> <span className="text-gray-300 px-2 font-light hidden md:inline">|</span><br className="md:hidden" />
                                <span className="text-[#FA9C0F]">Kerala's 1st</span> DMIT Lab
                            </motion.h2>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 font-[family-name:var(--font-heading)]">
                            <span className="text-[#2aa5ae]">DMIT</span> <span className="text-gray-400 font-light mx-2">vs</span> <span className="text-[#FA9C0F]">Psychometric</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#2aa5ae] to-[#FA9C0F] mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto font-medium text-lg">Which test is right for you? Compare both methodologies side-by-side.</p>
                    </div>

                    <div className="overflow-x-auto rounded-[2.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100 bg-white p-2 md:p-4">
                        <table className="w-full min-w-[700px] border-collapse bg-white">
                            <thead>
                                <tr>
                                    <th className="py-6 px-8 text-left font-bold text-gray-500 uppercase tracking-widest text-sm border-b-2 border-gray-100 w-1/3">Feature Focus</th>
                                    <th className="py-6 px-8 text-center font-extrabold text-[#2aa5ae] text-xl uppercase tracking-wider bg-[#2aa5ae]/5 rounded-tl-3xl rounded-tr-xl border-b-2 border-[#2aa5ae]/20 w-1/3">DMIT</th>
                                    <th className="py-6 px-8 text-center font-extrabold text-[#FA9C0F] text-xl uppercase tracking-wider bg-[#FA9C0F]/5 rounded-tr-3xl rounded-tl-xl border-b-2 border-[#FA9C0F]/20 w-1/3">Psychometric</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparison.map((row, i) => (
                                    <motion.tr
                                        key={i}
                                        whileHover={{ backgroundColor: "rgba(250, 251, 252, 1)" }}
                                        className="border-b border-gray-50 transition-colors group cursor-pointer"
                                    >
                                        <td className="py-6 px-8 font-bold text-[#111] group-hover:text-[#2aa5ae] transition-colors">{row.feature}</td>
                                        <td className="py-6 px-8 text-center text-gray-600 font-medium bg-[#2aa5ae]/[0.02] group-hover:bg-[#2aa5ae]/5 transition-colors">{row.dmit}</td>
                                        <td className="py-6 px-8 text-center text-gray-600 font-medium bg-[#FA9C0F]/[0.02] group-hover:bg-[#FA9C0F]/5 transition-colors">{row.psych}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-[--color-bg-light]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-extrabold text-[#111] mb-6 font-[family-name:var(--font-heading)]">How it Works</h2>
                        <div className="w-24 h-1 bg-[#2aa5ae] mx-auto rounded-full mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 relative">
                        {/* Connecting Line background for desktop */}
                        <div className="hidden md:block absolute top-[60px] left-[10%] w-[80%] h-1 bg-gradient-to-r from-[#2aa5ae] to-[#3bb3bc] rounded-full z-0 opacity-20"></div>

                        {processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className="w-28 h-28 rounded-[2rem] bg-white shadow-xl flex items-center justify-center mb-8 border border-gray-100 group-hover:border-[#2aa5ae] group-hover:shadow-[0_8px_30px_rgba(42,165,174,0.2)] transition-all duration-300 group-hover:-translate-y-2 relative">
                                    <div className="text-[#2aa5ae] transition-transform duration-300 group-hover:scale-110">{step.icon}</div>

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#FA9C0F] to-[#FFB340] flex items-center justify-center text-[#111] font-extrabold text-lg shadow-lg">
                                        {i + 1}
                                    </div>
                                </div>

                                <h3 className="text-xl font-extrabold text-[#111] mb-3">{step.title}</h3>
                                <p className="text-[--color-text-gray] font-medium px-4 text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pt-10 md:pt-16 bg-gradient-to-br from-[#16636a] via-[#2aa5ae] to-[#3bb3bc] text-center md:text-left text-white relative overflow-hidden">
                {/* Decorative background blur */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute -top-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#FA9C0F] opacity-20 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-end justify-between">
                        {/* Animation Container */}
                        <div className="w-full md:w-[45%] flex justify-center md:justify-start order-2 md:order-1 relative z-20">
                            <div className="w-full max-w-[400px] md:max-w-[500px] pointer-events-none transform scale-[1.4] md:scale-[1.8] lg:scale-[2] origin-bottom translate-y-2 md:translate-y-4">
                                <DotLottieReact
                                    src="/Thinking.lottie"
                                    loop
                                    autoplay
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full md:w-[55%] flex flex-col items-center md:items-start md:pl-10 lg:pl-16 order-1 md:order-2 pb-12 md:pb-20 pt-4 lg:pt-8 z-10">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-[family-name:var(--font-heading)] leading-tight drop-shadow-md">
                                Wanna know more <br /> about these?
                            </h2>
                            <p className="text-lg md:text-xl text-teal-50 font-medium mb-10 max-w-lg leading-relaxed drop-shadow-sm">
                                Connect with our experts today and discover how our scientific assessments can transform your career trajectory.
                            </p>
                            <Link href="/contact" className="px-8 py-4 lg:px-10 lg:py-4 rounded-[2rem] bg-[#FA9C0F] hover:bg-[#FFB340] text-[#111] font-extrabold text-lg lg:text-xl shadow-[0_10px_40px_rgba(250,156,15,0.4)] hover:shadow-[0_15px_50px_rgba(250,156,15,0.6)] hover:-translate-y-2 transition-all duration-300 inline-flex items-center gap-3 group">
                                Then Contact Us <ArrowUpRight size={28} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

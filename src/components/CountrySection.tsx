"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { studyAbroadCountries } from "@/data/countries";
import {
    ChevronDown, MapPin, Landmark, Briefcase,
    CheckCircle, BookOpen, GraduationCap, ArrowRight, DollarSign,
    Clock, Award, Sparkles, Building2, Ticket, GraduationCap as GradIcon,
    Plane, ShieldCheck, Map
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function CountrySection() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
        const isExpanding = expandedId !== id;
        setExpandedId(isExpanding ? id : null);
    };

    const primaryEase = [0.22, 1, 0.36, 1] as const;

    const contentStagger = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const subsectionReveal = {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: primaryEase } }
    };

    const dividerReveal = {
        hidden: { scaleX: 0, opacity: 0 },
        visible: { scaleX: 1, opacity: 1, transition: { duration: 0.8, ease: primaryEase } }
    };

    const universityReaveal = {
        hidden: { opacity: 0, x: -16 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: primaryEase } }
    };

    const tagStagger = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
    };

    const tagReveal = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: primaryEase } }
    };

    return (
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 md:space-y-16 pb-12 sm:pb-16 md:pb-20 relative z-30">
            {studyAbroadCountries.map((country) => (
                <div
                    key={country.id}
                    className={`w-full bg-[var(--color-bg-section)] transition-all border ${expandedId === country.id
                        ? "border-[var(--color-accent-gold)]/20"
                        : "border-[var(--color-border)] hover:border-[var(--color-text-muted)]/20 cursor-pointer"
                        }`}
                >
                    {/* Collapsed/Header State */}
                    <div
                        onClick={(e) => toggleExpand(country.id, e)}
                        className={`w-full p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start md:items-center justify-between transition-colors duration-300 ${expandedId === country.id ? "border-b border-[var(--color-border)] bg-[var(--color-surface)]" : ""
                            }`}
                        style={{ cursor: expandedId === country.id ? "default" : "pointer" }}
                    >
                        {expandedId !== country.id && (
                            <motion.div
                                layoutId={`country-img-${country.id}`}
                                className="w-full md:w-48 h-48 md:h-32 bg-[var(--color-surface)] shrink-0 overflow-hidden relative border border-[var(--color-border)]"
                            >
                                <Image
                                    src={country.image}
                                    alt={`${country.name} landscape`}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 192px"
                                    priority={country.id === 'canada' || country.id === 'uk'}
                                />
                            </motion.div>
                        )}

                        {/* Title & Tagline */}
                        <div className="flex-1 w-full">
                            <div className="flex items-center gap-3 sm:gap-4 mb-2">
                                <span className="text-2xl sm:text-3xl md:text-4xl">{country.flag}</span>
                                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-orbitron text-[var(--color-text-primary)] tracking-wide">{country.name}</h3>
                            </div>
                            <p className="text-sm text-[var(--color-accent-gold)] mt-2">{country.tagline}</p>

                            {/* Summary Tags */}
                            <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-6 gap-y-2 sm:gap-y-3 mt-4 sm:mt-6">
                                <span className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                                    <DollarSign size={14} className="text-[var(--color-accent-gold)]" /> {country.tuition}
                                </span>
                                <span className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                                    <Briefcase size={14} className="text-[var(--color-accent-gold)]" /> {country.work}
                                </span>
                                <span className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                                    <Clock size={14} className="text-[var(--color-accent-gold)]" /> {country.postStudy}
                                </span>
                                <span className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                                    <Award size={14} className="text-[var(--color-accent-gold)]" /> {country.prPathway}
                                </span>
                            </div>
                        </div>

                        {/* Expand Icon */}
                        <div className="mt-4 md:mt-2 shrink-0 md:self-center self-end">
                            <motion.div animate={{ rotate: expandedId === country.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                <ChevronDown size={28} className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-gold)] transition-colors" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Expanded Content State */}
                    <AnimatePresence>
                        {expandedId === country.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                                className="overflow-hidden"
                            >
                                <motion.div variants={contentStagger} initial="hidden" animate="visible" exit="hidden" className="p-4 sm:p-6 md:p-8 lg:p-12 space-y-10 sm:space-y-12 md:space-y-16">

                                    {/* 1 Hero Subsection */}
                                    <motion.div variants={subsectionReveal} className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 items-start relative z-10">
                                        <motion.div
                                            layoutId={`country-img-${country.id}`}
                                            className="w-full md:w-1/2 lg:w-5/12 h-48 sm:h-56 md:h-72 lg:h-80 bg-[var(--color-surface)] shrink-0 overflow-hidden relative border border-[var(--color-border)]"
                                        >
                                            <Image
                                                src={country.image}
                                                alt={`${country.name} landscape`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                                            />
                                        </motion.div>

                                        <div className="flex-1 w-full pt-2">
                                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-orbitron text-[var(--color-text-primary)] tracking-wide leading-tight mb-3 sm:mb-4">
                                                Study in <span className="text-[var(--color-accent-gold)]">{country.name}</span>
                                            </h2>
                                            <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                                                {country.name} offers Indian students exceptional {country.tagline.toLowerCase()}.
                                                Explore world-leading academic programs, post-study work regulations, and admission requirements tailored for international success.
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* 2 & 5 Grid */}
                                    <motion.div variants={subsectionReveal} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 relative z-10">
                                        {/* Why Study */}
                                        <div className="relative z-10 bg-[var(--color-surface)] p-5 sm:p-6 md:p-8 border border-[var(--color-border)]">
                                            <h3 className="flex items-center gap-3 text-base sm:text-lg md:text-xl font-orbitron text-[var(--color-text-primary)] mb-4 sm:mb-6 tracking-wide">
                                                <Sparkles size={20} className="text-[var(--color-accent-gold)]" /> Why {country.name}?
                                            </h3>
                                            <ul className="space-y-4">
                                                {country.whyStudy.map((point, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <div className="mt-2 w-1.5 h-1.5 bg-[var(--color-accent-gold)] shrink-0"></div>
                                                        <span className="text-[var(--color-text-secondary)] text-sm">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tuition & Living */}
                                        <div className="relative z-10">
                                            <h3 className="flex items-center gap-3 text-base sm:text-lg md:text-xl font-orbitron text-[var(--color-text-primary)] mb-4 sm:mb-6 tracking-wide">
                                                <DollarSign size={20} className="text-[var(--color-accent-gold)]" /> Financial Overview
                                            </h3>
                                            <div className="flex flex-col gap-4 sm:gap-6 bg-[var(--color-surface)] p-4 sm:p-6 md:p-8 border border-[var(--color-border)] relative overflow-hidden">
                                                <div className="relative z-10">
                                                    <span className="block text-[10px] text-[var(--color-accent-gold)] uppercase tracking-[0.2em] mb-1">Average Tuition</span>
                                                    <span className="text-xl font-orbitron text-[var(--color-text-primary)] tracking-wide">{country.tuition}</span>
                                                </div>
                                                <div className="w-full h-px bg-[var(--color-border)] relative z-10"></div>
                                                <div className="relative z-10">
                                                    <span className="block text-[10px] text-[var(--color-accent-gold)] uppercase tracking-[0.2em] mb-1">Estimated Living Cost</span>
                                                    <span className="text-xl font-orbitron text-[var(--color-text-primary)] tracking-wide">{country.living}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={dividerReveal} className="w-full h-px bg-[var(--color-border)] origin-left"></motion.div>

                                    {/* 4 Top Universities & 3 Popular Courses Grid */}
                                    <motion.div variants={subsectionReveal} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 relative z-10">
                                        {/* Top Universities */}
                                        <div className="relative z-10">
                                            <h3 className="flex items-center gap-3 text-base sm:text-lg md:text-xl font-orbitron text-[var(--color-text-primary)] mb-6 sm:mb-8 tracking-wide pl-2">
                                                <Building2 size={20} className="text-[var(--color-accent-gold)]" /> Top Universities
                                            </h3>
                                            <motion.div variants={tagStagger} initial="hidden" animate="visible" className="space-y-4">
                                                {country.universities.map((uni, idx) => (
                                                    <motion.div variants={universityReaveal} key={idx} className="flex items-start gap-3 sm:gap-5 group p-3 sm:p-4 border border-transparent hover:border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-all cursor-default">
                                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center shrink-0 group-hover:border-[var(--color-accent-gold)]/30 transition-colors">
                                                            <Landmark size={20} className="text-[var(--color-accent-gold)]" />
                                                        </div>
                                                        <div className="pt-0.5">
                                                            <h4 className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-gold)] transition-colors">{uni.name}</h4>
                                                            <div className="flex items-center gap-1.5 text-[10px] text-[var(--color-accent-gold)] mt-1 mb-1 uppercase tracking-[0.15em]">
                                                                <MapPin size={10} strokeWidth={2} /> {uni.city}
                                                            </div>
                                                            <p className="text-[var(--color-text-muted)] text-xs leading-relaxed">{uni.desc}</p>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </div>

                                        <div className="flex flex-col gap-10 relative z-10">
                                            {/* Popular Courses */}
                                            <div className="bg-[var(--color-surface)] p-5 sm:p-6 md:p-8 border border-[var(--color-border)]">
                                                <h3 className="flex items-center gap-3 text-base sm:text-lg md:text-xl font-orbitron text-[var(--color-text-primary)] mb-4 sm:mb-6 tracking-wide">
                                                    <BookOpen size={20} className="text-[var(--color-accent-gold)]" /> Popular Programs
                                                </h3>
                                                <motion.div variants={tagStagger} initial="hidden" animate="visible" className="flex flex-wrap gap-2.5">
                                                    {country.popularCourses.map((course, idx) => (
                                                        <motion.span variants={tagReveal} key={idx} className="px-4 py-2 bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] whitespace-nowrap hover:border-[var(--color-accent-gold)]/40 hover:text-[var(--color-accent-gold)] transition-colors">
                                                            {course}
                                                        </motion.span>
                                                    ))}
                                                </motion.div>
                                            </div>

                                            {/* Admission Requirements */}
                                            <div className="bg-[var(--color-surface)] p-5 sm:p-6 md:p-8 border border-[var(--color-border)] relative overflow-hidden">
                                                <h3 className="flex items-center gap-3 text-base sm:text-lg md:text-xl font-orbitron text-[var(--color-text-primary)] mb-4 sm:mb-6 tracking-wide relative z-10">
                                                    <GradIcon size={20} className="text-[var(--color-accent-gold)]" /> Admissions Info
                                                </h3>
                                                <div className="space-y-6 relative z-10">
                                                    <div className="flex gap-4">
                                                        <div className="w-6 shrink-0 mt-0.5"><CheckCircle size={16} className="text-[var(--color-accent-gold)]" /></div>
                                                        <div>
                                                            <span className="text-xs text-[var(--color-text-primary)] block mb-1">Academic</span>
                                                            <span className="text-[var(--color-text-muted)] text-xs leading-relaxed block">{country.requirements.academic}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <div className="w-6 shrink-0 mt-0.5"><CheckCircle size={16} className="text-[var(--color-accent-gold)]" /></div>
                                                        <div>
                                                            <span className="text-xs text-[var(--color-text-primary)] block mb-1">English Proficiency</span>
                                                            <span className="text-[var(--color-text-muted)] text-xs leading-relaxed block">{country.requirements.english}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <div className="w-6 shrink-0 mt-0.5"><CheckCircle size={16} className="text-[var(--color-accent-gold)]" /></div>
                                                        <div>
                                                            <span className="text-xs text-[var(--color-text-primary)] block mb-1">Document Checklist</span>
                                                            <span className="text-[var(--color-text-muted)] text-xs leading-relaxed block">{country.requirements.documents}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={dividerReveal} className="w-full h-px bg-[var(--color-border)] origin-left"></motion.div>

                                    {/* 6 Work & Visa & 8 CTA Block */}
                                    <motion.div variants={subsectionReveal} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-stretch relative z-10">
                                        {/* Work & Visa */}
                                        <div className="bg-[var(--color-surface)] p-5 sm:p-6 md:p-8 border border-[var(--color-border)] relative overflow-hidden">
                                            <h3 className="flex items-center gap-3 text-base sm:text-lg md:text-xl font-orbitron text-[var(--color-text-primary)] mb-6 sm:mb-8 tracking-wide relative z-10">
                                                <Briefcase size={20} className="text-[var(--color-accent-gold)]" /> Post-Study Rights
                                            </h3>
                                            <div className="space-y-0 text-sm relative z-10">
                                                <div className="flex justify-between items-center border-b border-[var(--color-border)] pb-5">
                                                    <span className="text-[var(--color-text-muted)] text-[10px] uppercase tracking-[0.15em]">Study Work Hours</span>
                                                    <span className="text-[var(--color-text-primary)] text-sm text-right">{country.work}</span>
                                                </div>
                                                <div className="flex justify-between items-center border-b border-[var(--color-border)] py-5">
                                                    <span className="text-[var(--color-text-muted)] text-[10px] uppercase tracking-[0.15em]">Post-Study Visa</span>
                                                    <span className="text-[var(--color-accent-gold)] text-sm text-right">{country.postStudy}</span>
                                                </div>
                                                <div className="flex justify-between items-center pt-5">
                                                    <span className="text-[var(--color-text-muted)] text-[10px] uppercase tracking-[0.15em]">PR Pathway</span>
                                                    <span className="text-[var(--color-accent-gold)] text-sm text-right">{country.prPathway}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA Block */}
                                        <div className="flex flex-col gap-4 justify-center bg-[var(--color-bg-primary)] p-5 sm:p-6 md:p-8 lg:p-10 border border-[var(--color-border)] text-center lg:text-left h-full">
                                            <h4 className="text-base sm:text-lg md:text-xl font-orbitron text-[var(--color-text-primary)]">Ready to start your journey?</h4>
                                            <p className="text-[var(--color-text-muted)] text-sm mb-4">Connect with our admission experts for customized counseling.</p>
                                            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center mt-auto">
                                                <Link
                                                    href="https://wa.me/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn-primary px-8 py-4 text-xs tracking-[0.15em] uppercase font-medium flex items-center justify-center gap-2 !bg-[#25D366] !shadow-[0_4px_20px_rgba(37,211,102,0.25)] hover:!bg-[#20BD5A] hover:!shadow-[0_6px_30px_rgba(37,211,102,0.4)] text-white"
                                                >
                                                    <IconBrandWhatsapp size={20} stroke={2} /> Reach us
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

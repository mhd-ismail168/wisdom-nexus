"use client";

import { motion, AnimatePresence } from "framer-motion";
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

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-20 relative z-30">
            {studyAbroadCountries.map((country) => (
                <div
                    key={country.id}
                    className={`w-full bg-white rounded-[20px] transition-all duration-300 ease-in-out border border-gray-100 ${expandedId === country.id
                        ? "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
                        : "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] cursor-pointer"
                        }`}
                >
                    {/* Collapsed/Header State */}
                    <div
                        onClick={() => toggleExpand(country.id)}
                        className={`w-full p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between ${expandedId === country.id ? "border-b border-gray-100 bg-gray-50/50 rounded-t-[20px]" : ""
                            }`}
                        style={{ cursor: expandedId === country.id ? "default" : "pointer" }}
                    >
                        {expandedId !== country.id && (
                            <motion.div
                                layoutId={`country-img-${country.id}`}
                                className="w-full md:w-48 h-48 md:h-32 bg-gray-200 rounded-2xl shrink-0 overflow-hidden relative shadow-sm border border-gray-100/50"
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
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-4xl">{country.flag}</span>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-[#111] tracking-tight">{country.name}</h3>
                            </div>
                            <p className="text-lg md:text-xl text-[#2aa5ae] font-semibold mt-2">{country.tagline}</p>

                            {/* Summary Tags */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
                                <span className="flex items-center gap-2 text-sm font-bold text-gray-600">
                                    <DollarSign size={18} className="text-[#FA9C0F]" /> {country.tuition}
                                </span>
                                <span className="flex items-center gap-2 text-sm font-bold text-gray-600">
                                    <Briefcase size={18} className="text-[#FA9C0F]" /> {country.work}
                                </span>
                                <span className="flex items-center gap-2 text-sm font-bold text-gray-600">
                                    <Clock size={18} className="text-[#FA9C0F]" /> {country.postStudy}
                                </span>
                                <span className="flex items-center gap-2 text-sm font-bold text-gray-600">
                                    <Award size={18} className="text-[#FA9C0F]" /> {country.prPathway}
                                </span>
                            </div>
                        </div>

                        {/* Expand Icon */}
                        <div className="mt-4 md:mt-2 shrink-0 md:self-center self-end">
                            <motion.div animate={{ rotate: expandedId === country.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                <ChevronDown size={36} className="text-gray-400 hover:text-[#2aa5ae] transition-colors" />
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
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="p-8 md:p-12 space-y-16">

                                    {/* 1 Hero Subsection */}
                                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start relative z-10">
                                        <motion.div
                                            layoutId={`country-img-${country.id}`}
                                            className="w-full md:w-1/2 lg:w-5/12 h-64 md:h-80 bg-gray-200 rounded-3xl shrink-0 overflow-hidden relative shadow-lg border border-gray-100/50"
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
                                            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] font-black text-[#111] leading-tight mb-4 drop-shadow-sm">
                                                Study in <span className="text-gradient underline-drawn">{country.name}</span>
                                            </h2>
                                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                                                {country.name} offers Indian students exceptional {country.tagline.toLowerCase()}.
                                                Explore world-leading academic programs, post-study work regulations, and admission requirements tailored for international success.
                                            </p>
                                        </div>
                                    </div>

                                    {/* 2 & 5 Grid */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
                                        {/* Background SVG Doodle */}
                                        <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none z-0 hidden lg:block">
                                            <Plane size={150} />
                                        </div>

                                        {/* Why Study */}
                                        <div className="relative z-10 bg-gradient-to-br from-[#FA9C0F]/10 to-transparent p-8 rounded-3xl border border-[#FA9C0F]/20">
                                            <h3 className="flex items-center gap-3 text-2xl font-black font-[family-name:var(--font-heading)] text-[#111] mb-6 tracking-tight">
                                                <Sparkles size={28} className="text-[#FA9C0F]" /> Why {country.name}?
                                            </h3>
                                            <ul className="space-y-4">
                                                {country.whyStudy.map((point, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-[#FA9C0F] shrink-0 outline outline-2 outline-[#FA9C0F]/30 outline-offset-2"></div>
                                                        <span className="text-gray-800 font-semibold">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tuition & Living */}
                                        <div className="relative z-10">
                                            <h3 className="flex items-center gap-3 text-2xl font-black font-[family-name:var(--font-heading)] text-[#111] mb-6 tracking-tight">
                                                <DollarSign size={28} className="text-[#2aa5ae]" /> Financial Overview
                                            </h3>
                                            <div className="flex flex-col gap-6 bg-[#2aa5ae]/5 p-6 sm:p-8 rounded-3xl border border-[#2aa5ae]/20 relative overflow-hidden">
                                                <div className="absolute -bottom-8 -right-8 opacity-10">
                                                    <DollarSign size={100} />
                                                </div>
                                                <div className="relative z-10">
                                                    <span className="block text-sm font-bold text-[#2aa5ae] uppercase tracking-widest mb-1">Average Tuition</span>
                                                    <span className="text-2xl font-black text-[#111] font-[family-name:var(--font-heading)] tracking-tight">{country.tuition}</span>
                                                </div>
                                                <div className="w-full h-px bg-[#2aa5ae]/20 relative z-10"></div>
                                                <div className="relative z-10">
                                                    <span className="block text-sm font-bold text-[#2aa5ae] uppercase tracking-widest mb-1">Estimated Living Cost</span>
                                                    <span className="text-2xl font-black text-[#111] font-[family-name:var(--font-heading)] tracking-tight">{country.living}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-gray-100"></div>

                                    {/* 4 Top Universities & 3 Popular Courses Grid */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">
                                        {/* Background SVG Doodle */}
                                        <div className="absolute top-10 left-10 opacity-5 pointer-events-none z-0 hidden lg:block">
                                            <Map size={180} />
                                        </div>

                                        {/* Top Universities */}
                                        <div className="bg-white rounded-3xl p-2 relative z-10">
                                            <h3 className="flex items-center gap-3 text-2xl font-black font-[family-name:var(--font-heading)] text-[#111] mb-8 tracking-tight pl-2">
                                                <Building2 size={28} className="text-[#16636a]" /> Top Universities
                                            </h3>
                                            <div className="space-y-4 sm:space-y-4">
                                                {country.universities.map((uni, idx) => (
                                                    <div key={idx} className="flex items-start gap-5 group p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all cursor-default">
                                                        <div className="w-14 h-14 bg-gradient-to-br from-[#2aa5ae]/10 to-[#16636a]/10 rounded-xl border border-[#2aa5ae]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                                                            <Landmark size={24} className="text-[#16636a]" />
                                                        </div>
                                                        <div className="pt-0.5">
                                                            <h4 className="text-lg font-bold text-[#111] group-hover:text-[#FA9C0F] transition-colors">{uni.name}</h4>
                                                            <div className="flex items-center gap-1.5 text-xs text-[#2aa5ae] mt-1 mb-1 font-bold uppercase tracking-wider">
                                                                <MapPin size={12} strokeWidth={2.5} /> {uni.city}
                                                            </div>
                                                            <p className="text-gray-600 text-sm font-medium leading-relaxed">{uni.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-12 relative z-10">
                                            {/* Popular Courses */}
                                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                                <h3 className="flex items-center gap-3 text-2xl font-black font-[family-name:var(--font-heading)] text-[#111] mb-6 tracking-tight">
                                                    <BookOpen size={28} className="text-[#FA9C0F]" /> Popular Programs
                                                </h3>
                                                <div className="flex flex-wrap gap-2.5">
                                                    {country.popularCourses.map((course, idx) => (
                                                        <span key={idx} className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-extrabold text-[#111] shadow-sm whitespace-nowrap hover:border-[#FA9C0F] transition-colors hover:text-[#FA9C0F]">
                                                            {course}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Admission Requirements */}
                                            <div className="bg-[#16636a]/5 p-8 rounded-3xl border border-[#16636a]/10 relative overflow-hidden">
                                                <div className="absolute top-10 right-0 opacity-5 pointer-events-none">
                                                    <ShieldCheck size={120} />
                                                </div>
                                                <h3 className="flex items-center gap-3 text-2xl font-black font-[family-name:var(--font-heading)] text-[#111] mb-6 tracking-tight relative z-10">
                                                    <GradIcon size={28} className="text-[#16636a]" /> Admissions Info
                                                </h3>
                                                <div className="space-y-6 relative z-10">
                                                    <div className="flex gap-4">
                                                        <div className="w-6 shrink-0 mt-0.5"><CheckCircle size={20} className="text-[#16636a]" /></div>
                                                        <div>
                                                            <span className="font-bold text-[#111] block mb-1">Academic</span>
                                                            <span className="text-gray-700 font-medium text-sm leading-relaxed block">{country.requirements.academic}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <div className="w-6 shrink-0 mt-0.5"><CheckCircle size={20} className="text-[#16636a]" /></div>
                                                        <div>
                                                            <span className="font-bold text-[#111] block mb-1">English Proficiency</span>
                                                            <span className="text-gray-700 font-medium text-sm leading-relaxed block">{country.requirements.english}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <div className="w-6 shrink-0 mt-0.5"><CheckCircle size={20} className="text-[#16636a]" /></div>
                                                        <div>
                                                            <span className="font-bold text-[#111] block mb-1">Document Checklist</span>
                                                            <span className="text-gray-700 font-medium text-sm leading-relaxed block">{country.requirements.documents}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-gray-100"></div>

                                    {/* 6 Work & Visa & 8 CTA Block */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch relative z-10">
                                        {/* Work & Visa */}
                                        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                                            <div className="absolute top-4 right-4 text-gray-100">
                                                <Ticket size={80} />
                                            </div>
                                            <h3 className="flex items-center gap-3 text-2xl font-black font-[family-name:var(--font-heading)] text-[#111] mb-8 tracking-tight relative z-10">
                                                <Briefcase size={28} className="text-[#FA9C0F]" /> Post-Study Rights
                                            </h3>
                                            <div className="space-y-0 text-sm sm:text-base relative z-10">
                                                <div className="flex justify-between items-center border-b border-gray-200 pb-5">
                                                    <span className="text-gray-500 font-bold uppercase tracking-wider text-xs sm:text-sm">Study Work Hours</span>
                                                    <span className="font-black text-[#111] text-right">{country.work}</span>
                                                </div>
                                                <div className="flex justify-between items-center border-b border-gray-200 py-5">
                                                    <span className="text-gray-500 font-bold uppercase tracking-wider text-xs sm:text-sm">Post-Study Visa</span>
                                                    <span className="font-black text-[#16636a] text-right">{country.postStudy}</span>
                                                </div>
                                                <div className="flex justify-between items-center pt-5">
                                                    <span className="text-gray-500 font-bold uppercase tracking-wider text-xs sm:text-sm">PR Pathway</span>
                                                    <span className="font-black text-[#FA9C0F] text-right">{country.prPathway}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA Block */}
                                        <div className="flex flex-col gap-4 justify-center bg-gradient-to-br from-[#16636a]/5 to-[#2aa5ae]/10 p-8 md:p-10 rounded-2xl border border-[#2aa5ae]/20 text-center lg:text-left h-full">
                                            <h4 className="text-2xl font-bold text-[#111]">Ready to start your journey?</h4>
                                            <p className="text-gray-600 font-medium mb-4 text-lg">Connect with our admission experts for customized counseling.</p>
                                            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center mt-auto">
                                                <Link
                                                    href="https://wa.me/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-10 py-5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl font-black shadow-[0_8px_20px_rgba(37,211,102,0.3)] transition-all flex items-center justify-center gap-2 hover:-translate-y-1 text-lg"
                                                >
                                                    <IconBrandWhatsapp size={28} stroke={2.5} /> Reach us
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            ))}
        </div>
    );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Star, IndianRupee, BookOpen, Building } from "lucide-react";
import { collegesData } from "@/data/colleges";
import Image from "next/image";

export default function CollegesPage() {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [visibleCount, setVisibleCount] = useState(10);

    const colleges = collegesData;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen bg-[var(--color-bg-primary)]"
        >
            {/* Hero Section */}
            <section className="relative w-full pt-32 pb-20 md:pb-28 bg-[var(--color-bg-section)] border-b border-[var(--color-border)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-[var(--color-accent-gold)] tracking-[0.3em] uppercase text-xs mb-4">Curated Network</p>
                    <h1 className="font-bungee text-3xl sm:text-3xl md:text-4xl text-gold-glow tracking-wide">
                        Academic Institutions
                    </h1>
                    <p className="text-[var(--color-text-muted)] mt-4 max-w-lg mx-auto text-sm leading-relaxed">
                        Explore our verified network of elite academic institutions across India.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filters */}
                <div className="border border-[var(--color-border)] bg-[var(--color-bg-section)] p-6 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex gap-4 w-full md:w-auto">
                        <select className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] px-4 py-2.5 w-full md:w-48 outline-none focus:border-[var(--color-accent-gold)] transition-colors text-sm">
                            <option value="">Filter by Location</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Mangaluru">Mangaluru</option>
                            <option value="Mysuru">Mysuru</option>
                            <option value="Hubballi">Hubballi</option>
                            <option value="Kalaburagi">Kalaburagi</option>
                            <option value="Dharwad">Dharwad</option>
                        </select>
                        <select className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] px-4 py-2.5 w-full md:w-48 outline-none focus:border-[var(--color-accent-gold)] transition-colors text-sm">
                            <option value="">Course</option>
                            <option value="Eng">Engineering</option>
                            <option value="Med">Medical</option>
                        </select>
                        <select className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] px-4 py-2.5 w-full md:w-48 outline-none focus:border-[var(--color-accent-gold)] transition-colors text-sm">
                            <option value="">Budget</option>
                            <option value="low">&lt; 2 Lakhs/yr</option>
                            <option value="med">2 - 5 Lakhs/yr</option>
                        </select>
                    </div>
                    <button className="btn-primary px-6 py-2.5 text-xs tracking-[0.15em] uppercase w-full md:w-auto">Search</button>
                </div>

                {/* College Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {colleges.slice(0, visibleCount).map((college) => (
                        <div
                            key={college.id}
                            className={`panel-hover bg-[var(--color-bg-section)] overflow-hidden border cursor-pointer ${expandedId === college.id ? 'border-[var(--color-accent-gold)]/30' : 'border-[var(--color-border)]'}`}
                            onClick={() => {
                                setExpandedId(expandedId !== college.id ? college.id : null);
                            }}
                        >
                            <div className="h-44 bg-[var(--color-surface)] relative overflow-hidden flex items-center justify-center border-b border-[var(--color-border)]">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-accent-gold)] px-3 py-1 text-[10px] tracking-[0.15em] uppercase">
                                        {college.tag}
                                    </span>
                                </div>
                                {college.logoUrl ? (
                                    <Image src={college.logoUrl} alt={`${college.name} logo`} fill className="object-contain p-8 transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 500px" loading="lazy" />
                                ) : (
                                    <div className="text-[var(--color-text-muted)] font-bungee text-3xl">{college.logo}</div>
                                )}
                            </div>

                            <div className="p-6 md:p-8">
                                <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">{college.name}</h3>

                                <div className="flex gap-4 mb-4 text-sm text-[var(--color-text-muted)]">
                                    <span className="flex items-center gap-1"><MapPin size={14} className="text-[var(--color-accent-gold)]" /> {college.location}, {college.state}</span>
                                    <span className="flex items-center gap-1 text-[var(--color-accent-gold)]"><Star size={14} strokeWidth={2} /> {college.placement}</span>
                                </div>

                                <AnimatePresence>
                                    {expandedId === college.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ height: { duration: 0.4,  ease: [0.25, 0.1, 0.25, 1] }, opacity: { duration: 0.3 } }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 border-t border-[var(--color-border)] mt-4">
                                                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6 border-l border-[var(--color-accent-gold)] pl-4 italic">
                                                    {college.description}
                                                </p>
                                                <div className="grid grid-cols-2 gap-6">
                                                    <div className="flex items-start gap-3">
                                                        <BookOpen size={16} className="text-[var(--color-accent-gold)] mt-0.5" />
                                                        <div>
                                                            <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.15em] mb-0.5">Courses</p>
                                                            <p className="text-sm text-[var(--color-text-primary)]">{college.course}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <IndianRupee size={16} className="text-[var(--color-accent-gold)] mt-0.5" />
                                                        <div>
                                                            <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.15em] mb-0.5">Fee Range</p>
                                                            <p className="text-sm text-[var(--color-text-primary)]">{college.fee}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <Building size={16} className="text-[var(--color-accent-gold)] mt-0.5" />
                                                        <div>
                                                            <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.15em] mb-0.5">Hostel</p>
                                                            <p className="text-sm text-[var(--color-text-primary)]">{college.hostel}</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-span-2 flex flex-col sm:flex-row gap-3 mt-4">
                                                        <button className="flex-1 btn-primary py-3 text-xs tracking-[0.15em] uppercase text-center">
                                                            Apply Now
                                                        </button>
                                                        <button className="flex-1 border border-[var(--color-border)] text-[var(--color-text-secondary)] py-3 text-xs tracking-[0.15em] uppercase hover:border-[var(--color-text-muted)] transition-colors">
                                                            Download Brochure
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {expandedId !== college.id && (
                                    <div className="mt-4 flex justify-center text-[var(--color-text-muted)]">
                                        <ChevronDown size={20} />
                                    </div>
                                )}
                                {expandedId === college.id && (
                                    <div className="mt-4 flex justify-center text-[var(--color-accent-gold)]">
                                        <ChevronDown size={20} className="rotate-180 transition-transform duration-300" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCount < colleges.length && (
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 10)}
                            className="btn-primary px-8 py-3 text-xs tracking-[0.15em] uppercase"
                        >
                            Load More Institutions
                        </button>
                    </div>
                )}
            </section>
        </motion.div>
    );
}

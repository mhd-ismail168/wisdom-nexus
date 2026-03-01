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
        <div className="min-h-screen bg-[--color-bg-light]">
            {/* Hero Section */}
            <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center bg-[--color-bg-page] mt-20 overflow-hidden">
                {/* Background Image shifted left */}
                <div
                    className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-[position:center_top] md:bg-[position:left_center] w-full"
                    style={{ backgroundImage: "url('/university_header.jpg')" }}
                >
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex justify-end">
                    {/* Emptied hero overlay container as requested */}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Filters */}
                <div className="glass p-6 rounded-2xl mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="flex gap-4 w-full md:w-auto">
                        <select className="bg-white/5 border border-gray-200 text-gray-700 rounded-lg px-4 py-2 w-full md:w-48 outline-none focus:ring-2 focus:ring-[--color-accent-cyan]">
                            <option value="">Filter by Location</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Mangaluru">Mangaluru</option>
                            <option value="Mysuru">Mysuru</option>
                            <option value="Hubballi">Hubballi</option>
                            <option value="Kalaburagi">Kalaburagi</option>
                            <option value="Dharwad">Dharwad</option>
                        </select>
                        <select className="bg-white/5 border border-gray-200 text-gray-700 rounded-lg px-4 py-2 w-full md:w-48 outline-none focus:ring-2 focus:ring-[--color-accent-cyan]">
                            <option value="">Course</option>
                            <option value="Eng">Engineering</option>
                            <option value="Med">Medical</option>
                        </select>
                        <select className="bg-white/5 border border-gray-200 text-gray-700 rounded-lg px-4 py-2 w-full md:w-48 outline-none focus:ring-2 focus:ring-[--color-accent-cyan]">
                            <option value="">Budget</option>
                            <option value="low">&lt; 2 Lakhs/yr</option>
                            <option value="med">2 - 5 Lakhs/yr</option>
                        </select>
                    </div>
                    <button className="bg-[--color-btn-primary] text-[#111] font-bold px-6 py-2 rounded-lg hover:bg-[--color-btn-hover] hover:shadow-lg transition-all border border-transparent w-full md:w-auto">Search</button>
                </div>

                {/* College Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {colleges.slice(0, visibleCount).map((college) => (
                        <motion.div
                            key={college.id} layout
                            className="glass !bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative group cursor-pointer hover:shadow-[0_0_15px_rgba(127,90,240,0.15)] transition-all duration-300"
                            onClick={() => setExpandedId(expandedId === college.id ? null : college.id)}
                        >
                            <div className="h-48 bg-white relative overflow-hidden flex items-center justify-center border-b border-gray-50">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-gradient-to-r from-[--color-accent-violet] to-[--color-accent-cyan] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                        {college.tag}
                                    </span>
                                </div>
                                {college.logoUrl ? (
                                    <Image src={college.logoUrl} alt={`${college.name} logo`} fill className="object-contain p-8 group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 500px" loading="lazy" />
                                ) : (
                                    <div className="text-gray-300 font-bold text-3xl">{college.logo}</div>
                                )}
                            </div>

                            <div className="p-6 relative">
                                <h3 className="text-2xl font-bold text-[--color-primary-base] mb-2 font-[family-name:var(--font-heading)]">{college.name}</h3>

                                <div className="flex gap-4 mb-4 text-sm text-gray-600">
                                    <span className="flex items-center gap-1"><MapPin size={14} /> {college.location}, {college.state}</span>
                                    <span className="flex items-center gap-1 text-[--color-accent-violet] font-medium"><Star size={14} /> {college.placement}</span>
                                </div>

                                <motion.div
                                    initial={false}
                                    animate={{ height: expandedId === college.id ? "auto" : 0, opacity: expandedId === college.id ? 1 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 border-t border-gray-100 mt-4">
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 italic border-l-2 border-[--color-accent-violet] pl-3">
                                            {college.description}
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex items-start gap-2">
                                                <BookOpen size={18} className="text-[--color-accent-violet] mt-0.5" />
                                                <div>
                                                    <p className="text-xs text-gray-500 font-medium">Courses</p>
                                                    <p className="text-sm font-semibold">{college.course}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <IndianRupee size={18} className="text-[--color-accent-violet] mt-0.5" />
                                                <div>
                                                    <p className="text-xs text-gray-500 font-medium">Fee Range</p>
                                                    <p className="text-sm font-semibold">{college.fee}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <Building size={18} className="text-[--color-accent-violet] mt-0.5" />
                                                <div>
                                                    <p className="text-xs text-gray-500 font-medium">Hostel</p>
                                                    <p className="text-sm font-semibold">{college.hostel}</p>
                                                </div>
                                            </div>

                                            <div className="col-span-2 flex gap-3 mt-4">
                                                <button className="flex-1 bg-[--color-btn-primary] text-[#111] py-3 rounded-lg font-bold hover:bg-[--color-btn-hover] shadow-lg hover:shadow-xl transition-all border border-transparent">
                                                    Apply Now
                                                </button>
                                                <button className="flex-1 bg-white text-gray-800 hover:bg-gray-50 hover:text-[--color-btn-primary] py-3 rounded-lg font-bold transition-all border-2 border-gray-200 hover:border-[--color-btn-primary] shadow-sm">
                                                    Download Brochure
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {expandedId !== college.id && (
                                    <div className="mt-4 flex justify-center text-gray-400 group-hover:text-[--color-accent-cyan] transition-colors">
                                        <ChevronDown size={24} />
                                    </div>
                                )}
                                {expandedId === college.id && (
                                    <div className="mt-4 flex justify-center text-[--color-accent-cyan] transition-colors">
                                        <ChevronDown size={24} className="rotate-180 transition-transform" />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {visibleCount < colleges.length && (
                    <div className="mt-16 flex justify-center relative z-10">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 10)}
                            className="bg-[--color-btn-primary] text-[#111] px-8 py-3 rounded-xl font-bold hover:bg-[--color-btn-hover] hover:-translate-y-1 transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            Load More Colleges
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}

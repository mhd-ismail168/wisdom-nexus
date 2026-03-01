"use client";

import { motion } from "framer-motion";
import { Plane, Globe } from "lucide-react";
import CountrySection from "@/components/CountrySection";

export default function StudyAbroadPage() {
    return (
        <div className="min-h-screen bg-[--color-bg-light]">
            {/* Hero Section */}
            <section className="relative w-full pt-32 pb-20 md:pb-32 overflow-hidden bg-[--color-bg-page]">
                {/* Decorative Elements */}
                <div className="absolute top-40 left-10 text-[#1d3540] font-extrabold text-2xl opacity-20 rotate-45">+</div>
                <div className="absolute top-24 right-[55%] text-[#1d3540] font-extrabold text-2xl opacity-20">+</div>
                <div className="absolute bottom-20 left-[40%] text-[#1d3540] font-extrabold text-2xl opacity-20 -rotate-12">+</div>

                {/* Decorative Plane */}
                <div className="absolute top-32 right-[45%] text-gray-300 opacity-60 transform -rotate-45">
                    <Plane size={48} strokeWidth={1.5} />
                    <div className="absolute top-1/2 -left-64 w-64 h-0.5 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
                    {/* Left Typography Side */}
                    <div className="w-full md:w-1/2 lg:w-5/12 text-left mb-16 md:mb-0 relative z-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
                            className="flex flex-col tracking-tight"
                        >
                            <span className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-black leading-[0.85] text-[#2aa5ae] font-[family-name:var(--font-heading)] uppercase drop-shadow-sm">Study</span>
                            <span className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-black leading-[0.85] text-[#FA9C0F] font-[family-name:var(--font-heading)] uppercase drop-shadow-sm">Abroad</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-xl md:text-2xl font-extrabold text-[#111] tracking-widest uppercase mt-6 mb-4"
                        >
                            Open for Registration
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-[--color-text-gray] text-lg font-medium leading-relaxed max-w-sm lg:max-w-md mb-8"
                        >
                            Unlock global opportunities with our expert international admission handling, university selection, and complete visa support from start to finish.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
                            className="px-8 py-3.5 bg-[#2aa5ae] hover:bg-[#16636a] text-white rounded-full font-extrabold tracking-wide uppercase shadow-[0_8px_20px_rgba(42,165,174,0.3)] transition-all hover:shadow-[0_12px_25px_rgba(42,165,174,0.4)] hover:-translate-y-1"
                        >
                            Enroll Now
                        </motion.button>
                    </div>

                    {/* Right Animated CSS Doodle Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }}
                        className="w-full md:w-1/2 lg:w-7/12 relative flex justify-center items-end h-[450px] md:h-[500px]"
                    >
                        {/* Background Silhouettes (Landmarks) */}
                        <div className="absolute inset-0 flex items-end justify-center z-0 overflow-hidden pointer-events-none">
                            {/* Eiffel Tower Silhouette */}
                            <motion.div animate={{ opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-4 left-10 text-[#2aa5ae]">
                                <svg width="120" height="250" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                                    <path d="M15.5 21l-1.5-7h-4l-1.5 7h-2.5l2-9h-1l1.5-6h-1.5l1-3h3l1 3h-1.5l1.5 6h-1l2 9h-2.5z" />
                                </svg>
                            </motion.div>
                            {/* Big Ben Silhouette */}
                            <motion.div animate={{ opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-4 right-10 text-[#2aa5ae]">
                                <svg width="100" height="280" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                                    <path d="M14 21h-4v-12h-2l4-6 4 6h-2v12zm-3-10h2v2h-2v-2z" />
                                </svg>
                            </motion.div>
                            {/* Clouds */}
                            <motion.div animate={{ x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-20 left-10 w-24 h-8 bg-[#2aa5ae]/10 rounded-full blur-md"></motion.div>
                            <motion.div animate={{ x: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-32 right-20 w-32 h-10 bg-[#2aa5ae]/10 rounded-full blur-md"></motion.div>

                            {/* Distant Airplane */}
                            <motion.div animate={{ x: [-50, 400], y: [50, -50] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 left-0 opacity-20">
                                <Plane size={32} fill="#FA9C0F" className="text-[#FA9C0F] transform rotate-12" />
                            </motion.div>
                        </div>

                        {/* Ground Line */}
                        <div className="absolute bottom-5 w-[110%] h-1 bg-gray-800 rounded-full z-10"></div>

                        {/* Plant */}
                        <div className="absolute bottom-5 right-2 sm:right-10 z-20 flex flex-col items-center">
                            <motion.div animate={{ rotate: [-2, 4, -2] }} transition={{ duration: 4, repeat: Infinity }} style={{ transformOrigin: "bottom center" }} className="relative w-12 h-24">
                                <div className="absolute bottom-2 left-0 w-8 h-12 bg-[#2aa5ae] rounded-[50%_0_50%_0] border-2 border-[#16636a] transform -rotate-12"></div>
                                <div className="absolute bottom-4 right-0 w-10 h-16 bg-[#3bb3bc] rounded-[0_50%_0_50%] border-2 border-[#16636a] transform rotate-12"></div>
                                <div className="absolute bottom-8 left-2 w-10 h-20 bg-[#16636a] rounded-[50%_0_50%_0] border-2 border-[#1d3540]"></div>
                            </motion.div>
                            <div className="w-12 h-14 bg-[#1d3540] rounded-b-lg border-t-8 border-gray-700 relative z-10"></div>
                        </div>

                        {/* Signpost */}
                        <div className="absolute bottom-5 right-20 sm:right-32 z-20 flex flex-col items-center">
                            {/* Pole */}
                            <div className="w-3 h-56 bg-gray-800 rounded-t-full"></div>
                            {/* Arrows */}
                            <div className="absolute top-6 flex flex-col gap-4 items-center">
                                <motion.div animate={{ rotate: [-1, 1, -1] }} transition={{ duration: 3, repeat: Infinity }} className="relative">
                                    <div className="w-24 h-8 bg-[#2aa5ae] text-white flex items-center pl-2 font-bold text-[10px] tracking-wider uppercase rounded-l-md shadow-md" style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)" }}>
                                        Australia
                                    </div>
                                    <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-gray-800 rounded-full transform -translate-y-1/2"></div>
                                </motion.div>
                                <motion.div animate={{ rotate: [1, -1, 1] }} transition={{ duration: 3.5, repeat: Infinity }} className="relative left-2">
                                    <div className="w-24 h-8 bg-[#FA9C0F] text-[#111] flex items-center pr-2 justify-end font-bold text-[10px] tracking-wider uppercase rounded-r-md shadow-md" style={{ clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)" }}>
                                        USA
                                    </div>
                                    <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-gray-800 rounded-full transform -translate-y-1/2"></div>
                                </motion.div>
                                <motion.div animate={{ rotate: [-0.5, 0.5, -0.5] }} transition={{ duration: 2.5, repeat: Infinity }} className="relative">
                                    <div className="w-24 h-8 bg-[#3bb3bc] text-white flex items-center pl-2 font-bold text-[10px] tracking-wider uppercase rounded-l-md shadow-md" style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)" }}>
                                        Japan
                                    </div>
                                    <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-gray-800 rounded-full transform -translate-y-1/2"></div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Pink Luggage */}
                        <div className="absolute bottom-5 left-4 sm:left-12 z-20 flex flex-col items-center">
                            {/* Retractable Handle */}
                            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="w-14 h-12 border-4 border-b-0 border-gray-300 rounded-t-xl absolute -top-10"></motion.div>
                            {/* Body */}
                            <div className="w-24 h-36 bg-[#ff8fab] rounded-[1.5rem] border-4 border-[#ff5d8f] relative z-10 shadow-lg overflow-hidden flex justify-between px-2">
                                <div className="w-1 h-full bg-[#ff5d8f]/30"></div>
                                <div className="w-1 h-full bg-[#ff5d8f]/30"></div>
                                <div className="w-1 h-full bg-[#ff5d8f]/30"></div>
                            </div>
                            {/* Wheels */}
                            <div className="flex justify-between w-16 px-1 absolute -bottom-1 z-0">
                                <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                                <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                            </div>
                            {/* Top small handle */}
                            <div className="absolute top-0 w-8 h-2 bg-[#ff5d8f] rounded-t-lg z-20"></div>
                        </div>

                        {/* The Student */}
                        <motion.div animate={{ y: [-2, 2, -2] }} transition={{ duration: 3, repeat: Infinity }} className="relative z-30 flex flex-col items-center bottom-6 mr-10 sm:mr-20">
                            {/* Hair & Head Wrapper */}
                            <div className="relative z-30 flex flex-col items-center">
                                {/* Hair (Modern swept style) */}
                                <div className="relative z-40 w-16 h-8 -mb-3">
                                    {/* Main hair block */}
                                    <div className="absolute bottom-0 w-16 h-10 bg-[#1d3540] rounded-[50%_50%_20%_20%] shadow-sm transform -rotate-3 overflow-hidden">
                                        {/* Hair shine */}
                                        <div className="absolute top-1 left-2 w-4 h-2 bg-white/20 rounded-full transform -rotate-12"></div>
                                    </div>
                                    {/* Front swept bangs */}
                                    <div className="absolute -bottom-2 -left-1 w-9 h-7 bg-[#1d3540] rounded-[70%_30%_50%_20%] transform -rotate-12"></div>
                                    <div className="absolute -bottom-1 -right-1 w-7 h-6 bg-[#1d3540] rounded-[30%_70%_20%_50%] transform rotate-12"></div>
                                </div>

                                {/* Head */}
                                <div className="w-14 h-14 bg-[#fcd5ce] border-2 border-[#f8ad9d] rounded-full relative z-30 flex justify-center items-center shadow-sm -mt-0.5">
                                    {/* Face details */}
                                    <div className="flex gap-2.5 mb-1.5">
                                        {/* Eyes */}
                                        <div className="w-1.5 h-2 bg-gray-800 rounded-full"></div>
                                        <div className="w-1.5 h-2 bg-gray-800 rounded-full"></div>
                                    </div>
                                    {/* Wide Smile */}
                                    <div className="absolute bottom-[10px] w-5 h-[10px] border-b-[3px] border-gray-800 rounded-b-full"></div>
                                    {/* Rosy Cheeks */}
                                    <div className="absolute bottom-[14px] left-[10px] w-2 h-1.5 bg-[#ffb5a7] rounded-full blur-[1px]"></div>
                                    <div className="absolute bottom-[14px] right-[10px] w-2 h-1.5 bg-[#ffb5a7] rounded-full blur-[1px]"></div>
                                </div>
                            </div>

                            {/* Neck & Body Wrapper */}
                            <div className="relative mt-[-4px] z-20 flex flex-col items-center">
                                {/* Backpack peaking behind */}
                                <div className="absolute top-4 -right-3 w-8 h-24 bg-[#1d3540] rounded-xl border-2 border-gray-700 -z-10 shadow-md"></div>
                                <div className="absolute top-4 -left-3 w-8 h-24 bg-[#1d3540] rounded-xl border-2 border-gray-700 -z-10 shadow-md"></div>

                                {/* Torso */}
                                <div className="w-22 h-28 bg-[#83c5be] border-2 border-[#2aa5ae] rounded-2xl relative shadow-inner overflow-hidden flex flex-col items-center">
                                    {/* Shirt lines */}
                                    <div className="w-full h-8 bg-[#2aa5ae]/20 border-b border-[#2aa5ae]/30"></div>
                                    <div className="mt-2 w-16 h-1 bg-[#2aa5ae]/20 rounded"></div>
                                    <div className="mt-2 w-16 h-1 bg-[#2aa5ae]/20 rounded"></div>
                                </div>

                                {/* Arms */}
                                <div className="absolute top-2 -left-4 w-6 h-20 bg-[#83c5be] border-2 border-[#2aa5ae] rounded-full transform rotate-12 origin-top flex flex-col items-center z-30">
                                    <div className="absolute -bottom-3 w-5 h-5 bg-[#fcd5ce] rounded-full border-2 border-[#f8ad9d]"></div>
                                </div>
                                <div className="absolute top-2 -right-4 w-6 h-16 bg-[#83c5be] border-2 border-[#2aa5ae] rounded-full transform -rotate-12 origin-top flex flex-col items-center z-30">
                                    <div className="absolute -bottom-3 w-5 h-5 bg-[#fcd5ce] rounded-full border-2 border-[#f8ad9d]"></div>
                                </div>

                                {/* Items held by right arm */}
                                <motion.div animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-12 -right-8 z-40 flex flex-col gap-1 items-center">
                                    <div className="w-10 h-14 bg-[#FA9C0F] border-2 border-[#e85d04] rounded shadow-md transform rotate-12 flex justify-center items-center">
                                        <div className="w-6 h-8 border border-[#e85d04]/50 opacity-50"></div>
                                    </div>
                                    <div className="w-8 h-10 bg-[#e76f51] border-2 border-[#d62828] rounded shadow-md transform -rotate-6 absolute -bottom-4 -left-2 flex items-center justify-center">
                                        <Globe size={12} className="text-white opacity-60" />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Legs & Shoes */}
                            <div className="flex gap-2 relative -mt-2 z-10">
                                <div className="flex flex-col items-center">
                                    <div className="w-6 h-28 bg-[#264653] shadow-inner"></div>
                                    <div className="w-9 h-4 bg-gray-900 rounded-t-lg rounded-b-sm -ml-3 mt-[-2px]"></div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-6 h-28 bg-[#264653] shadow-inner"></div>
                                    <div className="w-9 h-4 bg-gray-900 rounded-t-lg rounded-b-sm ml-1 mt-[-2px]"></div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Country Cards Grid */}
            <section className="mx-auto w-full py-24 -mt-20 relative z-30">
                <CountrySection />
            </section>
        </div>
    );
}

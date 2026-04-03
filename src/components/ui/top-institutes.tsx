"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { collegesData } from "@/data/colleges";
import Image from "next/image";
import Link from "next/link";

/* Only show "Top Institute" tagged colleges */
const topInstitutes = collegesData.filter(c => c.tag === "Top Institute");

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

export function TopInstitutes() {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
    const [isPaused, setIsPaused] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    /* Observe visibility so we only run RAF when on-screen */
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    /* Smooth infinite auto-scroll — paused when off-screen */
    useEffect(() => {
        const el = scrollRef.current;
        if (!el || !isVisible) return;
        let raf: number;
        const speed = 0.5;

        const step = () => {
            if (!isPaused) {
                el.scrollLeft += speed;
                if (el.scrollLeft >= el.scrollWidth / 2) {
                    el.scrollLeft = 0;
                }
            }
            raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [isPaused, isVisible]);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 sm:py-28 md:py-36 lg:py-44 overflow-hidden"
        >
            {/* Subtle radial spotlight behind cards */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: smoothEase }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 sm:mb-20"
                >
                    <div>
                        <p className="text-[#c9a227]/80 tracking-[0.25em] uppercase text-[12px] mb-4 font-medium">
                            Curated Network
                        </p>
                        <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-[56px] text-[#C5A55A] leading-[1.05] tracking-wide">
                            Elite Partner Institutions
                        </h2>
                        <p className="text-[#9a9a9a] mt-5 max-w-[520px] text-base leading-relaxed">
                            Handpicked from {collegesData.length}+ verified institutions across Karnataka, Kerala & Tamil Nadu — each evaluated for academic credibility and institutional excellence.
                        </p>
                    </div>
                    <Link
                        href="/colleges"
                        className="hidden md:inline-flex items-center gap-2.5 text-[#C5A55A] text-[12px] tracking-[0.2em] uppercase hover:gap-3.5 transition-all duration-300 font-medium shrink-0 group"
                    >
                        Browse All
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </Link>
                </motion.div>

                {/* ── Infinite Scroll Gallery ── */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Left edge fade */}
                    <div className="absolute top-0 left-0 bottom-6 w-16 sm:w-28 pointer-events-none bg-gradient-to-r from-black via-black/60 to-transparent z-10" />

                    <div
                        ref={scrollRef}
                        className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 scrollbar-hide"
                    >
                        {/* Duplicate the cards for seamless loop */}
                        {[...topInstitutes.slice(0, 12), ...topInstitutes.slice(0, 12)].map((college, index) => (
                            <motion.div
                                key={`${college.id}-${index}`}
                                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.15 + (index % 12) * 0.06,
                                    ease: smoothEase,
                                }}
                                className="shrink-0"
                            >
                                <Link href="/colleges" className="block">
                                    <div className="top-inst-card group">
                                        {/* Badge */}
                                        <div className="absolute top-5 right-5 z-10">
                                            <span className="text-[10px] tracking-[0.12em] uppercase bg-[rgba(212,175,55,0.12)] text-[#C5A55A] px-3 py-1.5 rounded-[5px] font-medium">
                                                Top Institute
                                            </span>
                                        </div>

                                        {/* Logo medallion */}
                                        <div className="top-inst-logo">
                                            {college.logoUrl ? (
                                                <Image
                                                    src={college.logoUrl}
                                                    alt={`${college.name} logo`}
                                                    width={56}
                                                    height={56}
                                                    className="object-contain"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <span className="text-[#C5A55A] font-orbitron text-3xl">
                                                    {college.logo}
                                                </span>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="mt-auto">
                                            <h3 className="text-white text-[18px] font-semibold leading-[1.4] line-clamp-2 mb-1.5 group-hover:text-[#f0e6c8] transition-colors duration-300">
                                                {college.name}
                                            </h3>
                                            <p className="text-[#E5E5E5] text-[14px]">
                                                {college.location}, {college.state}
                                            </p>
                                        </div>

                                        {/* Explore indicator - fades in on hover */}
                                        <div className="flex items-center gap-1.5 mt-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                                            <span className="text-[#C5A55A] text-[11px] tracking-[0.18em] uppercase font-medium">
                                                Explore
                                            </span>
                                            <ArrowUpRight size={12} className="text-[#C5A55A]" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right edge fade */}
                    <div className="absolute top-0 right-0 bottom-6 w-16 sm:w-28 pointer-events-none bg-gradient-to-l from-black via-black/60 to-transparent z-10" />
                </div>

                {/* Mobile browse link */}
                <div className="mt-10 flex justify-center md:hidden">
                    <Link
                        href="/colleges"
                        className="inline-flex items-center gap-2 text-[#C5A55A] text-[12px] tracking-[0.2em] uppercase font-medium"
                    >
                        Browse All Institutions <ArrowUpRight size={14} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

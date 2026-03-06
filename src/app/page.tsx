"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Globe, Brain, Briefcase, ShieldCheck, Users, Clock, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { MarkerDoodle } from "@/components/ui/marker-doodles";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { HoverExpandGallery } from "@/components/ui/expand-on-hover";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { TopInstitutes } from "@/components/ui/top-institutes";

const abroadPlaces = [
  { src: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800", alt: "Canada landscape", label: "Canada", href: "/study-abroad/canada" },
  { src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800", alt: "London skyline", label: "United Kingdom", href: "/study-abroad/uk" },
  { src: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800", alt: "Sydney opera house", label: "Australia", href: "/study-abroad/australia" },
  { src: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800", alt: "German castle", label: "Germany", href: "/study-abroad/germany" },
  { src: "https://images.unsplash.com/photo-1549893072-4bc678117f45?w=800", alt: "Dublin street", label: "Ireland", href: "/study-abroad/ireland" },
  { src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800", alt: "Paris Eiffel Tower", label: "France", href: "/study-abroad/france" },
  { src: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800", alt: "New Zealand mountains", label: "New Zealand", href: "/study-abroad/newzealand" },
  { src: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800", alt: "Swiss alps", label: "Switzerland", href: "/study-abroad/switzerland" },
  { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800", alt: "Dubai skyline", label: "UAE (Dubai)", href: "/study-abroad/uae" },
];

const PixelatedCanvas = dynamic(
  () => import("@/components/ui/pixelated-canvas").then((mod) => ({ default: mod.PixelatedCanvas })),
  { ssr: false, loading: () => <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] bg-black/50 rounded-full animate-pulse" /> }
);

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

export default function Home() {
  return (
    <div className="w-full bg-[var(--color-bg-primary)] overflow-clip">

      {/* ═══════════ SECTION 1: HERO ═══════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Sweeping line paths behind everything */}
        <BackgroundPaths />

        {/* Subtle radial glow behind logo */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(184,156,74,0.08)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl mx-auto">
          {/* Pixelated Logo */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <PixelatedCanvas
              src="/wisdom logo.png"
              width={300}
              height={300}
              cellSize={3}
              dotScale={0.9}
              shape="square"
              backgroundColor="#000000"
              interactive={true}
              distortionStrength={4}
              distortionRadius={90}
              distortionMode="swirl"
              dropoutStrength={0.3}
              tintColor="#B89C4A"
              tintStrength={0.08}
              objectFit="contain"
              jitterStrength={3}
              jitterSpeed={3}
              fadeOnLeave={true}
              entranceAnimation={true}
              entranceDuration={2200}
              className="w-[200px] h-[200px] xs:w-[240px] xs:h-[240px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] rounded-full"
            />
          </motion.div>

          {/* Text Content */}
          <div className="text-center">
            <div>
              <h1 className="leading-[0.95]">
                <span className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-[0.04em] text-gold-glow block">
                  {"WISDOM".split("").map((letter, i) => (
                    <motion.span
                      key={`w-${i}`}
                      initial={{ y: 60, opacity: 0, rotateX: -40 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      transition={{
                        delay: 0.3 + i * 0.07,
                        type: "spring",
                        stiffness: 120,
                        damping: 20,
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
                <span className="font-serif-heading text-[var(--color-text-secondary)] text-4xl sm:text-5xl md:text-6xl lg:text-8xl block mt-2">
                  {"Nexus".split("").map((letter, i) => (
                    <motion.span
                      key={`n-${i}`}
                      initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
                      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                      transition={{
                        delay: 0.7 + i * 0.08,
                        type: "spring",
                        stiffness: 100,
                        damping: 22,
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.6em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ duration: 1.4, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-[var(--color-accent-gold)] uppercase text-xs sm:text-sm font-medium"
            >
              Elite Admission Architects
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mx-auto mt-8 w-24 gold-divider"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="mt-8 text-[var(--color-text-secondary)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-light"
            >
              Strategic academic counsel for families who refuse to leave their future to chance. Every placement, deliberate. Every outcome, engineered.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 2: TOP INSTITUTES ═══════════ */}
      <section className="bg-[var(--color-bg-section)]">
        <TopInstitutes />
      </section>

      {/* ═══════════ SECTION 3: OUR PATHWAYS ═══════════ */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-40 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-primary)]">
        <MarkerDoodle variant="arrow" className="absolute top-24 left-10 w-32 h-16 hidden lg:block" delay={0.3} />
        <MarkerDoodle variant="star" className="absolute bottom-32 right-12 w-16 h-16 hidden lg:block" delay={0.6} />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="mb-16"
          >
            <p className="text-[var(--color-accent-gold)] tracking-[0.3em] uppercase text-xs mb-4">Our Pathways</p>
            <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-gold-glow tracking-wide">
              Four Pillars of Precision
            </h2>
            <p className="text-[var(--color-text-muted)] mt-4 max-w-xl text-sm leading-relaxed">
              Every student&apos;s journey is unique. Our structured pathways ensure no opportunity is overlooked and no decision is left to guesswork.
            </p>
          </motion.div>

          <ul className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-5">
            {[
              { title: "Institutional Admissions", desc: "Direct access to 76+ premier institutions. We handle seat matrices, quota analysis, and documentation — so you focus on academics.", href: "/colleges", icon: GraduationCap, area: "md:[grid-area:1/1/2/7]" },
              { title: "Global Education Strategy", desc: "University shortlisting, SOP crafting, visa documentation, and post-landing support across 12+ countries. Not just abroad — the right destination.", href: "/study-abroad", icon: Globe, area: "md:[grid-area:1/7/2/13]" },
              { title: "Cognitive & Aptitude Mapping", desc: "DMIT-based dermatoglyphics and psychometric profiling to scientifically uncover innate strengths, ideal career paths, and learning styles.", href: "/dmit", icon: Brain, area: "md:[grid-area:2/1/3/7]" },
              { title: "Career Architecture", desc: "Personalized career roadmaps that align academic choices with industry demand, institutional specializations, and long-term professional goals.", href: "/contact", icon: Briefcase, area: "md:[grid-area:2/7/3/13]" },
            ].map((panel, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: smoothEase, delay: i * 0.1 }}
                className={`min-h-[14rem] sm:min-h-[16rem] list-none ${panel.area}`}
              >
                <Link href={panel.href} className="block h-full group">
                  <div className="relative h-full rounded-[1rem] sm:rounded-[1.25rem] border-[0.75px] border-[var(--color-border)] p-1.5 sm:p-2 md:rounded-[1.5rem] md:p-3">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-4 sm:gap-6 overflow-hidden rounded-xl border-[0.75px] border-[var(--color-border)] bg-[var(--color-bg-section)] p-4 sm:p-6 shadow-sm md:p-8">
                      <div className="relative flex flex-1 flex-col justify-between gap-4">
                        <div className="w-fit rounded-lg border-[0.75px] border-[var(--color-border)] bg-[var(--color-bg-primary)] p-2.5">
                          <panel.icon size={18} className="text-[var(--color-accent-gold)]" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl text-[var(--color-text-primary)] tracking-wide leading-tight">
                            {panel.title}
                          </h3>
                          <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                            {panel.desc}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-[var(--color-accent-gold)] text-xs tracking-[0.2em] uppercase translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        Learn More <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════ SECTION 3.5: STUDY ABROAD DESTINATIONS ═══════════ */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-40 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-section)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="mb-10 sm:mb-16"
          >
            <p className="text-[var(--color-accent-gold)] tracking-[0.3em] uppercase text-xs mb-4">Global Destinations</p>
            <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-gold-glow tracking-wide">
              Where Will You Study?
            </h2>
            <p className="text-[var(--color-text-muted)] mt-4 max-w-xl text-sm leading-relaxed">
              Explore our curated study-abroad destinations. Hover to discover, click to learn more.
            </p>
          </motion.div>

          {/* Desktop: hover expand gallery */}
          <div className="hidden md:block">
            <HoverExpandGallery images={abroadPlaces} />
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="flex md:hidden gap-3 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {abroadPlaces.map((place, i) => (
              <Link key={i} href={place.href || "/study-abroad"} className="relative flex-shrink-0 w-[40vw] max-w-[176px] h-48 sm:h-56 rounded-2xl overflow-hidden snap-start group">
                <img src={place.src} alt={place.alt} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-sm font-medium">{place.label}</p>
                  <span className="text-[var(--color-accent-gold)] text-[9px] tracking-[0.15em] uppercase">Explore →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/study-abroad" className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-3.5 text-sm tracking-[0.15em] uppercase">
              View All Destinations
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 4: WHY CHOOSE US ═══════════ */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-40 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-section)]">
        <MarkerDoodle variant="loop" className="absolute top-20 right-16 w-36 h-20 hidden lg:block" delay={0.2} />
        <MarkerDoodle variant="underline" className="absolute bottom-24 left-12 w-44 h-8 hidden lg:block" delay={0.4} />
        <MarkerDoodle variant="spiral" className="absolute top-1/2 left-4 w-20 h-20 hidden xl:block" delay={0.7} />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <p className="text-[var(--color-accent-gold)] tracking-[0.3em] uppercase text-xs mb-4">Why Wisdom Nexus</p>
            <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-gold-glow tracking-wide max-w-3xl">
              Built on Trust. Driven by Outcomes.
            </h2>
            <p className="text-[var(--color-text-muted)] mt-4 max-w-2xl text-sm leading-relaxed">
              We don&apos;t just guide — we guarantee clarity. Every recommendation is backed by data, every counselor brings domain expertise, and every family receives undivided attention.
            </p>
          </motion.div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-16">
            {[
              { num: "15,000+", label: "Students Placed" },
              { num: "76+", label: "Verified Institutions" },
              { num: "12+", label: "Countries Covered" },
              { num: "10+", label: "Years of Excellence" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-[var(--color-border)] bg-[var(--color-bg-primary)] p-4 sm:p-6 md:p-8 text-center"
              >
                <p className="font-serif-heading text-2xl sm:text-3xl md:text-5xl text-[var(--color-text-primary)] mb-1">{stat.num}</p>
                <p className="text-[var(--color-accent-gold)] tracking-[0.1em] sm:tracking-[0.15em] uppercase text-[9px] sm:text-[10px] md:text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: ShieldCheck, title: "Verified Partners Only", desc: "Every institution in our network is vetted for accreditation, placement records, and student satisfaction before we recommend it." },
              { icon: Users, title: "Dedicated Counselors", desc: "One family, one counselor. No rotating support desks — your advisor knows your child&apos;s file inside out." },
              { icon: Clock, title: "End-to-End Support", desc: "From the first aptitude test to the final admission letter, we stay involved at every critical milestone." },
              { icon: Award, title: "Transparent Process", desc: "No hidden fees, no pushed institutions. We present every option with complete cost breakdowns and success probabilities." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative border border-[var(--color-border)] bg-[var(--color-bg-primary)] p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-[var(--color-accent-gold)]/20"
              >
                <div className="w-10 h-10 border border-[var(--color-border)] flex items-center justify-center mb-6 group-hover:border-[var(--color-accent-gold)]/30 group-hover:bg-[var(--color-accent-gold)]/5 transition-all duration-500">
                  <feature.icon size={18} className="text-[var(--color-accent-gold)]" />
                </div>
                <h3 className="text-[var(--color-text-primary)] text-sm font-medium mb-3 tracking-wide">{feature.title}</h3>
                <p className="text-[var(--color-text-muted)] text-xs leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider max-w-3xl mx-auto" />

      {/* ═══════════ SECTION 5: TESTIMONIALS ═══════════ */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-primary)]">
        <MarkerDoodle variant="zigzag" className="absolute top-16 left-8 w-36 h-8 hidden lg:block" delay={0.3} />
        <MarkerDoodle variant="cross" className="absolute bottom-20 right-10 w-14 h-14 hidden lg:block" delay={0.5} />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="mb-12"
          >
            <p className="text-[var(--color-accent-gold)] tracking-[0.3em] uppercase text-xs mb-4">Success Stories</p>
            <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-gold-glow tracking-wide">
              Hear From Our Families
            </h2>
            <p className="text-[var(--color-text-muted)] mt-4 max-w-lg text-sm leading-relaxed">
              Real stories from students and parents who trusted us with the most important decision of their academic lives.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* ═══════════ SECTION 6: CTA ═══════════ */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-40 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-section)]">
        <MarkerDoodle variant="bracket" className="absolute top-1/2 -translate-y-1/2 left-8 w-10 h-32 hidden xl:block" delay={0.3} />
        <MarkerDoodle variant="bracket" className="absolute top-1/2 -translate-y-1/2 right-8 w-10 h-32 hidden xl:block rotate-180" delay={0.3} />

        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: smoothEase }}
          >
            <p className="text-[var(--color-accent-gold)] tracking-[0.3em] uppercase text-xs mb-6">Take the First Step</p>
            <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-gold-glow tracking-wide leading-tight">
              Your Future Deserves a Strategy, Not a Guess
            </h2>
            <p className="text-[var(--color-text-muted)] mt-6 max-w-lg text-sm leading-relaxed">
              Our counseling team is currently accepting complimentary profile evaluations. Discover your ideal academic pathway — with zero obligation.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-3 px-10 py-4 text-sm tracking-[0.15em] uppercase">
                Schedule a Consultation
                <ArrowUpRight size={16} />
              </Link>
              <Link href="/dmit" className="btn-outline inline-flex items-center justify-center gap-2 px-10 py-4 text-sm tracking-[0.15em] uppercase">
                Take Aptitude Test
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

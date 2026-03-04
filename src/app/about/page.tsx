"use client";

import { motion } from "framer-motion";
import { Target, Eye, Globe, BookOpen, Users, Lightbulb, ShieldCheck, GraduationCap, Briefcase, Workflow, CheckCircle2, HeartHandshake, Building2 } from "lucide-react";

export default function AboutPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-[var(--color-bg-primary)] min-h-screen"
        >
            {/* Hero */}
            <section className="pt-32 pb-24 bg-[var(--color-bg-section)] border-b border-[var(--color-border)] text-center px-4 relative overflow-hidden">
                <div className="max-w-5xl mx-auto relative z-10 mt-8">
                    <p className="text-[var(--color-accent-gold)] tracking-[0.3em] uppercase text-xs mb-6">About Us</p>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bungee text-gold-glow tracking-wide mb-6 leading-tight"
                    >
                        Wisdom Nexus Foundation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[var(--color-text-muted)] text-base max-w-2xl mx-auto"
                    >
                        Advancing Education. Empowering Youth. Enabling Global Futures.
                    </motion.p>
                </div>
            </section>

            {/* About & Vision/Mission */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* About Content */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen size={18} className="text-[var(--color-accent-gold)]" />
                            <span className="text-[var(--color-accent-gold)] text-[10px] tracking-[0.3em] uppercase">Who We Are</span>
                        </div>
                        <h2 className="text-2xl font-bungee text-gold-glow tracking-wide mb-6 leading-tight">
                            Who We Are
                        </h2>
                        <div className="gold-divider mb-8"></div>
                        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
                            <strong className="text-[var(--color-text-secondary)]">Wisdom Nexus Foundation</strong> is a globally oriented, non-profit organization committed to expanding access to higher education and empowering youth with the knowledge, skills, and career pathways required to succeed in a rapidly changing global economy.
                        </p>
                        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                            We work at the intersection of education, employability, and youth development—creating structured, sustainable programs that connect young people to academic excellence, professional opportunities, and global networks. Through strategic partnerships and evidence-based initiatives, the Foundation seeks to reduce educational inequities and unlock human potential worldwide.
                        </p>
                    </motion.div>

                    {/* Vision & Mission Cards */}
                    <div className="space-y-8">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[var(--color-bg-section)] border border-[var(--color-border)] p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-[var(--color-accent-gold)]/20 transition-colors">
                            <div className="w-12 h-12 shrink-0 bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center">
                                <Eye size={24} className="text-[var(--color-accent-gold)]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bungee text-[var(--color-text-primary)] mb-3 tracking-wide">Our Vision</h3>
                                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">A globally connected society where every young person has equitable access to higher education, meaningful career opportunities, and the capacity to contribute positively to social and economic development.</p>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-[var(--color-bg-section)] border border-[var(--color-border)] p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-[var(--color-accent-gold)]/20 transition-colors">
                            <div className="w-12 h-12 shrink-0 bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center">
                                <Target size={24} className="text-[var(--color-accent-gold)]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bungee text-[var(--color-text-primary)] mb-3 tracking-wide">Our Mission</h3>
                                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm mb-4">To strengthen higher education ecosystems and empower youth by:</p>
                                <ul className="space-y-3">
                                    {[
                                        "Expanding access to quality, globally recognized higher education",
                                        "Aligning education with evolving workforce and industry needs",
                                        "Providing career guidance, mentorship, and professional exposure",
                                        "Fostering leadership, innovation, and social responsibility"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[var(--color-text-secondary)] text-xs">
                                            <CheckCircle2 className="text-[var(--color-accent-gold)] shrink-0 mt-0.5" size={14} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Strategic Focus Areas */}
            <section className="py-24 bg-[var(--color-bg-section)] border-y border-[var(--color-border)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-[var(--color-accent-gold)] tracking-[0.3em] uppercase text-xs mb-4">Core Initiatives</p>
                        <h2 className="text-2xl font-bungee text-gold-glow tracking-wide mb-4">
                            Strategic Focus Areas
                        </h2>
                        <div className="gold-divider mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Area 1 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent-gold)]/20 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <GraduationCap size={20} className="text-[var(--color-accent-gold)]" />
                                <h3 className="text-lg font-bungee text-[var(--color-text-primary)] tracking-wide">Higher Education Access</h3>
                            </div>
                            <p className="text-[var(--color-text-muted)] text-sm mb-4">We facilitate inclusive access to higher education through:</p>
                            <ul className="space-y-2">
                                {["Partnerships with universities and academic institutions", "Scholarship facilitation and academic advising", "International education pathways and mobility programs", "Institutional collaboration and capacity building"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[var(--color-text-secondary)] text-xs"><CheckCircle2 className="text-[var(--color-accent-gold)] shrink-0 mt-0.5" size={12} />{item}</li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Area 2 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent-gold)]/20 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <Briefcase size={20} className="text-[var(--color-accent-gold)]" />
                                <h3 className="text-lg font-bungee text-[var(--color-text-primary)] tracking-wide">Career Readiness</h3>
                            </div>
                            <p className="text-[var(--color-text-muted)] text-sm mb-4">We support youth transition from education to employment by:</p>
                            <ul className="space-y-2">
                                {["Structured career counseling and planning", "Skills development aligned with global standards", "Internship, apprenticeship, and placement facilitation", "Professional development and employability training"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[var(--color-text-secondary)] text-xs"><CheckCircle2 className="text-[var(--color-accent-gold)] shrink-0 mt-0.5" size={12} />{item}</li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Area 3 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-8 bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent-gold)]/20 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <Users size={20} className="text-[var(--color-accent-gold)]" />
                                <h3 className="text-lg font-bungee text-[var(--color-text-primary)] tracking-wide">Youth Leadership</h3>
                            </div>
                            <p className="text-[var(--color-text-muted)] text-sm mb-4">We invest in the holistic development of young people through:</p>
                            <ul className="space-y-2">
                                {["Leadership and governance training", "Entrepreneurship and innovation initiatives", "Life skills and confidence-building programs", "Community engagement and social impact projects"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[var(--color-text-secondary)] text-xs"><CheckCircle2 className="text-[var(--color-accent-gold)] shrink-0 mt-0.5" size={12} />{item}</li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Area 4 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="p-8 bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent-gold)]/20 transition-colors">
                            <div className="flex items-center gap-4 mb-6">
                                <Globe size={20} className="text-[var(--color-accent-gold)]" />
                                <h3 className="text-lg font-bungee text-[var(--color-text-primary)] tracking-wide">Global Engagement</h3>
                            </div>
                            <p className="text-[var(--color-text-muted)] text-sm mb-4">We promote international collaboration by:</p>
                            <ul className="space-y-2">
                                {["Building global academic and industry networks", "Facilitating cross-border learning and mentorship", "Supporting global conferences, exchanges, and forums", "Encouraging cross-cultural understanding and cooperation"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[var(--color-text-secondary)] text-xs"><CheckCircle2 className="text-[var(--color-accent-gold)] shrink-0 mt-0.5" size={12} />{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Target Beneficiaries & Values */}
            <section className="py-24 bg-[var(--color-bg-primary)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Target Beneficiaries */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-xl font-bungee text-gold-glow mb-8 tracking-wide flex items-center gap-3">
                                <Building2 className="text-[var(--color-accent-gold)]" size={24} /> Target Beneficiaries
                            </h2>
                            <div className="space-y-4">
                                {[
                                    "Students pursuing higher education and career advancement",
                                    "Youth from underserved, emerging, and transitioning communities",
                                    "Early-career professionals and aspiring entrepreneurs",
                                    "Educational institutions and workforce development partners"
                                ].map((item, i) => (
                                    <div key={i} className="bg-[var(--color-bg-section)] p-5 border border-[var(--color-border)] flex items-center gap-4 hover:border-[var(--color-accent-gold)]/20 transition-colors">
                                        <div className="w-8 h-8 bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                                            <Target size={14} className="text-[var(--color-accent-gold)]" />
                                        </div>
                                        <p className="text-[var(--color-text-secondary)] text-sm">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Values & Principles */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <h2 className="text-xl font-bungee text-gold-glow mb-8 tracking-wide flex items-center gap-3">
                                <ShieldCheck className="text-[var(--color-accent-gold)]" size={24} /> Values & Principles
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { title: "Equity & Inclusion", desc: "Expanding opportunity through accessible education" },
                                    { title: "Excellence", desc: "Maintaining high standards in programs and outcomes" },
                                    { title: "Integrity & Accountability", desc: "Ethical, transparent governance" },
                                    { title: "Collaboration", desc: "Strong partnerships for sustainable impact" },
                                    { title: "Innovation & Impact", desc: "Forward-looking, outcome-driven solutions" }
                                ].map((val, i) => (
                                    <div key={i} className="bg-[var(--color-bg-section)] p-5 border border-[var(--color-border)] flex items-start gap-4">
                                        <div className="w-6 h-6 bg-[var(--color-accent-gold)] flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle2 size={12} className="text-[var(--color-bg-primary)]" />
                                        </div>
                                        <div>
                                            <h4 className="text-[var(--color-text-primary)] text-sm mb-0.5">{val.title}</h4>
                                            <p className="text-[var(--color-text-muted)] text-xs">{val.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Commitment Banner */}
            <section className="py-20 bg-[var(--color-bg-section)] border-y border-[var(--color-border)]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Globe size={32} className="text-[var(--color-accent-gold)] mx-auto mb-6" />
                    <h2 className="text-xl md:text-2xl font-bungee text-gold-glow tracking-wide mb-6">Our Global Commitment</h2>
                    <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-3xl mx-auto">
                        Wisdom Nexus Foundation operates with a global perspective, collaborating with governments, academic institutions, industry partners, and civil society organizations to design scalable solutions that strengthen education-to-employment pathways and empower the next generation of leaders.
                    </p>
                </div>
            </section>

            {/* Founder Message Section */}
            <section className="py-24 bg-[var(--color-bg-primary)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <HeartHandshake size={18} className="text-[var(--color-accent-gold)]" />
                            <span className="text-[var(--color-accent-gold)] text-[10px] tracking-[0.3em] uppercase">Leadership</span>
                        </div>
                        <h2 className="text-2xl font-bungee text-gold-glow tracking-wide">
                            Message from the Founder
                        </h2>
                    </div>

                    <div className="bg-[var(--color-bg-section)] border border-[var(--color-border)] p-12 lg:p-16 relative overflow-hidden">
                        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center relative z-10">
                            <div className="w-48 h-48 md:w-64 md:h-64 bg-[var(--color-surface)] shrink-0 border border-[var(--color-border)] relative overflow-hidden flex items-center justify-center">
                                <Users size={48} className="text-[var(--color-text-muted)] opacity-30" />
                            </div>

                            <div>
                                <h3 className="text-2xl md:text-3xl font-bungee text-[var(--color-text-primary)] mb-2 tracking-wide">Dr. R. Karthikeyan</h3>
                                <p className="text-[var(--color-accent-gold)] text-[10px] tracking-[0.2em] uppercase mb-8">Founder & Chief Consultant</p>
                                <p className="text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed italic mb-8 border-l border-[var(--color-accent-gold)] pl-6 py-2">
                                    &ldquo;Education is the single most powerful tool to change lives. At Wisdom, we don&apos;t just fill forms; we sculpt futures. Every student is unique, and our goal is to find the environment where they will thrive.&rdquo;
                                </p>
                                <div className="gold-divider"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}

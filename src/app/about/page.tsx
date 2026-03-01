"use client";

import { motion } from "framer-motion";
import { Target, Eye, Globe, BookOpen, Users, Lightbulb, ShieldCheck, GraduationCap, Briefcase, Workflow, CheckCircle2, HeartHandshake, Building2 } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="w-full bg-[--color-bg-light] min-h-screen">
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#16636a] via-[#2aa5ae] to-[#3bb3bc] text-white pt-32 pb-24 text-center px-4 relative overflow-hidden">
                <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-white rounded-full mix-blend-overlay filter blur-[150px] opacity-20"></div>
                <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] bg-[#FA9C0F] rounded-full mix-blend-overlay filter blur-[150px] opacity-30"></div>

                <div className="max-w-5xl mx-auto relative z-10 mt-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-extrabold mb-6 font-[family-name:var(--font-heading)] leading-tight drop-shadow-md"
                    >
                        Wisdom Nexus Foundation
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-2xl text-teal-50 font-bold max-w-4xl mx-auto drop-shadow-sm mb-4"
                    >
                        Advancing Education. Empowering Youth. Enabling Global Futures.
                    </motion.p>
                </div>
            </section>

            {/* About & Vision/Mission */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* About Content */}
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#2aa5ae]/10 text-[#2aa5ae] font-bold mb-6">
                            <BookOpen size={20} /> About Us
                        </div>
                        <h2 className="text-4xl font-extrabold text-[#111] mb-6 font-[family-name:var(--font-heading)] leading-tight">
                            Who We Are
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-[#2aa5ae] to-[#FA9C0F] rounded-full mb-8"></div>
                        <p className="text-[--color-text-gray] text-lg leading-relaxed mb-6 font-medium">
                            <strong>Wisdom Nexus Foundation</strong> is a globally oriented, non-profit organization committed to expanding access to higher education and empowering youth with the knowledge, skills, and career pathways required to succeed in a rapidly changing global economy.
                        </p>
                        <p className="text-[--color-text-gray] text-lg leading-relaxed font-medium">
                            We work at the intersection of education, employability, and youth development—creating structured, sustainable programs that connect young people to academic excellence, professional opportunities, and global networks. Through strategic partnerships and evidence-based initiatives, the Foundation seeks to reduce educational inequities and unlock human potential worldwide.
                        </p>
                    </motion.div>

                    {/* Vision & Mission Cards */}
                    <div className="space-y-8">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass bg-white/50 border border-gray-100 p-8 rounded-[2.5rem] shadow-xl flex flex-col sm:flex-row gap-6 items-start hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 shrink-0 bg-[#2aa5ae] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#2aa5ae]/30">
                                <Eye size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-extrabold text-[#111] mb-3">Our Vision</h3>
                                <p className="text-[--color-text-gray] leading-relaxed font-medium">A globally connected society where every young person has equitable access to higher education, meaningful career opportunities, and the capacity to contribute positively to social and economic development.</p>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="glass bg-white/50 border border-gray-100 p-8 rounded-[2.5rem] shadow-xl flex flex-col sm:flex-row gap-6 items-start hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 shrink-0 bg-[#FA9C0F] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#FA9C0F]/30">
                                <Target size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-extrabold text-[#111] mb-3">Our Mission</h3>
                                <p className="text-[--color-text-gray] leading-relaxed font-medium mb-4">To strengthen higher education ecosystems and empower youth by:</p>
                                <ul className="space-y-3">
                                    {[
                                        "Expanding access to quality, globally recognized higher education",
                                        "Aligning education with evolving workforce and industry needs",
                                        "Providing career guidance, mentorship, and professional exposure",
                                        "Fostering leadership, innovation, and social responsibility"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[#111] font-bold text-sm">
                                            <CheckCircle2 className="text-[#FA9C0F] shrink-0 mt-0.5" size={18} />
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
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#FA9C0F]/10 text-[#FA9C0F] font-bold mb-6">
                            <Workflow size={20} /> Core Initiatives
                        </div>
                        <h2 className="text-4xl font-extrabold text-[#111] mb-6 font-[family-name:var(--font-heading)] leading-tight">
                            Strategic Focus Areas
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#FA9C0F] to-[#2aa5ae] mx-auto rounded-full mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Area 1 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-[2.5rem] bg-[--color-bg-light] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-[#2aa5ae] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#2aa5ae]/30">
                                    <GraduationCap size={28} />
                                </div>
                                <h3 className="text-2xl font-extrabold text-[#111]">Higher Education Access</h3>
                            </div>
                            <p className="text-[--color-text-gray] font-medium mb-4">We facilitate inclusive access to higher education through:</p>
                            <ul className="space-y-2">
                                {["Partnerships with universities and academic institutions", "Scholarship facilitation and academic advising", "International education pathways and mobility programs", "Institutional collaboration and capacity building"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[#111] font-bold text-sm"><CheckCircle2 className="text-[#2aa5ae] shrink-0 mt-0.5" size={16} />{item}</li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Area 2 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 rounded-[2.5rem] bg-[--color-bg-light] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-[#FA9C0F] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#FA9C0F]/30">
                                    <Briefcase size={28} />
                                </div>
                                <h3 className="text-2xl font-extrabold text-[#111]">Career Readiness</h3>
                            </div>
                            <p className="text-[--color-text-gray] font-medium mb-4">We support youth transition from education to employment by:</p>
                            <ul className="space-y-2">
                                {["Structured career counseling and planning", "Skills development aligned with global standards", "Internship, apprenticeship, and placement facilitation", "Professional development and employability training"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[#111] font-bold text-sm"><CheckCircle2 className="text-[#FA9C0F] shrink-0 mt-0.5" size={16} />{item}</li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Area 3 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-8 rounded-[2.5rem] bg-[--color-bg-light] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-[#2aa5ae] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#2aa5ae]/30">
                                    <Users size={28} />
                                </div>
                                <h3 className="text-2xl font-extrabold text-[#111]">Youth Leadership</h3>
                            </div>
                            <p className="text-[--color-text-gray] font-medium mb-4">We invest in the holistic development of young people through:</p>
                            <ul className="space-y-2">
                                {["Leadership and governance training", "Entrepreneurship and innovation initiatives", "Life skills and confidence-building programs", "Community engagement and social impact projects"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[#111] font-bold text-sm"><CheckCircle2 className="text-[#2aa5ae] shrink-0 mt-0.5" size={16} />{item}</li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Area 4 */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="p-8 rounded-[2.5rem] bg-[--color-bg-light] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-[#FA9C0F] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#FA9C0F]/30">
                                    <Globe size={28} />
                                </div>
                                <h3 className="text-2xl font-extrabold text-[#111]">Global Engagement</h3>
                            </div>
                            <p className="text-[--color-text-gray] font-medium mb-4">We promote international collaboration by:</p>
                            <ul className="space-y-2">
                                {["Building global academic and industry networks", "Facilitating cross-border learning and mentorship", "Supporting global conferences, exchanges, and forums", "Encouraging cross-cultural understanding and cooperation"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[#111] font-bold text-sm"><CheckCircle2 className="text-[#FA9C0F] shrink-0 mt-0.5" size={16} />{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Target Beneficiaries & Values */}
            <section className="py-24 bg-[--color-bg-light]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Target Beneficiaries */}
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl font-extrabold text-[#111] mb-8 font-[family-name:var(--font-heading)] flex items-center gap-3">
                                <Building2 className="text-[#2aa5ae]" size={32} /> Target Beneficiaries
                            </h2>
                            <div className="space-y-4">
                                {[
                                    "Students pursuing higher education and career advancement",
                                    "Youth from underserved, emerging, and transitioning communities",
                                    "Early-career professionals and aspiring entrepreneurs",
                                    "Educational institutions and workforce development partners"
                                ].map((item, i) => (
                                    <div key={i} className="glass bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                                        <div className="w-10 h-10 rounded-full bg-[#2aa5ae]/10 flex items-center justify-center text-[#2aa5ae] shrink-0">
                                            <Target size={20} />
                                        </div>
                                        <p className="text-[#111] font-bold">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Values & Principles */}
                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl font-extrabold text-[#111] mb-8 font-[family-name:var(--font-heading)] flex items-center gap-3">
                                <ShieldCheck className="text-[#FA9C0F]" size={32} /> Values & Principles
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { title: "Equity & Inclusion", desc: "Expanding opportunity through accessible education" },
                                    { title: "Excellence", desc: "Maintaining high standards in programs and outcomes" },
                                    { title: "Integrity & Accountability", desc: "Ethical, transparent governance" },
                                    { title: "Collaboration", desc: "Strong partnerships for sustainable impact" },
                                    { title: "Innovation & Impact", desc: "Forward-looking, outcome-driven solutions" }
                                ].map((val, i) => (
                                    <div key={i} className="glass bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#FA9C0F] flex items-center justify-center text-white shrink-0 mt-1 shadow-md shadow-[#FA9C0F]/30">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <div>
                                            <h4 className="text-[#111] font-extrabold text-lg">{val.title}</h4>
                                            <p className="text-[--color-text-gray] font-medium">{val.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Commitment Banner */}
            <section className="py-20 bg-gradient-to-r from-[#16636a] to-[#2aa5ae] text-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-20 h-20 mx-auto bg-white/20 rounded-3xl flex items-center justify-center mb-8 backdrop-blur-md shadow-lg rotate-3">
                        <Globe size={40} className="text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-[family-name:var(--font-heading)]">Our Global Commitment</h2>
                    <p className="text-xl md:text-2xl text-teal-50 font-medium leading-relaxed max-w-4xl mx-auto">
                        Wisdom Nexus Foundation operates with a global perspective, collaborating with governments, academic institutions, industry partners, and civil society organizations to design scalable solutions that strengthen education-to-employment pathways and empower the next generation of leaders.
                    </p>
                </div>
            </section>

            {/* Founder Message Section - Keep original text but update styling */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#2aa5ae]/10 text-[#2aa5ae] font-bold mb-6">
                            <HeartHandshake size={20} /> Leadership
                        </div>
                        <h2 className="text-4xl font-extrabold text-[#111] font-[family-name:var(--font-heading)] leading-tight">
                            Message from the Founder
                        </h2>
                    </div>

                    <div className="glass bg-[#FAF9F6] border border-gray-200 p-12 lg:p-16 rounded-[3rem] relative overflow-hidden shadow-2xl">
                        <div className="absolute -top-10 -right-10 text-[#FA9C0F] opacity-10 rotate-12">
                            <svg width="300" height="300" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        </div>

                        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center relative z-10">
                            <div className="w-56 h-56 md:w-72 md:h-72 rounded-[2.5rem] bg-gray-200 shrink-0 border-8 border-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] relative overflow-hidden">
                                {/* Founder Image Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-100 flex items-center justify-center">
                                    <Users size={64} className="text-gray-400 opacity-50" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-2 font-[family-name:var(--font-heading)]">Dr. R. Karthikeyan</h3>
                                <p className="text-[#FA9C0F] font-bold text-lg mb-8 tracking-widest uppercase">Founder & Chief Consultant</p>
                                <p className="text-[--color-text-gray] text-xl md:text-2xl leading-relaxed italic mb-8 border-l-4 border-[#2aa5ae] pl-6 py-2 font-medium">
                                    "Education is the single most powerful tool to change lives. At Wisdom, we don't just fill forms; we sculpt futures. Every student is unique, and our goal is to find the environment where they will thrive."
                                </p>
                                <div className="flex gap-4">
                                    <div className="w-12 h-1.5 bg-[#2aa5ae] rounded-full"></div>
                                    <div className="w-4 h-1.5 bg-[#FA9C0F] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

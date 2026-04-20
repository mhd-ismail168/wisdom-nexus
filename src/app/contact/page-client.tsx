"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Building2, ExternalLink, MessageCircle } from "lucide-react";
import BackgroundPaths from "@/components/ui/modern-background-paths";

const offices = [
    "Thiruvananthapuram",
    "Alappuzha",
    "Kochi",
    "Malappuram",
    "Palakkad",
];

export default function ContactPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen"
        >
            {/* Fixed Background */}
            <div className="fixed inset-0 z-0">
                <BackgroundPaths pattern="spiral" />
            </div>

            {/* Hero */}
            <section className="pt-28 sm:pt-32 pb-14 sm:pb-18 border-b border-[var(--color-border)] text-center px-4 relative overflow-hidden z-10">
                <div className="max-w-2xl mx-auto relative z-10">
                    <p className="text-[#C5A55A] tracking-[0.3em] uppercase text-xs mb-4 drop-shadow-[0_0_5px_rgba(197,165,90,0.5)]">&gt; Get In Touch</p>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, ease: "linear" }}
                        className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold text-gradient-sunset tracking-wide mb-4 sm:mb-6 leading-tight"
                    >
                        Reach Out To Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
                        className="text-[var(--color-text-muted)] text-sm max-w-lg mx-auto"
                    >
                        Have questions about your career path or university admissions? Our expert counselors are here to help you navigate your future.
                    </motion.p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-16 sm:py-20 md:py-24 relative z-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">

                    {/* Head Office */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[var(--color-bg-section)]/60 backdrop-blur-sm p-6 sm:p-8 border border-[var(--color-border)] hover:border-[#C5A55A]/30 hover:shadow-[0_0_20px_rgba(197,165,90,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <div className="flex items-start gap-5">
                            <div className="w-11 h-11 bg-[#C5A55A]/8 border border-[#C5A55A]/20 flex items-center justify-center shrink-0 rotate-45">
                                <MapPin className="text-[#C5A55A] -rotate-45" size={18} />
                            </div>
                            <div>
                                <h3 className="text-xs text-[#C5A55A] tracking-[0.2em] uppercase mb-3 font-medium">&gt; Head Office</h3>
                                <p className="text-[var(--color-text-primary)] text-sm font-medium mb-2">Wisdom Way Of Life</p>
                                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                                    KARIMPANAL STATUE AVENUE<br />
                                    Near Secretariat, Statue<br />
                                    Thiruvananthapuram, Kerala
                                </p>
                                <p className="text-[var(--color-text-muted)] text-sm mt-2">PIN – 695001</p>
                                <a
                                    href="https://maps.google.com/?q=Karimpanal+Statue+Avenue+Thiruvananthapuram+Kerala"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-[#C5A55A] text-xs tracking-wider mt-4 hover:gap-2.5 transition-all duration-300"
                                >
                                    View on Google Maps <ExternalLink size={12} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Call Us */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="bg-[var(--color-bg-section)]/60 backdrop-blur-sm p-6 sm:p-8 border border-[var(--color-border)] hover:border-[#C5A55A]/30 hover:shadow-[0_0_20px_rgba(197,165,90,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <div className="flex items-start gap-5">
                            <div className="w-11 h-11 bg-[#C5A55A]/8 border border-[#C5A55A]/20 flex items-center justify-center shrink-0 rotate-45">
                                <Phone className="text-[#C5A55A] -rotate-45" size={18} />
                            </div>
                            <div>
                                <h3 className="text-xs text-[#C5A55A] tracking-[0.2em] uppercase mb-3 font-medium">&gt; Call Us</h3>
                                <div className="space-y-2">
                                    {["+91 99957 76277", "+91 99957 79477", "+91 90372 21362"].map((num) => (
                                        <a
                                            key={num}
                                            href={`tel:${num.replace(/\s/g, "")}`}
                                            className="block text-[var(--color-text-secondary)] text-sm hover:text-[#C5A55A] transition-colors duration-200"
                                        >
                                            {num}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[var(--color-bg-section)]/60 backdrop-blur-sm p-6 sm:p-8 border border-[var(--color-border)] hover:border-[#C5A55A]/30 hover:shadow-[0_0_20px_rgba(197,165,90,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <div className="flex items-start gap-5">
                            <div className="w-11 h-11 bg-[#C5A55A]/8 border border-[#C5A55A]/20 flex items-center justify-center shrink-0 rotate-45">
                                <Mail className="text-[#C5A55A] -rotate-45" size={18} />
                            </div>
                            <div>
                                <h3 className="text-xs text-[#C5A55A] tracking-[0.2em] uppercase mb-3 font-medium">&gt; Email Us</h3>
                                <div className="space-y-2">
                                                {["info@wisdomwayoflife.com"].map((email) => (
                                        <a
                                            key={email}
                                            href={`mailto:${email}`}
                                            className="block text-[var(--color-text-secondary)] text-sm hover:text-[#C5A55A] transition-colors duration-200"
                                        >
                                            {email}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Our Presence Across Kerala */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="bg-[var(--color-bg-section)]/60 backdrop-blur-sm p-6 sm:p-8 border border-[var(--color-border)] hover:border-[#C5A55A]/30 hover:shadow-[0_0_20px_rgba(197,165,90,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <div className="flex items-start gap-5">
                            <div className="w-11 h-11 bg-[#C5A55A]/8 border border-[#C5A55A]/20 flex items-center justify-center shrink-0 rotate-45">
                                <Building2 className="text-[#C5A55A] -rotate-45" size={18} />
                            </div>
                            <div>
                                <h3 className="text-xs text-[#C5A55A] tracking-[0.2em] uppercase mb-4 font-medium">&gt; Our Presence Across Kerala</h3>
                                <div className="flex flex-wrap gap-2.5">
                                    {offices.map((city) => (
                                        <span
                                            key={city}
                                            className="text-xs text-[var(--color-text-secondary)] bg-[var(--color-surface)] border border-[var(--color-border)] px-3.5 py-1.5 tracking-wide hover:border-[#C5A55A]/30 hover:text-[#C5A55A] transition-all duration-200"
                                        >
                                            {city}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* WhatsApp CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex justify-center pt-4"
                    >
                        <a
                            href="https://wa.me/919037221362"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#C5A55A]/40 bg-[var(--color-bg-section)]/60 backdrop-blur-sm text-[#C5A55A] text-xs tracking-[0.15em] uppercase font-medium hover:border-[#C5A55A]/80 hover:shadow-[0_0_25px_rgba(197,165,90,0.12)] hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <MessageCircle size={18} className="text-[#25D366]" />
                            Chat With Us on WhatsApp
                        </a>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}

import { Mail, Phone, MapPin, Send } from "lucide-react";
import BackgroundPaths from "@/components/ui/modern-background-paths";

export default function ContactPage() {
    return (
        <div className="pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-screen">
            {/* Fixed Background */}
            <div className="fixed inset-0 z-0">
                <BackgroundPaths pattern="spiral" />
            </div>

            {/* Header section */}
            <section className="w-full mb-10 sm:mb-16 relative z-10">
                <div className="border-b border-[var(--color-border)] p-6 sm:p-10 md:p-16 lg:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <p className="text-[#C5A55A] tracking-[0.3em] uppercase text-xs mb-4 drop-shadow-[0_0_5px_rgba(197,165,90,0.5)]">&gt; Get In Touch</p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-orbitron font-bold text-gradient-sunset tracking-wide mb-4 sm:mb-6 leading-tight">
                            Let&apos;s <span className="text-[#C5A55A] drop-shadow-[0_0_8px_rgba(197,165,90,0.6)]">Connect</span>
                        </h1>
                        <p className="text-[var(--color-text-muted)] text-sm">
                            Have questions about your career path or university admissions? Our expert counselors are here to help you navigate your future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

                    {/* Contact Info Cards */}
                    <div className="space-y-4 sm:space-y-6">
                        <h2 className="text-lg sm:text-xl font-orbitron font-bold text-[#C5A55A] drop-shadow-[0_0_5px_rgba(197,165,90,0.5)] tracking-wide mb-6 sm:mb-8">&gt; Reach Out To Us</h2>

                        <div className="bg-[var(--color-bg-section)] p-5 sm:p-8 border border-[var(--color-border)] border-l-2 border-l-[#C5A55A]/40 flex items-start gap-4 sm:gap-6 hover:border-[#C5A55A]/30 hover:shadow-[0_0_15px_rgba(197,165,90,0.05)] transition-all duration-200">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C5A55A]/5 border border-[#C5A55A]/20 flex items-center justify-center shrink-0 rotate-45">
                                <MapPin className="text-[#C5A55A] -rotate-45" size={18} />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-[var(--color-text-primary)] mb-2">Our Office</h3>
                                <p className="text-[var(--color-text-muted)] text-xs sm:text-sm leading-relaxed">
                                    123 Education Hub, Knowledge Park<br />
                                    Bengaluru, Karnataka 560001
                                </p>
                            </div>
                        </div>

                        <div className="bg-[var(--color-bg-section)] p-5 sm:p-8 border border-[var(--color-border)] border-l-2 border-l-[#C5A55A]/40 flex items-start gap-4 sm:gap-6 hover:border-[#C5A55A]/30 hover:shadow-[0_0_15px_rgba(197,165,90,0.05)] transition-all duration-200">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C5A55A]/5 border border-[#C5A55A]/20 flex items-center justify-center shrink-0 rotate-45">
                                <Phone className="text-[#C5A55A] -rotate-45" size={18} />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-[var(--color-text-primary)] mb-2">Call Us</h3>
                                <p className="text-[var(--color-text-muted)] text-sm mb-1">+91 98765 43210</p>
                                <p className="text-[var(--color-text-muted)] text-sm">+91 87654 32109</p>
                            </div>
                        </div>

                        <div className="bg-[var(--color-bg-section)] p-5 sm:p-8 border border-[var(--color-border)] border-l-2 border-l-[#C5A55A]/40 flex items-start gap-4 sm:gap-6 hover:border-[#C5A55A]/30 hover:shadow-[0_0_15px_rgba(197,165,90,0.05)] transition-all duration-200">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C5A55A]/5 border border-[#C5A55A]/20 flex items-center justify-center shrink-0 rotate-45">
                                <Mail className="text-[#C5A55A] -rotate-45" size={18} />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-[var(--color-text-primary)] mb-2">Email Us</h3>
                                <p className="text-[var(--color-text-muted)] text-sm mb-1">admissions@wisdomlearn.com</p>
                                <p className="text-[var(--color-text-muted)] text-sm">support@wisdomlearn.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-[var(--color-bg-section)] p-6 sm:p-8 md:p-10 lg:p-12 border border-[var(--color-border)] relative">
                        <h2 className="text-lg sm:text-xl font-orbitron font-bold text-[#C5A55A] drop-shadow-[0_0_5px_rgba(197,165,90,0.5)] tracking-wide mb-6 sm:mb-8">&gt; Send a Message</h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.15em]">First Name</label>
                                    <input type="text" placeholder="John" className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] focus:border-[#C5A55A] focus:shadow-[0_0_10px_rgba(197,165,90,0.15)] px-4 py-3 outline-none text-[var(--color-text-primary)] text-sm transition-all duration-200 placeholder:text-[var(--color-text-muted)]" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.15em]">Last Name</label>
                                    <input type="text" placeholder="Doe" className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] focus:border-[#C5A55A] focus:shadow-[0_0_10px_rgba(197,165,90,0.15)] px-4 py-3 outline-none text-[var(--color-text-primary)] text-sm transition-all duration-200 placeholder:text-[var(--color-text-muted)]" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.15em]">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] focus:border-[#C5A55A] focus:shadow-[0_0_10px_rgba(197,165,90,0.15)] px-4 py-3 outline-none text-[var(--color-text-primary)] text-sm transition-all duration-200 placeholder:text-[var(--color-text-muted)]" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.15em]">Subject</label>
                                <select className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] focus:border-[#C5A55A] focus:shadow-[0_0_10px_rgba(197,165,90,0.15)] px-4 py-3 outline-none text-[var(--color-text-secondary)] text-sm transition-all duration-200 appearance-none cursor-pointer">
                                    <option>General Inquiry</option>
                                    <option>University Admissions</option>
                                    <option>DMIT Assessment</option>
                                    <option>Study Abroad</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.15em]">Your Message</label>
                                <textarea rows={4} placeholder="How can we help you?" className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] focus:border-[#C5A55A] focus:shadow-[0_0_10px_rgba(197,165,90,0.15)] px-4 py-3 outline-none text-[var(--color-text-primary)] text-sm transition-all duration-200 resize-none placeholder:text-[var(--color-text-muted)]"></textarea>
                            </div>

                            <button type="button" className="w-full btn-primary py-3.5 text-xs tracking-[0.15em] uppercase flex justify-center items-center gap-2 mt-4">
                                Send Message <Send size={14} />
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}

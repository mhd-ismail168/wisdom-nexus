import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] pt-20 pb-10 border-t border-[var(--color-border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-[var(--color-border)] pb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 flex flex-col space-y-6">
                        <Link href="/" className="font-orbitron text-xl font-bold tracking-[0.15em] text-[#C5A55A] drop-shadow-[0_0_8px_rgba(197,165,90,0.5)] inline-flex items-center">
                            &gt; WISDOM
                        </Link>
                        <p className="text-[var(--color-text-muted)] leading-relaxed max-w-sm text-sm">
                            Empowering students to navigate their future with certainty. We provide end-to-end guidance for domestic and international university admissions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 md:col-span-1">
                        <h4 className="text-[var(--color-text-primary)] text-xs tracking-[0.2em] uppercase mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-gold)] text-sm transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-gold)] text-sm transition-colors">About</Link></li>
                            <li><Link href="/colleges" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-gold)] text-sm transition-colors">Institutions</Link></li>
                            <li><Link href="/study-abroad" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-gold)] text-sm transition-colors">Global Strategy</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3 md:col-span-1">
                        <h4 className="text-[var(--color-text-primary)] text-xs tracking-[0.2em] uppercase mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="/dmit" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-gold)] text-sm transition-colors">Aptitude Mapping</Link></li>
                            <li><Link href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-gold)] text-sm transition-colors">Career Structuring</Link></li>
                            <li><Link href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-gold)] text-sm transition-colors">Admission Strategy</Link></li>
                            <li><Link href="#" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-gold)] text-sm transition-colors">Visa Facilitation</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3 md:col-span-2">
                        <h4 className="text-[var(--color-text-primary)] text-xs tracking-[0.2em] uppercase mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-[var(--color-accent-gold)] shrink-0 mt-0.5" />
                                <span className="text-[var(--color-text-muted)] text-sm">123 Education Hub, Tech Park Phase 2, Bengaluru, Karnataka 560001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-[var(--color-accent-gold)] shrink-0" />
                                <a href="tel:+919876543210" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-sm transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-[var(--color-accent-gold)] shrink-0" />
                                <a href="mailto:info@wisdomnexus.com" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-sm transition-colors">info@wisdomnexus.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
                    <p className="text-xs text-[var(--color-text-muted)] text-center md:text-left">
                        © {new Date().getFullYear()} Wisdom Nexus. All Rights Reserved.
                    </p>
                    <div className="flex items-center space-x-6">
                        <Link href="/privacy" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent-gold)] transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent-gold)] transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

import Link from "next/link";
import { Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[--color-bg-page] border-t border-[#2aa5ae]/20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-gray-200 pb-12">
                    {/* Logo Side */}
                    <div className="flex items-center gap-2">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12C4 7.58172 7.58172 4 12 4V12H4Z" fill="#111111" />
                            <path d="M4 12H12V20C7.58172 20 4 16.4183 4 12Z" fill="#2D7A73" />
                        </svg>
                        <Link href="/" className="text-3xl font-black tracking-tight text-[--color-text-dark]">
                            Wisdom <span className="text-[#2aa5ae]">Learn</span>
                        </Link>
                    </div>

                    <div className="flex space-x-6">
                        <Link href="/" className="text-[--color-text-gray] hover:text-[#2aa5ae] font-bold transition-colors">Home</Link>
                        <Link href="/colleges" className="text-[--color-text-gray] hover:text-[#2aa5ae] font-bold transition-colors">Colleges</Link>
                        <Link href="/study-abroad" className="text-[--color-text-gray] hover:text-[#2aa5ae] font-bold transition-colors">Study Abroad</Link>
                        <Link href="/dmit" className="text-[--color-text-gray] hover:text-[#2aa5ae] font-bold transition-colors">DMIT Assessment</Link>
                        <Link href="/about" className="text-[--color-text-gray] hover:text-[#2aa5ae] font-bold transition-colors">About Us</Link>
                    </div>

                    {/* CTA Button */}
                    <div>
                        <Link href="#contact" className="px-8 py-3 rounded-xl bg-[--color-btn-primary] text-[#111] font-bold hover:bg-[--color-btn-hover] hover:scale-105 transition-all shadow-md">
                            Subscribe Now
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
                    <p className="text-sm text-[--color-text-gray] font-bold">
                        © copyright wisdom.co 2026. All Rights Reserved
                    </p>

                    <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-[#2aa5ae] flex items-center justify-center text-white hover:bg-[--color-primary-mid] transition-colors shadow-sm">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#2aa5ae] flex items-center justify-center text-white hover:bg-[--color-primary-mid] transition-colors shadow-sm">
                            <Facebook size={18} fill="currentColor" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-[#2aa5ae] flex items-center justify-center text-white hover:bg-[--color-primary-mid] transition-colors shadow-sm">
                            <Twitter size={18} fill="currentColor" stroke="none" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

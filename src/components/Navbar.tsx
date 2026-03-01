"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path || (path !== '/' && pathname.startsWith(path));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 bg-[--color-bg-page]/90 backdrop-blur-md border-b border-gray-200 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative z-50">
          <div className="flex-shrink-0 flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12C4 7.58172 7.58172 4 12 4V12H4Z" fill="#111111" />
              <path d="M4 12H12V20C7.58172 20 4 16.4183 4 12Z" fill="#2D7A73" />
            </svg>
            <Link href="/" className="text-2xl font-black tracking-tight text-[--color-text-dark]">
              Edu<span className="text-[#2aa5ae]">Learn</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className={`transition-colors font-bold text-sm ${isActive("/") ? "text-[#2aa5ae]" : "text-[--color-text-gray] hover:text-[#2aa5ae]"}`}>Home</Link>
            <Link href="/colleges" className={`transition-colors font-bold text-sm ${isActive("/colleges") ? "text-[#2aa5ae]" : "text-[--color-text-gray] hover:text-[#2aa5ae]"}`}>Colleges</Link>
            <Link href="/study-abroad" className={`transition-colors font-bold text-sm ${isActive("/study-abroad") ? "text-[#2aa5ae]" : "text-[--color-text-gray] hover:text-[#2aa5ae]"}`}>Study Abroad</Link>
            <Link href="/dmit" className={`transition-colors font-bold text-sm ${isActive("/dmit") ? "text-[#2aa5ae]" : "text-[--color-text-gray] hover:text-[#2aa5ae]"}`}>DMIT Assessment</Link>
            <Link href="/about" className={`transition-colors font-bold text-sm ${isActive("/about") ? "text-[#2aa5ae]" : "text-[--color-text-gray] hover:text-[#2aa5ae]"}`}>About Us</Link>
            <Link href="/contact" className={`transition-colors font-bold text-sm ${isActive("/contact") ? "text-[#2aa5ae]" : "text-[--color-text-gray] hover:text-[#2aa5ae]"}`}>Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[--color-text-gray] hover:text-[#2aa5ae] transition-colors p-2 -mr-2">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-xl absolute w-full left-0 top-0 pt-24 pb-8 flex flex-col items-center shadow-2xl overflow-hidden z-40"
          >
            <div className="flex flex-col items-center space-y-8 mt-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Link href="/" onClick={() => setIsOpen(false)} className={`text-2xl font-extrabold tracking-wide ${isActive("/") ? "text-[#2aa5ae]" : "text-[--color-text-gray] hover:text-[#2aa5ae]"}`}>Home</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                <Link href="/colleges" onClick={() => setIsOpen(false)} className={`text-2xl font-extrabold tracking-wide ${isActive("/colleges") ? "text-[#2aa5ae]" : "text-[--color-text-gray] hover:text-[#2aa5ae]"}`}>Colleges</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Link href="/study-abroad" onClick={() => setIsOpen(false)} className={`text-2xl font-extrabold tracking-wide ${isActive("/study-abroad") ? "text-[#2aa5ae]" : "text-[--color-text-gray] hover:text-[#2aa5ae]"}`}>Study Abroad</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                <Link href="/dmit" onClick={() => setIsOpen(false)} className={`text-2xl font-extrabold tracking-wide ${isActive("/dmit") ? "text-[#2aa5ae]" : "text-[--color-text-gray] hover:text-[#2aa5ae]"}`}>DMIT Assessment</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Link href="/about" onClick={() => setIsOpen(false)} className={`text-2xl font-extrabold tracking-wide ${isActive("/about") ? "text-[#2aa5ae]" : "text-[--color-text-gray] hover:text-[#2aa5ae]"}`}>About Us</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                <Link href="/contact" onClick={() => setIsOpen(false)} className={`text-2xl font-extrabold tracking-wide ${isActive("/contact") ? "text-[#2aa5ae]" : "text-[--color-text-gray] hover:text-[#2aa5ae]"}`}>Contact</Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

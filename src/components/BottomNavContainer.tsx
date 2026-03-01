"use client";

import { useEffect, useState } from "react";
import { FloatingDock } from "./FloatingDock";
import { HoverGif } from "./HoverGif";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
    {
        title: "Home",
        href: "/",
        icon: <HoverGif src="/BottomNav/home_nav.gif" alt="Home" />,
    },
    {
        title: "Colleges",
        href: "/colleges",
        icon: <HoverGif src="/BottomNav/colleges_nav.gif" alt="Colleges" />,
    },
    {
        title: "Study Abroad",
        href: "/study-abroad",
        icon: <HoverGif src="/BottomNav/studyabroad_nav.gif" alt="Study Abroad" />,
    },
    {
        title: "DMIT Assessment",
        href: "/dmit",
        icon: <HoverGif src="/BottomNav/dmit_nav.gif" alt="DMIT Assessment" />,
    },
    {
        title: "About Us",
        href: "/about",
        icon: <HoverGif src="/BottomNav/aboutus_nav.gif" alt="About Us" />,
    },
    {
        title: "Contact",
        href: "/contact",
        icon: <HoverGif src="/BottomNav/contact_nav.gif" alt="Contact" />,
    },
];

export default function BottomNavContainer() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show when scrolled down a bit
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
        <AnimatePresence>
            {isScrolled && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none"
                >
                    <div className="pointer-events-auto">
                        <FloatingDock items={navItems} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

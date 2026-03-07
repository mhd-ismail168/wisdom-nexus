"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect, useState, useRef } from "react";
import {
  Home,
  GraduationCap,
  Globe,
  BrainCircuit,
  Info,
  Mail,
} from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";

const navItems = [
  { href: "/", title: "Home", icon: Home },
  { href: "/colleges", title: "Institutions", icon: GraduationCap },
  { href: "/study-abroad", title: "Global Strategy", icon: Globe },
  { type: "separator" as const },
  { href: "/dmit", title: "Aptitude Mapping", icon: BrainCircuit },
  { href: "/about", title: "About", icon: Info },
  { href: "/contact", title: "Contact", icon: Mail },
];

// Build the tabs array for ExpandableTabs (strip href)
const tabs = navItems.map((item) => {
  if ("type" in item && item.type === "separator") {
    return { type: "separator" as const };
  }
  return { title: item.title!, icon: item.icon! };
});

// Map from tab *clickable* index → href
const clickableItems = navItems.filter(
  (item) => !("type" in item && item.type === "separator")
);

function hrefFromTabIndex(tabIndex: number): string | null {
  // tabIndex is the index in the full tabs array (including separators)
  let clickableCount = 0;
  for (let i = 0; i <= tabIndex; i++) {
    const t = navItems[i];
    if ("type" in t && t.type === "separator") continue;
    if (i === tabIndex) return (t as { href: string }).href;
    clickableCount++;
  }
  return null;
}

function getActiveTabIndex(pathname: string): number | null {
  for (let i = 0; i < navItems.length; i++) {
    const item = navItems[i];
    if ("type" in item && item.type === "separator") continue;
    const href = (item as { href: string }).href;
    if (href === "/" && pathname === "/") return i;
    if (href !== "/" && pathname.startsWith(href)) return i;
  }
  return null;
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const handleChange = useCallback(
    (index: number | null) => {
      if (index === null) return;
      const href = hrefFromTabIndex(index);
      if (!href) return;
      if (href === pathname || (href !== "/" && pathname.startsWith(href))) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push(href);
      }
    },
    [router, pathname]
  );

  const activeTabIndex = getActiveTabIndex(pathname);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "linear" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pointer-events-none"
    >
      <nav className="flex items-center justify-center h-14 sm:h-16 md:h-20 gap-3 sm:gap-4 md:gap-6 pointer-events-auto px-2">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="font-orbitron text-base sm:text-lg md:text-xl font-bold tracking-[0.15em] text-[#C5A55A] drop-shadow-[0_0_8px_rgba(197,165,90,0.5)]">
            &gt; WISDOM
          </span>
        </Link>

        {/* Icon Nav — dynamic island */}
        <ExpandableTabs
          tabs={tabs}
          activeColor="text-[#C5A55A]"
          activeIndex={activeTabIndex}
          onChange={handleChange}
        />
      </nav>
    </motion.header>
  );
}

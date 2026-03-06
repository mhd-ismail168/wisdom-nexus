"use client";

import React, { useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Users,
  Globe,
  Lightbulb,
  Workflow,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

/* ────────── Types ────────── */
interface CardData {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  accent: string;          // tailwind-friendly color token for the orb
  span: string;            // grid col/row span classes
}

const CARDS: CardData[] = [
  {
    index: "01",
    title: "Higher Education",
    subtitle: "Access & Equity",
    description:
      "Facilitating inclusive pathways to world-class universities through strategic institutional partnerships, scholarship programs, and cross-border academic mobility.",
    tags: ["University Partnerships", "Scholarships", "Global Mobility", "Capacity Building"],
    icon: GraduationCap,
    accent: "from-amber-500/20 to-yellow-600/5",
    span: "col-span-1 sm:col-span-2 row-span-1 sm:row-span-2",
  },
  {
    index: "02",
    title: "Career Readiness",
    subtitle: "Education → Employment",
    description:
      "Bridging the gap between academic knowledge and professional success with structured counseling, skills training, and placement facilitation.",
    tags: ["Career Counseling", "Skills Training", "Placements"],
    icon: Briefcase,
    accent: "from-emerald-500/20 to-teal-600/5",
    span: "",
  },
  {
    index: "03",
    title: "Youth Leadership",
    subtitle: "Holistic Growth",
    description:
      "Developing future change-makers through governance training, entrepreneurship initiatives, and community-driven impact projects.",
    tags: ["Leadership Training", "Entrepreneurship", "Community Impact"],
    icon: Users,
    accent: "from-violet-500/20 to-purple-600/5",
    span: "",
  },
  {
    index: "04",
    title: "Global Engagement",
    subtitle: "Borderless Networks",
    description:
      "Building connected academic and industry ecosystems across continents through conferences, mentorship exchanges, and cross-cultural cooperation.",
    tags: ["Global Networks", "Mentorship", "Conferences", "Cross-Cultural"],
    icon: Globe,
    accent: "from-sky-500/20 to-blue-600/5",
    span: "row-span-1 sm:row-span-2",
  },
  {
    index: "05",
    title: "Strategic Partnerships",
    subtitle: "Scalable Solutions",
    description:
      "Collaborating with governments, institutions, and industry leaders to design education-to-employment frameworks that scale sustainably.",
    tags: ["Government", "Institutions", "Industry", "Frameworks"],
    icon: Workflow,
    accent: "from-rose-500/20 to-pink-600/5",
    span: "col-span-1 sm:col-span-2",
  },
  {
    index: "06",
    title: "Innovation & Impact",
    subtitle: "Outcome-Driven",
    description:
      "Pioneering evidence-based, forward-looking solutions that measurably unlock human potential across emerging economies.",
    tags: ["Evidence-Based", "Innovation", "Global Impact"],
    icon: Lightbulb,
    accent: "from-orange-500/20 to-amber-600/5",
    span: "",
  },
];

/* ────────── Animation Variants ────────── */
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/* ────────── BentoItem with 3-D tilt + mouse glow ────────── */
const BentoItem: React.FC<{
  card: CardData;
  index: number;
}> = ({ card, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const Icon = card.icon;

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      el.style.setProperty("--mouse-x", `${x}px`);
      el.style.setProperty("--mouse-y", `${y}px`);
      el.style.setProperty("--tilt-x", `${((y - cy) / cy) * -4}deg`);
      el.style.setProperty("--tilt-y", `${((x - cx) / cx) * 4}deg`);
    };
    const onLeave = () => {
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <motion.div
      ref={itemRef}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`bento-item group ${card.span}`}
    >
      {/* ── Decorative orb ── */}
      <div
        className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${card.accent} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
      />

      {/* ── Large index number ── */}
      <span className="bento-index font-serif-heading">{card.index}</span>

      {/* ── Icon ── */}
      <div className="bento-icon-ring">
        <Icon size={20} strokeWidth={1.5} />
      </div>

      {/* ── Text ── */}
      <h2 className="font-serif-heading text-lg sm:text-xl text-[var(--color-text-primary)] mt-4 leading-snug">
        {card.title}
      </h2>
      <p className="text-[var(--color-accent-gold)] text-[11px] tracking-[0.15em] uppercase mt-1 mb-3 font-medium">
        {card.subtitle}
      </p>
      <p className="text-[var(--color-text-muted)] text-[13px] leading-relaxed">
        {card.description}
      </p>

      {/* ── Tags ── */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="bento-tag"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ── Hover arrow ── */}
      <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
        <ArrowUpRight size={16} className="text-[var(--color-accent-gold)]" />
      </div>
    </motion.div>
  );
};

/* ────────── Main Grid ────────── */
export const CyberneticBentoGrid: React.FC = () => (
  <div className="bento-container">
    <div className="w-full max-w-6xl z-10">
      <div className="bento-grid">
        {CARDS.map((card, i) => (
          <BentoItem key={card.index} card={card} index={i} />
        ))}
      </div>
    </div>
  </div>
);

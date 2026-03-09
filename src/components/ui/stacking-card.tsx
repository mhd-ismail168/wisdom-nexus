"use client";

import { useTransform, motion, useScroll, type MotionValue } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Eye, Target, BookOpen, Sparkles } from "lucide-react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

/* ────────── Data ────────── */
interface StackCardData {
  label: string;
  title: string;
  description: string;
  bullets?: string[];
  image: string;
  accent: string;   // subtle bg tint for card
  icon: LucideIcon;
}

const CARDS: StackCardData[] = [
  {
    label: "Who We Are",
    title: "Wisdom Nexus\nFoundation",
    description:
      "A globally oriented, non-profit organization committed to expanding access to higher education and empowering youth with the knowledge, skills, and career pathways required to succeed in a rapidly changing global economy.",
    bullets: [
      "Bridging education, employability & youth development",
      "Strategic partnerships with world-class institutions",
      "Evidence-based initiatives that unlock human potential",
    ],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80&auto=format&fit=crop",
    accent: "rgba(197, 165, 90, 0.06)",
    icon: BookOpen,
  },
  {
    label: "Our Vision",
    title: "A Globally\nConnected Future",
    description:
      "A globally connected society where every young person has equitable access to higher education, meaningful career opportunities, and the capacity to contribute positively to social and economic development.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop",
    accent: "rgba(197, 165, 90, 0.08)",
    icon: Eye,
  },
  {
    label: "Our Mission",
    title: "Empowering\nThrough Education",
    description:
      "To strengthen higher education ecosystems and empower youth worldwide by:",
    bullets: [
      "Expanding access to quality, globally recognized higher education",
      "Aligning education with evolving workforce and industry needs",
      "Providing career guidance, mentorship, and professional exposure",
      "Fostering leadership, innovation, and social responsibility",
    ],
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80&auto=format&fit=crop",
    accent: "rgba(197, 165, 90, 0.05)",
    icon: Target,
  },
  {
    label: "Our Approach",
    title: "Sculpting\nFutures",
    description:
      "We work at the intersection of education, employability, and youth development—creating structured, sustainable programs that connect young people to academic excellence, professional opportunities, and global networks.",
    bullets: [
      "Reducing educational inequities worldwide",
      "Scalable frameworks across emerging economies",
      "Cross-border collaboration and mentorship",
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop",
    accent: "rgba(197, 165, 90, 0.07)",
    icon: Sparkles,
  },
];

/* ────────── Single Card ────────── */
interface CardProps {
  i: number;
  data: StackCardData;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  total: number;
}

const StackCard = ({ i, data, progress, range, targetScale, total }: CardProps) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.35, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, i === total - 1 ? 1 : 0.85]);
  const Icon = data.icon;

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale: cardScale,
          opacity,
          top: `calc(-5vh + ${i * 40}px)`,
          backgroundColor: data.accent,
        }}
        className={cn(
          "stacking-card",
          "relative flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12",
          "w-[95%] sm:w-[90%] lg:w-[85%] max-w-6xl",
          "min-h-[420px] sm:min-h-[440px] lg:h-[480px]",
          "rounded-2xl p-6 sm:p-8 lg:p-10",
          "origin-top",
        )}
      >
        {/* ── Left: Text ── */}
        <div className="flex flex-col justify-center flex-1 min-w-0">
          {/* label + icon */}
          <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
            <div className="w-8 h-8 rounded-lg border border-[var(--color-accent-gold)]/20 bg-[var(--color-accent-gold)]/8 flex items-center justify-center">
              <Icon size={16} className="text-[var(--color-accent-gold)]" />
            </div>
            <span className="text-[var(--color-accent-gold)] text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-medium">
              {data.label}
            </span>
          </div>

          {/* big title — Playfair Display */}
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--color-text-primary)] leading-[1.1] mb-4 sm:mb-5 whitespace-pre-line">
            {data.title}
          </h2>

          {/* divider */}
          <div className="w-16 h-px bg-gradient-to-r from-[var(--color-accent-gold)] to-transparent opacity-40 mb-4 sm:mb-5" />

          {/* description */}
          <p className="text-[var(--color-text-muted)] text-sm sm:text-[15px] leading-relaxed mb-4">
            {data.description}
          </p>

          {/* bullets */}
          {data.bullets && (
            <ul className="space-y-2">
              {data.bullets.map((b, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-[var(--color-text-secondary)] text-xs sm:text-[13px]"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-gold)] shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ── Right: Image ── */}
        <div className="relative w-full lg:w-[45%] h-48 sm:h-56 lg:h-full rounded-xl overflow-hidden shrink-0">
          <motion.div className="w-full h-full" style={{ scale: imageScale }}>
            <Image
              src={data.image}
              alt={`Wisdom Nexus admission guidance consultancy - ${data.label}`}
              fill
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* overlay tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </motion.div>
          {/* card number badge */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[var(--color-accent-gold)]/30 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <span className="font-serif-heading text-[var(--color-accent-gold)] text-sm sm:text-base">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* ── Decorative corner lines ── */}
        <svg className="absolute top-4 left-4 w-6 h-6 text-[var(--color-accent-gold)] opacity-20 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0 12 L0 0 L12 0" />
        </svg>
        <svg className="absolute bottom-4 right-4 w-6 h-6 text-[var(--color-accent-gold)] opacity-20 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M24 12 L24 24 L12 24" />
        </svg>
      </motion.div>
    </div>
  );
};

/* ────────── Exported Section ────────── */
export default function StackingCards() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative">
      {CARDS.map((card, i) => {
        const targetScale = 1 - (CARDS.length - i) * 0.04;
        return (
          <StackCard
            key={card.label}
            i={i}
            data={card}
            progress={scrollYProgress}
            range={[i * (1 / CARDS.length), 1]}
            targetScale={targetScale}
            total={CARDS.length}
          />
        );
      })}
    </section>
  );
}

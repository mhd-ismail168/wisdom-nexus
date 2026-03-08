"use client";

import { motion } from "motion/react";

/**
 * White thick marker doodle shapes that fade in when scrolled into view.
 * Each doodle is a hand-drawn SVG path rendered in white with thick strokes.
 */

interface DoodleProps {
  className?: string;
  /** Which doodle shape to render */
  variant: "circle" | "arrow" | "underline" | "squiggle" | "star" | "loop" | "cross" | "spiral" | "bracket" | "zigzag";
  /** Delay before animating in */
  delay?: number;
}

const doodlePaths: Record<DoodleProps["variant"], { path: string; viewBox: string }> = {
  circle: {
    viewBox: "0 0 200 200",
    path: "M100,20 C145,18 182,50 185,100 C188,150 155,182 100,185 C45,188 15,155 18,100 C21,50 55,22 100,20",
  },
  arrow: {
    viewBox: "0 0 200 100",
    path: "M10,50 C40,48 80,35 120,50 C140,57 155,45 180,50 M155,30 L182,50 L160,72",
  },
  underline: {
    viewBox: "0 0 300 40",
    path: "M5,25 C60,15 120,30 180,20 C220,14 260,28 295,22",
  },
  squiggle: {
    viewBox: "0 0 300 60",
    path: "M5,30 C25,10 45,50 65,30 C85,10 105,50 125,30 C145,10 165,50 185,30 C205,10 225,50 245,30 C265,10 285,50 295,30",
  },
  star: {
    viewBox: "0 0 100 100",
    path: "M50,5 L58,38 L95,38 L65,58 L75,92 L50,72 L25,92 L35,58 L5,38 L42,38 Z",
  },
  loop: {
    viewBox: "0 0 200 120",
    path: "M10,80 C10,30 50,10 80,40 C110,70 70,100 50,80 C30,60 60,20 100,30 C140,40 170,80 190,60",
  },
  cross: {
    viewBox: "0 0 100 100",
    path: "M20,20 L80,80 M80,20 L20,80",
  },
  spiral: {
    viewBox: "0 0 150 150",
    path: "M75,75 C75,65 85,55 95,55 C115,55 125,75 115,90 C105,110 75,115 60,100 C40,80 45,50 70,35 C100,18 135,30 140,65",
  },
  bracket: {
    viewBox: "0 0 60 200",
    path: "M45,10 C20,10 15,40 15,100 C15,160 20,190 45,190",
  },
  zigzag: {
    viewBox: "0 0 300 50",
    path: "M5,40 L30,10 L55,40 L80,10 L105,40 L130,10 L155,40 L180,10 L205,40 L230,10 L255,40 L280,10 L295,35",
  },
};

export function MarkerDoodle({ className = "", variant, delay = 0 }: DoodleProps) {
  const { path, viewBox } = doodlePaths[variant];

  return (
    <motion.svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      initial={{ opacity: 0, pathLength: 0 }}
      whileInView={{ opacity: 1, pathLength: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
    >
      <motion.path
        d={path}
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.12 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, delay, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

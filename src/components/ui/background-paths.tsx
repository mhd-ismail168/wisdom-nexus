"use client";

import { motion } from "motion/react";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 14 }, (_, i) => {
        const idx = i * 2.5; // Spread paths to maintain visual coverage
        return {
            id: i,
            d: `M-${380 - idx * 5 * position} -${189 + idx * 6}C-${
                380 - idx * 5 * position
            } -${189 + idx * 6} -${312 - idx * 5 * position} ${216 - idx * 6} ${
                152 - idx * 5 * position
            } ${343 - idx * 6}C${616 - idx * 5 * position} ${470 - idx * 6} ${
                684 - idx * 5 * position
            } ${875 - idx * 6} ${684 - idx * 5 * position} ${875 - idx * 6}`,
            width: 0.5 + idx * 0.03,
        };
    });

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-[var(--color-accent-gold)]"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.04 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + path.id * 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({ className }: { className?: string }) {
    return (
        <div className={`absolute inset-0 overflow-hidden ${className ?? ""}`} aria-hidden="true">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
        </div>
    );
}

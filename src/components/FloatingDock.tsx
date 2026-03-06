"use client";
/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "motion/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";

export const FloatingDock = ({
    items,
    desktopClassName,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    return (
        <FloatingDockDesktop items={items} className={desktopClassName} />
    );
};



const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    const mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onPointerMove={(e) => {
                if (e.pointerType === "mouse") {
                    mouseX.set(e.pageX);
                }
            }}
            onPointerLeave={(e) => {
                if (e.pointerType === "mouse") {
                    mouseX.set(Infinity);
                }
            }}
            className={cn(
                "mx-auto flex h-[4.5rem] md:h-[6rem] items-end gap-2 sm:gap-3 md:gap-5 rounded-full bg-[var(--color-surface)]/80 backdrop-blur-xl px-4 md:px-6 pb-3 md:pb-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-[var(--color-border)] overflow-visible",
                className,
            )}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({
    mouseX,
    title,
    icon,
    href,
}: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    href: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [48, 90, 48]);
    const heightTransform = useTransform(distance, [-150, 0, 150], [48, 90, 48]);

    const widthTransformIcon = useTransform(distance, [-150, 0, 150], [32, 60, 32]);
    const heightTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [32, 60, 32],
    );

    const width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <Link
            href={href}
            onClick={(e) => {
                if (isActive) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
            }}
        >
            <motion.div
                ref={ref}
                style={{ width, height }}
                onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") {
                        setHovered(true);
                    }
                }}
                onPointerLeave={(e) => {
                    if (e.pointerType === "mouse") {
                        setHovered(false);
                    }
                }}
                className={`relative flex aspect-square items-center justify-center rounded-full bg-[var(--color-surface)]/60 backdrop-blur-md border shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-colors ${isActive ? "border-[var(--color-accent-gold)] bg-[var(--color-accent-gold)]/10 ring-2 ring-[var(--color-accent-gold)]/40" : "border-[var(--color-border)] hover:bg-[var(--color-surface)]"}`}
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="absolute -top-14 left-1/2 w-fit rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-md px-4 py-1.5 text-sm font-medium whitespace-pre text-[var(--color-text-primary)] shadow-[0_8px_16px_rgba(0,0,0,0.3)] shrink-0 z-50 whitespace-nowrap"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center"
                >
                    {React.isValidElement(icon) ? React.cloneElement(icon as any, { hovered, active: isActive }) : icon}
                </motion.div>
            </motion.div>
        </Link>
    );
}

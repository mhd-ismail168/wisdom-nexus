"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tab {
  title: string;
  icon: LucideIcon;
  type?: never;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
}

type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  activeIndex?: number | null;
  onChange?: (index: number | null) => void;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: "spring" as const, bounce: 0, duration: 0.6 };

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-primary",
  activeIndex = null,
  onChange,
}: ExpandableTabsProps) {
  const [hovered, setHovered] = React.useState<number | null>(null);

  const Separator = () => (
    <div className="mx-1 h-[24px] w-[1.2px] bg-white/[0.08]" aria-hidden="true" />
  );

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] px-1 sm:px-1.5 py-0.5 sm:py-1 shadow-[0_2px_20px_rgba(0,0,0,0.4)]",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        const isHovered = hovered === index;
        const isActive = activeIndex === index;
        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial={false}
            animate="animate"
            custom={isHovered}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onChange?.(index)}
            transition={transition}
            className={cn(
              "relative flex items-center justify-center rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 text-sm font-medium transition-colors duration-300",
              isActive
                ? cn(activeColor)
                : isHovered
                  ? cn("bg-white/[0.06]", activeColor)
                  : "text-muted-foreground hover:text-foreground"
            )}
          >
            {/* Active dot indicator */}
            {isActive && !isHovered && (
              <motion.span
                layoutId="active-dot"
                className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full bg-[var(--color-accent-gold)]"
                transition={{ type: "spring" as const, bounce: 0.2, duration: 0.5 }}
              />
            )}
            <Icon size={18} />
            <AnimatePresence initial={false}>
              {isHovered && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden whitespace-nowrap text-xs tracking-wide"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}

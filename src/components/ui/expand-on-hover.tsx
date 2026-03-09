"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface HoverExpandImage {
  src: string;
  alt: string;
  label: string;
  href?: string;
}

const HoverExpandGallery = ({
  images,
  className,
}: {
  images: HoverExpandImage[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn("relative w-full max-w-6xl mx-auto", className)}
    >
      <div className="flex w-full items-center justify-center gap-1.5">
        {images.map((image, index) => {
          const isActive = activeImage === index;
          const Wrapper = image.href ? Link : "div";
          const wrapperProps = image.href
            ? { href: image.href }
            : {};

          return (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-2xl"
              initial={{ width: "4rem", height: "22rem" }}
              animate={{
                width: isActive ? "22rem" : "4rem",
                height: "22rem",
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              {/* @ts-expect-error - dynamic wrapper component */}
              <Wrapper
                {...wrapperProps}
                className="block h-full w-full"
              >
                {/* Dark gradient overlay */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    />
                  )}
                </AnimatePresence>

                {/* Country name overlay */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute bottom-0 left-0 right-0 z-20 p-5"
                    >
                      <p className="font-serif-heading text-3xl tracking-wide text-white">
                        {image.label}
                      </p>
                      {image.href && (
                        <span className="mt-1 inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent-gold)]">
                          Explore →
                        </span>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Inactive label (vertical) */}
                {!isActive && (
                  <div className="absolute inset-0 z-10 flex items-end justify-center pb-4">
                    <span
                      className="text-white/60 text-[10px] tracking-[0.15em] uppercase font-medium"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                      }}
                    >
                      {image.label}
                    </span>
                  </div>
                )}

                <Image
                  src={image.src}
                  alt={`Wisdom Nexus admission guidance consultancy - ${image.alt}`}
                  fill
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </Wrapper>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export { HoverExpandGallery };

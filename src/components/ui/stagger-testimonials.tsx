"use client"

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Went there not really expecting much, but the DMIT report actually made sense. Helped me figure out what stream to pick after plus two. Pretty glad I did it.",
    by: "Amal A",
  },
  {
    tempId: 1,
    testimonial: "My parents and I had no clue how management quota works. The team here sat with us, explained everything clearly, and helped us get a solid college within budget.",
    by: "Arjun",
  },
  {
    tempId: 2,
    testimonial: "I kept going back and forth between studying here and abroad. They didn't push me either way — just laid out the options honestly. That's what I appreciated.",
    by: "Vinay S",
  },
  {
    tempId: 3,
    testimonial: "Got my DMIT done here back in 10th class. The counselor told me things about my learning style that even my teachers hadn't noticed. Really helpful for board exam prep.",
    by: "Ananth",
  },
  {
    tempId: 4,
    testimonial: "Wasn't sure if career counseling was worth it, but one session here and I stopped second-guessing myself. They're straightforward and don't waste your time.",
    by: "Sheril",
  },
  {
    tempId: 5,
    testimonial: "They helped my younger brother get into a good engineering college in Bangalore. The whole process from shortlisting to admission was smooth. No last minute surprises.",
    by: "Anas",
  },
  {
    tempId: 6,
    testimonial: "What I liked is they didn't just hand me a list of colleges. They actually asked about my interests, marks, and budget before recommending anything.",
    by: "Anzil",
  },
  {
    tempId: 7,
    testimonial: "I was stressed about the NEET counseling process. These guys walked me through every round and helped with document prep. Saved me from a lot of confusion.",
    by: "Ashwin",
  },
  {
    tempId: 8,
    testimonial: "Did the DMIT assessment for my daughter. The report was detailed and the follow-up counseling session really helped us plan her academics better going forward.",
    by: "Athira",
  },
  {
    tempId: 9,
    testimonial: "Came here through a friend's recommendation. They helped me with the entire study abroad application — SOP, university shortlist, visa docs, everything. Genuine support.",
    by: "Anjana",
  },
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-4 sm:p-6 md:p-8 transition-all duration-200 ease-linear",
        isCenter
          ? "z-10 bg-[#C5A55A] text-[var(--color-bg-primary)] border-[#C5A55A] shadow-[0_0_30px_rgba(197,165,90,0.3)]"
          : "z-0 bg-[var(--color-bg-section)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[#C5A55A]/30"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: cardSize < 260 ? `polygon(30px 0%, calc(100% - 30px) 0%, 100% 30px, 100% 100%, calc(100% - 30px) 100%, 30px 100%, 0 100%, 0 0)` : `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px var(--color-border), 0 0 20px rgba(197,165,90,0.2)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-[#C5A55A]/30"
        style={{
          right: -2,
          top: cardSize < 260 ? 28 : 48,
          width: cardSize < 260 ? Math.sqrt(1800) : SQRT_5000,
          height: 2
        }}
      />
      {/* Name initial */}
      <div
        className={cn(
          "mb-2 sm:mb-4 h-10 w-9 sm:h-14 sm:w-12 flex items-center justify-center text-sm sm:text-lg font-orbitron font-bold",
          isCenter
            ? "bg-[var(--color-bg-primary)]/20 text-[var(--color-bg-primary)]"
            : "bg-[#C5A55A]/10 text-[#C5A55A]"
        )}
        style={{ boxShadow: "3px 3px 0px var(--color-bg-primary)" }}
      >
        {testimonial.by.charAt(0)}
      </div>
      <h3 className={cn(
        "text-sm sm:text-base md:text-xl font-medium leading-relaxed line-clamp-5 sm:line-clamp-none",
        isCenter ? "text-[var(--color-bg-primary)]" : "text-[var(--color-text-primary)]"
      )}>
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>
      <p className={cn(
        "absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 mt-2 text-xs sm:text-sm italic",
        isCenter ? "text-[var(--color-bg-primary)]/80" : "text-[#C5A55A]/60"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);
  const nextIdRef = useRef(testimonials.length);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: nextIdRef.current++ });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: nextIdRef.current++ });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 380) {
        setCardSize(220);
      } else if (width < 640) {
        setCardSize(260);
      } else {
        setCardSize(365);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: cardSize < 260 ? 420 : cardSize < 300 ? 480 : 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "btn-icon flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center text-xl sm:text-2xl",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "btn-icon flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center text-xl sm:text-2xl",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

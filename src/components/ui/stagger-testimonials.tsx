"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Their DMIT assessment was an eye-opener. It completely changed my perspective on engineering, and the counselor guided me perfectly through the complex seat-matrix.",
    by: "Rahul K., B.Tech at RVU",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 1,
    testimonial: "Time well spent understanding the Management quota vs Merit structures. The admission journey was absolutely transparent and perfectly organized.",
    by: "Priya Sharma, MBA at NMIMS",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 2,
    testimonial: "Getting my daughter into a premium medical college felt like a daunting task. The Wisdom team laid out exact budgets, NMC approvals, and hospital tie-ups. Purely professional.",
    by: "Anita Desai, Medical Parent",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 3,
    testimonial: "Wisdom Nexus helped me secure admission at a top UK university. Their documentation and visa guidance was flawless from start to finish.",
    by: "Aditya Menon, MSc at University of Edinburgh",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 4,
    testimonial: "I was confused between 6 different colleges. One DMIT session and 30 minutes of career counseling later, I had absolute clarity. Best decision ever.",
    by: "Sneha Patel, BBA at Christ University",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 5,
    testimonial: "The study abroad roadmap they built for my son was incredibly detailed — from IELTS prep to post-landing support in Canada. Highly recommend.",
    by: "Vikram Rao, Parent",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 6,
    testimonial: "What stood out was their honesty. They didn't just push expensive colleges — they matched my budget and aptitude to the right institution.",
    by: "Meera Joshi, B.Com at Jain University",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 7,
    testimonial: "My NEET score wasn't great, but Wisdom Nexus found me a legitimate pathway into a recognized medical college. Transparent and trustworthy.",
    by: "Arjun Nair, MBBS Student",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 8,
    testimonial: "From psychometric testing to final admission letter — they handled everything. I just had to show up. That's the level of service you get here.",
    by: "Kavitha R., M.Tech at VIT",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 9,
    testimonial: "I switched my career path from Commerce to Design after the DMIT assessment. Two years later, I'm thriving at NID. Thank you, Wisdom Nexus.",
    by: "Rohan Gupta, B.Des at NID",
    imgSrc: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 10,
    testimonial: "The counselors genuinely care. They followed up even after admission to make sure I was settling in well. That personal touch is rare.",
    by: "Divya Krishnan, BCA at PES University",
    imgSrc: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 11,
    testimonial: "Wisdom Nexus made the overwhelming process of choosing a college abroad feel manageable. Their step-by-step approach is second to none.",
    by: "Nikhil Verma, MS at TU Munich",
    imgSrc: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face"
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
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-[var(--color-accent-gold)] text-[var(--color-bg-primary)] border-[var(--color-accent-gold)]"
          : "z-0 bg-[var(--color-bg-section)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent-gold)]/30"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px var(--color-border)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-[var(--color-border)]"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-[var(--color-surface)] object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px var(--color-bg-primary)"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium leading-relaxed",
        isCenter ? "text-[var(--color-bg-primary)]" : "text-[var(--color-text-primary)]"
      )}>
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-[var(--color-bg-primary)]/70" : "text-[var(--color-text-muted)]"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 600 }}
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
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-[var(--color-bg-primary)] border-2 border-[var(--color-border)] text-[var(--color-text-secondary)]",
            "hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-bg-primary)] hover:border-[var(--color-accent-gold)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-[var(--color-bg-primary)] border-2 border-[var(--color-border)] text-[var(--color-text-secondary)]",
            "hover:bg-[var(--color-accent-gold)] hover:text-[var(--color-bg-primary)] hover:border-[var(--color-accent-gold)]",
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

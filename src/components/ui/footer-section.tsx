'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Quick Links',
		links: [
			{ title: 'Home', href: '/' },
			{ title: 'About', href: '/about' },
			{ title: 'Institutions', href: '/colleges' },
			{ title: 'Global Strategy', href: '/study-abroad' },
		],
	},
	{
		label: 'Services',
		links: [
			{ title: 'Aptitude Mapping', href: '/dmit' },
			{ title: 'Career Structuring', href: '#' },
			{ title: 'Admission Strategy', href: '#' },
			{ title: 'Visa Facilitation', href: '#' },
		],
	},
	{
		label: 'Contact',
		links: [
			{ title: '123 Education Hub, Bengaluru', href: '#', icon: MapPin },
			{ title: '+91 98765 43210', href: 'tel:+919876543210', icon: Phone },
			{ title: 'info@wisdomnexus.com', href: 'mailto:info@wisdomnexus.com', icon: Mail },
		],
	},
	{
		label: 'Social',
		links: [
			{ title: 'Facebook', href: '#', icon: FacebookIcon },
			{ title: 'Instagram', href: '#', icon: InstagramIcon },
			{ title: 'Youtube', href: '#', icon: YoutubeIcon },
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
		],
	},
];

export function FooterSection() {
	return (
		<footer className="relative w-full border-t border-[var(--color-footer-border)] bg-[var(--color-footer-bg)] px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 md:py-16 lg:py-24">
			<div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur bg-[var(--color-accent-gold)]/30" />

			<div className="max-w-7xl mx-auto">
				{/* Top: Brand + Link Columns */}
				<div className="grid w-full gap-8 sm:gap-10 lg:gap-16 lg:grid-cols-12">
					{/* Brand column */}
					<AnimatedContainer className="lg:col-span-4 space-y-4 sm:space-y-6">
						<Link href="/" className="font-orbitron text-xl font-bold tracking-[0.15em] text-gold-glow inline-flex items-center">
							WISDOM
						</Link>
						<p className="text-[var(--color-footer-text)] text-sm leading-relaxed max-w-sm">
							Empowering students to navigate their future with certainty. End-to-end guidance for domestic and international university admissions.
						</p>
					</AnimatedContainer>

					{/* Link columns */}
					<div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-8">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
								<div>
									<h3 className="text-xs text-[var(--color-accent-gold)] tracking-[0.15em] uppercase mb-5">{section.label}</h3>
									<ul className="space-y-3 text-sm">
										{section.links.map((link) => (
											<li key={link.title}>
												<Link
													href={link.href}
													className="text-[var(--color-footer-text)] hover:text-[var(--color-accent-gold)] inline-flex items-center transition-all duration-300"
												>
													{link.icon && <link.icon className="me-2 size-3.5 shrink-0" />}
													{link.title}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</AnimatedContainer>
						))}
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-[var(--color-footer-border)] flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
					<p className="text-[var(--color-footer-text)] text-xs">
						© {new Date().getFullYear()} Wisdom Nexus. All rights reserved.
					</p>
					<div className="flex items-center gap-6">
						<Link href="/privacy" className="text-xs text-[var(--color-footer-text)] hover:text-[var(--color-accent-gold)] transition-colors">Privacy</Link>
						<Link href="/terms" className="text-xs text-[var(--color-footer-text)] hover:text-[var(--color-accent-gold)] transition-colors">Terms</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Search, MapPin, Star, BookOpen, Building, ChevronDown,
    X, SlidersHorizontal, ArrowUpRight, GraduationCap, Filter,
} from "lucide-react";
import { collegesData } from "@/data/colleges";
import Image from "next/image";
import BackgroundPaths from "@/components/ui/modern-background-paths";

/* ────────── Derived filter options ────────── */
const ALL_CITIES = Array.from(new Set(collegesData.map(c => c.location))).sort();
const ALL_COURSE_CATEGORIES = Array.from(
    new Set(collegesData.flatMap(c => c.courseCategories))
).sort();
const ALL_TYPES: string[] = ["Government", "Private", "Deemed"];
const SORT_OPTIONS = [
    { value: "popular", label: "Most Popular" },
    { value: "az", label: "A–Z" },
    { value: "za", label: "Z–A" },
    { value: "newest", label: "Recently Established" },
];

/* ────────── Multi-select dropdown ────────── */
function MultiSelect({
    label,
    options,
    selected,
    onChange,
}: {
    label: string;
    options: string[];
    selected: string[];
    onChange: (v: string[]) => void;
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const toggle = (v: string) => {
        onChange(selected.includes(v) ? selected.filter(s => s !== v) : [...selected, v]);
    };

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="filter-dropdown w-full flex items-center justify-between gap-2"
            >
                <span className="truncate">
                    {selected.length === 0 ? label : `${label} (${selected.length})`}
                </span>
                <ChevronDown size={14} className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="filter-menu absolute z-50 mt-2 w-full min-w-[200px]"
                    >
                        {options.map(opt => (
                            <label key={opt}>
                                <input
                                    type="checkbox"
                                    checked={selected.includes(opt)}
                                    onChange={() => toggle(opt)}
                                />
                                {opt}
                            </label>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ────────── Single-select dropdown ────────── */
function SingleSelect({
    label,
    options,
    value,
    onChange,
}: {
    label: string;
    options: { value: string; label: string }[];
    value: string;
    onChange: (v: string) => void;
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const selectedLabel = options.find(o => o.value === value)?.label;

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="filter-dropdown w-full flex items-center justify-between gap-2"
            >
                <span className="truncate">
                    {selectedLabel || label}
                </span>
                <ChevronDown size={14} className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="filter-menu absolute z-50 mt-2 w-full min-w-[180px]"
                    >
                        <button
                            className={`filter-menu-item w-full text-left ${
                                value === "" ? "filter-menu-item-active" : ""
                            }`}
                            onClick={() => { onChange(""); setOpen(false); }}
                        >
                            {label}
                        </button>
                        {options.map(o => (
                            <button
                                key={o.value}
                                className={`filter-menu-item w-full text-left ${
                                    value === o.value ? "filter-menu-item-active" : ""
                                }`}
                                onClick={() => { onChange(o.value); setOpen(false); }}
                            >
                                {o.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/* ────────── University Card ────────── */
function UniversityCard({
    college,
    expanded,
    onToggle,
    index,
}: {
    college: (typeof collegesData)[number];
    expanded: boolean;
    onToggle: () => void;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
            className="uni-card group cursor-pointer"
            onClick={onToggle}
        >
            {/* Top badge */}
            <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] tracking-[0.08em] uppercase bg-[rgba(197,165,90,0.1)] text-[#C5A55A] px-3 py-1 rounded-md border border-[rgba(197,165,90,0.15)]">
                    {college.tag}
                </span>
                <span className="text-[11px] text-[var(--color-text-muted)] tracking-wide">
                    Est. {college.established}
                </span>
            </div>

            {/* Logo + Name row */}
            <div className="flex items-center gap-4 mb-4">
                <div className="uni-logo-badge">
                    {college.logoUrl ? (
                        <Image
                            src={college.logoUrl}
                            alt={`${college.name} logo`}
                            width={60}
                            height={60}
                            className="object-contain"
                            loading="lazy"
                        />
                    ) : (
                        <span className="text-[#C5A55A] font-orbitron text-2xl">{college.logo}</span>
                    )}
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="text-[18px] sm:text-[20px] font-semibold text-white leading-[1.3] mb-1.5 line-clamp-2">
                        {college.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-[#bfbfbf]">
                        <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-[#C5A55A]" />
                            {college.location}, {college.state}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Star size={13} className="text-[#C5A55A]" fill="#C5A55A" />
                            {college.placement}
                        </span>
                    </div>
                </div>
            </div>

            {/* Approval tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {college.approval.split(',').map(a => a.trim()).slice(0, 3).map(a => (
                    <span key={a} className="text-[10px] tracking-[0.04em] uppercase px-2.5 py-1 rounded-md border border-[var(--color-border)] text-[var(--color-text-muted)] bg-[var(--color-surface)]">
                        {a}
                    </span>
                ))}
                <span className="text-[10px] tracking-[0.04em] uppercase px-2.5 py-1 rounded-md border border-[rgba(197,165,90,0.2)] text-[#C5A55A] bg-[rgba(197,165,90,0.06)]">
                    {college.ownershipType}
                </span>
            </div>

            {/* Course categories */}
            <div className="flex flex-wrap gap-2 mb-5">
                {college.courseCategories.slice(0, 3).map(cat => (
                    <span key={cat} className="text-[11px] px-2.5 py-1 rounded-md bg-[rgba(197,165,90,0.05)] text-[var(--color-text-secondary)] border border-[rgba(197,165,90,0.1)]">
                        {cat}
                    </span>
                ))}
                {college.courseCategories.length > 3 && (
                    <span className="text-[11px] px-2 py-1 text-[var(--color-text-muted)]">
                        +{college.courseCategories.length - 3} more
                    </span>
                )}
            </div>

            {/* Explore link */}
            <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <span className="text-[12px] tracking-[0.5px] uppercase text-[#C5A55A] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Explore University <ArrowUpRight size={13} />
                </span>
                <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown size={16} className="text-[var(--color-text-muted)]" />
                </motion.div>
            </div>

            {/* Expandable details */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ height: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }, opacity: { duration: 0.3 } }}
                        className="overflow-hidden"
                    >
                        <div className="pt-5 mt-4 border-t border-[rgba(255,255,255,0.06)]">
                            <p className="text-[var(--color-text-muted)] text-[13px] leading-relaxed mb-6 border-l-2 border-[rgba(197,165,90,0.4)] pl-4 italic">
                                {college.description}
                            </p>

                            <div className="mb-5">
                                <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                                    <GraduationCap size={12} className="text-[#C5A55A]" /> Popular Programs
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {college.parsedCourses.slice(0, 6).map(c => (
                                        <span key={c} className="text-[11px] px-2.5 py-1 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)]">
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]">
                                    <Building size={14} className="text-[#C5A55A] mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.1em] mb-1">Affiliation</p>
                                        <p className="text-[var(--color-text-primary)] text-[13px] leading-snug">{college.approval}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]">
                                    <BookOpen size={14} className="text-[#C5A55A] mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-[0.1em] mb-1">Fee</p>
                                        <p className="text-[var(--color-text-primary)] text-[13px] leading-snug">{college.fee}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <button className="flex-1 btn-primary py-3 text-xs tracking-[0.15em] uppercase text-center" onClick={e => e.stopPropagation()}>
                                    Apply Now
                                </button>
                                <button className="flex-1 btn-outline py-3 text-xs tracking-[0.15em] uppercase" onClick={e => e.stopPropagation()}>
                                    View Courses
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ────────── Mobile filter drawer ────────── */
function MobileFilterDrawer({
    open,
    onClose,
    children,
}: {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 z-40"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 300 }}
                        className="fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-[#0b0b0b] border-l border-[rgba(197,165,90,0.1)] z-50 p-6 overflow-y-auto"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                                <SlidersHorizontal size={18} className="text-[#C5A55A]" /> Filters
                            </h3>
                            <button onClick={onClose} className="text-[var(--color-text-muted)] hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-5">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

/* ────────── MAIN PAGE ────────── */
export default function CollegesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCities, setSelectedCities] = useState<string[]>([]);
    const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
    const [selectedType, setSelectedType] = useState("");
    const [sortBy, setSortBy] = useState("popular");
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [visibleCount, setVisibleCount] = useState(12);
    const [drawerOpen, setDrawerOpen] = useState(false);

    /* Debounced search */
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
    const handleSearch = useCallback((v: string) => {
        setSearchQuery(v);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setDebouncedSearch(v.toLowerCase()), 300);
    }, []);

    /* Filtering + sort */
    const filtered = useMemo(() => {
        let result = [...collegesData];

        if (debouncedSearch) {
            result = result.filter(c =>
                c.name.toLowerCase().includes(debouncedSearch) ||
                c.location.toLowerCase().includes(debouncedSearch) ||
                c.course.toLowerCase().includes(debouncedSearch)
            );
        }
        if (selectedCities.length > 0) {
            result = result.filter(c => selectedCities.includes(c.location));
        }
        if (selectedCourses.length > 0) {
            result = result.filter(c =>
                c.courseCategories.some(cat => selectedCourses.includes(cat))
            );
        }
        if (selectedType) {
            result = result.filter(c => c.ownershipType === selectedType);
        }

        switch (sortBy) {
            case "az":
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "za":
                result.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "newest":
                result.sort((a, b) => {
                    const getYear = (s: string) => parseInt(s.match(/\d{4}/)?.[0] || "2000");
                    return getYear(b.established) - getYear(a.established);
                });
                break;
            default:
                result.sort((a, b) => {
                    if (a.tag === "Top Institute" && b.tag !== "Top Institute") return -1;
                    if (b.tag === "Top Institute" && a.tag !== "Top Institute") return 1;
                    return a.name.localeCompare(b.name);
                });
        }

        return result;
    }, [debouncedSearch, selectedCities, selectedCourses, selectedType, sortBy]);

    const hasFilters = selectedCities.length > 0 || selectedCourses.length > 0 || selectedType !== "" || debouncedSearch !== "";

    const clearAll = () => {
        setSearchQuery("");
        setDebouncedSearch("");
        setSelectedCities([]);
        setSelectedCourses([]);
        setSelectedType("");
        setSortBy("popular");
    };

    const filterContent = (
        <>
            <MultiSelect label="City" options={ALL_CITIES} selected={selectedCities} onChange={setSelectedCities} />
            <MultiSelect label="Course Category" options={ALL_COURSE_CATEGORIES} selected={selectedCourses} onChange={setSelectedCourses} />
            <SingleSelect
                label="University Type"
                options={ALL_TYPES.map(t => ({ value: t, label: t }))}
                value={selectedType}
                onChange={setSelectedType}
            />
            <SingleSelect label="Sort By" options={SORT_OPTIONS} value={sortBy} onChange={setSortBy} />
        </>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen"
        >
            {/* Fixed Background */}
            <div className="fixed inset-0 z-0">
                <BackgroundPaths pattern="geometric" />
            </div>

            {/* Hero */}
            <section className="relative w-full pt-28 sm:pt-32 pb-16 sm:pb-20 md:pb-28 border-b border-[var(--color-border)] overflow-hidden z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <p className="text-[#C5A55A] tracking-[0.3em] uppercase text-xs mb-4 drop-shadow-[0_0_5px_rgba(197,165,90,0.5)]">&gt; Curated Network</p>
                    <h1 className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl text-gradient-sunset tracking-wide">
                        Academic Institutions
                    </h1>
                    <p className="text-[var(--color-text-muted)] mt-4 max-w-lg mx-auto text-sm leading-relaxed">
                        Explore our verified network of elite academic institutions across Karnataka, Kerala & Tamil Nadu.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
                {/* Sticky filter bar */}
                <div className="filter-bar p-4 sm:p-6 mb-8 sm:mb-10 relative z-30">
                    <div className="relative mb-4 sm:mb-5">
                        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={e => handleSearch(e.target.value)}
                            placeholder="Search universities, cities, or courses..."
                            className="w-full pl-10 pr-10 py-3 bg-[#080808] border border-[rgba(197,165,90,0.12)] rounded-xl text-[var(--color-text-primary)] text-sm outline-none focus:border-[rgba(197,165,90,0.4)] focus:shadow-[0_0_0_3px_rgba(197,165,90,0.06)] transition-all placeholder:text-[var(--color-text-muted)]"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => handleSearch("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-white transition-colors"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </div>

                    {/* Desktop filters */}
                    <div className="hidden sm:grid grid-cols-4 gap-3 items-stretch">
                        {filterContent}
                    </div>

                    {/* Mobile filter button */}
                    <button
                        onClick={() => setDrawerOpen(true)}
                        className="sm:hidden w-full btn-outline py-2.5 text-xs tracking-[0.15em] uppercase flex items-center justify-center gap-2"
                    >
                        <Filter size={14} /> Filter &amp; Sort
                    </button>
                </div>

                {/* Filter chips */}
                {hasFilters && (
                    <div className="flex flex-wrap items-center gap-2.5 mb-8">
                        {selectedCities.map(c => (
                            <span key={c} className="filter-chip" onClick={() => setSelectedCities(prev => prev.filter(x => x !== c))}>
                                {c} <X size={10} />
                            </span>
                        ))}
                        {selectedCourses.map(c => (
                            <span key={c} className="filter-chip" onClick={() => setSelectedCourses(prev => prev.filter(x => x !== c))}>
                                {c} <X size={10} />
                            </span>
                        ))}
                        {selectedType && (
                            <span className="filter-chip" onClick={() => setSelectedType("")}>
                                {selectedType} <X size={10} />
                            </span>
                        )}
                        {debouncedSearch && (
                            <span className="filter-chip" onClick={() => handleSearch("")}>
                                &ldquo;{debouncedSearch}&rdquo; <X size={10} />
                            </span>
                        )}
                        <button
                            onClick={clearAll}
                            className="text-[11px] text-[var(--color-text-muted)] hover:text-[#C5A55A] transition-colors tracking-wide uppercase ml-1"
                        >
                            Clear All
                        </button>
                    </div>
                )}

                {/* Result count — only when filtering */}
                {hasFilters && (
                    <div className="flex items-center justify-between mb-8">
                        <p className="text-[13px] text-[var(--color-text-muted)]">
                            <span className="text-[#C5A55A] font-medium">{filtered.length}</span>{" "}
                            {filtered.length === 1 ? "University" : "Universities"} found
                        </p>
                    </div>
                )}

                {/* Grid */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-start">
                        {filtered.slice(0, hasFilters ? filtered.length : visibleCount).map((college, idx) => (
                            <UniversityCard
                                key={college.id}
                                college={college}
                                expanded={expandedId === college.id}
                                onToggle={() => setExpandedId(expandedId === college.id ? null : college.id)}
                                index={idx}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="w-20 h-20 rounded-full border border-[rgba(197,165,90,0.15)] bg-[rgba(197,165,90,0.04)] flex items-center justify-center mb-6">
                            <Search size={28} className="text-[var(--color-text-muted)]" />
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">No universities match your filters</h3>
                        <p className="text-[var(--color-text-muted)] text-sm mb-6 max-w-md">
                            Try adjusting your filters or search terms to discover more institutions.
                        </p>
                        <button onClick={clearAll} className="btn-outline px-6 py-2.5 text-xs tracking-[0.15em] uppercase">
                            Clear All Filters
                        </button>
                    </div>
                )}

                {!hasFilters && visibleCount < filtered.length && (
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 20)}
                            className="btn-outline px-8 py-3 text-xs tracking-[0.15em] uppercase"
                        >
                            Load More Institutions
                        </button>
                    </div>
                )}
            </section>

            {/* Mobile drawer */}
            <MobileFilterDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                {filterContent}
                <button
                    onClick={() => setDrawerOpen(false)}
                    className="btn-primary py-3 text-xs tracking-[0.15em] uppercase w-full mt-4"
                >
                    Apply Filters
                </button>
            </MobileFilterDrawer>
        </motion.div>
    );
}

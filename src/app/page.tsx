"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Search, Target, Globe, BookOpen, UserCheck, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { collegesData } from "@/data/colleges";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="w-full bg-[--color-bg-page] overflow-x-hidden pt-24">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Content */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex-1 space-y-8 relative z-10 w-full">
          <h1 className="text-5xl md:text-[5rem] font-extrabold leading-[1.1] text-[--color-text-dark] tracking-tight">
            Shape Your <br /> Future with<br />
            <span className="text-[#2aa5ae] relative">
              Confidence
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15Q100 0 195 12" stroke="var(--color-primary-base)" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-[--color-text-gray] font-medium max-w-xl leading-relaxed">
            When students have reliable access to experienced counselors and top institution choices, they have the freedom to decide where and how they study.
          </p>
          <div className="pt-2">
            <Link href="/colleges" className="inline-flex items-center px-8 py-4 rounded-xl bg-[--color-btn-primary] text-[#111] font-bold text-lg hover:bg-[--color-btn-hover] hover:scale-105 transition-all shadow-lg">
              Get Started
            </Link>
          </div>

          {/* Doodle Doodles */}
          <svg className="absolute right-0 top-1/2 -z-10 w-24 h-24 text-white opacity-80 hidden md:block" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80 20 C 50 60, 20 20, 10 50 C 0 80, 40 80, 50 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40 70 L 50 60 L 60 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        {/* Right Side: Images Block */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex-1 relative w-full h-[500px] md:h-[600px] lg:h-[650px] flex items-end justify-end pointer-events-none mt-12 md:mt-0">

          {/* Main Hero Image */}
          <div className="absolute -bottom-12 right-8 md:right-24 lg:right-32 h-[100%] md:h-[120%] w-[100%] md:w-[70%] lg:w-[60%] flex justify-end md:justify-center items-end z-10 pointer-events-none">
            <img
              src="/hero_modell.png"
              alt="Student Model"
              className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] pointer-events-auto -translate-x-4 md:-translate-x-12 lg:-translate-x-20"
            />
          </div>

          {/* Floating Card 1: Total Courses */}
          <div className="absolute top-[10%] right-[5%] md:-right-4 z-20 pointer-events-auto px-5 py-3 rounded-2xl bg-white border-t-4 border-t-[#2aa5ae] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 hover:-translate-y-1 transition-transform cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#2aa5ae]">
              <BookOpen size={20} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-[--color-text-gray] font-bold uppercase tracking-wider mb-0.5">Total Courses</span>
              <span className="font-extrabold text-[#111] text-base leading-none">1200+</span>
            </div>
          </div>

          {/* Floating Card 2: Instructors */}
          <div className="absolute top-[45%] right-0 md:-right-8 lg:-right-12 z-20 pointer-events-auto px-5 py-3 rounded-2xl bg-white border-t-4 border-t-[#2aa5ae] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 hover:-translate-y-1 transition-transform cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#2aa5ae]">
              <UserCheck size={20} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-[--color-text-gray] font-bold uppercase tracking-wider mb-0.5">Total Instructors</span>
              <span className="font-extrabold text-[#111] text-base leading-none">400+</span>
            </div>
          </div>

          {/* Floating Card 3: Students */}
          <div className="absolute bottom-[20%] left-0 md:-left-4 lg:-left-8 z-20 pointer-events-auto px-5 py-3 rounded-2xl bg-white border-t-4 border-t-[#2aa5ae] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center gap-4 hover:-translate-y-1 transition-transform cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#2aa5ae]">
              <Users size={20} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-[--color-text-gray] font-bold uppercase tracking-wider mb-0.5">Total Students</span>
              <span className="font-extrabold text-[#111] text-base leading-none">20,000+</span>
            </div>
          </div>

          {/* Student Review Block */}
          <div className="absolute -bottom-4 md:-bottom-8 left-[10%] md:left-[15%] z-20 pointer-events-auto flex items-center gap-3 bg-white border-t-4 border-t-[#2aa5ae] shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-5 py-3 rounded-full hover:-translate-y-1 transition-transform cursor-pointer">
            <div className="flex -space-x-3">
              <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Student 1" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Student 2" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
            </div>
            <div className="flex flex-col items-start ml-1 flex-shrink-0">
              <div className="flex items-center gap-1 font-extrabold text-[#111] text-sm">
                4.8 <Star size={12} fill="var(--color-primary-base)" className="text-[#2aa5ae]" />
              </div>
              <span className="text-xs text-[--color-text-gray] font-bold">Student Review</span>
            </div>
          </div>

          {/* Yellow Sparks */}
          <div className="absolute top-[25%] left-[20%] flex flex-col gap-2 rotate-12 z-0 opacity-80 hidden md:flex">
            <div className="w-10 h-2 bg-[--color-accent-yellow] rounded-full"></div>
            <div className="w-8 h-2 bg-[--color-accent-yellow] rounded-full translate-x-4"></div>
            <div className="w-10 h-2 bg-[--color-accent-yellow] rounded-full translate-y-2 -translate-x-2"></div>
          </div>

        </motion.div>
      </section>

      {/* Featured Colleges Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[--color-text-dark]">
              Our Top <span className="text-[#2aa5ae]">Colleges</span>
            </h2>
            <p className="text-[--color-text-gray] font-medium mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
              Explore our curated selection of premier institutions known for academic excellence, state-of-the-art infrastructure, and outstanding placement records.
            </p>
          </div>
          <Link href="/colleges" className="hidden md:inline-flex items-center gap-2 text-[#2aa5ae] font-bold hover:text-[--color-primary-mid] transition-colors mt-4 md:mt-0">
            View All Colleges <ArrowUpRight size={20} />
          </Link>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-10">
          {collegesData.slice(0, 8).map((college, index) => (
            <div key={index} className="min-w-[300px] md:min-w-[350px] bg-white rounded-3xl p-5 border-t-4 border-[#2aa5ae] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 snap-start flex flex-col group cursor-pointer">
              <div className="w-full h-48 bg-white border border-gray-50 rounded-2xl overflow-hidden relative mb-4 flex items-center justify-center p-6">
                {college.logoUrl ? (
                  <Image src={college.logoUrl} alt={`${college.name} logo`} fill className="object-contain p-8 group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 350px" loading="lazy" />
                ) : (
                  <div className="text-gray-300 font-bold text-4xl">{college.logo}</div>
                )}
                <div className="absolute top-3 right-3 bg-[#2aa5ae] px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm z-10">
                  {college.tag}
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full border border-gray-100 overflow-hidden bg-white shrink-0 shadow-sm flex items-center justify-center font-extrabold text-xl text-[#2aa5ae]">
                  {college.logo}
                </div>
                <h3 className="font-extrabold text-[--color-text-dark] text-lg leading-tight line-clamp-2 mt-1">{college.name}</h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-[--color-text-gray] mb-6 font-bold pl-1">
                <Globe size={16} className="text-[#2aa5ae]" /> {college.location}, {college.state}
              </div>

              <Link href={`/colleges`} className="mt-auto w-full py-3 rounded-xl border-2 border-[#2aa5ae] bg-transparent text-[#2aa5ae] font-extrabold text-center group-hover:bg-[#2aa5ae] group-hover:text-white transition-colors flex justify-center items-center gap-2">
                View Details
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center md:hidden">
          <Link href="/colleges" className="inline-flex items-center gap-2 text-white font-bold">
            View All Colleges <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>

      {/* Features Section ("An Easier Way...") */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 bg-gradient-to-br from-[#3bc1cc] via-[#2aa5ae] to-[#16636a] rounded-[3rem] shadow-lg my-12 relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white max-w-md leading-tight">
            A Smarter Way to <br />
            <span className="relative inline-block">
              Choose
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12Q50 2 95 10" stroke="var(--color-accent-yellow)" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span> and Apply
          </h2>
          <div className="max-w-md flex flex-col gap-4 items-end">
            <p className="text-gray-100 font-medium leading-relaxed">
              When students and parents have reliable access to our curated university database and expert guidance, making career-defining decisions becomes stress-free and accurate.
            </p>
            <svg className="w-20 h-20 text-white opacity-40 -mr-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M80 50 C 70 20, 30 20, 20 60 C 10 90, 60 90, 70 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M60 80 L 70 70 L 80 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Feature 1 */}
          <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-[2rem] flex flex-col h-full relative group hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-[--color-text-dark] mb-4 leading-tight">
              Confusion <span className="text-[#2aa5ae]">disrupts</span> career planning
            </h3>
            <p className="text-[--color-text-gray] text-sm mb-12 font-medium">Without proper insights, choosing between top-ranked state colleges can be overwhelming and lead to poor choices.</p>
            <div className="mt-auto flex justify-between items-end">
              <div className="w-12 h-12 text-[#2aa5ae]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 12A4 4 0 1 1 8 12a4 4 0 0 1 8 0z"></path></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm">
                <ArrowUpRight className="text-[#2aa5ae]" size={20} />
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-[2rem] flex flex-col h-full relative group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 text-[#2aa5ae] mb-6">
              <Globe strokeWidth={2.5} size={40} />
            </div>
            <h3 className="text-2xl font-bold text-[--color-text-dark] mb-4 leading-tight">
              A better way to <span className="text-[#2aa5ae]">connect</span> students to campuses
            </h3>
            <p className="text-[--color-text-gray] text-sm mb-4 font-medium">We provide a unified platform mapping out 76+ top universities across Karnataka based on precise data.</p>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shadow-md z-20">
              <ArrowUpRight className="text-[#2aa5ae]" size={20} />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-[2rem] flex flex-col h-full relative group hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-[--color-text-dark] mb-4 leading-tight">
              Career goals stay <span className="text-[#2aa5ae]">on track</span> to meet targets
            </h3>
            <p className="text-[--color-text-gray] text-sm mb-12 font-medium">Through DMIT and rigorous profiling, student aspirations are perfectly matched to university offerings.</p>
            <div className="mt-auto flex justify-between items-end">
              <div className="w-12 h-12 text-[#2aa5ae]">
                <Target strokeWidth={2.5} size={36} />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm relative z-20">
                <ArrowUpRight className="text-[#2aa5ae]" size={20} />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[--color-primary-mid] rounded-[3rem] z-0 opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-[--color-bg-page]">
        <div className="flex flex-col md:flex-row justify-between mb-12 items-end">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[--color-text-dark] flex items-center gap-4 relative">
            Why Choose Our <br /> Services?
            <span className="text-[#2aa5ae] absolute -right-10 top-0 text-5xl">âœ¦</span>
            <svg className="absolute bottom-1/2 mt-8 left-0 w-64" viewBox="0 0 200 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12Q100 0 195 10" stroke="var(--color-primary-base)" strokeWidth="4" strokeLinecap="round" fill="none" />
            </svg>
          </h2>
          <div className="max-w-md w-full relative">
            <p className="text-[--color-text-gray] font-medium text-sm leading-relaxed text-right md:text-left">
              Students save time and money by applying only to well-matched verified institutions. Counselors work on optimizing profiles to secure admissions effectively and transparently.
            </p>
            <svg className="absolute top-full right-10 w-16 h-16 text-[#2aa5ae] opacity-90 mt-4 hidden md:block" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 50 C 40 20, 80 20, 90 60 C 100 90, 50 90, 40 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30 80 L 40 70 L 50 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-auto md:h-[500px] mt-16 relative">
          {/* Large Left Image - kept graphic aspect but desaturated overly bright elements */}
          <div className="col-span-2 row-span-2 bg-gray-200 rounded-[2rem] overflow-hidden relative shadow-sm">
            <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Student smiling" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Top Right Orange Card -> White/Teal Card */}
          <div className="col-span-1 row-span-1 bg-white border-t-4 border-t-[#2aa5ae] rounded-[2rem] p-6 flex flex-col justify-center items-center text-center text-[--color-text-dark] shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <span className="text-4xl md:text-5xl font-black mb-2 text-[#111]">15k+</span>
            <span className="font-bold text-sm text-[--color-text-gray]">Placed<br />Students</span>
          </div>

          {/* Top far right graphic area */}
          <div className="col-span-1 row-span-1 bg-transparent rounded-[2rem] flex justify-center items-center relative overflow-hidden">
            {/* Teal sparks graphic */}
            <div className="w-full h-full relative">
              <div className="absolute top-1/4 left-1/4 w-3 h-12 bg-[#2aa5ae] -rotate-12 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-3 h-10 bg-[#2aa5ae] rotate-45 rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/4 w-3 h-16 bg-[#2aa5ae] -rotate-45 rounded-full"></div>
            </div>
          </div>

          {/* Middle Right Orange Card -> White/Teal Card */}
          <div className="col-span-1 row-span-1 bg-white border-t-4 border-t-[#2aa5ae] rounded-[2rem] p-6 flex flex-col justify-center items-center text-center text-[--color-text-dark] shadow-[0_8px_30px_rgb(0,0,0,0.06)] -ml-4 md:ml-0 z-10 w-full md:w-[120%] h-full md:h-[120%] -mt-4">
            <span className="text-4xl md:text-5xl font-black mb-2 text-[#111]">76+</span>
            <span className="font-bold text-sm text-[--color-text-gray]">Verified Colleges<br />in Karnataka</span>
          </div>

          {/* Middle far right Green block -> Geometric White Card */}
          <div className="col-span-1 row-span-1 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] relative overflow-hidden flex items-center justify-center p-4">
            <svg className="w-full h-full text-[#2aa5ae]" viewBox="0 0 100 100" fill="none" opacity="0.3">
              <circle cx="20" cy="50" r="10" stroke="currentColor" strokeWidth="2" />
              <circle cx="80" cy="20" r="5" fill="currentColor" />
              <path d="M 50 80 Q 70 50 90 80" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Bottom Orange Card -> White/Teal Card */}
          <div className="col-span-1 row-span-1 bg-white border-t-4 border-t-[#2aa5ae] rounded-[2rem] p-6 flex flex-col justify-center items-center text-center text-[--color-text-dark] shadow-[0_8px_30px_rgb(0,0,0,0.06)] md:-mr-8 z-10">
            <span className="text-4xl md:text-5xl font-black mb-2 text-[#111]">10+</span>
            <span className="font-bold text-sm text-[--color-text-gray]">Years of<br />Trust</span>
          </div>

          {/* Bottom far right Box -> Geometric White Card */}
          <div className="col-span-1 row-span-1 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] flex flex-col justify-center items-center text-[#2aa5ae] relative p-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-16 h-16 opacity-80">
              <rect x="4" y="4" width="16" height="12" rx="2" ry="2" />
              <path d="M12 16v4" />
              <path d="M8 20h8" />
            </svg>
            <div className="absolute right-4 bottom-4">
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6 opacity-40"><circle cx="12" cy="12" r="10" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[--color-bg-page] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-16 items-start">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[--color-text-dark] max-w-md leading-tight">
            What Our Lovely <br />
            <span className="relative inline-block">
              Clients
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12Q50 0 98 10" stroke="var(--color-primary-base)" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span> Say
          </h2>
          <div className="max-w-md text-right relative mt-6 md:mt-0">
            <p className="text-[--color-text-gray] font-medium text-sm leading-relaxed inline-block text-left">
              We recently tracked the progress of students who secured admissions through us. Below, they share their stories of how they stepped into exceptional careers smoothly.
            </p>
            <div className="w-16 h-8 border-b-4 border-l-4 border-[#2aa5ae] transform skew-x-[-20deg] rotate-[-20deg] absolute -bottom-12 right-0"></div>
            <div className="w-16 h-8 border-b-4 border-l-4 border-[#2aa5ae] transform skew-x-[-20deg] rotate-[-20deg] absolute -bottom-16 right-4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-white border-t-4 border-t-[#2aa5ae] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 rounded-[2rem] pt-12 relative flex flex-col">
            <div className="absolute -top-10 left-8 flex items-center gap-4 bg-white pr-4 rounded-full shadow-md p-1 border border-gray-100">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-[--color-text-dark] text-sm">Rahul K.</h4>
                <p className="text-xs text-[--color-text-gray] font-medium">B.Tech at RVU</p>
                <div className="flex text-[#2aa5ae] mt-1 space-x-1">
                  <Star fill="currentColor" stroke="none" size={12} /><Star fill="currentColor" stroke="none" size={12} /><Star fill="currentColor" stroke="none" size={12} /><Star fill="currentColor" stroke="none" size={12} /><Star fill="currentColor" stroke="none" size={12} />
                </div>
              </div>
            </div>
            <p className="text-[--color-text-gray] text-sm leading-relaxed font-semibold mt-4">
              Their DMIT assessment was an eye-opener. It completely changed my perspective on engineering, and the counselor guided me perfectly through the complex seat-matrix to secure an autonomous college.
            </p>
          </div>

          {/* Review 2 */}
          <div className="bg-white border-t-4 border-t-[#2aa5ae] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 rounded-[2rem] pt-12 relative flex flex-col">
            <div className="absolute -top-10 left-8 flex items-center gap-4 bg-white pr-4 rounded-full shadow-md p-1 border border-gray-100">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Avatar" className="w-16 h-16 rounded-full object-cover bg-gray-200" />
              <div>
                <h4 className="font-bold text-[--color-text-dark] text-sm">Priya Sharma</h4>
                <p className="text-xs text-[--color-text-gray] font-medium">MBA at nmims</p>
                <div className="flex text-[#2aa5ae] mt-1 space-x-1">
                  <Star fill="currentColor" stroke="none" size={12} /><Star fill="currentColor" stroke="none" size={12} /><Star fill="currentColor" stroke="none" size={12} /><Star fill="currentColor" stroke="none" size={12} /><Star fill="currentColor" stroke="none" size={12} />
                </div>
              </div>
            </div>
            <p className="text-[--color-text-gray] text-sm leading-relaxed font-semibold mt-4">
              Time well spent when trying to understand the Management quota vs Merit structures. The admission journey was absolutely transparent and perfectly organized from form-filling to campus entry.
            </p>
          </div>

          {/* Review 3 */}
          <div className="bg-white border-t-4 border-t-[#2aa5ae] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 rounded-[2rem] pt-12 relative flex flex-col">
            <div className="absolute -top-10 left-8 flex items-center gap-4 bg-white pr-4 rounded-full shadow-md p-1 border border-gray-100">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h4 className="font-bold text-[--color-text-dark] text-sm">Anita Desai</h4>
                <p className="text-xs text-[--color-text-gray] font-medium">Medical Parent</p>
                <div className="flex text-[#2aa5ae] mt-1 space-x-1">
                  <Star fill="currentColor" stroke="none" size={12} /><Star fill="currentColor" stroke="none" size={12} /><Star fill="currentColor" stroke="none" size={12} /><Star fill="currentColor" stroke="none" size={12} /><Star fill="currentColor" stroke="none" size={12} />
                </div>
              </div>
            </div>
            <p className="text-[--color-text-gray] text-sm leading-relaxed font-semibold mt-4">
              Getting my daughter into a premium medical college in Mangaluru felt like a daunting task. The Wisdom team laid out exact budgets, NMC approvals, and hospital tie-ups. Purely professional.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box (Get in Touch) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[400px]">
          {/* Left Portrait */}
          <div className="col-span-1 bg-[#EAEAEA] rounded-[2.5rem] overflow-hidden hidden md:block relative h-full">
            <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Student smiling" className="w-full h-full object-cover" />
            {/* Diagonal cut overlay */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2aa5ae] transform skew-x-[15deg] origin-bottom-right translate-x-[20%]"></div>
          </div>

          {/* Middle Large White CTA -> Dual Tone Gradient CTA */}
          <div className="col-span-1 md:col-span-3 bg-gradient-to-br from-[#3bc1cc] via-[#2aa5ae] to-[#16636a] shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[3rem] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden h-full">

            <h4 className="text-[--color-accent-yellow] text-xl font-bold mb-4 z-10">Get in Touch</h4>
            <h2 className="text-white text-5xl md:text-6xl font-extrabold mb-6 max-w-xl leading-tight z-10">
              Join our community of successful students
            </h2>
            <p className="text-gray-100 text-base max-w-md font-medium leading-relaxed z-10">
              Looking to map out your career path perfectly? Our counseling experts are currently accepting free profile evaluations. Secure your slot!
            </p>

            {/* Big Arrow Icon Button detached to top right */}
            <Link href="#contact" className="absolute top-8 right-8 w-24 h-24 bg-[--color-btn-primary] border-4 border-[#3bb3bc] rounded-[2rem] flex items-center justify-center hover:bg-[--color-btn-hover] transition-colors shadow-lg z-20 hover:scale-105">
              <ArrowUpRight className="text-[#111]" size={40} />
            </Link>

            {/* Big decorative asterisk */}
            <div className="absolute bottom-4 right-10 text-white w-48 h-48 opacity-[0.1] z-0">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

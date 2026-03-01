import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-24 pb-20 bg-[--color-bg-page] min-h-screen">
            {/* Header section with dual-tone gradient */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="bg-gradient-to-br from-[#3bc1cc] via-[#2aa5ae] to-[#16636a] rounded-[3rem] p-12 md:p-20 text-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Let's <span className="text-[--color-accent-yellow]">Connect</span>
                        </h1>
                        <p className="text-gray-100 text-lg font-medium">
                            Have questions about your career path or university admissions? Our expert counselors are here to help you navigate your future.
                        </p>
                    </div>
                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-extrabold text-[--color-text-dark] mb-8">Reach Out To Us</h2>

                        <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-t-4 border-t-[#2aa5ae] flex items-start gap-6 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                                <MapPin className="text-[#2aa5ae]" size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[--color-text-dark] mb-2">Our Office</h3>
                                <p className="text-[--color-text-gray] font-medium leading-relaxed">
                                    123 Education Hub, Knowledge Park<br />
                                    Bengaluru, Karnataka 560001
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-t-4 border-t-[#2aa5ae] flex items-start gap-6 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                                <Phone className="text-[#2aa5ae]" size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[--color-text-dark] mb-2">Call Us</h3>
                                <p className="text-[--color-text-gray] font-medium mb-1">+91 98765 43210</p>
                                <p className="text-[--color-text-gray] font-medium">+91 87654 32109</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-t-4 border-t-[#2aa5ae] flex items-start gap-6 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
                                <Mail className="text-[#2aa5ae]" size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[--color-text-dark] mb-2">Email Us</h3>
                                <p className="text-[--color-text-gray] font-medium mb-1">admissions@wisdomlearn.com</p>
                                <p className="text-[--color-text-gray] font-medium">support@wisdomlearn.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 relative">
                        <h2 className="text-3xl font-extrabold text-[--color-text-dark] mb-8">Send a Message</h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[--color-text-dark] ml-1">First Name</label>
                                    <input type="text" placeholder="John" className="w-full bg-gray-50 border-2 border-gray-100 focus:border-[#2aa5ae] rounded-xl px-5 py-4 outline-none font-medium text-[--color-text-dark] transition-colors shadow-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[--color-text-dark] ml-1">Last Name</label>
                                    <input type="text" placeholder="Doe" className="w-full bg-gray-50 border-2 border-gray-100 focus:border-[#2aa5ae] rounded-xl px-5 py-4 outline-none font-medium text-[--color-text-dark] transition-colors shadow-sm" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[--color-text-dark] ml-1">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border-2 border-gray-100 focus:border-[#2aa5ae] rounded-xl px-5 py-4 outline-none font-medium text-[--color-text-dark] transition-colors shadow-sm" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[--color-text-dark] ml-1">Subject</label>
                                <select className="w-full bg-gray-50 border-2 border-gray-100 focus:border-[#2aa5ae] rounded-xl px-5 py-4 outline-none font-medium text-[--color-text-dark] transition-colors appearance-none cursor-pointer shadow-sm">
                                    <option>General Inquiry</option>
                                    <option>University Admissions</option>
                                    <option>DMIT Assessment</option>
                                    <option>Study Abroad</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[--color-text-dark] ml-1">Your Message</label>
                                <textarea rows={4} placeholder="How can we help you?" className="w-full bg-gray-50 border-2 border-gray-100 focus:border-[#2aa5ae] rounded-xl px-5 py-4 outline-none font-medium text-[--color-text-dark] transition-colors resize-none shadow-sm"></textarea>
                            </div>

                            <button type="button" className="w-full bg-[--color-btn-primary] hover:bg-[--color-btn-hover] text-[#111] font-extrabold text-lg py-4 rounded-xl shadow-[0_8px_30px_rgba(250,156,15,0.3)] transition-all flex justify-center items-center gap-2 hover:-translate-y-1 mt-4">
                                Send Message <Send size={20} />
                            </button>
                        </form>

                        {/* Soft decorative blur */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[--color-btn-primary] rounded-full blur-3xl opacity-10 pointer-events-none"></div>
                    </div>

                </div>
            </section>
        </div>
    );
}

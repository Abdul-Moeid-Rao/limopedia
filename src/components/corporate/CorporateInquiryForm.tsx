"use client";
import React from 'react';
import { Send, Phone, ArrowRight } from "lucide-react";

export default function CorporateInquiryForm() {
    return (
        <section id="inquiry-form" className="py-32 bg-navy relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left: Content */}
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
                            Set Up Your <br />
                            <span className="text-gold italic">Corporate Account</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
                            Fill out the form — our B2B team will contact you within 2 business hours to finalize your account and rate card.
                        </p>

                        <div className="space-y-6">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl group hover:border-gold transition-colors">
                                <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">Direct Corporate Support</p>
                                <a href="tel:8883000069" className="text-xl font-bold text-white flex items-center gap-3">
                                    <Phone size={18} className="text-gold" /> (888) 300-0069 ext. 2
                                </a>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                                <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">Guaranteed Response</p>
                                <p className="text-white font-bold">2-Hour Contact Window (Mon-Fri)</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="flex-1 bg-white/5 border border-white/10 p-8 md:p-12 rounded-[50px] shadow-2xl backdrop-blur-md">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-navy/20 border border-white/10 rounded-2xl h-14 px-6 text-white placeholder:text-white/20 focus:border-gold focus:outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                                <input type="text" placeholder="Acme International" className="w-full bg-navy/20 border border-white/10 rounded-2xl h-14 px-6 text-white placeholder:text-white/20 focus:border-gold focus:outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Your Role / Title</label>
                                <input type="text" placeholder="Travel Manager" className="w-full bg-navy/20 border border-white/10 rounded-2xl h-14 px-6 text-white placeholder:text-white/20 focus:border-gold focus:outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                                <input type="email" placeholder="john@acme.com" className="w-full bg-navy/20 border border-white/10 rounded-2xl h-14 px-6 text-white placeholder:text-white/20 focus:border-gold focus:outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                                <input type="tel" placeholder="(000) 000-0000" className="w-full bg-navy/20 border border-white/10 rounded-2xl h-14 px-6 text-white placeholder:text-white/20 focus:border-gold focus:outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Monthly Rides (Est.)</label>
                                <select className="w-full bg-navy/20 border border-white/10 rounded-2xl h-14 px-6 text-white/40 focus:border-gold focus:outline-none focus:text-white transition-all appearance-none cursor-pointer">
                                    <option className="bg-navy">1-5 Rides</option>
                                    <option className="bg-navy">5-20 Rides</option>
                                    <option className="bg-navy">20-50 Rides</option>
                                    <option className="bg-navy">50+ Rides</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">How can we help?</label>
                                <textarea rows={4} placeholder="Tell us about your company's logistics requirements..." className="w-full bg-navy/20 border border-white/10 rounded-3xl p-6 text-white placeholder:text-white/20 focus:border-gold focus:outline-none transition-all resize-none"></textarea>
                            </div>

                            <div className="md:col-span-2 pt-4">
                                <button className="btn-gold w-full h-16 text-lg flex items-center justify-center gap-3 shadow-2xl shadow-gold/20 group">
                                    Send Corporate Inquiry
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

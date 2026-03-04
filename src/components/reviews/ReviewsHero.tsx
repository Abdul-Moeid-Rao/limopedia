"use client";
import React from 'react';
import { Star, MessageSquareQuote } from "lucide-react";

export default function ReviewsHero() {
    return (
        <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <span className="inline-block text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-6">
                        What Our Passengers Say
                    </span>

                    <div className="flex justify-center gap-1 mb-6">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={48} className="text-gold fill-gold" />
                        ))}
                    </div>

                    <h1 className="text-7xl md:text-9xl font-playfair font-bold text-navy mb-4 tracking-tighter">
                        4.9 <span className="text-4xl md:text-5xl text-gray-300">/ 5.0</span>
                    </h1>

                    <p className="text-gray-500 font-bold mb-12">
                        Based on 400+ verified Google Reviews
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
                        <div className="flex items-center gap-2 bg-secondary/50 px-6 py-3 rounded-full border border-navy/5">
                            <span className="text-xs font-black uppercase tracking-widest text-navy">Google</span>
                            <div className="flex text-gold">
                                <Star size={12} fill="currentColor" />
                                <span className="ml-1 text-sm font-bold text-navy">4.9</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-secondary/50 px-6 py-3 rounded-full border border-navy/5">
                            <span className="text-xs font-black uppercase tracking-widest text-navy">App Store</span>
                            <div className="flex text-gold">
                                <Star size={12} fill="currentColor" />
                                <span className="ml-1 text-sm font-bold text-navy">4.8</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-secondary/50 px-6 py-3 rounded-full border border-navy/5">
                            <span className="text-xs font-black uppercase tracking-widest text-navy">Facebook</span>
                            <div className="flex text-gold">
                                <Star size={12} fill="currentColor" />
                                <span className="ml-1 text-sm font-bold text-navy">5.0</span>
                            </div>
                        </div>
                    </div>

                    <button className="px-10 h-16 text-sm font-bold text-navy bg-transparent border-2 border-navy/10 hover:border-gold transition-all rounded-full flex items-center justify-center gap-3 mx-auto group">
                        Leave Your Review
                        <MessageSquareQuote size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}

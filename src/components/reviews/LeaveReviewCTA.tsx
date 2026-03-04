"use client";
import React from 'react';
import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function LeaveReviewCTA() {
    return (
        <section className="py-32 bg-navy relative overflow-hidden">
            {/* Background Map Pattern (Subtle) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center grayscale invert" />

            <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                <div className="inline-flex items-center gap-2 mb-8 bg-gold/20 px-6 py-2 rounded-full border border-gold/30">
                    <Star size={16} fill="#C8922A" className="text-gold" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gold">Share Your Journey</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8">Had a Great Experience?</h2>
                <p className="text-gray-400 text-xl font-medium leading-relaxed mb-16 px-4">
                    Share your feedback across our platforms and help other travelers choose wisely.
                    It takes less than 60 seconds and means the world to us.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <button className="btn-gold px-10 h-16 text-sm flex items-center justify-center gap-4 w-full md:w-auto group shadow-2xl shadow-gold/20">
                        <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png" alt="Google" width={24} height={8} className="brightness-0 invert group-hover:invert-0 transition-all" />
                        Leave Google Review
                        <ArrowRight size={18} />
                    </button>
                    <button className="px-10 h-16 text-sm font-bold text-white bg-white/5 border border-white/20 hover:border-white hover:bg-white/10 transition-all rounded-full flex items-center justify-center gap-4 w-full md:w-auto group">
                        <span className="text-xl"></span>
                        Leave App Store Review
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}

"use client";
import React, { useState } from 'react';
import { Star, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Review } from "@/data/reviews";

export default function ReviewCard({ review }: { review: Review }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLong = review.text.length > 220;
    const displayText = isLong && !isExpanded ? review.text.slice(0, 200) + "..." : review.text;

    return (
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-navy/5 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full break-inside-avoid mb-8">
            <div className="flex items-center justify-between mb-6">
                <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            size={18}
                            className={i < review.stars ? "fill-gold" : "text-gray-200"}
                        />
                    ))}
                </div>
                {review.isVerified && (
                    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-navy/5">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">{review.platform}</span>
                        <ShieldCheck size={12} className="text-green-500" />
                    </div>
                )}
            </div>

            <div className="flex-1 mb-8">
                <p className="text-navy font-medium leading-relaxed italic">
                    &ldquo;{displayText}&rdquo;
                </p>
                {isLong && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-gold font-bold text-xs uppercase tracking-widest mt-4 hover:underline"
                    >
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>
                )}
            </div>

            <div className="pt-8 border-t border-navy/5">
                <div className="flex items-center justify-between">
                    <div>
                        <h4 className="text-navy font-bold">{review.author}</h4>
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">
                            {review.description || "Verified Passenger"}
                        </p>
                    </div>
                    <span className="bg-gold/10 text-gold text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-gold/10">
                        {review.serviceTag}
                    </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-[9px] font-black text-gray-300 uppercase tracking-widest">
                    <span>{review.date}</span>
                    <span className="w-1 h-1 bg-gray-200 rounded-full" />
                    <span className="flex items-center gap-1">
                        <Image
                            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png"
                            alt="Google"
                            width={30}
                            height={10}
                            className="opacity-50 grayscale hover:grayscale-0 transition-all"
                        />
                        Verified
                    </span>
                </div>
            </div>
        </div>
    );
}

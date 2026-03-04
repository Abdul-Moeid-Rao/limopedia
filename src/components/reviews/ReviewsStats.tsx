"use client";
import React from 'react';

const stats = [
    { label: "Verified Reviews", value: "400+" },
    { label: "Stars Average", value: "4.9" },
    { label: "Happy Passengers", value: "5,000+" },
    { label: "Would Recommend", value: "99%" }
];

export default function ReviewsStats() {
    return (
        <section className="py-20 bg-navy relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center group">
                            <div className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter group-hover:text-gold transition-colors duration-500">
                                {stat.value}
                            </div>
                            <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-500">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

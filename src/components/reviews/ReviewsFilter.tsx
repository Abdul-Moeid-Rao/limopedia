"use client";
import React from 'react';

const filters = [
    "All Reviews",
    "5 Stars",
    "4 Stars",
    "Airport Transfers",
    "Corporate",
    "Events"
];

export default function ReviewsFilter({ active, setActive }: { active: string, setActive: (f: string) => void }) {
    return (
        <div className="py-8 bg-gray-50/50 border-y border-navy/5 sticky top-20 z-30 backdrop-blur-md">
            <div className="container mx-auto px-4 overflow-x-auto">
                <div className="flex items-center justify-center gap-2 min-w-max">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActive(filter)}
                            className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${active === filter
                                    ? 'bg-gold text-white shadow-lg shadow-gold/20 scale-105'
                                    : 'bg-white text-navy hover:bg-secondary border border-navy/5'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

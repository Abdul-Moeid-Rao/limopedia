"use client";
import React from 'react';
import { Quote } from "lucide-react";

const reviews = [
    {
        quote: "Limopedia handles all our client airport pickups. Their logistics are flawless and the professionalism is unmatched by any other service in Florida.",
        author: "Operations Director",
        company: "Miami International Law Firm"
    },
    {
        quote: "Monthly invoicing saves our finance department so much admin time. The drivers are always early, presentable, and well-briefed on the itinerary.",
        author: "Executive Assistant to CEO",
        company: "Global Financial Services Co."
    },
    {
        quote: "We used Limopedia for our entire board retreat logistics. Zero issues, outstanding communication, and truly executive-level service throughout.",
        author: "Corporate Travel Manager",
        company: "Leading Healthcare Group"
    }
];

export default function CorporateTestimonials() {
    return (
        <section className="py-24 bg-gray-50 border-t border-navy/5">
            <div className="container mx-auto px-4">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-playfair font-bold text-navy mb-4">What Corporate Clients Say</h2>
                    <div className="h-1.5 w-16 bg-gold mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm border border-navy/5 flex flex-col hover:shadow-xl transition-all duration-500 group">
                            <Quote size={40} className="text-gold/20 mb-8 group-hover:text-gold transition-colors duration-500" />
                            <p className="text-lg text-navy font-medium italic leading-relaxed flex-1 mb-10">
                                &ldquo;{review.quote}&rdquo;
                            </p>
                            <div className="pt-8 border-t border-navy/5">
                                <h4 className="text-navy font-bold">{review.author}</h4>
                                <p className="text-gold text-xs font-black uppercase tracking-widest mt-1">{review.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

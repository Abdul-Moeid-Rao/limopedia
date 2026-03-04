"use client";
import React, { useState } from 'react';
import ReviewsHero from "@/components/reviews/ReviewsHero";
import ReviewsFilter from "@/components/reviews/ReviewsFilter";
import ReviewCard from "@/components/reviews/ReviewCard";
import ReviewsStats from "@/components/reviews/ReviewsStats";
import LeaveReviewCTA from "@/components/reviews/LeaveReviewCTA";
import { reviews } from "@/data/reviews";
import Image from "next/image";

export default function ReviewsPage() {
    const [activeFilter, setActiveFilter] = useState("All Reviews");

    const filteredReviews = reviews.filter(review => {
        if (activeFilter === "All Reviews") return true;
        if (activeFilter === "5 Stars") return review.stars === 5;
        if (activeFilter === "4 Stars") return review.stars === 4;
        if (activeFilter === "Airport Transfers") return review.serviceTag.includes("Airport");
        if (activeFilter === "Corporate") return review.serviceTag.includes("Corporate");
        if (activeFilter === "Events") return review.serviceTag.includes("Events");
        return true;
    });

    return (
        <main className="min-h-screen bg-white">
            <ReviewsHero />

            <ReviewsFilter active={activeFilter} setActive={setActiveFilter} />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {filteredReviews.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </div>

                    {filteredReviews.length === 0 && (
                        <div className="py-32 text-center">
                            <p className="text-gray-400 font-bold uppercase tracking-widest">No reviews found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            <ReviewsStats />

            {/* Video Testimonials Section Placeholder */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-4">Hear It Directly From Our Clients</h2>
                        <div className="h-1.5 w-16 bg-gold mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((v) => (
                            <div key={v} className="aspect-[9/16] bg-navy rounded-[40px] relative overflow-hidden group shadow-2xl">
                                <Image
                                    src={`https://images.unsplash.com/photo-1573496130141-${v === 1 ? 'af60b67e0dec' : v === 2 ? '6e8f473c4d9f' : 'a7fb39ffe7ac'}?auto=format&fit=crop&q=80`}
                                    alt="Video Review"
                                    fill
                                    className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-gold/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-125 transition-all">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1.5" />
                                    </div>
                                </div>
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-white font-bold">Executive Passenger</p>
                                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Client Video Testimonial</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <LeaveReviewCTA />

        </main>
    );
}

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HourlyUseCases() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/2 w-full lg:h-[700px] h-[400px] relative rounded-[40px] overflow-hidden shadow-2xl group order-2 lg:order-1">
                        <Image
                            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80"
                            alt="Executive stepping into a luxury vehicle"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

                        <div className="absolute bottom-10 left-10 right-10">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                                <p className="font-playfair font-bold text-xl italic mb-2">"Having a car wait curbside changed the way I experience Miami."</p>
                                <p className="text-sm text-gray-300 font-bold uppercase tracking-widest">- CEO, Tech Logistics</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
                            When to Choose <br /> Hourly Service
                        </h2>
                        <div className="h-1 w-20 bg-gold rounded-full mb-8" />

                        <p className="text-lg text-gray-500 leading-relaxed mb-10 font-medium">
                            Hourly service is designed for itineraries that are fluid, unpredictable, or involve multiple tight stops.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-gray-50 p-6 rounded-3xl border border-navy/5">
                                <h4 className="text-xl font-bold text-navy mb-2">Executive Roadshows</h4>
                                <p className="text-gray-500 text-sm">Multiple investor meetings across the city? We'll wait outside each building so you can transition seamlessly between pitches.</p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-3xl border border-navy/5">
                                <h4 className="text-xl font-bold text-navy mb-2">Shopping Excursions</h4>
                                <p className="text-gray-500 text-sm">From Bal Harbour to the Design District. Drop your bags in the trunk and move effortlessly to your next boutique or lunch reservation.</p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-3xl border border-navy/5">
                                <h4 className="text-xl font-bold text-navy mb-2">Night Out / Dinners</h4>
                                <p className="text-gray-500 text-sm">Enjoy the evening without staring at rideshare apps. We'll be ready at the curb the moment you exit the restaurant.</p>
                            </div>
                        </div>

                        <Link href="/book" className="mt-10 inline-flex items-center gap-2 btn-gold group">
                            Reserve Your Chauffeur <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

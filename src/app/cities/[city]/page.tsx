"use client";
import React from 'react';
import BookingWidget from "@/components/BookingWidget";
import { useParams } from "next/navigation";
import { Shield, Clock, Star, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CityPage() {
    const params = useParams();
    const citySlug = params.city as string;
    const cityName = citySlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <main className="min-h-screen bg-white">
            {/* City Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src={`https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80`} // Default city image
                    alt={cityName}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]" />

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <span className="text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Premium Chauffeur Service</span>
                    <h1 className="text-5xl md:text-8xl font-playfair font-bold mb-8 animate-in fade-in slide-in-from-top-12 duration-1000">
                        Luxury Transportation <br />
                        <span className="text-gold italic">in {cityName}</span>
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-sm md:text-base font-medium">
                        <span className="flex items-center gap-2"><Star className="text-gold" size={18} /> 4.9/5 Destination Rating</span>
                        <div className="w-px h-4 bg-white/20" />
                        <span className="flex items-center gap-2"><Shield className="text-gold" size={18} /> Fully Insured</span>
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            <section className="relative z-20 -mt-20 lg:-mt-32 pb-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <BookingWidget />
                </div>
            </section>

            {/* City Features */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gold mx-auto mb-6 shadow-xl shadow-navy/5">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-xl font-playfair font-bold text-navy mb-4">24/7 Availability</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Early morning flight or late night event? We serve {cityName} and surrounding areas around the clock.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gold mx-auto mb-6 shadow-xl shadow-navy/5">
                                <MapPin size={32} />
                            </div>
                            <h3 className="text-xl font-playfair font-bold text-navy mb-4">Local Experts</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Our professional chauffeurs have deep knowledge of {cityName}&apos;s routes, ensuring you always arrive on time.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gold mx-auto mb-6 shadow-xl shadow-navy/5">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-xl font-playfair font-bold text-navy mb-4">Safe & Secure</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Modern fleet, strict maintenance, and comprehensive cyber insurance for your peace of mind.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Area Covered Card */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="bg-navy rounded-[60px] p-12 md:p-24 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mt-48" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                            <div className="flex-1">
                                <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
                                    Serving All of <br />
                                    <span className="text-gold italic">{cityName} & Beyond</span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                                    From downtown hubs to private residential areas, Limopedia offers the gold standard in chauffeured travel.
                                </p>
                                <div className="grid grid-cols-2 gap-6 mb-12">
                                    {["Airport Transfers", "Point to Point", "Hourly Hire", "Corporate Events"].map((service) => (
                                        <div key={service} className="flex items-center gap-3 text-white font-bold text-sm">
                                            <div className="w-2 h-2 bg-gold rounded-full" />
                                            {service}
                                        </div>
                                    ))}
                                </div>
                                <Link href="/book" className="btn-gold px-10 h-16 text-sm flex items-center justify-center gap-4 w-full sm:w-auto group">
                                    Book Now in {cityName}
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                            <div className="flex-1 relative w-full aspect-square md:aspect-video rounded-[30px] overflow-hidden border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1549416878-b9ca35c26148?auto=format&fit=crop&q=80"
                                    alt="Luxury Car"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

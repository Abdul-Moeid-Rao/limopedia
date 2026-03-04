"use client";
import React from 'react';
import Link from "next/link";
import { Home, Car, Phone, ArrowUpRight } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-navy flex items-center justify-center p-4 overflow-hidden relative">
            {/* Background road graphic (subtle) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-[300px] border-y-4 border-dashed border-gold/40 flex items-center justify-center">
                    <span className="text-[400px] font-black text-white/5 select-none">LIMOPEDIA</span>
                </div>
            </div>

            <div className="max-w-4xl w-full text-center relative z-10">
                <h1 className="text-[120px] md:text-[220px] font-playfair font-bold text-gold leading-none mb-4 animate-in zoom-in-50 duration-1000 drop-shadow-2xl">
                    404
                </h1>

                <div className="inline-block text-gold font-black uppercase tracking-[0.5em] text-xs mb-12 animate-in fade-in duration-1000">
                    Limopedia Luxury Transportation
                </div>

                <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
                    Looks Like This <br />
                    <span className="text-gold">Ride Got Lost</span>
                </h2>

                <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-16 px-4">
                    The page you&apos;re looking for doesn&apos;t exist or has moved. Let us get you back on track.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in slide-in-from-bottom-12 duration-1000">
                    {/* Home Action */}
                    <Link href="/" className="bg-white/5 border border-white/10 p-10 rounded-[50px] group hover:bg-white/10 transition-all text-center">
                        <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-gold mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <Home size={28} />
                        </div>
                        <h4 className="text-white font-bold mb-2">Go Home</h4>
                        <p className="text-gray-500 text-xs mb-8">Return to the Limopedia homepage</p>
                        <div className="text-[10px] font-black uppercase tracking-widest text-gold flex items-center justify-center gap-2">
                            Take Me Home <ArrowUpRight size={12} />
                        </div>
                    </Link>

                    {/* Book Action */}
                    <Link href="/book" className="bg-white/5 border border-white/10 p-10 rounded-[50px] group hover:bg-white/20 transition-all text-center border-gold/30">
                        <div className="w-16 h-16 rounded-3xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <Car size={28} />
                        </div>
                        <h4 className="text-white font-bold mb-2">Book a Ride</h4>
                        <p className="text-gray-500 text-xs mb-8">Skip the browsing, book directly</p>
                        <div className="text-[10px] font-black uppercase tracking-widest text-gold flex items-center justify-center gap-2">
                            Book Now <ArrowUpRight size={12} />
                        </div>
                    </Link>

                    {/* Call Action */}
                    <a href="tel:8883000069" className="bg-white/5 border border-white/10 p-10 rounded-[50px] group hover:bg-white/10 transition-all text-center">
                        <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-gold mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <Phone size={28} />
                        </div>
                        <h4 className="text-white font-bold mb-2">Call Us</h4>
                        <p className="text-gray-500 text-xs mb-8">Speak to our team right now</p>
                        <div className="text-[10px] font-black uppercase tracking-widest text-gold flex items-center justify-center gap-2">
                            (888) 300-0069 <ArrowUpRight size={12} />
                        </div>
                    </a>
                </div>

                <p className="mt-16 text-gray-600 font-bold uppercase tracking-widest text-[10px]">
                    Or use the navigation menu above to find what you need.
                </p>
            </div>
        </div>
    );
}

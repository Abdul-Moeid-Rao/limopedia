import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FleetShowcase() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-4">
                            The Perfect Vehicle for <br /> Every Guest List
                        </h2>
                        <div className="h-1 w-20 bg-gold rounded-full" />
                    </div>
                    <Link href="/fleet" className="btn-gold flex items-center gap-2 group">
                        View Entire Fleet <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* VIP Transport */}
                    <div className="group rounded-[40px] overflow-hidden bg-gray-50 border border-navy/5 hover:shadow-2xl transition-all duration-500">
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80"
                                alt="Luxury Sedan"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-navy text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                                VIPs & Couples
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-playfair font-bold text-navy mb-2">Executive Sedans</h3>
                            <p className="text-gray-500 text-sm mb-6">Mercedes-Benz S-Class or similar. The perfect discreet and luxurious transport for the bride and groom or VIP keynote speakers.</p>
                            <div className="flex gap-4 text-xs font-bold text-navy uppercase tracking-widest">
                                <span>3 Passengers</span>
                                <span className="w-1 h-1 rounded-full bg-gold self-center" />
                                <span>3 Bags</span>
                            </div>
                        </div>
                    </div>

                    {/* Family / Bridal Party */}
                    <div className="group rounded-[40px] overflow-hidden bg-gray-50 border border-navy/5 hover:shadow-2xl transition-all duration-500">
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80"
                                alt="Luxury SUV"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-navy text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                                Small Groups
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-playfair font-bold text-navy mb-2">Premium SUVs</h3>
                            <p className="text-gray-500 text-sm mb-6">Cadillac Escalade or similar. Ideal for immediate family members or the bridal party requiring ample space for gowns.</p>
                            <div className="flex gap-4 text-xs font-bold text-navy uppercase tracking-widest">
                                <span>6 Passengers</span>
                                <span className="w-1 h-1 rounded-full bg-gold self-center" />
                                <span>6 Bags</span>
                            </div>
                        </div>
                    </div>

                    {/* Large Groups */}
                    <div className="group rounded-[40px] overflow-hidden bg-gray-50 border border-navy/5 hover:shadow-2xl transition-all duration-500">
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80"
                                alt="Luxury Sprinter"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-navy text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                                Guest Shuttles
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-playfair font-bold text-navy mb-2">Executive Sprinters</h3>
                            <p className="text-gray-500 text-sm mb-6">Mercedes-Benz Sprinter. Comfortable, high-roof transport perfect for shuttling guests from hotels to the venue.</p>
                            <div className="flex gap-4 text-xs font-bold text-navy uppercase tracking-widest">
                                <span>14 Passengers</span>
                                <span className="w-1 h-1 rounded-full bg-gold self-center" />
                                <span>14 Bags</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

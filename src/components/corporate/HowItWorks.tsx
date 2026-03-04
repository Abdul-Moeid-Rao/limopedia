"use client";
import React from 'react';
import { ClipboardList, Car, CheckCircle } from "lucide-react";

export default function HowItWorks() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-playfair font-bold text-navy mb-4">Getting Started is Simple</h2>
                    <p className="text-gray-500 font-medium">Streamlined onboarding designed for busy executives and assistants.</p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-gold/5 via-gold to-gold/5 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 relative z-10">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-white border-2 border-dashed border-gold flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center font-bold text-2xl">1</div>
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-navy mb-4">Open Your Account</h3>
                            <p className="text-gray-500 font-medium leading-relaxed px-4">
                                Fill out our 2-minute corporate inquiry form. Your dedicated specialist will approve the account within 24 hours.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-white border-2 border-dashed border-gold flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                <div className="w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center font-bold text-2xl">2</div>
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-navy mb-4">Request Rides</h3>
                            <p className="text-gray-500 font-medium leading-relaxed px-4">
                                Book instantly via our app, corporate portal, email, or a direct call to your manager. Any time, any day.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-white border-2 border-dashed border-gold flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                <div className="w-16 h-16 rounded-full bg-gold text-white flex items-center justify-center">
                                    <CheckCircle size={32} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-navy mb-4">Ride & Invoice</h3>
                            <p className="text-gray-500 font-medium leading-relaxed px-4">
                                Enjoy professional, reliable luxury service. Receive a detailed, consolidated invoice at the end of each month.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

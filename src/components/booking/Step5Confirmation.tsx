"use client";
import Link from "next/link";
import { Check, Mail, Calendar, Download, Phone, Share2, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Step5Confirmation() {
    return (
        <div className="max-w-4xl mx-auto text-center animate-in zoom-in-95 fade-in duration-700">
            {/* Animated Checkmark */}
            <div className="relative w-24 h-24 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-8 shadow-xl shadow-green-500/20">
                <div className="absolute inset-0 rounded-full animate-ping bg-green-100 opacity-20" />
                <Check size={48} className="text-white" strokeWidth={4} />
            </div>

            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-4">Your Ride is Confirmed! 🎉</h1>
            <p className="text-xl text-navy opacity-60 font-medium mb-12">We&apos;ve sent a confirmation email with all your details.</p>

            {/* Booking Ref */}
            <div className="bg-gold/5 border border-gold/10 rounded-2xl py-6 px-8 inline-block mb-12">
                <span className="block text-xs font-black text-gold uppercase tracking-[0.3em] mb-2">Booking Reference</span>
                <span className="text-3xl font-bold text-navy tracking-tight">LMP-2025-4821</span>
            </div>

            {/* Success Card */}
            <div className="bg-white rounded-3xl shadow-xl shadow-navy/5 border border-gray-100 overflow-hidden text-left mb-12">
                <div className="bg-navy p-6 md:px-10 flex justify-between items-center text-white">
                    <h3 className="text-xl font-bold">Miami Luxury Experience</h3>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">Executive Sedan</span>
                </div>

                <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <MapPin size={24} className="text-gold flex-shrink-0" />
                            <div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pickup Location</span>
                                <p className="font-bold text-navy">Miami International Airport (MIA)</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <MapPin size={24} className="text-navy flex-shrink-0" />
                            <div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Drop-off Location</span>
                                <p className="font-bold text-navy">Fontainebleau Miami Beach</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <Calendar size={24} className="text-gold flex-shrink-0" />
                            <div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date & Time</span>
                                <p className="font-bold text-navy">March 15, 2024 at 10:30 AM</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Phone size={24} className="text-gold flex-shrink-0" />
                            <div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Driver Contact</span>
                                <p className="font-bold text-navy">Assigning 24hrs before trip</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                <button className="flex items-center justify-center gap-3 py-4 px-6 bg-gray-50 hover:bg-gray-100 text-navy font-bold rounded-2xl transition-all">
                    <Mail size={18} className="text-gold" /> Email Receipt
                </button>
                <button className="flex items-center justify-center gap-3 py-4 px-6 bg-gray-50 hover:bg-gray-100 text-navy font-bold rounded-2xl transition-all">
                    <Calendar size={18} className="text-gold" /> Add to Calendar
                </button>
                <button className="flex items-center justify-center gap-3 py-4 px-6 bg-gray-50 hover:bg-gray-100 text-navy font-bold rounded-2xl transition-all">
                    <Download size={18} className="text-gold" /> Download PDF
                </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 border-t border-gray-100">
                <button className="btn-gold w-full sm:w-auto px-12 h-16 flex items-center justify-center gap-3 text-lg">
                    Track Your Driver
                    <ArrowRight size={20} />
                </button>
                <div className="text-center sm:text-left">
                    <p className="font-bold text-navy uppercase text-[10px] tracking-[0.2em] mb-1">Need changes?</p>
                    <a href="tel:8883000069" className="text-navy font-bold text-xl hover:text-gold transition-colors">(888) 300-0069</a>
                </div>
            </div>

            <Link href="/" className="mt-20 inline-flex items-center gap-2 text-gray-400 hover:text-navy transition-colors font-bold text-sm uppercase tracking-widest">
                Return to Homepage
            </Link>
        </div>
    );
}

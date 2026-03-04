"use client";
import Image from "next/image";
import { CreditCard, Lock, ShieldCheck, ArrowRight, MapPin, Calendar, Clock, Users, ChevronRight, Star } from "lucide-react";

interface Step4Props {
    onNext: (data: any) => void;
    bookingData: any;
}

export default function Step4Payment({ onNext, bookingData }: Step4Props) {
    const vehicle = bookingData.vehicle || { name: "Executive Sedan", price: 95, image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80" };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Left Payment Form (60%) */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
                <h1 className="text-3xl font-playfair font-bold text-navy mb-8">Secure Payment</h1>

                <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onNext({}); }}>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-white rounded-lg shadow-sm">
                                    <CreditCard size={24} className="text-gold" />
                                </div>
                                <span className="font-bold text-navy">Credit / Debit Card</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-8 h-5 bg-navy rounded opacity-20" />
                                <div className="w-8 h-5 bg-navy rounded opacity-20" />
                                <div className="w-8 h-5 bg-navy rounded opacity-20" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="relative">
                                <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Card Number</label>
                                <div className="relative">
                                    <input
                                        type="text" placeholder="0000 0000 0000 0000"
                                        className="w-full h-[58px] px-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 font-medium"
                                    />
                                    <Lock size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="col-span-1">
                                <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Expiry</label>
                                <input type="text" placeholder="MM/YY" className="w-full h-[58px] px-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none" />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">CVV</label>
                                <input type="text" placeholder="123" className="w-full h-[58px] px-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none" />
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Billing Zip</label>
                                <input type="text" placeholder="10001" className="w-full h-[58px] px-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none" />
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-secondary/30 rounded-2xl border border-secondary/50 text-sm font-medium text-navy/70 text-center">
                        Pro Tip: Your card is charged only after our dispatch team confirms your limousine availability.
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <button type="submit" className="btn-gold w-full h-[64px] rounded-2xl text-xl flex items-center justify-center gap-3">
                            Complete Booking — ${vehicle.price}
                        </button>

                        <div className="flex items-center gap-6 text-gray-400">
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={20} className="text-green-500" />
                                <span className="text-xs font-black uppercase tracking-widest">256-bit SSL</span>
                            </div>
                            <div className="w-px h-4 bg-gray-200" />
                            <div className="flex items-center gap-2">
                                <Image src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80" alt="Stripe" width={40} height={20} className="grayscale opacity-50" />
                                <span className="text-xs font-black uppercase tracking-widest">Secured by Stripe</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* Right Summary Sidebar (40%) */}
            <div className="lg:col-span-4 h-fit">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-navy/5">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-playfair font-bold text-navy">Booking Summary</h3>
                        <button className="text-gold text-xs font-bold uppercase tracking-widest hover:underline">Modify</button>
                    </div>

                    <div className="space-y-6">
                        {/* Vehicle Mini Card */}
                        <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-inner flex-shrink-0">
                                <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-navy">{vehicle.name}</h4>
                                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mt-1">
                                    <Users size={12} className="text-gold" /> {vehicle.passengers} Pax
                                    <span className="text-gray-200">|</span>
                                    <Star size={12} fill="#C8922A" className="text-gold" /> Premium Service
                                </div>
                                <span className="inline-block mt-2 text-gold font-bold text-sm">${vehicle.price}</span>
                            </div>
                        </div>

                        {/* Route Summary */}
                        <div className="space-y-4 pt-4 border-t border-gray-100">
                            <div className="flex gap-4">
                                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                                <div>
                                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Pickup</span>
                                    <p className="text-sm font-bold text-navy leading-tight">Miami International Airport (MIA)</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <ChevronRight size={18} className="text-gray-300 ml-0.5" />
                                <div className="w-full h-px bg-gray-100 mt-2" />
                            </div>
                            <div className="flex gap-4">
                                <MapPin size={18} className="text-navy mt-1 flex-shrink-0" />
                                <div>
                                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Drop-off</span>
                                    <p className="text-sm font-bold text-navy leading-tight">Fontainebleau Miami Beach</p>
                                </div>
                            </div>
                        </div>

                        {/* Time/Date */}
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <Calendar size={18} className="text-gold" />
                                <span className="text-sm font-bold text-navy whitespace-nowrap">Mar 15, 2024</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock size={18} className="text-gold" />
                                <span className="text-sm font-bold text-navy">10:30 AM</span>
                            </div>
                        </div>

                        {/* Totals */}
                        <div className="space-y-3 pt-6 border-t border-gray-100">
                            <div className="flex justify-between text-sm font-medium">
                                <span className="text-gray-500">Base Fare ({vehicle.name})</span>
                                <span className="text-navy font-bold">${vehicle.price}</span>
                            </div>
                            <div className="flex justify-between text-sm font-medium">
                                <span className="text-gray-500">Service Fee & Taxes</span>
                                <span className="text-navy font-bold">$12.50</span>
                            </div>
                            <div className="flex justify-between text-sm font-medium text-green-600">
                                <span className="flex items-center gap-1.5 font-bold">✓ Airport Fees</span>
                                <span className="font-bold">Included</span>
                            </div>
                            <div className="pt-4 border-t border-navy/10 flex justify-between items-end">
                                <div>
                                    <span className="block text-xs font-black text-navy uppercase tracking-[0.2em] mb-1">Grand Total</span>
                                    <span className="text-3xl font-bold text-gold tracking-tighter">${vehicle.price + 12.50}</span>
                                </div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase text-right leading-tight max-w-[100px]">
                                    All inclusive Pricing
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

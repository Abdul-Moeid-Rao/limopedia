"use client";
import { useState } from "react";
import { MapPin, Calendar, Clock, Users, Plane, MessageSquare, ArrowRight, Star, ShieldCheck, Clock8, CreditCard, CheckCircle2 } from "lucide-react";

interface Step1Props {
    onNext: (data: any) => void;
}

export default function Step1TripDetails({ onNext }: Step1Props) {
    const [isReturn, setIsReturn] = useState(false);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Left Form (60%) */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
                <h1 className="text-3xl font-playfair font-bold text-navy mb-2">Where are you going?</h1>
                <p className="text-gray-500 mb-8 font-medium">Please provide your trip details to view available vehicles and rates.</p>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNext({}); }}>
                    <div className="grid grid-cols-1 gap-6">
                        {/* Pickup Location */}
                        <div className="relative group">
                            <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Pickup Location</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold group-focus-within:scale-110 transition-transform">
                                    <MapPin size={22} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter address, airport, or hotel"
                                    className="w-full h-[58px] pl-14 pr-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-lg font-medium"
                                    required
                                />
                            </div>
                        </div>

                        {/* Dropoff Location */}
                        <div className="relative group">
                            <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Drop-off Location</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold group-focus-within:scale-110 transition-transform">
                                    <MapPin size={22} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter destination address"
                                    className="w-full h-[58px] pl-14 pr-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-lg font-medium"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Date */}
                        <div className="relative group">
                            <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Pickup Date</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold group-focus-within:scale-110 transition-transform">
                                    <Calendar size={22} />
                                </div>
                                <input
                                    type="date"
                                    className="w-full h-[58px] pl-14 pr-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-lg font-medium"
                                    required
                                />
                            </div>
                        </div>

                        {/* Time */}
                        <div className="relative group">
                            <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Pickup Time</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold group-focus-within:scale-110 transition-transform">
                                    <Clock size={22} />
                                </div>
                                <select className="w-full h-[58px] pl-14 pr-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-lg font-medium appearance-none">
                                    <option>Select Time</option>
                                    {Array.from({ length: 96 }).map((_, i) => {
                                        const hour = Math.floor(i / 4).toString().padStart(2, '0');
                                        const min = (i % 4 * 15).toString().padStart(2, '0');
                                        return <option key={i} value={`${hour}:${min}`}>{`${hour}:${min}`}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Passengers */}
                        <div className="relative group">
                            <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Passengers</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold group-focus-within:scale-110 transition-transform">
                                    <Users size={22} />
                                </div>
                                <input
                                    type="number"
                                    min="1" max="55"
                                    defaultValue="1"
                                    className="w-full h-[58px] pl-14 pr-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-lg font-medium"
                                />
                            </div>
                        </div>

                        {/* Return Toggle */}
                        <div className="flex items-center justify-between h-[58px] mt-auto pb-2 px-1">
                            <span className="font-semibold text-navy">Add Return Trip?</span>
                            <button
                                type="button"
                                onClick={() => setIsReturn(!isReturn)}
                                className={cn(
                                    "w-14 h-8 rounded-full transition-all duration-300 relative",
                                    isReturn ? "bg-gold" : "bg-gray-200"
                                )}
                            >
                                <div className={cn(
                                    "absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-sm",
                                    isReturn ? "left-7" : "left-1"
                                )} />
                            </button>
                        </div>
                    </div>

                    {isReturn && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-top-2">
                            <div className="relative group">
                                <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Return Date</label>
                                <input type="date" className="w-full h-[58px] px-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none" />
                            </div>
                            <div className="relative group">
                                <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Return Time</label>
                                <input type="time" className="w-full h-[58px] px-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none" />
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 gap-6 pt-2">
                        {/* Flight Number (Optional) */}
                        <div className="relative group">
                            <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Flight Number (Optional)</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold group-focus-within:scale-110 transition-transform">
                                    <Plane size={22} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="e.g. AA1234"
                                    className="w-full h-[58px] pl-14 pr-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-lg font-medium"
                                />
                            </div>
                        </div>

                        {/* Special Requests */}
                        <div className="relative group">
                            <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Special Requests</label>
                            <div className="relative">
                                <div className="absolute left-4 top-6 text-gold group-focus-within:scale-110 transition-transform">
                                    <MessageSquare size={22} />
                                </div>
                                <textarea
                                    placeholder="Any notes for your chauffeur?"
                                    className="w-full pl-14 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-lg font-medium min-h-[100px]"
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn-gold w-full h-[64px] rounded-2xl text-xl flex items-center justify-center gap-3 mt-6">
                        Show Available Vehicles
                        <ArrowRight size={24} />
                    </button>
                </form>
            </div>

            {/* Right Trust Sidebar (40%) */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-navy/5">
                    <h3 className="text-xl font-playfair font-bold text-navy mb-6">You&apos;re in safe hands</h3>

                    <ul className="space-y-4 mb-8">
                        {[
                            "No credit card to check rates",
                            "Free cancellation up to 24hrs",
                            "Price includes all fees — no surprises",
                            "Licensed & insured chauffeurs",
                            "24/7 live phone support",
                            "Flight tracking included free"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <CheckCircle2 size={18} className="text-green-500" />
                                </div>
                                <span className="text-navy font-medium opacity-80">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-8 border-t border-gray-100">
                        <div className="flex items-center gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#C8922A" className="text-gold" />)}
                            <span className="ml-2 font-bold text-navy">4.9 / 5.0</span>
                        </div>
                        <p className="text-sm text-gray-500 italic leading-relaxed">
                            &quot;Absolutely flawless service. The chauffeur arrived 10 minutes early and the vehicle was immaculate. Best in Miami!&quot;
                        </p>
                        <div className="mt-4 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-xs text-navy">JH</div>
                            <span className="text-sm font-bold text-navy">James Harrison</span>
                            <span className="text-xs text-gray-400">• Verified Client</span>
                        </div>
                    </div>
                </div>

                {/* Security Badge */}
                <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-sm font-medium">
                    <ShieldCheck size={18} />
                    <span>SECURE 256-BIT SSL ENCRYPTED BOOKING</span>
                </div>
            </div>
        </div>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}

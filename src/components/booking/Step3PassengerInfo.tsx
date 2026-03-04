"use client";
import { useState } from "react";
import { User, Mail, Phone, Plane, Scissors, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

interface Step3Props {
    onNext: (data: any) => void;
}

export default function Step3PassengerInfo({ onNext }: Step3Props) {
    const [showPromo, setShowPromo] = useState(false);

    return (
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
                <h1 className="text-3xl font-playfair font-bold text-navy mb-2">Your Details</h1>
                <p className="text-gray-500 font-medium">Please provide your contact information to finalize the booking.</p>
            </div>

            <form className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 space-y-8" onSubmit={(e) => { e.preventDefault(); onNext({}); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="relative group">
                        <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">First Name</label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold">
                                <User size={20} />
                            </div>
                            <input
                                type="text" placeholder="John" required
                                className="w-full h-[58px] pl-12 pr-12 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 text-lg font-medium"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                                <CheckCircle2 size={18} />
                            </div>
                        </div>
                    </div>

                    {/* Last Name */}
                    <div className="relative group">
                        <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Last Name</label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold">
                                <User size={20} />
                            </div>
                            <input
                                type="text" placeholder="Doe" required
                                className="w-full h-[58px] pl-12 pr-12 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 text-lg font-medium"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="relative group">
                        <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Email Address</label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold">
                                <Mail size={20} />
                            </div>
                            <input
                                type="email" placeholder="john@example.com" required
                                className="w-full h-[58px] pl-12 pr-12 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 text-lg font-medium"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="relative group">
                        <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Phone Number</label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gold">
                                <Phone size={20} />
                            </div>
                            <input
                                type="tel" placeholder="(555) 000-0000" required
                                className="w-full h-[58px] pl-12 pr-12 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/30 text-lg font-medium"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                    <div className="relative group">
                        <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Airline</label>
                        <input type="text" placeholder="e.g. Delta" className="w-full h-[58px] px-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none" />
                    </div>
                    <div className="relative group">
                        <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Flight Number</label>
                        <input type="text" placeholder="e.g. DL1234" className="w-full h-[58px] px-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none" />
                    </div>
                </div>

                <div>
                    <button
                        type="button"
                        onClick={() => setShowPromo(!showPromo)}
                        className="text-gold font-bold text-sm tracking-widest uppercase hover:text-navy transition-colors flex items-center gap-2"
                    >
                        <Scissors size={16} />
                        {showPromo ? "Cancel Discount Code" : "Have a Promo Code?"}
                    </button>
                    {showPromo && (
                        <div className="mt-4 flex gap-4 animate-in slide-in-from-top-2">
                            <input
                                type="text" placeholder="Enter code"
                                className="flex-1 h-[52px] px-6 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none"
                            />
                            <button type="button" className="px-8 bg-navy text-white font-bold rounded-xl hover:bg-gold transition-all">Apply</button>
                        </div>
                    )}
                </div>

                <div className="relative group pt-4 border-t border-gray-100">
                    <label className="block text-xs font-bold text-navy uppercase tracking-widest mb-2 opacity-50">Special Requests / Notes</label>
                    <textarea
                        className="w-full p-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none min-h-[120px]"
                        placeholder="e.g. Child seat requirements, extra stops, etc."
                    />
                </div>

                <button type="submit" className="btn-gold w-full h-[64px] rounded-2xl text-xl flex items-center justify-center gap-3">
                    Continue to Payment
                    <ArrowRight size={24} />
                </button>
            </form>
        </div>
    );
}

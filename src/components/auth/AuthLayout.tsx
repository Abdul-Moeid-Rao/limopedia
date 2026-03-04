"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Car, CreditCard, Receipt } from "lucide-react";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row h-full">
            {/* Left Panel - Brand Side (40%) */}
            <div className="md:w-[40%] bg-navy relative flex flex-col items-center justify-between p-12 text-white overflow-hidden">
                {/* Subtle Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 text-center w-full max-w-sm">

                    <h2 className="text-3xl font-playfair font-bold mb-4">Your ride, your account, your way.</h2>
                    <div className="h-1 w-12 bg-gold mx-auto rounded-full mb-12" />

                    <div className="space-y-8 text-left max-w-xs mx-auto">
                        <div className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                                <Car size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">View upcoming & past rides</h4>
                                <p className="text-xs text-gray-400 mt-1">Manage your complete journey history.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                                <CreditCard size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Manage payment methods</h4>
                                <p className="text-xs text-gray-400 mt-1">Secure and fast checkout every time.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                                <Receipt size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Download invoices & receipts</h4>
                                <p className="text-xs text-gray-400 mt-1">Ready-to-use business reports.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Right Panel - Form Side (60%) */}
            <div className="md:w-[60%] bg-white flex items-center justify-center p-8 md:p-16 lg:p-24 overflow-y-auto">
                <div className="w-full max-w-md animate-in fade-in slide-in-from-right-12 duration-700">
                    {children}
                </div>
            </div>
        </div>
    );
}

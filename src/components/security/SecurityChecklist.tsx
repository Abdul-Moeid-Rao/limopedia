"use client";
import React from 'react';
import { Check } from "lucide-react";

const practices = [
    "256-bit SSL encryption on all transactions",
    "PCI DSS compliant payment processing (via Stripe)",
    "Data stored on SOC 2 Type II certified servers",
    "Two-factor authentication for all staff accounts",
    "Regular third-party security audits",
    "Passenger data never sold or shared with third parties",
    "GDPR-ready data handling practices",
    "Annual cybersecurity training for all employees"
];

export default function SecurityChecklist() {
    return (
        <section className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-20">
                    <span className="text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Protocols</span>
                    <h2 className="text-4xl md:text-6xl font-playfair font-bold text-navy mb-8">How We Protect Your Data</h2>
                    <div className="h-1.5 w-16 bg-green-500 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {practices.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-6 bg-white p-8 rounded-[30px] shadow-sm border border-navy/5 group hover:shadow-xl transition-all">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all flex-shrink-0">
                                <Check size={20} strokeWidth={3} />
                            </div>
                            <div>
                                <span className="text-navy font-bold text-sm tracking-tight">{item}</span>
                                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Verified Security Practice</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

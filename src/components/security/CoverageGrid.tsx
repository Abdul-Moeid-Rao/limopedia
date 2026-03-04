"use client";
import React from 'react';
import { Lock, Bug, Scale, Search, Bell, Shield } from "lucide-react";

const coverages = [
    {
        title: "Data Breach Coverage",
        description: "Coverage for unauthorized access to passenger and corporate client sensitive information.",
        icon: <Lock size={32} />
    },
    {
        title: "Ransomware Protection",
        description: "Policy coverage for ransomware attacks, extortion demands, and professional recovery costs.",
        icon: <Shield size={32} />
    },
    {
        title: "Liability Coverage",
        description: "Third-party liability for data breaches affecting your passengers, clients, or vendors.",
        icon: <Scale size={32} />
    },
    {
        title: "Forensic Investigation",
        description: "Coverage for professional forensic investigation and digital incident response after a security event.",
        icon: <Search size={32} />
    },
    {
        title: "Notification Costs",
        description: "Regulatory notification expenses and credit monitoring costs for affected individuals.",
        icon: <Bell size={32} />
    },
    {
        title: "Legal Defense",
        description: "Full coverage for legal fees, regulatory fines, and court costs related to cyber incidents.",
        icon: <Bug size={32} />
    }
];

export default function CoverageGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <span className="text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Our Policy</span>
                    <h2 className="text-4xl md:text-6xl font-playfair font-bold text-navy mb-8">Comprehensive Cyber Coverage</h2>
                    <div className="h-1.5 w-16 bg-gold mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coverages.map((item, idx) => (
                        <div key={idx} className="p-10 rounded-[50px] bg-gray-50 border border-transparent hover:border-gold hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-white transition-all transform group-hover:rotate-6">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-navy mb-4">{item.title}</h3>
                            <p className="text-gray-500 font-medium text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

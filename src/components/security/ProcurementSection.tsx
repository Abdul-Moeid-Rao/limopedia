"use client";
import React from 'react';
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export default function ProcurementSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-6xl mx-auto bg-navy rounded-[60px] p-12 md:p-24 shadow-2xl relative overflow-hidden group">
                    {/* Background Graphic */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-48 -mt-48 transition-all duration-1000 group-hover:bg-gold/10" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-left">
                            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
                                For Corporate <br />
                                <span className="text-gold italic">Procurement Teams</span>
                            </h2>
                            <p className="text-gray-400 text-lg font-medium leading-relaxed mb-12">
                                Need documentation for vendor vetting? We provide a comprehensive compliance packet for your security and legal reviews.
                            </p>

                            <div className="space-y-4 mb-12">
                                {[
                                    "Certificate of Cyber Insurance (COI)",
                                    "General Liability Documentation",
                                    "Current W-9 Form",
                                    "PCI Compliance Certificate"
                                ].map((doc, idx) => (
                                    <div key={idx} className="flex items-center gap-4 text-white">
                                        <FileText size={20} className="text-gold" />
                                        <span className="text-sm font-bold">{doc}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact" className="btn-gold px-12 h-16 text-sm flex items-center justify-center gap-4 w-full sm:w-auto group">
                                Request Documentation
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                            {[
                                { label: "ISO Certified Servers", icon: "🌐" },
                                { label: "GDPR Compliant", icon: "🇪🇺" },
                                { label: "PCI DSS Level 1", icon: "💳" },
                                { label: "SOC 2 Type II", icon: "🛡️" }
                            ].map((badge, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[30px] text-center hover:bg-white/10 transition-all group">
                                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{badge.icon}</div>
                                    <div className="text-[10px] font-black tracking-widest uppercase text-gray-500 whitespace-nowrap">{badge.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                    Have a security questionnaire? Send it to <span className="text-gold">security@limopedia.com</span>
                </div>
            </div>
        </section>
    );
}

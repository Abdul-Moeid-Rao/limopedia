"use client";
import React from 'react';
import { ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function SecurityHero() {
    return (
        <section className="bg-navy pt-24 pb-32 md:pt-32 md:pb-48 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="container mx-auto px-4 relative z-10">
                <nav className="flex items-center gap-2 text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-12">
                    <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                    <ChevronRight size={10} className="opacity-50" />
                    <span className="text-gold">Security & Insurance</span>
                </nav>

                <div className="max-w-4xl">
                    <div className="w-20 h-20 rounded-3xl bg-gold/10 flex items-center justify-center text-gold mb-8 animate-in zoom-in duration-700">
                        <ShieldCheck size={40} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8 leading-[1.1] animate-in fade-in slide-in-from-left-12 duration-1000">
                        Your Data Is Safe <br />
                        <span className="text-gold italic">With Limopedia</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl animate-in fade-in slide-in-from-left-16 duration-1000">
                        Limopedia holds comprehensive cyber insurance and follows industry-leading data security practices. Our corporate and enterprise clients can trust that their data — and their clients&apos; data — is fully protected.
                    </p>
                </div>
            </div>

            {/* Decorative Gold Line */}
            <div className="absolute bottom-0 left-[20%] w-px h-32 bg-gradient-to-t from-gold to-transparent" />
        </section>
    );
}

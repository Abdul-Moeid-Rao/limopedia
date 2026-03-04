import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GroupFleet() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
                            Vehicles Scaled to <br /> Your Group Size
                        </h2>
                        <div className="h-1 w-20 bg-gold rounded-full mb-8" />

                        <p className="text-lg text-gray-500 leading-relaxed mb-10 font-medium">
                            Whether you need to transport an executive board of 12 or an entire event guest list of 200, Limopedia's scalable fleet provides absolute reliability.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                                <div className="w-16 h-16 rounded-xl bg-navy text-gold font-bold flex flex-col items-center justify-center shrink-0 shadow-lg">
                                    <span className="text-2xl leading-none">14</span>
                                    <span className="text-[10px] uppercase tracking-wider">PAX</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-navy mb-1">Executive Sprinter Vans</h4>
                                    <p className="text-gray-500 text-sm font-medium">Perfect for roadshows, airport group transfers, and intimate executive retreats.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                                <div className="w-16 h-16 rounded-xl bg-navy text-gold font-bold flex flex-col items-center justify-center shrink-0 shadow-lg">
                                    <span className="text-2xl leading-none">28</span>
                                    <span className="text-[10px] uppercase tracking-wider">PAX</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-navy mb-1">Luxury Mini-Coaches</h4>
                                    <p className="text-gray-500 text-sm font-medium">Ideal for sports teams, wedding shuttles, and mid-sized corporate networking events.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                                <div className="w-16 h-16 rounded-xl bg-navy text-gold font-bold flex flex-col items-center justify-center shrink-0 shadow-lg">
                                    <span className="text-2xl leading-none">56</span>
                                    <span className="text-[10px] uppercase tracking-wider">PAX</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-navy mb-1">Motor Coaches</h4>
                                    <p className="text-gray-500 text-sm font-medium">The ultimate solution for massive event logistics, conventions, and long-distance group touring.</p>
                                </div>
                            </div>
                        </div>

                        <Link href="/book" className="mt-10 inline-flex items-center gap-2 btn-gold group">
                            Request a Group Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="lg:w-1/2 w-full lg:h-[700px] h-[500px] relative rounded-[40px] overflow-hidden shadow-2xl group">
                        <Image
                            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80"
                            alt="Luxury bus interior"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

                        <div className="absolute bottom-10 left-10 right-10">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                                <p className="font-playfair font-bold text-xl italic mb-2">"Flawless logistics for our 300-person summit."</p>
                                <p className="text-sm text-gray-300 font-bold uppercase tracking-widest">- VP of Operations, Global Finance</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

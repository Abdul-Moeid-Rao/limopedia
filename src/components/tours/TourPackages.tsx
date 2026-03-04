import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

export default function TourPackages() {
    const packages = [
        {
            title: "The Magic City Essential",
            location: "Miami",
            duration: "4 Hours",
            description: "A comprehensive overview of Miami's most iconic neighborhoods. Includes South Beach Art Deco district, the vibrant murals of Wynwood, and the historic charm of Little Havana.",
            image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&q=80"
        },
        {
            title: "The Palm Beach Estates",
            location: "Palm Beach",
            duration: "5 Hours",
            description: "Drive along the legendary Ocean Boulevard viewing historic mansions. Enjoy a luxurious stop for shopping and dining along the famous Worth Avenue.",
            image: "https://images.unsplash.com/photo-1596484552834-6a58f850d0a1?auto=format&fit=crop&q=80"
        },
        {
            title: "Fort Lauderdale Waterways",
            location: "Fort Lauderdale",
            duration: "3 Hours",
            description: "Experience the 'Venice of America'. We'll guide you along Las Olas Boulevard and the beautiful coastal roads, with strategic stops at the finest marinas.",
            image: "https://images.unsplash.com/photo-1590053401569-83bcad380f72?auto=format&fit=crop&q=80"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
                        Signature Tour Packages
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed font-medium mb-10">
                        While all tours are fully customizable, our signature packages offer beautifully curated starting points for your journey.
                    </p>
                    <div className="h-1 w-20 bg-gold rounded-full mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div key={index} className="group rounded-[40px] overflow-hidden border border-navy/5 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-navy text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5">
                                    <Clock size={12} className="text-gold" />
                                    {pkg.duration}
                                </div>
                                <div className="absolute top-4 left-4 bg-navy/90 backdrop-blur text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                                    {pkg.location}
                                </div>
                            </div>
                            <div className="p-8 bg-gray-50 flex-grow flex flex-col">
                                <h3 className="text-2xl font-playfair font-bold text-navy mb-4">{pkg.title}</h3>
                                <p className="text-gray-500 text-sm mb-8 leading-relaxed flex-grow">{pkg.description}</p>

                                <Link href="/book" className="text-gold font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:text-navy transition-colors mt-auto">
                                    Reserve Tour <span className="text-lg">→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

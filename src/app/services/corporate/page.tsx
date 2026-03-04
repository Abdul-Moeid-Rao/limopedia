import React from 'react';
import CorporateHero from "@/components/corporate/CorporateHero";
import CorporateFeatures from "@/components/corporate/CorporateFeatures";
import HowItWorks from "@/components/corporate/HowItWorks";
import CorporatePlans from "@/components/corporate/CorporatePlans";
import CorporateTestimonials from "@/components/corporate/CorporateTestimonials";
import CorporateInquiryForm from "@/components/corporate/CorporateInquiryForm";
import Image from "next/image";

export default function CorporatePage() {
    return (
        <main className="min-h-screen bg-white">
            <CorporateHero />

            <CorporateFeatures />

            <HowItWorks />

            {/* Video Section Placeholder */}
            <section className="py-24 bg-navy relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-12">See the Limopedia Corporate Experience</h2>
                    <div className="aspect-video bg-white/5 border border-white/10 rounded-[40px] shadow-2xl flex items-center justify-center group cursor-pointer overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1573496132002-3e3e3e3e3e3e?auto=format&fit=crop&q=80"
                            alt="Video Thumbnail"
                            fill
                            className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="w-24 h-24 rounded-full bg-gold text-white flex items-center justify-center shadow-2xl shadow-gold/40 group-hover:scale-125 transition-all duration-300 relative z-10">
                            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                        </div>
                    </div>
                    <p className="mt-12 text-gray-400 font-bold tracking-widest uppercase text-xs">
                        See why 200+ companies trust Limopedia for executive travel
                    </p>
                </div>
            </section>

            <CorporatePlans />

            <CorporateTestimonials />

            <CorporateInquiryForm />

        </main>
    );
}

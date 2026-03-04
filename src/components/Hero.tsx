"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-[600px] md:h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-110 animate-slow-zoom"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80')" }}
            >
                <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/80" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 pt-16 md:pt-12 pb-24 md:pb-32 text-center lg:text-left">
                <div className="max-w-4xl">
                    <span
                        className="inline-block text-gold font-bold tracking-[0.2em] text-xs md:text-sm mb-4 md:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 uppercase"
                        data-i18n="heroSubtitle"
                    >
                        {t("heroSubtitle")}
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair font-bold text-white leading-tight mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 px-2 md:px-0">
                        <span data-i18n="heroTitleLine1">{t("heroTitleLine1")}</span><br />
                        <span className="text-gold" data-i18n="heroTitleLine2">{t("heroTitleLine2")}</span>
                    </h1>
                    <p
                        className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 px-4 md:px-0 mx-auto lg:mx-0"
                        data-i18n="heroDesc"
                    >
                        {t("heroDesc")}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                        <Link href="/book" className="w-full sm:w-auto">
                            <button className="btn-gold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 flex items-center gap-2 group w-full justify-center">
                                <span data-i18n="heroBtnBook">{t("heroBtnBook")}</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                        </Link>
                        <a
                            href="tel:8883000069"
                            className="text-white border-2 border-white/30 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-white hover:text-navy transition-all duration-300 w-full sm:w-auto text-center text-sm md:text-base"
                            data-i18n="heroBtnCall"
                        >
                            {t("heroBtnCall")}
                        </a>
                    </div>
                </div>
            </div>

            {/* Trust Badges Strip */}
            <div className="absolute bottom-0 left-0 w-full bg-navy/80 border-t border-white/10 backdrop-blur-md py-6 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-white/80 font-medium">
                    <div className="flex items-center gap-2" data-i18n="heroTrustRating">
                        <span className="text-gold">★</span> {t("heroTrustRating")}
                    </div>
                    <div className="w-px h-6 bg-white/20" />
                    <div data-i18n="heroTrustAirports">{t("heroTrustAirports")}</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div data-i18n="heroTrustRides">{t("heroTrustRides")}</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div data-i18n="heroTrustInsured">{t("heroTrustInsured")}</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div data-i18n="heroTrust247">{t("heroTrust247")}</div>
                </div>
            </div>
        </section>
    );
}

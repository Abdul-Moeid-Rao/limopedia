"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function FinalCTA() {
    const { t } = useLanguage();

    return (
        <section className="bg-navy py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-8" data-i18n="finalCTATitle">
                    {t("finalCTATitle")}
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto" data-i18n="finalCTADesc">
                    {t("finalCTADesc")}
                </p>

                <div className="flex flex-col items-center gap-8">
                    <button className="btn-gold text-2xl px-12 py-6 scale-110 hover:scale-115 transition-transform" data-i18n="finalCTABookBtn">
                        {t("finalCTABookBtn")}
                    </button>

                    <div className="flex items-center gap-3 text-white/80 text-lg">
                        <div className="w-12 h-px bg-white/20" />
                        <span className="flex items-center gap-2">
                            <span data-i18n="finalCTACallText">{t("finalCTACallText")}</span>
                            <a href="tel:8883000069" className="text-white font-bold hover:text-gold transition-colors">
                                (888) 300-0069
                            </a>
                        </span>
                        <div className="w-12 h-px bg-white/20" />
                    </div>
                </div>
            </div>
        </section>
    );
}

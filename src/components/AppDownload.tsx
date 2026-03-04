"use client";

import { Smartphone } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function AppDownload() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-white overflow-hidden text-left">
            <div className="container mx-auto px-4">
                <div className="bg-navy rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />

                    <div className="flex-1 text-center lg:text-left relative z-10">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6" data-i18n="appDownloadTitle">
                            {t("appDownloadTitle")}
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-xl" data-i18n="appDownloadDesc">
                            {t("appDownloadDesc")}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <button className="bg-black border border-white/20 px-8 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors w-full sm:w-auto">
                                <div className="text-left">
                                    <div className="text-[10px] text-gray-400 uppercase leading-none" data-i18n="appDownloadStorePrefix">{t("appDownloadStorePrefix")}</div>
                                    <div className="text-xl text-white font-bold leading-none mt-1">App Store</div>
                                </div>
                            </button>
                            <button className="bg-black border border-white/20 px-8 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors w-full sm:w-auto">
                                <div className="text-left">
                                    <div className="text-[10px] text-gray-400 uppercase leading-none" data-i18n="appDownloadPlayPrefix">{t("appDownloadPlayPrefix")}</div>
                                    <div className="text-xl text-white font-bold leading-none mt-1">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative z-10 w-64 md:w-80 mx-auto aspect-[1/2] bg-gray-800 rounded-[3rem] border-[8px] border-gray-700 shadow-2xl overflow-hidden flex items-center justify-center">
                            {/* Fake phone UI */}
                            <div className="w-full h-full bg-navy relative">
                                <div className="absolute top-0 w-full h-12 bg-navy-dark flex items-center justify-center">
                                    <div className="w-20 h-4 bg-black rounded-full" /> {/* Notch */}
                                </div>
                                <div className="pt-16 px-6">
                                    <div className="text-gold font-bold text-xl font-playfair mb-4">Limopedia</div>
                                    <div className="h-4 w-3/4 bg-white/10 rounded mb-2" />
                                    <div className="h-32 w-full bg-primary/20 rounded-xl mb-4 flex items-center justify-center">
                                        <Smartphone size={40} className="text-gold animate-bounce" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-10 w-full bg-gold rounded-lg" />
                                        <div className="h-10 w-full bg-white/5 rounded-lg border border-white/10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Phone floating circles */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
}

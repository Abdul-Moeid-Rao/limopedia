"use client";

import { Phone, Calendar } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function MobileStickyBar() {
    const { t } = useLanguage();

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 lg:hidden px-4 pb-4 animate-in slide-in-from-bottom duration-500">
            <div className="bg-navy/90 backdrop-blur-lg border border-white/10 rounded-2xl p-3 shadow-2xl flex items-center gap-3">
                <a
                    href="tel:8883000069"
                    className="flex-1 bg-white/10 h-14 rounded-xl flex flex-col items-center justify-center text-white text-xs font-medium"
                >
                    <Phone size={20} className="text-gold mb-1" />
                    <span data-i18n="stickyCallNow">{t("stickyCallNow")}</span>
                </a>
                <button className="flex-[2] btn-gold h-14 rounded-xl flex items-center justify-center gap-2 text-lg font-bold">
                    <Calendar size={20} />
                    <span data-i18n="stickyBookNow">{t("stickyBookNow")}</span>
                </button>
            </div>
        </div>
    );
}

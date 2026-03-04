"use client";
import React from 'react';
import { Send } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function AffiliateForm() {
    const { t } = useLanguage();

    return (
        <section id="affiliate-form" className="py-24 bg-navy relative overflow-hidden text-left">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-48 -mb-48" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-6" data-i18n="affiliateFormBadge">
                            {t("affiliateFormBadge")}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6" data-i18n="affiliateFormTitle">
                            {t("affiliateFormTitle")}
                        </h2>
                        <p className="text-gray-400 text-xl font-medium leading-relaxed italic" data-i18n="affiliateFormDesc">
                            {t("affiliateFormDesc")}
                        </p>
                    </div>

                    <form className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-[50px] shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="space-y-4 text-left">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4" data-i18n="affiliateFormLabelName">{t("affiliateFormLabelName")}</label>
                                <input
                                    type="text"
                                    placeholder="John Smith"
                                    className="w-full h-16 bg-white/5 border border-white/10 rounded-full px-8 text-white focus:border-gold focus:outline-none transition-all placeholder:text-white/20 font-medium"
                                />
                            </div>
                            <div className="space-y-4 text-left">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4" data-i18n="affiliateFormLabelCompany">{t("affiliateFormLabelCompany")}</label>
                                <input
                                    type="text"
                                    placeholder="Global Travel Inc."
                                    className="w-full h-16 bg-white/5 border border-white/10 rounded-full px-8 text-white focus:border-gold focus:outline-none transition-all placeholder:text-white/20 font-medium"
                                />
                            </div>
                            <div className="space-y-4 text-left">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4" data-i18n="affiliateFormLabelRole">{t("affiliateFormLabelRole")}</label>
                                <input
                                    type="text"
                                    placeholder="Operations Manager"
                                    className="w-full h-16 bg-white/5 border border-white/10 rounded-full px-8 text-white focus:border-gold focus:outline-none transition-all placeholder:text-white/20 font-medium"
                                />
                            </div>
                            <div className="space-y-4 text-left">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4" data-i18n="affiliateFormLabelWebsite">{t("affiliateFormLabelWebsite")}</label>
                                <input
                                    type="url"
                                    placeholder="www.yourcompany.com"
                                    className="w-full h-16 bg-white/5 border border-white/10 rounded-full px-8 text-white focus:border-gold focus:outline-none transition-all placeholder:text-white/20 font-medium"
                                />
                            </div>
                            <div className="space-y-4 text-left">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4" data-i18n="affiliateFormLabelEmail">{t("affiliateFormLabelEmail")}</label>
                                <input
                                    type="email"
                                    placeholder="john@company.com"
                                    className="w-full h-16 bg-white/5 border border-white/10 rounded-full px-8 text-white focus:border-gold focus:outline-none transition-all placeholder:text-white/20 font-medium"
                                />
                            </div>
                            <div className="space-y-4 text-left">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4" data-i18n="affiliateFormLabelPhone">{t("affiliateFormLabelPhone")}</label>
                                <input
                                    type="tel"
                                    placeholder="(555) 000-0000"
                                    className="w-full h-16 bg-white/5 border border-white/10 rounded-full px-8 text-white focus:border-gold focus:outline-none transition-all placeholder:text-white/20 font-medium"
                                />
                            </div>
                            <div className="space-y-4 text-left">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4" data-i18n="affiliateFormLabelBizType">{t("affiliateFormLabelBizType")}</label>
                                <select className="w-full h-16 bg-navy border border-white/10 rounded-full px-8 text-white focus:border-gold focus:outline-none transition-all font-medium appearance-none cursor-pointer">
                                    <option data-i18n="bizLimo">{t("bizLimo")}</option>
                                    <option data-i18n="bizTravel">{t("bizTravel")}</option>
                                    <option data-i18n="bizHotel">{t("bizHotel")}</option>
                                    <option data-i18n="bizEvent">{t("bizEvent")}</option>
                                    <option data-i18n="bizOther">{t("bizOther")}</option>
                                </select>
                            </div>
                            <div className="space-y-4 text-left">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4" data-i18n="affiliateFormLabelReferrals">{t("affiliateFormLabelReferrals")}</label>
                                <select className="w-full h-16 bg-navy border border-white/10 rounded-full px-8 text-white focus:border-gold focus:outline-none transition-all font-medium appearance-none cursor-pointer">
                                    <option data-i18n="ref1_5">{t("ref1_5")}</option>
                                    <option data-i18n="ref5_20">{t("ref5_20")}</option>
                                    <option data-i18n="ref20_50">{t("ref20_50")}</option>
                                    <option data-i18n="ref50plus">{t("ref50plus")}</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-4 text-left mb-12">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4" data-i18n="affiliateFormLabelAbout">{t("affiliateFormLabelAbout")}</label>
                            <textarea
                                placeholder={t("affiliateFormPlaceholderAbout")}
                                className="w-full h-32 bg-white/5 border border-white/10 rounded-[30px] p-8 text-white focus:border-gold focus:outline-none transition-all placeholder:text-white/20 font-medium resize-none"
                            ></textarea>
                        </div>

                        <button className="btn-gold w-full h-20 text-sm flex items-center justify-center gap-4 group" data-i18n="affiliateFormBtnSubmit">
                            {t("affiliateFormBtnSubmit")}
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-16 pt-16 border-t border-white/10 text-center">
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]" data-i18n="affiliateFormContactDesk">{t("affiliateFormContactDesk")}</p>
                        <a href="tel:8883000069" className="text-2xl md:text-4xl font-playfair font-bold text-white hover:text-gold transition-colors block mt-4">
                            (888) 300-0069 <span className="text-gold" data-i18n="affiliateFormExt">{t("affiliateFormExt")}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

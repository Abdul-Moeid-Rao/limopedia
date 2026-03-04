"use client";
import React from 'react';
import { useLanguage } from "@/components/LanguageContext";

export default function RateTable() {
    const { t } = useLanguage();

    const rates = [
        { typeKey: "rateExecSedan", base: "$75+", affiliateKey: "rateAffDiscounted", commission: "10%", notesKey: "rateNoteStd" },
        { typeKey: "rateLuxSUV", base: "$95+", affiliateKey: "rateAffDiscounted", commission: "10%", notesKey: "rateNoteStd" },
        { typeKey: "rateStretchLimo", base: "$145+", affiliateKey: "rateAffDiscounted", commission: "12%", notesKey: "rateNoteEvent" },
        { typeKey: "rateSprinter", base: "$130+", affiliateKey: "rateAffDiscounted", commission: "12%", notesKey: "rateNoteGroup" },
        { typeKey: "rateMiniBus", base: "$180+", affiliateKey: "rateAffDiscounted", commission: "12%", notesKey: "rateNoteGroup" },
        { typeKey: "ratePartyBus", base: "$250+/hr", affiliateKey: "rateAffDiscounted", commission: "10%", notesKey: "rateNoteEnt" },
        { typeKey: "rateMotorCoach", base: "$295+", affiliateKey: "rateAffDiscounted", commission: "10%", notesKey: "rateNoteLarge" },
        { typeKey: "rateVol20", base: "Any", affiliateKey: "—", commission: "+2% bonus", notesKey: "rateNoteStack" },
        { typeKey: "rateVol50", base: "Any", affiliateKey: "—", commission: "+5% bonus", notesKey: "rateNoteStack" }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden text-left">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6" data-i18n="rateSheetTitle">
                        {t("rateSheetTitle")}
                    </h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs" data-i18n="rateSheetDesc">
                        {t("rateSheetDesc")}
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="overflow-x-auto rounded-[30px] shadow-2xl border border-navy/5">
                        <table className="w-full text-left border-collapse bg-white">
                            <thead>
                                <tr className="bg-navy text-white uppercase text-[10px] font-black tracking-widest">
                                    <th className="px-8 py-6" data-i18n="rateTableVehicle">{t("rateTableVehicle")}</th>
                                    <th className="px-8 py-6" data-i18n="rateTableBase">{t("rateTableBase")}</th>
                                    <th className="px-8 py-6" data-i18n="rateTablePrice">{t("rateTablePrice")}</th>
                                    <th className="px-8 py-6" data-i18n="rateTableComm">{t("rateTableComm")}</th>
                                    <th className="px-8 py-6" data-i18n="rateTableNotes">{t("rateTableNotes")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rates.map((rate, idx) => (
                                    <tr
                                        key={idx}
                                        className={`group hover:bg-secondary/30 transition-colors border-b border-navy/5 ${rate.typeKey.includes('rateVol') ? 'bg-gold/5 font-bold' : ''
                                            }`}
                                    >
                                        <td className="px-8 py-6 text-navy font-bold text-sm" data-i18n={rate.typeKey}>{t(rate.typeKey)}</td>
                                        <td className="px-8 py-6 text-gray-500 text-sm">{rate.base}</td>
                                        <td className="px-8 py-6">
                                            {rate.affiliateKey !== "—" ? (
                                                <span className="text-green-600 font-bold text-xs uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full" data-i18n={rate.affiliateKey}>
                                                    {t(rate.affiliateKey)}
                                                </span>
                                            ) : (
                                                <span className="text-gray-400">—</span>
                                            )}
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="text-gold font-bold text-sm bg-gold/10 px-4 py-2 rounded-full inline-block">
                                                {rate.commission}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-gray-400 text-xs italic" data-i18n={rate.notesKey}>{t(rate.notesKey)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-8 text-center text-gray-400 font-bold uppercase tracking-widest text-[10px]" data-i18n="rateTableFooter">
                        {t("rateTableFooter")}
                    </p>
                </div>
            </div>
        </section>
    );
}

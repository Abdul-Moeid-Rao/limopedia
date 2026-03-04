"use client";

import { Star, Link as LinkIcon } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function Reviews() {
    const { t } = useLanguage();

    const reviews = [
        {
            name: "Carlos M.",
            locationKey: "cityMiami",
            textKey: "reviewText1",
            dateKey: "reviewDate2Weeks",
        },
        {
            name: "Sarah K.",
            locationKey: "reviewLocationCorp",
            textKey: "reviewText2",
            dateKey: "reviewDate1Month",
        },
        {
            name: "Jennifer R.",
            locationKey: "cityPalmBeach",
            textKey: "reviewText3",
            dateKey: "reviewDate3Days",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-4" data-i18n="reviewsTitle">
                        {t("reviewsTitle")}
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={24} className="fill-gold text-gold" />
                        ))}
                        <span className="text-2xl font-bold text-navy ml-2">4.9 / 5.0</span>
                    </div>
                    <p className="text-gray-500 font-medium italic" data-i18n="reviewsRatingDesc">
                        {t("reviewsRatingDesc")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm relative group hover:bg-white hover:shadow-xl transition-all duration-300 text-left">
                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} size={16} className="fill-gold text-gold" />
                                ))}
                            </div>
                            <blockquote className="text-lg text-navy font-medium mb-8 italic">
                                "<span data-i18n={review.textKey}>{t(review.textKey)}</span>"
                            </blockquote>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                <div>
                                    <div className="font-bold text-navy">{review.name}</div>
                                    <div className="text-sm text-gray-500" data-i18n={review.locationKey}>{t(review.locationKey)}</div>
                                </div>
                                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm text-xs font-bold text-gray-700">
                                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                                    Google
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="text-gold font-bold text-lg hover:underline underline-offset-8 decoration-2 flex items-center gap-2 mx-auto" data-i18n="reviewReadAll">
                        {t("reviewReadAll")} <LinkIcon size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}

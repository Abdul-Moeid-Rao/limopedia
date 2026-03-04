"use client";

import { Plane, Car } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function ServiceCities() {
    const { t } = useLanguage();

    const cities = [
        { key: "cityMiami", name: "Miami" },
        { key: "cityFortLauderdale", name: "Fort Lauderdale" },
        { key: "cityBocaRaton", name: "Boca Raton" },
        { key: "cityPalmBeach", name: "Palm Beach" },
        { key: "cityOrlando", name: "Orlando" },
        { key: "cityTampa", name: "Tampa" },
        { key: "cityNaples", name: "Naples" },
        { key: "cityFloridaKeys", name: "Florida Keys" },
        { key: "cityChicago", name: "Chicago" },
        { key: "cityNewYork", name: "New York" }
    ];

    return (
        <section id="cities" className="py-24 bg-[#F1F5F9]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-4" data-i18n="citiesTitle">
                        {t("citiesTitle")}
                    </h2>
                    <div className="h-1 w-24 bg-gold mx-auto" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {cities.map((city) => (
                        <Link
                            key={city.key}
                            href={`/cities/${city.name.toLowerCase().replace(/ /g, "-")}`}
                            className="group bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center justify-center gap-3 transition-all hover:border-gold hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                                {city.name === "Miami" ? <Plane size={20} className="text-primary group-hover:text-white" /> : <Car size={20} className="text-primary group-hover:text-white" />}
                            </div>
                            <span className="font-bold text-navy group-hover:text-gold transition-colors" data-i18n={city.key}>
                                {t(city.key)}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

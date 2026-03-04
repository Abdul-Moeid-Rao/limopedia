"use client";

import { Users as UserIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function FleetPreview() {
    const { t } = useLanguage();

    const fleet = [
        {
            nameKey: "fleetExecutiveSedan",
            capacityKey: "fleetCapacity1to3",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80",
        },
        {
            nameKey: "fleetLuxurySUV",
            capacityKey: "fleetCapacity1to6",
            image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
        },
        {
            nameKey: "fleetMercedesSprinter",
            capacityKey: "fleetCapacityUpTo14",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80",
        },
    ];

    return (
        <section id="fleet" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-4" data-i18n="fleetTitle">
                        {t("fleetTitle")}
                    </h2>
                    <div className="h-1 w-24 bg-gold mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {fleet.map((vehicle) => (
                        <div key={vehicle.nameKey} className="group bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 transition-all hover:shadow-2xl">
                            <div className="relative h-64 w-full overflow-hidden">
                                <img
                                    src={vehicle.image}
                                    alt={t(vehicle.nameKey)}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-navy/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                                        <UserIcon size={14} className="text-gold" />
                                        <span data-i18n={vehicle.capacityKey}>{t(vehicle.capacityKey)}</span>
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-playfair font-bold text-navy mb-6" data-i18n={vehicle.nameKey}>
                                    {t(vehicle.nameKey)}
                                </h3>
                                <button className="btn-gold w-full flex items-center justify-center gap-2" data-i18n="fleetBookThis">
                                    {t("fleetBookThis")}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/fleet"
                        className="inline-flex items-center gap-2 text-gold font-bold text-lg hover:gap-4 transition-all"
                    >
                        <span data-i18n="fleetSeeAll">{t("fleetSeeAll")}</span> <ArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
}

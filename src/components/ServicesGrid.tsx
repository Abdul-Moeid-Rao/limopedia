"use client";

import { Plane, Building, Heart, AppWindow, Users, Map } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function ServicesGrid() {
    const { t } = useLanguage();

    const services = [
        {
            titleKey: "serviceAirport",
            descKey: "serviceAirportDesc",
            icon: Plane,
            href: "/services/airport-transfers"
        },
        {
            titleKey: "serviceCorporate",
            descKey: "serviceCorporateDesc",
            icon: Building,
            href: "/services/corporate"
        },
        {
            titleKey: "serviceEvents",
            descKey: "serviceEventsDesc",
            icon: Heart,
            href: "/services/events-weddings"
        },
        {
            titleKey: "serviceHourly",
            descKey: "serviceHourlyDesc",
            icon: AppWindow,
            href: "/services/hourly-hire"
        },
        {
            titleKey: "serviceGroup",
            descKey: "serviceGroupDesc",
            icon: Users,
            href: "/services/group-party-bus"
        },
        {
            titleKey: "serviceCity",
            descKey: "serviceCityDesc",
            icon: Map,
            href: "/services/city-tours"
        },
    ];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-4" data-i18n="servicesTitle">
                        {t("servicesTitle")}
                    </h2>
                    <div className="h-1 w-24 bg-gold mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.titleKey}
                            className="group bg-white p-8 rounded-xl shadow-soft border-t-4 border-gold transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                <service.icon className="text-gold group-hover:text-white" size={32} />
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-navy mb-3" data-i18n={service.titleKey}>
                                {t(service.titleKey)}
                            </h3>
                            <p className="text-gray-600 mb-6 font-medium" data-i18n={service.descKey}>
                                {t(service.descKey)}
                            </p>
                            <Link
                                href={service.href}
                                className="inline-flex items-center gap-2 text-gold font-bold hover:gap-3 transition-all"
                            >
                                <span data-i18n="bookLink">{t("bookLink")}</span> <span className="text-xl">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

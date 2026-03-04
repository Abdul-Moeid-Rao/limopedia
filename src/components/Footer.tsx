"use client";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { Facebook, Instagram, Linkedin, Star, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-navy pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
                    {/* Col 1: Logo & Social */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="text-3xl font-playfair font-bold text-white mb-6 block">
                            Limopedia
                        </Link>
                        <p className="text-gray-400 mb-8 leading-relaxed italic" data-i18n="footerQuote">
                            {t("footerQuote")}
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin, Star].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Col 2: Services */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase text-sm tracking-widest" data-i18n="footerServices">{t("footerServices")}</h4>
                        <ul className="space-y-4">
                            {[
                                { key: "serviceAirport", href: "/services/airport-transfers" },
                                { key: "serviceCorporate", href: "/services/corporate" },
                                { key: "serviceEvents", href: "/services/events-weddings" },
                                { key: "serviceHourly", href: "/services/hourly-hire" },
                                { key: "serviceGroup", href: "/services/group-party-bus" },
                                { key: "serviceCity", href: "/services/city-tours" }
                            ].map((item) => (
                                <li key={item.key}>
                                    <Link href={item.href} className="text-gray-400 hover:text-gold transition-colors" data-i18n={item.key}>{t(item.key)}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Cities */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase text-sm tracking-widest" data-i18n="footerCities">{t("footerCities")}</h4>
                        <ul className="space-y-4">
                            {[
                                { key: "cityMiami", href: "/cities/miami" },
                                { key: "cityFortLauderdale", href: "/cities/fort-lauderdale" },
                                { key: "cityBocaRaton", href: "/cities/boca-raton" },
                                { key: "cityPalmBeach", href: "/cities/palm-beach" },
                                { key: "cityOrlando", href: "/cities/orlando" },
                                { key: "cityTampa", href: "/cities/tampa" }
                            ].map((item) => (
                                <li key={item.key}>
                                    <Link href={item.href} className="text-gray-400 hover:text-gold transition-colors" data-i18n={item.key}>{t(item.key)}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Company */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase text-sm tracking-widest" data-i18n="footerCompany">{t("footerCompany")}</h4>
                        <ul className="space-y-4">
                            {[
                                { key: "companyAbout", href: "/about" },
                                { key: "companyFleet", href: "/fleet" },
                                { key: "companyReviews", href: "/reviews" },
                                { key: "companyAffiliate", href: "/affiliate" },
                                { key: "companyPricing", href: "/pricing" },
                                { key: "companyCyber", href: "/cyber-insurance" }
                            ].map((item) => (
                                <li key={item.key}>
                                    <Link href={item.href} className="text-gray-400 hover:text-gold transition-colors" data-i18n={item.key}>{t(item.key)}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 5: Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase text-sm tracking-widest" data-i18n="footerContact">{t("footerContact")}</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3">
                                <Phone className="text-gold shrink-0" size={20} />
                                <a href="tel:8883000069" className="text-gray-400 hover:text-white font-bold text-left">(888) 300-0069</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="text-gold shrink-0" size={20} />
                                <span className="text-gray-400 text-left">info@limopedia.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="text-gold shrink-0" size={20} />
                                <span className="text-gray-400 text-left" data-i18n="contactLocation">{t("contactLocation")}</span>
                            </li>
                            <li className="pt-2 flex justify-start">
                                <span className="bg-gold/10 text-gold px-4 py-2 rounded-full text-xs font-bold uppercase tracking-tighter" data-i18n="contactAvailable">
                                    {t("contactAvailable")}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                    <p data-i18n="footerRights">{t("footerRights")}</p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors" data-i18n="footerPrivacy">{t("footerPrivacy")}</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors" data-i18n="footerTerms">{t("footerTerms")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

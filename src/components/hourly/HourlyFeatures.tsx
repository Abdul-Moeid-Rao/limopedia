import React from 'react';
import { Route, MapPin, Target, Smartphone, Wallet, SplitSquareHorizontal } from "lucide-react";

export default function HourlyFeatures() {
    const features = [
        {
            icon: <MapPin size={32} />,
            title: "Unlimited Stops",
            description: "Go wherever the day takes you. There are no limits to the number of locations or stops within your booked timeframe."
        },
        {
            icon: <SplitSquareHorizontal size={32} />,
            title: "Wait On Site",
            description: "Your chauffeur will remain on-location while you attend meetings or dine, ready to depart the second you step outside."
        },
        {
            icon: <Target size={32} />,
            title: "Absolute Discretion",
            description: "Our chauffeurs are bound by strict non-disclosure agreements, ensuring complete privacy during sensitive business discussions."
        },
        {
            icon: <Route size={32} />,
            title: "Dynamic Routing",
            description: "Changed your mind? Just tell your chauffeur. Our advanced GPS systems instantly recalculate the fastest, safest routes."
        },
        {
            icon: <Smartphone size={32} />,
            title: "Direct Chauffeur Contact",
            description: "You'll receive direct contact information for your chauffeur, making coordination in busy areas completely effortless."
        },
        {
            icon: <Wallet size={32} />,
            title: "Transparent Billing",
            description: "Billed strictly by time, not distance or route. Enjoy predictable, straightforward pricing without surge fees or surprises."
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
                        The Luxury of Time
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed font-medium">
                        Hourly (As-Directed) service is the ultimate luxury in ground transportation.
                        It places a premium vehicle and professional chauffeur at your absolute disposal.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-10 rounded-[40px] shadow-sm border border-navy/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-navy mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import { Camera, Map, Headphones, Compass, Building2, Utensils } from "lucide-react";

export default function TourFeatures() {
    const features = [
        {
            icon: <Compass size={32} />,
            title: "Bespoke Itineraries",
            description: "No two tours are exactly alike. We craft your route based on your specific interests—whether that's art, history, or nightlife."
        },
        {
            icon: <Map size={32} />,
            title: "Local Expert Guides",
            description: "Your chauffeur is also a knowledgeable local concierge, providing insights and historical context you won't find in guidebooks."
        },
        {
            icon: <Camera size={32} />,
            title: "Photo Opportunities",
            description: "We know the best vantage points for skyline and sunset photos. We'll pause safely so you can capture the perfect shot."
        },
        {
            icon: <Building2 size={32} />,
            title: "Real Estate Scouting",
            description: "Looking to invest? We provide specialized neighborhood tours for prospective buyers exploring zip codes like Fisher Island or Palm Beach."
        },
        {
            icon: <Utensils size={32} />,
            title: "Culinary Highlights",
            description: "We can schedule strategic stops at renowned local eateries, from authentic Little Havana cafes to five-star waterfront dining."
        },
        {
            icon: <Headphones size={32} />,
            title: "Multilingual Service",
            description: "Upon request, we provide chauffeurs fluent in Spanish, Portuguese, French, and other languages to ensure seamless communication."
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
                        Beyond Just Driving
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed font-medium">
                        Our city tours provide an immersive VIP experience. Leave the navigation and parking to us while you soak in the culture.
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

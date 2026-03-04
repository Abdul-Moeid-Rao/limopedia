import React from 'react';
import { Sofa, MonitorPlay, ShieldCheck, Map, Wine, Bluetooth } from "lucide-react";

export default function GroupFeatures() {
    const features = [
        {
            icon: <Sofa size={32} />,
            title: "Captain's Chair Seating",
            description: "Genuine leather, ultra-plush seating provides individual comfort and ample legroom, unlike standard commuter shuttles."
        },
        {
            icon: <MonitorPlay size={32} />,
            title: "Entertainment Systems",
            description: "High-definition smart TVs with Apple TV integration allow you to display presentations or stream ambient media."
        },
        {
            icon: <Bluetooth size={32} />,
            title: "Premium Audio",
            description: "Control the atmosphere. Connect via Bluetooth to our surround-sound audio systems and curate your own playlist."
        },
        {
            icon: <Wine size={32} />,
            title: "Refreshment Centers",
            description: "Built-in ice chests and cup holders ensure your beverages remain chilled and secure while out on the road."
        },
        {
            icon: <Map size={32} />,
            title: "Multi-Location Logistics",
            description: "Our dispatchers handle the complexity of coordinating multiple pickups and drop-offs to keep the entire group on schedule."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "DOT Certified Operators",
            description: "Your safety is paramount. Every group transport vehicle is operated by a heavily vetted, DOT-certified professional chauffeur."
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">
                        An Upgraded Commute
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed font-medium">
                        Group travel doesn't have to mean compromising on quality.
                        Our Sprinters and Mini-Coaches offer the same high-tier amenities as our flagship sedans.
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

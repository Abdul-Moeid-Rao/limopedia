"use client";
import React from 'react';

const pricingRates = [
    { vehicle: "Executive Sedan", pax: "1–3", base: "$65", rate: "$3.50/mi", min: "$65" },
    { vehicle: "Luxury SUV", pax: "1–6", base: "$85", rate: "$4.25/mi", min: "$85" },
    { vehicle: "Stretch Limo (8 pax)", pax: "1–8", base: "$130", rate: "$6.50/mi", min: "$130" },
    { vehicle: "Stretch Limo (10 pax)", pax: "1–10", base: "$165", rate: "$7.50/mi", min: "$165" },
    { vehicle: "Mercedes Sprinter (14)", pax: "1–14", base: "$120", rate: "$5.50/mi", min: "$120" },
    { vehicle: "Mercedes Sprinter VIP (8)", pax: "1–8", base: "$160", rate: "$7.00/mi", min: "$160" },
    { vehicle: "Mini Bus (24)", pax: "1–24", base: "$175", rate: "$7.50/mi", min: "$175" },
    { vehicle: "Party Bus (30)", pax: "1–30", base: "$225/hr", rate: "Hourly only", min: "2 hrs min" },
    { vehicle: "Motor Coach (55)", pax: "1–55", base: "$285", rate: "$9.00/mi", min: "$285" }
];

export default function BaseRateTable() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-6">Base Rate Guide</h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                        Starting prices for standard routes. Enter your exact route above for a precise quote.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="overflow-hidden rounded-[30px] shadow-2xl border border-navy/5">
                        <table className="w-full text-left border-collapse bg-white">
                            <thead>
                                <tr className="bg-navy text-white uppercase text-[10px] font-black tracking-widest">
                                    <th className="px-8 py-6">Vehicle</th>
                                    <th className="px-8 py-6">Passengers</th>
                                    <th className="px-8 py-6">Starting Price</th>
                                    <th className="px-8 py-6">Per Mile Rate</th>
                                    <th className="px-8 py-6">Minimum</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricingRates.map((rate, idx) => (
                                    <tr
                                        key={idx}
                                        className={`group hover:bg-secondary/30 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                                            }`}
                                    >
                                        <td className="px-8 py-6 text-navy font-bold text-sm border-b border-navy/5">{rate.vehicle}</td>
                                        <td className="px-8 py-6 text-gray-500 text-sm border-b border-navy/5">{rate.pax}</td>
                                        <td className="px-8 py-6 border-b border-navy/5">
                                            <span className="text-gold font-bold text-sm bg-gold/10 px-4 py-2 rounded-full inline-block">
                                                {rate.base}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-gray-400 text-xs font-bold border-b border-navy/5">{rate.rate}</td>
                                        <td className="px-8 py-6 text-gray-400 text-xs italic border-b border-navy/5">{rate.min}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

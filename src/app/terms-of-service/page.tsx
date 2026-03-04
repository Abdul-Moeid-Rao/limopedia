import React from 'react';

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-sm border border-navy/5">
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 mb-6 bg-navy text-white px-4 py-1.5 rounded-full">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">Limopedia Legal</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-4">Terms of Service</h1>
                        <p className="text-gray-500 font-medium">Last Updated: March 2026</p>
                        <div className="h-px w-full bg-navy/10 mt-8" />
                    </div>

                    <div className="space-y-8 text-gray-600 leading-relaxed max-w-none prose prose-lg prose-headings:font-playfair prose-headings:text-navy prose-h2:text-3xl prose-h2:font-bold prose-h3:text-xl prose-h3:font-bold prose-a:text-gold prose-a:no-underline">

                        <p>Welcome to Limopedia. By booking a reservation, creating a corporate account, or utilizing our ground transportation services, you ("Client," "Passenger," or "You") agree to be bound by the following Terms of Service ("Agreement").</p>

                        <h2 className="text-3xl font-playfair font-bold text-navy mt-12 mb-4">1. Reservations & Quotations</h2>
                        <p>All quotes provided by Limopedia—whether via the website widget, email, or phone—are estimates based on the information provided at the time of inquiry. Final charges are determined upon trip completion and may include additional costs incurred during service, such as extra stops, extended wait times, tolls, parking, or cleaning fees.</p>

                        <h2 className="text-3xl font-playfair font-bold text-navy mt-12 mb-4">2. Cancellation Policy</h2>
                        <p>To provide flawless service and guarantee vehicle availability, Limopedia enforces strict cancellation parameters:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Sedans & SUVs:</strong> Cancellations must be made at least four (4) hours prior to the scheduled pickup time to avoid a late cancellation charge equivalent to the full base rate.</li>
                            <li><strong>Sprinters, Vans & Mini-Coaches:</strong> Cancellations must be made at least forty-eight (48) hours prior to the scheduled pickup time.</li>
                            <li><strong>No-Shows:</strong> If a passenger fails to appear at the designated pickup location without notifying our dispatch center, the full trip total (including gratuity) will be charged to the card on file.</li>
                        </ul>

                        <h2 className="text-3xl font-playfair font-bold text-navy mt-12 mb-4">3. Grace Periods & Wait Times</h2>
                        <p>Limopedia includes complimentary wait times to buffer your travel schedule:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Commercial Airports (Domestic Arrivals):</strong> 30 minutes of free wait time from the official landed time.</li>
                            <li><strong>Commercial Airports (International Arrivals):</strong> 60 minutes of free wait time from the official landed time.</li>
                            <li><strong>FBOs & Point-to-Point Transfers:</strong> 15 minutes of free wait time from the scheduled pickup time.</li>
                        </ul>
                        <p>Wait time beyond the complimentary period is billed in 15-minute increments at the vehicle's standard hourly rate.</p>

                        <h2 className="text-3xl font-playfair font-bold text-navy mt-12 mb-4">4. Passenger Conduct & Vehicle Damage</h2>
                        <p>Limopedia maintains a strictly smoke-free and vapor-free environment in all vehicles. Passengers are responsible for the condition of the vehicle interior during the charter duration. In the event of extraordinary cleaning being required (e.g., spills, sickness), a minimum $250 cleaning and detail fee will be assessed. The chauffeur retains the absolute right to terminate the trip without refund if passengers display highly unsafe, illegal, or abusive behavior.</p>

                        <h2 className="text-3xl font-playfair font-bold text-navy mt-12 mb-4">5. Liability Limitations</h2>
                        <p>Limopedia is not liable for circumstances beyond our absolute control, including severe weather, acts of God, unexpected road closures, or delays caused by law enforcement/traffic incidents. While we take every precaution to ensure on-time service, we do not guarantee exact arrival times under extreme scenarios. Limopedia is not responsible for personal items left in the vehicle, though our lost-and-found team will make every effort to recover and return reported items.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

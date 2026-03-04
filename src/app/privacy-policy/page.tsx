import React from 'react';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-sm border border-navy/5">
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 mb-6 bg-navy text-white px-4 py-1.5 rounded-full">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">Limopedia Legal</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-navy mb-4">Privacy Policy</h1>
                        <p className="text-gray-500 font-medium">Last Updated: March 2026</p>
                        <div className="h-px w-full bg-navy/10 mt-8" />
                    </div>

                    <div className="space-y-8 text-gray-600 leading-relaxed max-w-none prose prose-lg prose-headings:font-playfair prose-headings:text-navy prose-h2:text-3xl prose-h2:font-bold prose-h3:text-xl prose-h3:font-bold prose-a:text-gold prose-a:no-underline">

                        <p>At Limopedia ("we," "our," or "us"), your privacy and security are our highest priorities. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website, mobile application, and chauffeured transportation services (collectively, the "Services").</p>

                        <h2 className="text-3xl font-playfair font-bold text-navy mt-12 mb-4">1. Information We Collect</h2>
                        <h3 className="text-xl font-playfair font-bold text-navy mb-2">A. Information You Provide to Us</h3>
                        <p>We collect information you voluntarily provide, including but not limited to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Identity Data:</strong> Name, organization, title.</li>
                            <li><strong>Contact Data:</strong> Email address, phone numbers, billing address, and pickup/drop-off locations.</li>
                            <li><strong>Financial Data:</strong> Payment card details (processed securely via PCI-compliant third-party gateways like Stripe).</li>
                            <li><strong>Booking Data:</strong> Flight numbers, special requests, and passenger details.</li>
                        </ul>

                        <h2 className="text-3xl font-playfair font-bold text-navy mt-12 mb-4">2. How We Use Your Information</h2>
                        <p>Limopedia uses the collected data strictly for operational and service-enhancing purposes:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>To execute transportation services precisely (dispatching chauffeurs, tracking flights).</li>
                            <li>To process secure payments and issue corporate invoices.</li>
                            <li>To communicate vital service updates (e.g., chauffeur arrival notifications via SMS).</li>
                            <li>To maintain corporate account profiles for streamlined future bookings.</li>
                        </ul>

                        <h2 className="text-3xl font-playfair font-bold text-navy mt-12 mb-4">3. Data Security & Storage</h2>
                        <p>We employ industry-leading, enterprise-grade security measures to protect your data. All sensitive communications between your browser and our servers are encrypted via TLS/SSL. Payment information is fully tokenized; Limopedia does not store raw credit card numbers on our servers. As detailed on our Cyber Insurance page, we comply with strict corporate risk management standards.</p>

                        <h2 className="text-3xl font-playfair font-bold text-navy mt-12 mb-4">4. Third-Party Sharing</h2>
                        <p>Limopedia does <strong>not</strong> sell, rent, or trade your personal information. We only share necessary data with trusted partners (such as affiliated global chauffeur networks, payment gateways, and flight tracking APIs) strictly to facilitate your booked service. All partners are bound by strict confidentiality agreements.</p>

                        <h2 className="text-3xl font-playfair font-bold text-navy mt-12 mb-4">5. Contacting the Privacy Team</h2>
                        <p>If you have questions about this policy or wish to execute your data deletion rights under CCPA or GDPR, please contact our Compliance Officer:</p>
                        <ul className="list-none space-y-2 mt-4">
                            <li><strong>Email:</strong> privacy@limopedia.com</li>
                            <li><strong>Phone:</strong> (888) 300-0069</li>
                            <li><strong>Mail:</strong> Compliance Dept, Limopedia Headquarters, South Florida.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}


import Hero from "@/components/Hero";
import BookingWidget from "@/components/BookingWidget";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import FleetPreview from "@/components/FleetPreview";
import ServiceCities from "@/components/ServiceCities";
import Reviews from "@/components/Reviews";
import AppDownload from "@/components/AppDownload";
import FinalCTA from "@/components/FinalCTA";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
    return (
        <main className="relative min-h-screen">

            <Hero />
            <div className="container mx-auto px-4 -mt-8 md:-mt-16 relative z-20">
                <BookingWidget />
            </div>
            <ServicesGrid />
            <WhyUs />
            <FleetPreview />
            <ServiceCities />
            <Reviews />
            <AppDownload />
            <FinalCTA />
            <MobileStickyBar />
        </main>
    );
}

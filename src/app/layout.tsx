import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
});

export const metadata = {
    title: "Limopedia | Luxury Transportation South Florida",
    description: "Arrive in Style. Leave an Impression. Premium chauffeured transportation in Miami, Fort Lauderdale, Palm Beach and beyond.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${dmSans.variable}`} suppressHydrationWarning>
            <body className="font-sans bg-background text-navy antialiased pt-20">
                <LanguageProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
}

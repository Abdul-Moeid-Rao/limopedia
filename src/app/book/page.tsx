"use client";

import { useState } from "react";
import ProgressBar from "@/components/booking/ProgressBar";
import Step1TripDetails from "@/components/booking/Step1TripDetails";
import Step2ChooseVehicle from "@/components/booking/Step2ChooseVehicle";
import Step3PassengerInfo from "@/components/booking/Step3PassengerInfo";
import Step4Payment from "@/components/booking/Step4Payment";
import Step5Confirmation from "@/components/booking/Step5Confirmation";

export default function BookingPage() {
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        trip: null,
        vehicle: null,
        passenger: null,
        payment: null
    });

    const nextStep = (data: any) => {
        const fieldMap = ["trip", "vehicle", "passenger", "payment"];
        setBookingData(prev => ({ ...prev, [fieldMap[step - 1]]: data }));
        setStep(prev => prev + 1);
        window.scrollTo(0, 0);
    };

    return (
        <main className="min-h-screen bg-[#F8FAFC]">
            {step < 5 && <ProgressBar currentStep={step} />}

            <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
                {step === 1 && <Step1TripDetails onNext={nextStep} />}
                {step === 2 && <Step2ChooseVehicle onNext={nextStep} />}
                {step === 3 && <Step3PassengerInfo onNext={nextStep} />}
                {step === 4 && <Step4Payment onNext={nextStep} bookingData={bookingData} />}
                {step === 5 && <Step5Confirmation />}
            </div>
        </main>
    );
}

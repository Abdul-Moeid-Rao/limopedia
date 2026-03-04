"use client";
import React, { useState } from 'react';
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";

export default function LoginPage() {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

    return (
        <AuthLayout>
            {/* Tab Switcher */}
            <div className="flex bg-gray-50 p-1.5 rounded-[22px] mb-12 border border-gray-100">
                <button
                    onClick={() => setActiveTab('login')}
                    className={`flex-1 h-14 rounded-[18px] text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'login' ? 'bg-white shadow-lg text-gold' : 'text-gray-400 hover:text-navy'
                        }`}
                >
                    Log In
                </button>
                <button
                    onClick={() => setActiveTab('register')}
                    className={`flex-1 h-14 rounded-[18px] text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'register' ? 'bg-white shadow-lg text-gold' : 'text-gray-400 hover:text-navy'
                        }`}
                >
                    Create Account
                </button>
            </div>

            {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}

            <div className="mt-12 text-center">
                {activeTab === 'login' ? (
                    <p className="text-sm font-bold text-navy">
                        Don&apos;t have an account?
                        <button onClick={() => setActiveTab('register')} className="text-gold ml-2 hover:underline">Create one &rarr;</button>
                    </p>
                ) : (
                    <p className="text-sm font-bold text-navy">
                        Already have an account?
                        <button onClick={() => setActiveTab('login')} className="text-gold ml-2 hover:underline">Log in &rarr;</button>
                    </p>
                )}
            </div>
        </AuthLayout>
    );
}

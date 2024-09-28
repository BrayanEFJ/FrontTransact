import React, { forwardRef } from 'react';
import { Wallet, Shield, ChartBar } from 'lucide-react';

const DigitalWalletSection = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="flex w-full justify-center items-center min-h-screen max-sm:py-10 bg-gradient-to-b from-[#403d39] to-[#bbb5aa] text-white">
            <div className='flex flex-col w-full max-w-7xl max-xl:mx-10'>
                <div className='max-w-[750px] flex flex-col mb-10'>
                    <span>Your money, under total control.</span>
                    <span className='text-5xl font-bold mt-3'>Empowering your finances</span>
                    <span className='mt-5'>
                        Our innovative digital wallet is designed to give you complete control over your personal finances. Whether managing your day-to-day expenses or planning for the future, we offer a secure, flexible and easy-to-use platform tailored to your financial needs and goals.
                    </span>
                </div>
                <div className='w-full flex flex-wrap'>
                    {[
                        { icon: Wallet, title: "Transparency and simplicity", description: "An intuitive experience that makes it easy to manage your money, without unnecessary complications." },
                        { icon: ChartBar, title: "Flexible growth", description: "Our platform adapts to your financial evolution, offering you what you need to keep moving forward." },
                        { icon: Shield, title: "Security and trust", description: "With the best encryption technology, your transactions are protected to guarantee your peace of mind." }
                    ].map((item, index) => (
                        <div key={index} className='w-full md:w-[calc(33.333%-1rem)] flex flex-col p-5'>
                            <item.icon className="h-10 w-10" />
                            <span className='text-2xl font-bold mt-3'>{item.title}</span>
                            <span className='mt-3'>{item.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default DigitalWalletSection;
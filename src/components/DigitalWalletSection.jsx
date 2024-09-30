import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next'; // Importar el hook de traducción
import { Wallet, Shield, ChartBar } from 'lucide-react';

const DigitalWalletSection = forwardRef((props, ref) => {
    const { t } = useTranslation(); // Obtener la función t para traducir

    return (
        <div ref={ref} className="flex w-full justify-center items-center min-h-[70vh] max-sm:py-10 bg-gradient-to-b from-[#494641] to-[#bbb5aa] text-white">
            <div className='flex flex-col w-full max-w-7xl mx-10'>
                <div className='max-w-[750px] flex flex-col mb-10'>
                    <span>{t('wallet_heading1')}</span> {/* Traducción */}
                    <span className='text-5xl font-bold mt-3'>{t('wallet_heading2')}</span> {/* Traducción */}
                    <span className='mt-5'>{t('wallet_description')}</span> {/* Traducción */}
                </div>
                <div className='w-full flex flex-wrap'>
                    {[
                        { icon: Wallet, title: t('wallet_feature1_title'), description: t('wallet_feature1_description') }, // Traducción
                        { icon: ChartBar, title: t('wallet_feature2_title'), description: t('wallet_feature2_description') }, // Traducción
                        { icon: Shield, title: t('wallet_feature3_title'), description: t('wallet_feature3_description') } // Traducción
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

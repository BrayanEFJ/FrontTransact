import React from 'react';
import { useTranslation } from 'react-i18next';

const InfoSection = () => {
    const { t } = useTranslation();
    return (

        <div className="flex w-full justify-center items-center  max-sm:py-10 bg-black  text-white">
            <div className='flex flex-col w-full max-w-7xl mx-10'>


                <div className='flex flex-wrap  items-center w-full'>
                    <div className="w-full md:w-[calc(50%-1rem)] flex flex-col mb-10 md:mb-0">
                        <span>{t('trusted')}</span>
                        <span className="text-5xl font-bold mt-3">
                            {t('financial_services')}
                        </span>
                    </div>
                    <div className="w-full md:w-[calc(50%-1rem)] flex items-start">
                        <span className="text-lg">
                            {t('get_to_know_us')}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
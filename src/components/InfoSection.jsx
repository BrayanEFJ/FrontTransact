import React from 'react';
import { useTranslation } from 'react-i18next';

const InfoSection = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className='flex flex-col items-center justify-center w-full bg-black text-white px-10'>
                <div className="flex flex-wrap max-w-7xl justify-center items-center w-full max-xl:py-8">
                    <div className="flex max-md:w-auto w-1/2">
                        <div className="flex flex-col">
                            {t('trusted')}
                            <span className="text-5xl font-bold">
                                {t('financial_services')}
                            </span>
                        </div>
                    </div>
                    <div className="flex max-md:w-auto w-1/2 items-center justify-center">
                        <span className="max-lg:max-w-80">
                            {t('get_to_know_us')}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoSection;

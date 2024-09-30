import React, { forwardRef } from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactSection = forwardRef((props, ref) => {
    const { t } = useTranslation();

    return (
        <div ref={ref} className="flex w-full justify-center items-center max-sm:min-h-screen py-20 bg-gradient-to-b from-[#bbb5aa] to-[#fffcf2] text-black ">
            <div className='flex flex-col w-full max-w-7xl mx-10'>
                <div className='max-w-[750px] flex flex-col mb-10'>
                    <span>{t('contact')}</span>
                    <span className='text-5xl font-bold mt-3'>{t('contact_us')}</span>
                    <span className='mt-5'>{t('help_message')}</span>
                </div>
                <div className='w-full flex flex-wrap'>
                    {[
                        { icon: Mail, title: t('email'), description: t('email_description'), info: "brayanfigueroajerez@gmail.com", href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" },
                        { icon: Linkedin, title: t('linkedin'), description: t('linkedin_description'), info: "www.linkedin.com/in/brayan-figueroa-8078581aa", href: "https://www.linkedin.com/in/brayan-figueroa-8078581aa/" },
                        { icon: MapPin, title: t('location'), description: t('location_description'), info: "Bucaramanga, Santander, Colombia" }
                    ].map((item, index) => (
                        <div key={index} className='w-full md:w-[calc(33.333%-1rem)] flex flex-col p-5'>
                            <item.icon className="h-10 w-10" />
                            <span className='text-2xl font-bold mt-3'>{item.title}</span>
                            <span className='mt-3'>{item.description}</span>
                            <a href={item.href} className='mt-3 text-blue-500'>{item.info}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default ContactSection;

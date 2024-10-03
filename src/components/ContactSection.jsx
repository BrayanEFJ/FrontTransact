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
                        { icon: MapPin, title: t('location'), description: t('location_description'), info: "Bucaramanga, Santander, Colombia", href:"https://www.google.com/maps/place/Bucaramanga,+Santander/@7.1184646,-73.1741777,13z/data=!3m1!4b1!4m6!3m5!1s0x8e68157af751c0ed:0x75a0e4551148c36c!8m2!3d7.119349!4d-73.1227416!16zL20vMDM3eXNj?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D*"}
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

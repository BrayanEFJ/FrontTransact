import React, { forwardRef } from 'react';
import { Mail, Phone,Linkedin, MapPin } from 'lucide-react';


const ContactSection = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="flex w-full justify-center items-center max-sm:min-h-screen py-20 bg-gradient-to-b from-[#bbb5aa] to-[#fffcf2] text-black ">
            <div className='flex flex-col w-full max-w-7xl max-xl:mx-10'>
                <div className='max-w-[750px] flex flex-col mb-10'>
                    <span>Contact</span>
                    <span className='text-5xl font-bold mt-3'>Contact Us</span>
                    <span className='mt-5'>We are here to help you</span>
                </div>
                <div className='w-full flex flex-wrap'>
                    {[
                        { icon: Mail, title: "Email", description: "Email us for more information.", info: "brayanfigueroajerez@gmail.com" , href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"},
                        { icon: Linkedin, title: "Linkedin", description: "Write to me for more information.", info: "www.linkedin.com/in/brayan-figueroa-8078581aa", href: "https://www.linkedin.com/in/brayan-figueroa-8078581aa/" },
                        { icon: MapPin, title: "Location", description: "Anywhere in the world or in", info: "Bucaramanga,Santader,Colombia" }
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
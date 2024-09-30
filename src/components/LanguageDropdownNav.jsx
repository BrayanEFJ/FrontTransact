import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next'; 
import { Languages } from 'lucide-react'; 

const LanguageDropdown = () => {
    const { i18n, t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <span
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
            >
                <Languages className="mr-2" />
                {t('language')}
            </span>
            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                    <div className="py-1">
                        <span
                            className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                            onClick={() => changeLanguage('en')}
                        >
                            {t('english')}
                        </span>
                        <span
                            className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                            onClick={() => changeLanguage('es')}
                        >
                            {t('spanish')}
                        </span>
                        <span
                            className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                            onClick={() => changeLanguage('fr')}
                        >
                            {t('french')}
                        </span>
                        <span
                            className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                            onClick={() => changeLanguage('hi')}
                        >
                            {t('hindi')}
                        </span>
                        <span
                            className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                            onClick={() => changeLanguage('zh')}
                        >
                            {t('mandarin')}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageDropdown;

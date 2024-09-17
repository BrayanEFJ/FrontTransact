import React, { useMemo } from 'react';

const ChoosecolorButton = ({ color, onClick }) => {
    const buttonStyle = useMemo(() => {
        const colorMap = {
            red: 'from-red-900 to-red-700',
            orange: 'from-orange-900 to-orange-700',
            blue: 'from-blue-900 to-blue-700',
            green: 'from-green-900 to-green-700'
        };

        return `w-10 h-10 rounded-full bg-gradient-to-r ${colorMap[color]} border-white cursor-pointer`;
    }, [color]);

    return (
        <div
            className={buttonStyle}
            onClick={onClick}
        ></div>
    );
}

export default ChoosecolorButton;
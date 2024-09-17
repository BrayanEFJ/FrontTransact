import React from 'react';

const ButtonNav = ({ text, onClick }) => {
  return (
    <span 
      className="text-lg relative group bg-transparent cursor-pointer inline-block"
      onClick={onClick}
    >
      {text}
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-linear-100"></span>
    </span>
  );
};

export default ButtonNav;

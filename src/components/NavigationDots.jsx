import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:p-4">
      {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="w-3 h-3 rounded-full bg-gray-400 m-2 transition-colors duration-200 ease-in-out hover:bg-color-palette-2"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;

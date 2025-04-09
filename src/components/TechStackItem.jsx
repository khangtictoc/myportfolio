import React from 'react';

const TechStackItem = ({ name, iconSrc, altText }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-primary/5 hover:-translate-y-1 w-[calc(50%-10px)]">
      <div className="h-16 w-16 flex items-center justify-center mb-2">
        <img src={iconSrc} alt={altText || name} className="max-h-full max-w-full object-contain" />
      </div>
      <p className="text-center">{name}</p>
    </div>
  );
};

export default TechStackItem; 
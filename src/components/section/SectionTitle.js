import React from "react";

const SectionTitle = ({ title, className, subtitle }) => {
  return (
    <div className="text-center mb-10 -mt-6">
      <h1 className={`relative inline-block text-3xl md:text-5xl font-bold p-2 ${className}`}>
        {title}
        
        <span className="absolute left-1/2 -bottom-2 w-72 h-1 
                 bg-gradient-to-r from-green-600 via-emerald-500 to-brown-200 
                 rounded -translate-x-1/2"></span>
      </h1>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-6">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;

import React from 'react';

const Card = ({ title, icon, value, increasePercentage, gradientColor }) => {
  return (
      <div className={`rounded-lg shadow-lg bg-gradient-to-br from-${gradientColor}-400 to-${gradientColor}-600 p-4`}>
        <div className="flex justify-between gap-2">
          <div>
            <p className="mb-0 text-sm font-medium text-purple-400">{title}</p>
          </div>
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800">
            {icon}
          </div>
        </div>
        <div className="flex items-center mt-3">
          <div>
            <h4 className="mb-0 text-2xl font-semibold text-purple-700">{value}</h4>
          </div>
          <div className="ml-auto text-sm font-medium text-purple-700">+{increasePercentage}%</div>
        </div>
      </div>
  );
};

export default Card;

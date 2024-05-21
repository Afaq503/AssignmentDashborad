import React from 'react';
import { IoMdArrowUp } from 'react-icons/io';

const Card1 = ({value, increasePercentage, iconSrc, countryName }) => {
  return (
     
      <div className="flex flex-row justify-between mt-3">
        <div className="">
          <img src={iconSrc} alt={countryName} width="35" />
        </div>
        <div className="flex-grow-1 ml-3">
          <h5 className="mb-0">{value}</h5>
          <p className="mb-0 text-secondary">{countryName}</p>
        </div>
        <div>
          <p className="mb-0 text-success flex gap-1 items-center fw-500">
            <span>{increasePercentage}%</span>
            <IoMdArrowUp className="ml-1" />
          </p>
        </div>
      </div>
  );
};

export default Card1;

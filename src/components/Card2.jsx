import React from 'react';
import { BsArrowUp } from 'react-icons/bs';
import { IoWalletOutline } from 'react-icons/io5';

const Card2 = ({ amount, description, increasePercentage }) => {
  return (
    <div className="flex items-center justify-between gap-3 mb-3 px-4 py-3 rounded-lg bg-white shadow-md">
      <div className="flex items-center justify-center rounded-full bg-light-blue-500 text-black w-10 h-10">
        <IoWalletOutline className="text-2xl" />
      </div>
      <div className="flex-grow">
        <h6 className="mb-1 text-lg font-semibold">{amount}</h6>
        <p className="mb-0 text-sm text-gray-500">{description}</p>
      </div>
      <div>
        <p className="mb-0 flex items-center text-sm text-green-500">
          <BsArrowUp className="mr-1" />
          <span>{increasePercentage}</span>
        </p>
      </div>
    </div>
  );
};

export default Card2;

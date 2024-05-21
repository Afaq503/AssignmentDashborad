import React, { useState } from "react";
import { FaHome, FaCaretDown, FaCog, FaCaretUp } from "react-icons/fa";

const Breadcrumbs = ({ title, items }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between py-2" aria-label="breadcrumb">
     
      <ol className="flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <div className="ml-2 mr-2 border-r-2 border-gray-600 h-6"></div>}
            {index === 0 && (
              <div className="mr-2">
                <FaHome size={20} className="text-gray-600" />
              </div>
            )}
            {index > 0 && (
              <a href={item.url} className="text-gray-600 hover:text-gray-800">
                {item.text}
              </a>
            )}
          </li>
        ))}
      </ol>
      <div className="flex items-center">
        <div className="relative mr-4">
          <button
            onClick={toggleDropdown}
            className="text-gray-600 hover:text-gray-800 focus:outline-none flex items-center border border-gray-400 px-2 py-1 rounded-md"
          >
            {isDropdownOpen ? (
              <>
                <FaCaretUp size={16} className="mr-1" />
                <span className="mr-1">Settings</span>
              </>
            ) : (
              <>
                <FaCaretDown size={16} className="mr-1" />
                <span className="mr-1">Settings</span>
              </>
            )}
          </button>
          {isDropdownOpen && (
            <div className="absolute mt-10 py-2 w-48 bg-white rounded-md shadow-md z-10">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Preferences</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Help</a>
            </div>
          )}
        </div>
        <h2 className="text-gray-600 font-bold border-l-4 border-gray-600 pl-2 mb-2">{title}</h2>
      </div>
    </nav>
  );
};

export default Breadcrumbs;

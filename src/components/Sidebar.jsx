import React, { useState } from 'react';
import {
  FaHome, FaStore, FaCog, FaRegChartBar, FaUser, FaEdit,
  FaFileInvoice, FaMap, FaWrench, FaIcons, FaTable, FaLock,
  FaChevronLeft
} from 'react-icons/fa';

const Sidebar = ({ isOpen }) => {
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleSubmenu = (menu) => {
    setSubmenuOpen(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className={`flex flex-col ${isOpen ? 'w-64' : 'w-20'} h-full transition-width duration-300 overflow-y-auto bg-gray-800 text-white`}>
      <div className="flex items-center justify-center py-4">
        <img className='h-8 w-8' src="https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png" alt="Logo" />
        {isOpen && <h1 className="text-xl font-bold ml-2 text-purple-800">Fobia</h1>}
      </div>
      <div className="flex flex-col flex-grow overflow-y-auto">
        <div className="flex flex-col space-y-4 p-4">
          <NavItem icon={FaHome} label="Dashboard" isOpen={isOpen} />
          <NavItem icon={FaStore} label="Ecommerce" isOpen={isOpen} />
          <SectionTitle title="UI Elements" isOpen={isOpen} />
          <NavItem icon={FaWrench} label="Widgets" isOpen={isOpen} />
          <NavItem icon={FaCog} label="Components" isOpen={isOpen} onClick={() => toggleSubmenu('components')}>
            {isOpen && <FaChevronLeft className={`transform ${submenuOpen['components'] ? 'rotate-90' : ''}`} />}
          </NavItem>
          {submenuOpen['components'] && (
            <div className="ml-6 space-y-2">
              <NavItem icon={FaIcons} label="Icons" isOpen={isOpen} />
              <NavItem icon={FaEdit} label="Forms" isOpen={isOpen} />
              <NavItem icon={FaTable} label="Tables" isOpen={isOpen} />
            </div>
          )}
          <SectionTitle title="Forms and Tables" isOpen={isOpen} />
          <NavItem icon={FaEdit} label="Forms" isOpen={isOpen} />
          <NavItem icon={FaTable} label="Tables" isOpen={isOpen} />
          <SectionTitle title="Pages" isOpen={isOpen} />
          <NavItem icon={FaLock} label="Authentication" isOpen={isOpen} onClick={() => toggleSubmenu('Authentication')}>
            {isOpen && <FaChevronLeft className={`transform ${submenuOpen['Authentication'] ? 'rotate-90' : ''}`} />}
          </NavItem>
          {submenuOpen['Authentication'] && (
            <div className="ml-6 space-y-2">
              <NavItem icon={FaIcons} label="Icons" isOpen={isOpen} />
              <NavItem icon={FaEdit} label="Forms" isOpen={isOpen} />
              <NavItem icon={FaTable} label="Tables" isOpen={isOpen} />
            </div>
          )}
          <NavItem icon={FaUser} label="User Profile" isOpen={isOpen} />
          <NavItem icon={FaEdit} label="User Edit" isOpen={isOpen} />
          <NavItem icon={FaFileInvoice} label="Invoices" isOpen={isOpen} />
          <SectionTitle title="Charts and Maps" isOpen={isOpen} />
          <NavItem icon={FaRegChartBar} label="Charts" isOpen={isOpen} />
          <NavItem icon={FaMap} label="Maps" isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon: Icon, label, isOpen, children, onClick }) => (
  <a href="#" className="flex items-center justify-between space-x-2 py-2 px-4 rounded-md hover:bg-gray-700 transition-colors" onClick={onClick}>
    <div className="flex items-center space-x-2">
      <Icon size={20} className="transition-transform transform hover:scale-110" style={{ color: isOpen ? 'white' : 'rgba(255, 255, 255, 0.6)' }} />
      {isOpen && <span>{label}</span>}
    </div>
    {children}
  </a>
);

const SectionTitle = ({ title, isOpen }) => (
  <h3 className={`${isOpen ? 'block' : 'hidden'} text-gray-400`}>{title}</h3>
);

export default Sidebar;

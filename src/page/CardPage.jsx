import React from 'react';
import Card from '../components/Card';
import { FaChartBar, FaShoppingBag, FaUsers, FaWallet } from 'react-icons/fa';

function CardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
        <Card
          title="Total Revenue"
          icon={<FaWallet size={24} />}
          value="$92,854"
          increasePercentage="6.32"
          gradientColor="purple"
        />
        <Card
          title="Total Customers"
          icon={<FaUsers size={24} />}
          value="48,789"
          increasePercentage="12.45"
          gradientColor="blue"
        />
        <Card
          title="Total Orders"
          icon={<FaShoppingBag size={24} />}
          value="88,234"
          increasePercentage="3.12"
          gradientColor="red"
        />
        <Card
          title="Conversion Rate"
          icon={<FaChartBar size={24} />}
          value="48.76%"
          increasePercentage="8.52"
          gradientColor="green"
        />
      </div>
    </div>
  );
}

export default CardPage;

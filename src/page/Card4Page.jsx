import React from 'react';
import Chart from 'react-apexcharts';
import { FiGift, FiBriefcase, FiBook } from 'react-icons/fi';

// Reusable Chart Component
const CustomChart = ({ options, series, type }) => {
  return <Chart options={options} series={series} type={type} height={200} />;
};

// Customer Component
const Customer = ({ total, current, newCustomers, retargeted }) => {
  return (
    <div className="w-full lg:w-1/2 xl:w-1/2 p-4">
      <div className="card rounded-xl w-full shadow-md bg-white">
        <div className="card-body p-4">
          <h6 className="mb-3">Customers</h6>
          <div className="flex flex-row items-center gap-3">
            <div className="w-1/2">
              <div className="mb-4">
                <h2 className="mb-0">{total}</h2>
                <p className="mb-0">Total Customers</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="widget-icon-small rounded bg-purple-100 text-purple-600 p-2">
                  <FiGift size={24} />
                </div>
                <div>
                  <p className="mb-1">Current Customers</p>
                  <p className="mb-0 text-lg">{current}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="widget-icon-small rounded bg-blue-100 text-blue-600 p-2">
                  <FiBriefcase size={24} />
                </div>
                <div>
                  <p className="mb-1">New Customers</p>
                  <p className="mb-0 text-lg">{newCustomers}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="widget-icon-small rounded bg-orange-100 text-orange-600 p-2">
                  <FiBook size={24} />
                </div>
                <div>
                  <p className="mb-1">Retargeted Customers</p>
                  <p className="mb-0 text-lg">{retargeted}</p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <CustomChart
                options={{
                  chart: { width: 380, type: 'donut' },
                }}
                series={[44, 55, 41, 17, 15]}
                type="donut"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// SalesByCountry Component
const SalesByCountry = ({ countries }) => {
  return (
    <div className="w-full lg:w-1/2 xl:w-1/2 p-4">
      <div className="card rounded-xl w-full shadow-md bg-white">
        <div className="card-body p-4">
          <h6 className="mb-3">Sales By Country</h6>
          <div className="table-responsive">
            <table className="table table-borderless align-middle mb-0">
              <tbody>
                {countries.map((country, index) => (
                  <tr key={index}>
                    <td>
                      <div className="country-icon">
                        <img src={country.icon} alt={country.name} width="32" />
                      </div>
                    </td>
                    <td>
                      <div className="country-name h6 mb-0">{country.name}</div>
                    </td>
                    <td className="w-full">
                      <div className="progress flex-grow-1 h-1.5">
                        <div className={`progress-bar ${country.gradient} w-${country.progress}`}></div>
                      </div>
                    </td>
                    <td>
                      <div className="percent-data">{country.percent}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CustomChart
            options={{
              chart: { type: 'bar' },
              series: [{ name: 'Earnings', data: [31, 40, 28, 51, 42, 109, 100] }],
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
            }}
            series={[{ name: 'Earnings', data: [31, 40, 28, 51, 42, 109, 100] }]}
            type="bar"
          />
        </div>
      </div>
    </div>
  );
};

// Card4Page Component
const Card4Page = () => {
  const countries = [
    { name: 'USA', icon: 'https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png', gradient: 'bg-gradient-to-r from-purple-500 to-blue-500', progress: '7/12', percent: '70%' },
  ];

  return (
    <div className="flex flex-wrap">
      <Customer total={846} current={124} newCustomers={386} retargeted={425} />
      <SalesByCountry countries={countries} />
    </div>
  );
};

export default Card4Page;

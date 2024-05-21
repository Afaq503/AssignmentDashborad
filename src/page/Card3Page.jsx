import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  IoPeopleOutline,
  IoArrowDownOutline,
  IoEllipsisHorizontalOutline,
  IoPeopleCircleOutline,
  IoCardOutline,
  IoDiamondOutline,
} from "react-icons/io5";
import Chart from "react-apexcharts"; 
function Card3Page({ gradientColor }) {
  const chartOptions = {
    chart: {
      type: "area",
    },
    series: [
      {
        name: "Earnings",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
  };

  const radialChartOptions = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
    labels: ["Disk Space"],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-3 gap-6">
        <div
          className={`col-span-2 rounded-lg shadow-lg bg-gradient-to-br from-${gradientColor}-400 to-${gradientColor}-600 p-6`}
        >
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-medium text-black">Earning Reports</p>
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800">
              <BsThreeDots size={24} />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-black text-lg font-semibold mb-2 md:mb-0 md:mr-4">
              $856 <span className="ml-2 text-green-500">+10.6%</span>
              <p className="text-black mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit eum nemo et. Neque nulla delectus officiis
                voluptate voluptatem a.
              </p>
            </div>
            <div className="w-full">
              <Chart
                options={chartOptions}
                series={chartOptions.series}
                type="area"
                height={200}
              />
            </div>
          </div>
          <div className="flex flex-row  justify-between items-center border p-3 gap-3 mb-0 rounded-3">
            <div className="flex items-center gap-3">
              <div className="widget-icon rounded-full bg-light-success text-success">
                <IoCardOutline size={24} />
              </div>
              <div>
                <h4 className="mb-0">$95,286.50</h4>
                <p className="mb-0 text-secondary">Total Revenue</p>
              </div>
            </div>
            <div className="vr d-none lg:block"></div>
            <div className="flex items-center gap-3">
              <div className="widget-icon rounded-full bg-light-info text-info">
                <IoDiamondOutline size={24} />
              </div>
              <div>
                <h4 className="mb-0">$58,820</h4>
                <p className="mb-0 text-secondary">Total Profit</p>
              </div>
            </div>
            <div className="vr d-none lg:block"></div>
            <div className="flex items-center gap-3">
              <div className="widget-icon rounded-full bg-light-purple text-purple">
                <IoPeopleCircleOutline size={24} />
              </div>
              <div>
                <h4 className="mb-0">$26,498</h4>
                <p className="mb-0 text-secondary">Total Customer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-lg bg-white p-6">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-medium text-gray-800">Another Card</p>
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-800">
              <BsThreeDots size={24} />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="border shadow-none rounded-lg flex-grow mb-0">
              <div className="p-4 relative">
                <div className="flex items-start gap-2 mb-2">
                  <h5 className="mb-0 text-black">Total Accounts</h5>
                  <div className="ml-auto bg-info text-black rounded-full p-2">
                    <IoPeopleOutline size={24} />
                  </div>
                </div>
                <h3 className="mb-2 text-black">68,542</h3>
                <div className="flex items-center gap-2">
                  <div className="bg-light-danger text-danger p-2 rounded-full">
                    <IoArrowDownOutline size={24} />
                  </div>
                  <p className="mb-0 text-black">+9% last year</p>
                </div>
                <div id="chart4" className="min-h-[80px] mt-4">
                  <Chart
                    options={chartOptions}
                    series={chartOptions.series}
                    type="area"
                    height={80}
                  />
                </div>
              </div>
            </div>
            <div className="border shadow-none rounded-lg mb-0">
              <div className="p-4">
                <div className="flex items-start gap-2 mb-2">
                  <p className="mb-0 text-black">Disk Space</p>
                  <div className="ml-auto">
                    <div className="relative">
                      <button
                        className="dropdown-toggle text-gray-800"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <IoEllipsisHorizontalOutline size={24} />
                      </button>
                      <ul
                        className="absolute hidden text-gray-700 pt-1"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <a
                            className="bg-gray-200 text-black hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            className="bg-gray-200 text-black hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Another action
                          </a>
                        </li>
                        <li>
                          <a
                            className="bg-gray-200 text-black hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-3">
                  <div>
                    <h4 className="mb-3 text-black">48GB</h4>
                    <div className="flex items-center gap-2">
                      <div className="bg-light-danger text-danger p-2 rounded-full">
                        <IoArrowDownOutline size={24} />
                      </div>
                      <p className="mb-0 text-black">+7% last month</p>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="relative w-24 h-24">
                      <Chart
                        options={radialChartOptions}
                        series={[60]}
                        type="radialBar"
                        height={110}
                      />
                      <span className="absolute inset-0 text-black flex justify-center items-center text-lg font-bold">
                        60%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3Page;

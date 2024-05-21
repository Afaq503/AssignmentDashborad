import React from "react";
import Card1 from "../components/Card1";
import { BsThreeDots } from "react-icons/bs";
import { IoMdArrowUp } from "react-icons/io";
import Card2 from "../components/Card2";
import Chart from 'react-apexcharts';


const Card2Page = ({ gradientColor }) => {
  const dummyDataList = [
    {
      iconSrc:
        "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png",
      value: "$92,854",
      countryName: "United States",
      increasePercentage: "6.32",
    },
    {
      iconSrc:
        "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png",
      value: "$92,854",
      countryName: "United States",
      increasePercentage: "6.32",
    },
    {
      iconSrc:
        "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png",
      value: "$92,854",
      countryName: "United States",
      increasePercentage: "6.32",
    },
    {
      iconSrc:
        "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png",
      value: "$92,854",
      countryName: "United States",
      increasePercentage: "6.32",
    },
    {
      iconSrc:
        "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png",
      value: "$92,854",
      countryName: "United States",
      increasePercentage: "6.32",
    },
    {
      iconSrc:
        "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png",
      value: "$92,854",
      countryName: "United States",
      increasePercentage: "6.32",
    },
    {
      iconSrc:
        "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png",
      value: "$92,854",
      countryName: "United States",
      increasePercentage: "6.32",
    },
  ];
  const dummyListCard2 = [
    {
      amount: "$545.69",
      description: "Last Month Sales",
      increasePercentage: "35%",
    },
    {
      amount: "$545.69",
      description: "Last Month Sales",
      increasePercentage: "35%",
    },
    {
      amount: "$545.69",
      description: "Last Month Sales",
      increasePercentage: "35%",
    },
  ];
  const series = [{
    name: 'Sales',
    data: [30,65,100,70,50,10]
  }];
  const options = {
    chart: {
      height:20,
      type: 'area',
      zoom: {
        enabled: false
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    }
  };
  const series1 = [
    {
      name: 'Range',
      data: [
        {
          x: '2008',
          y: [2800, 4500]
        },
        {
          x: '2009',
          y: [3200, 4100]
        },
        {
          x: '2010',
          y: [2950, 7800]
        },
        {
          x: '2011',
          y: [3000, 4600]
        },
        {
          x: '2012',
          y: [3500, 4100]
        },
        {
          x: '2013',
          y: [4500, 6500]
        },
        {
          x: '2014',
          y: [4100, 5600]
        }
      ]
    },
  ];

  const options1 = {
    chart: {
      height: 350,
      type: 'rangeBar',
      zoom: {
        enabled: false
      }
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 3,
        dumbbellColors: [['#008FFB', '#00E396']]
      }
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: 'top',
      horizontalAlign: 'left',
      customLegendItems: ['Clicks', 'Views']
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'horizental',
        gradientToColors: ['#00E396'],
        inverseColors: true,
        stops: [0, 100]
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    xaxis: {
      tickPlacement: 'on'
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-3">
        <div
          className={`rounded-lg shadow-lg bg-gradient-to-br from-${gradientColor}-400 to-${gradientColor}-600 p-4`}
        >
          <div className="flex justify-between gap-2">
            <div>
              <p className="mb-0 text-sm font-medium text-purple-400">
                Sales by Countries
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800">
              <BsThreeDots size={24} />
            </div>
          </div>
          {dummyDataList.map((data, index) => (
            <Card1
              iconSrc={data.iconSrc}
              value={data.value}
              countryName={data.countryName}
              increasePercentage={data.increasePercentage}
            />
          ))}
        </div>
        <div
          className={`rounded-lg shadow-lg bg-gradient-to-br from-${gradientColor}-400 to-${gradientColor}-600 p-4`}
        >
          <div className="flex justify-between gap-2">
            <div>
              <p className="mb-0 text-sm font-medium text-purple-400">
                Total Earning
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800">
              <BsThreeDots size={24} />
            </div>
          </div>
          <div className=" flex justify-items-start">
            <h1>68%</h1>
            <IoMdArrowUp className="ml-1" />
            <h3>25%</h3>
          </div>
          <div className=" mx-auto px-4 py-8">
          <Chart options={options} series={series} type="area" height={100} />
          </div>
          <div>
          {dummyListCard2.map((data, index) => (
            <Card2
              amount="$545.69"
              description="Last Month Sales"
              increasePercentage="35%"
            />
        ))}
          </div>
        </div>
        <div
          className={`rounded-lg shadow-lg bg-gradient-to-br from-${gradientColor}-400 to-${gradientColor}-600 p-4`}
        >
          <div className="flex justify-between gap-2">
            <div>
              <p className="mb-0 text-sm font-medium text-purple-400">
                Total Traffic
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-800">
              <BsThreeDots size={24} />
            </div>
          </div>
          <div className=" mx-auto px-4 py-8">
          <Chart options={options1} series={series1} type="rangeBar" height={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2Page;

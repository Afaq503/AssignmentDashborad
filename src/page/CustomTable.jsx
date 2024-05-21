import React from "react";
import { Table, Tag, Space, Tooltip } from "antd";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline, MdModeEditOutline } from "react-icons/md";

const columns = [
  {
    title: "#ID",
    dataIndex: "ID",
    key: "ID",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
    render: (text, record) => (
      <Space>
        <img
          src={record.image}
          alt={text}
          style={{ width: "30px", height: "auto" }}
        />
        <span>{text}</span>
      </Space>
    ),
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, record) => {
      let color = "";
      switch (record.status) {
        case "delivered":
          color = "green";
          break;
        case "canceled":
          color = "red";
          break;
        case "pending":
          color = "orange";
          break;
        default:
          color = "blue";
      }
      return <Tag color={color}>{record.status.toUpperCase()}</Tag>;
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Tooltip title="Edit">
          <a>
            <MdModeEditOutline />
          </a>
        </Tooltip>
        <Tooltip title="View">
          <a>
            <IoEyeOutline />
          </a>
        </Tooltip>
        <Tooltip title="Delete">
          <a>
            <MdDeleteOutline />
          </a>
        </Tooltip>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    ID: "001",
    product: "Laptop",
    image: "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png", // Add the image URL here
    quantity: 12,
    price: "$1200",
    date: "2024-05-22",
    status: "pending",
    actions: (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
  {
    key: "2",
    ID: "002",
    product: "Mobile Phone",
    image: "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png", // Add the image URL here
    quantity: 11,
    price: "$800",
    date: "2024-05-23",
    status: "delivered",
    actions: (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
  {
    key: "3",
    ID: "003",
    product: "Headphones",
    image: "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png", // Add the image URL here
    quantity: 33,
    price: "$150",
    date: "2024-05-24",
    status: "processing",
    actions: (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
  {
    key: "4",
    ID: "004",
    product: "Headphones",
    image: "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png", // Add the image URL here
    quantity: 13,
    price: "$150",
    date: "2024-05-24",
    status: "processing",
    actions: (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
  {
    key: "5",
    ID: "005",
    product: "Headphones",
    image: "https://codervent.com/fobia/demo/ltr/assets/images/logo-icon-2.png", // Add the image URL here
    quantity: 10,
    price: "$150",
    date: "2024-05-24",
    status: "canceled",
    actions: (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

function CustomTable({ gradientColor }) {
  return (
    <div
      className={`rounded-lg shadow-lg bg-gradient-to-br from-${gradientColor}-400 to-${gradientColor}-600 p-4`}
    >
      <div className="container mx-auto px-4 py-8">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default CustomTable;

import React from "react";
import { Space, Select } from "antd";
import { Tables, Default, ItemNomer, Link } from "./style";
import { homeTableData } from "../../../../../mock/homeTable";

export const TableHome = () => {
  const columns = [
    {
      title: "Номер заказа",
      dataIndex: "nomer",
      key: "nomer",
      render: (text) => <ItemNomer>{text}</ItemNomer>,
    },
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
      render: (text) => <Default>{text}</Default>,
    },
    {
      title: "Тип заказа",
      dataIndex: "type",
      key: "type",
      render: (text) => <Default>{text}</Default>,
    },
    {
      title: "Название товара",
      dataIndex: "name",
      key: "name",
      render: (text) => <Default>{text}</Default>,
    },
    {
      title: "Сумма товара",
      dataIndex: "price",
      key: "price",
      render: (text) => <Default>{text}</Default>,
    },
    {
      title: "Покупатель",
      dataIndex: "customer",
      key: "customer",
      render: (text) => <Default>{text}</Default>,
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Space direction="vertical" style={{ width: "100%" }}>
          {status === "Оплачен" ? (
            <Select value={status} status="error" style={{ width: "100%" }} />
          ) : (
            <Select value={status} status="warning" style={{ width: "100%" }} />
          )}
        </Space>
      ),
    },
    {
      title: "Действия",
      key: "status",
      render: () => <Link>Посмотреть</Link>,
    },
  ];

  return <Tables columns={columns} dataSource={homeTableData} />;
};

export default TableHome;

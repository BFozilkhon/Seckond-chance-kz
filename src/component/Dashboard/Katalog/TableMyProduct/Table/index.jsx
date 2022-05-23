import React, { useState } from "react";
import { Tables, Default, ItemNomer, Flexing, Modals } from "./style";
import { myProductTableData } from "../../../../../mock/myProductTable";

export const TableKatalog = () => {
  const [visible, setVisible] = useState(true);

  const columns = [
    {
      title: "Номер заказа",
      dataIndex: "nomer",
      key: "nomer",
      render: (text) => <ItemNomer>{text}</ItemNomer>,
    },
    {
      title: "Фото",
      dataIndex: "url",
      key: "url",
      render: (url) => <img src={url} alt="img" />,
    },
    {
      title: "Название товара",
      dataIndex: "name",
      key: "name",
      render: (text) => <Default>{text}</Default>,
    },
    {
      title: "Категория",
      dataIndex: "category",
      key: "category",
      render: (text) => <Default>{text}</Default>,
    },
    {
      title: "Подкатегория",
      dataIndex: "podCategory",
      key: "podCategory",
      render: (text) => <Default>{text}</Default>,
    },
    {
      title: "Размер",
      dataIndex: "size",
      key: "size",
      render: (text) => <Default>{text}</Default>,
    },
    {
      title: "Цвет",
      dataIndex: "color",
      key: "color",
      render: (text) => <Default>{text}</Default>,
    },
    {
      title: "Цена",
      dataIndex: "price",
      key: "price",
      render: (text) => <Default>{text}</Default>,
    },
    {
      title: "Действия",
      key: "action",
      render: () => (
        <Flexing>
          <Flexing.Eye />
          <Flexing.Edit />
          <Flexing.Deletes onClick={() => setVisible(true)} />
        </Flexing>
      ),
    },
  ];

  return (
    <>
      <Tables columns={columns} dataSource={myProductTableData} />

      {/* modal */}
      <Modals centered visible={visible} onCancel={() => setVisible(false)}>
        <Modals.Title>Вы уверены, что хотите удалить товар #0560?</Modals.Title>
        <Flexing>
          <Modals.Btn onClick={() => setVisible(false)}>Отмена</Modals.Btn>
          <Modals.Btn cancel onClick={() => setVisible(false)}>
            Удалить
          </Modals.Btn>
        </Flexing>
      </Modals>
    </>
  );
};

export default TableKatalog;

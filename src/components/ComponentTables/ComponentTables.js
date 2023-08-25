import React from 'react';

import { Table } from 'antd';

function ComponentTables() {
  const columnsSupplier = [
    {
      title: 'Поставщик',
      dataIndex: 'provider',
      align: 'left',
      render: (text) => <a>{text}</a>,
      fixed: 'left',
      width: '140px',
    },
    {
      title: 'Страна',
      dataIndex: 'country',
      align: 'center',
      width: '80px',
    },
    {
      title: 'Время поставки',
      dataIndex: 'timeDelivery',
      align: 'left',
      width: '150px',
    },
    {
      title: 'На складе',
      dataIndex: 'inStock',
      align: 'center',
      width: '100px',
    },
    {
      title: 'MOQ',
      dataIndex: 'moq',
      align: 'center',
      width: '80px',
    },
    {
      title: 'Тип упаковки',
      dataIndex: 'typeBox',
      align: 'center',
      width: '150px',
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      align: 'center',
      width: '80px',
    },
    {
      title: '1',
      dataIndex: 'price_for_1',
      align: 'center',
      width: '80px',
    },
    {
      title: '10',
      dataIndex: 'price_for_10',
      align: 'center',
      width: '80px',
    },
    {
      title: '100',
      dataIndex: 'price_for_100',
      align: 'center',
      width: '80px',
    },
    {
      title: '1000',
      dataIndex: 'price_for_1000',
      align: 'center',
      width: '80px',
    },
    {
      title: '10000',
      dataIndex: 'price_for_10000',
      align: 'center',
      width: '80px',
    },
  ];

  const dataTableSupplier = [
    {
      key: '1',
      provider: 'DigiKey',
      cart: '0',
      country: 'US',
      timeDelivery: '14 недель',
      inStock: '3',
      moq: '1',
      typeBox: '-',
      price: 'USD',
      price_for_1: '63.48',
      price_for_10: '55.10',
      price_for_100: '55.10',
      price_for_1000: '55.10',
      price_for_10000: '55.10',
    },
    {
      key: '2',
      provider: 'Fly-Wing Technology',
      cart: '1',
      country: 'HK',
      timeDelivery: '8 недель',
      inStock: '3958',
      moq: '',
      typeBox: '-',
      price: 'USD',
      price_for_1: '42.75',
      price_for_10: '39.34',
      price_for_100: '37.35',
      price_for_1000: '33.09',
      price_for_10000: '33.09',
    },
    {
      key: '3',
      provider: 'Allchips',
      cart: '0',
      country: 'CN',
      timeDelivery: '8 недель',
      inStock: '38260',
      moq: '100',
      typeBox: '-',
      price: '-',
      price_for_1: '-',
      price_for_10: '-',
      price_for_100: '-',
      price_for_1000: '-',
      price_for_10000: '-',
    },
  ];

  return (
    <div className="component-tables" style={{ marginTop: '30px' }}>
      <Table
        className="component-tables__supplier"
        columns={columnsSupplier}
        dataSource={dataTableSupplier}
      />
    </div>
  );
}

export default ComponentTables;

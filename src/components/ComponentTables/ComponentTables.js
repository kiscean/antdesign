import React from 'react';

import { Table, InputNumber } from 'antd';
import { FilePdfTwoTone } from '@ant-design/icons';
import './ComponentTables.css';

function ComponentTables() {
  /*------------------- ТАБЛИЦА 1 --------------------*/
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
      title: 'Количество',
      align: 'center',
      width: '123px',
      render: () => <InputNumber min={1} max={100} defaultValue={1} />,
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
    {
      key: '4',
      provider: 'Fly-Wing Technology',
      cart: '1',
      country: 'HK',
      timeDelivery: '5 недель',
      inStock: '35435',
      moq: '4',
      typeBox: '-',
      price: 'USD',
      price_for_1: '42.75',
      price_for_10: '39.34',
      price_for_100: '37.35',
      price_for_1000: '33.09',
      price_for_10000: '33.09',
    },
    {
      key: '5',
      provider: 'Allchips',
      cart: '0',
      country: 'CN',
      timeDelivery: '8 недель',
      inStock: '260',
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

  /*------------------- ТАБЛИЦА 2 --------------------*/

  const defaultTitle = () => (
    <h2 className="component-tables__header">Технические параметры</h2>
  );
  const defaultFooter = () => (
    <>
      <h2>Техническая документация компонента</h2>
      <a>
        <FilePdfTwoTone style={{ fontSize: '40px' }} />
        <div>
          <p>temd5120-1767453.pdf</p>
          <span>pdf 17 КБ</span>
        </div>
      </a>
    </>
  );

  const tableParamsProps = { title: defaultTitle, footer: defaultFooter };

  const columnsParams = [
    {
      title: 'Атрибут',
      dataIndex: 'attribute',
      align: 'left',
      width: '80px',
    },
    {
      title: 'Значение',
      dataIndex: 'value',
      align: 'left',
      width: '80px',
    },
    Table.EXPAND_COLUMN,
  ];

  const dataTableParams = [
    { key: 1, attribute: 'Rise Time', value: '100 ns' },
    { key: 2, attribute: 'RoHS - Mouser', value: 'Y' },
    {
      key: 3,
      attribute: 'Subcategory',
      value: 'Optical Detectors and Sensors',
    },
    { key: 4, attribute: 'Unit Weight', value: '245,357 mg' },
    { key: 5, attribute: 'Dark Current', value: '30 nA' },
    { key: 6, attribute: 'Manufacturer', value: 'Vishay' },
    { key: 7, attribute: 'Photocurrent', value: '35 uA' },
    { key: 8, attribute: 'Product Type', value: 'Photodiodes' },
    { key: 9, attribute: 'Qualification', value: 'AEC-Q101' },
    { key: 10, attribute: 'Mounting Style', value: 'SMD/SMT' },
    { key: 11, attribute: 'Peak Wavelength', value: '940 nm' },
    { key: 12, attribute: 'Standard Pack Qty', value: '1500' },
    { key: 13, attribute: 'If - Forward Current', value: '50 mA' },
    { key: 14, attribute: 'Moisture Sensitive', value: 'Yes' },
    { key: 15, attribute: 'ProductClassName_s', value: 'Photodiodes' },
    { key: 16, attribute: 'Vf - Forward Voltage', value: '1 V' },
    { key: 17, attribute: 'Vr - Reverse Voltage', value: '60 V' },
    { key: 18, attribute: 'Pd - Power Dissipation', value: '215 mW' },
    {
      key: 19,
      attribute: 'Noise Equivalent Power - NEP',
      value: '4E-14 W/sqrt Hz',
    },
    { key: 20, attribute: 'Half Intensity Angle Degrees', value: '65 deg' },
    { key: 21, attribute: 'Maximum Operating Temperature', value: '+ 100 C' },
    { key: 22, attribute: 'Minimum Operating Temperature', value: '- 40 C' },
    { key: 23, attribute: 'Brand', value: 'Vishay Semiconductors' },
  ];

  const expandedRowRender = () => {
    const columns = [
      {
        title:
          'Найдены дополнительные результаты, соответствующие данному компоненту',
        align: 'left',
        className: 'cart__alternative-component',
        children: [
          {
            title: 'Компонент',
            dataIndex: 'name',
            key: 'name',

            width: '30%',
          },
          {
            title: 'Время поставки',
            dataIndex: 'timeDelivery',
            align: 'left',
            width: '240px',
          },
          {
            title: 'Поставщик',
            dataIndex: 'provider',
            className: 'table__column-provider',
            align: 'left',
            width: '240px',
          },
          {
            title: 'Цена (за ед.)',
            dataIndex: 'price',
            align: 'center',
          },
        ],
      },
    ];
    return (
      <Table
        columns={columns}
        dataSource={dataTableSupplier}
        pagination={false}
      />
    );
  };

  return (
    <div className="component-tables">
      <Table
        className="component-tables__supplier"
        scroll={{
          x: 1000,
        }}
        columns={columnsSupplier}
        dataSource={dataTableSupplier}
      />

      <Table
        className="component-tables__params"
        {...tableParamsProps}
        columns={columnsParams}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ['0'],
          columnTitle: () => (
            <p className="component-tables__another">Похожее</p>
          ),
        }}
        dataSource={dataTableParams}
        scroll={{
          x: 1000,
        }}
      />
    </div>
  );
}

export default ComponentTables;

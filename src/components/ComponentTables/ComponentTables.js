import React from 'react';

import { Table, InputNumber, Space } from 'antd';
import {
  FilePdfTwoTone,
  EnvironmentTwoTone,
  SmileTwoTone,
  MailTwoTone,
  ShopTwoTone,
} from '@ant-design/icons';
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
    <div className="documentation">
      <h2 className="documentation__title">Техническая документация</h2>
      <a
        className="documentation__link"
        target="_blank"
        rel="noreferrer"
        href="https://static.chipdip.ru/lib/057/DOC000057299.pdf">
        <FilePdfTwoTone className="documentation__img" />
        <div className="documentation__container">
          <p className="documentation__paragraph">Диоды импортные</p>
          <span className="documentation__file">pdf 17 КБ</span>
        </div>
      </a>
      <a
        className="documentation__link"
        target="_blank"
        rel="noreferrer"
        href="https://static.chipdip.ru/lib/251/DOC000251032.pdf">
        <FilePdfTwoTone className="documentation__img" />
        <div className="documentation__container">
          <p className="documentation__paragraph">
            Параметры универсальных и импульсных диодов
          </p>
          <span className="documentation__file">pdf 223 КБ</span>
        </div>
      </a>
    </div>
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

  /*----------------------- ТАБЛИЦА 3 -----------------------------*/

  const dataTableSimilar = [
    {
      key: '1',
      image: 'https://www.mouser.fi/images/vishay/lrg/TEMD5010_SPL.jpg',
      name: 'TEMD5120X01',
      description: 'Photodiodes Top view 790-1050nm +/-65 deg',
      provider: 'DigiKey',
      country: 'US',
      timeDelivery: '14 недель',
      moq: '1',
      price: 151.95,
      tax: 25.32,
      sum: 455.85,
    },
    {
      key: '2',
      image:
        'https://vakits.com/sites/default/files/imagecache/product_full/DO-41%20Case_2.JPG',
      name: 'DIODESKITFS',
      description: 'Kit Diode 10EA Of 10 Values',
      provider: 'Fly-Wing Technology',
      country: 'HK',
      timeDelivery: '8 недель',
      moq: '2',
      price: 42.75,
      tax: 7.12,
      sum: 128.25,
    },
    {
      key: '3',
      image:
        'https://www.wago.com/medias/1024-020000010001bf97000100b6-DE.jpg?context=bWFzdGVyfGltYWdlc3w4NDA3M3xpbWFnZS9qcGVnfGg5Mi9oZTgvMTM4MDM1NzE5MzczMTAvMTAyNF8wMjAwMDAwMTAwMDFiZjk3MDAwMTAwYjZfREUuanBnfDA3ZDg0NTU1OTAwMDI0MjFiYmNhZDUyZjNiYjEwM2ZmMzY2MzcwYWZjYzhmNmIwZmJmOGJjMGEyNjZhOTcwNGI',
      name: 'YR2.DIODE',
      description: 'DIN Rail Diode Module for use with Y Series',
      provider: 'Allchips',
      country: 'CN',
      timeDelivery: '8 недель',
      moq: '10',
      price: 25.11,
      tax: 4.19,
      sum: 75.33,
    },
    {
      key: '4',
      image:
        'https://www.mouser.com/images/marketingid/2019/img/117150561.png?v=070223.0416',
      name: 'REFAUDIODMA12070PTOBO1',
      description: 'Evaluation Board for MA12040P Series',
      provider: 'Chip One Stop',
      country: 'CN',
      timeDelivery: '8 недель',
      moq: '100',
      price: 101.2,
      tax: 16.9,
      sum: 303.6,
    },
    {
      key: '5',
      image:
        'https://www.heliosps.com.au/wp-content/uploads/sites/2/2017/06/HPS-PS-DIN-DLP-PU.png',
      name: 'YRM2.DIODE',
      description: 'DIN Rail Diode Module for use with Y Series',
      provider: 'Mouser',
      country: 'US',
      timeDelivery: '8 недель',
      moq: '1',
      price: 40.3,
      tax: 6.71,
      sum: 120.9,
    },
  ];

  const expandedRowRender = () => {
    const columns = [
      {
        title:
          'Найдены дополнительные результаты, соответствующие данному компоненту',
        align: 'left',
        className: 'component-tables__alternative',
        children: [
          {
            title: 'Компонент',
            dataIndex: 'nameComp',
            key: 'name',
            width: '30%',
            render: (_, data) => (
              <div>
                <a>
                  {data.name} ({data.country})
                </a>
                <p>{data.description}</p>
                <p>
                  Производитель: <a>{data.provider}</a>
                </p>
              </div>
            ),
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
            render: (_, data) => (
              <Space size="middle">
                <a>
                  {data.provider} ({data.country})
                </a>
              </Space>
            ),
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
        className="component-tables__similar"
        columns={columns}
        dataSource={dataTableSimilar}
        pagination={false}
      />
    );
  };

  /* --------------- ДОСТАВКА ----------------- */
  const deliveryData = [
    {
      icon: <EnvironmentTwoTone className="delivery__img" />,
      title: 'Санкт-Петербург',
      description: 'Со склада продавца',
    },
    {
      icon: <SmileTwoTone className="delivery__img" />,
      title: 'Курьер',
      description: '28 августа - 350 ₽',
    },
    {
      icon: <EnvironmentTwoTone className="delivery__img" />,
      title: 'ТК DPD',
      description: '28 августа - 573 ₽',
    },
    {
      icon: <EnvironmentTwoTone className="delivery__img" />,
      title: 'ТК "Деловые линии"',
      description: '28 августа - 573 ₽',
    },
    {
      icon: <MailTwoTone className="delivery__img" />,
      title: 'Почта России',
      description: '17 сентября - 348 ₽',
    },
    {
      icon: <ShopTwoTone className="delivery__img" />,
      title: 'Пункты выдачи партнёров',
      description: '17 сентября - бесплатно',
    },
  ];

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
      <div className="component-tables__zone">
        <Table
          className="component-tables__params"
          {...tableParamsProps}
          columns={columnsParams}
          expandable={{
            expandedRowRender,
            columnTitle: () => (
              <p className="component-tables__another">Похожее</p>
            ),
          }}
          dataSource={dataTableParams}
          scroll={{
            x: 850,
          }}
        />

        <div className="delivery">
          <h2 className="delivery__title">Информация о доставке товаров</h2>
          <ul className="delivery__list">
            {deliveryData.map((item) => (
              <li className="delivery__point" key={item.title}>
                {item.icon}
                <div className="delivery__container">
                  <a className="delivery__link">{item.title}</a>
                  <p className="delivery__date">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ComponentTables;

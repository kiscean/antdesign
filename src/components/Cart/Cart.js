import React from 'react';
import './Cart.css';

import {
  Button,
  Col,
  Divider,
  Popconfirm,
  Row,
  Space,
  Statistic,
  Table,
  message,
  InputNumber,
  Layout,
  Dropdown,
} from 'antd';

import {
  CloseOutlined,
  FilePdfTwoTone,
  DownOutlined,
  FileExcelTwoTone,
} from '@ant-design/icons';

import RoutingRoad from '../RoutingRoad/RoutingRoad';

const cartPage = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Товар добавлен в корзину',
    });
  };

  //это скрытая часть таблицы, которая открывается при клике
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
            render: (_, record) => (
              <Space size="middle">
                <Row>
                  <Col span={24}>
                    <a>{record.name}</a>
                  </Col>
                  <Col span={24}>
                    <p>{record.description}</p>
                  </Col>
                  <Col span={24}>
                    <p className="cart__component-info">
                      Производитель: <a>{record.provider}</a>
                    </p>
                  </Col>
                </Row>
              </Space>
            ),
            width: '30%',
          },
          {
            title: 'Время поставки',
            dataIndex: 'timeDelivery',
            align: 'left',
          },
          {
            title: 'Поставщик',
            dataIndex: 'provider',
            className: 'table__column-provider',
            align: 'left',
            render: (_, record) => (
              <Space size="middle">
                <a>
                  {record.provider} ({record.country})
                </a>
              </Space>
            ),
            width: '140px',
          },
          {
            title: 'Цена (за ед.)',
            dataIndex: 'price',
            align: 'center',
          },
          {
            title: 'Action',
            dataIndex: 'operation',
            key: 'operation',
            render: () => (
              <Space size="middle">
                <Button type="primary">Заменить</Button>
                {contextHolder}
                <Button onClick={success}>Добавить</Button>
              </Space>
            ),
          },
        ],
      },
    ];
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  //шапка таблицы
  const columns = [
    {
      title: 'п/п',
      dataIndex: 'key',
      width: '6%',
      align: 'center',
    },
    {
      title: 'Компонент',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <Space size="middle">
          <img src={record.image} alt={''} className="component__image" />
          <Row>
            <Col span={24}>
              <a>{record.name}</a>
            </Col>
            <Col span={24}>
              <p>{record.description}</p>
            </Col>
            <Col span={24}>
              <p className="component__info">
                Производитель: <a>{record.provider}</a>
              </p>
            </Col>
            <Col span={24}>
              <p className="component__info">MOQ: {record.moq}</p>
            </Col>
          </Row>
        </Space>
      ),
      width: '30%',
    },
    Table.EXPAND_COLUMN,
    {
      title: 'Время поставки',
      dataIndex: 'timeDelivery',
      align: 'left',
      width: '150px',
    },
    {
      title: 'Поставщик',
      dataIndex: 'provider',
      className: 'table__column-provider',
      align: 'left',
      render: (_, record) => (
        <Space size="middle">
          <a>
            {record.provider} ({record.country})
          </a>
        </Space>
      ),
      width: '140px',
    },
    {
      title: 'Цена (за ед.)',
      dataIndex: 'price',
      align: 'center',
      width: '80px',
    },
    {
      title: 'Включая НДС20%',
      dataIndex: 'tax',
      align: 'center',
      width: '80px',
    },
    {
      title: 'Количество',
      align: 'center',
      width: '80px',
      render: () => <InputNumber min={1} max={10} defaultValue={3} />,
    },
    {
      title: 'Цена (итоговая)',
      dataIndex: 'sum',
      align: 'center',
      width: '80px',
    },
    {
      align: 'center',
      render: () => (
        <Space size="middle">
          <Popconfirm
            title="Удаление"
            description="Вы точно хотите удалить компонент?"
            okText="Да"
            cancelText="Нет">
            <Button type="primary" danger size={'small'}>
              <CloseOutlined />
            </Button>
          </Popconfirm>
        </Space>
      ),
      width: '80px',
    },
  ];

  //массив с данными для таблицы,
  //потом будет притягиваться
  //с бека
  const data = [
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

  const value = 1083.933535;

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          .pdf
        </a>
      ),
      icon: <FilePdfTwoTone />,
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          .xls
        </a>
      ),
      icon: <FileExcelTwoTone />,
    },
  ];

  return (
    <Layout className="cart">
      <RoutingRoad />

      <div>
        <Divider orientation="left">
          <h4>Ваша корзина</h4>
        </Divider>

        <div size="middle" className="cart__top-buttons">
          <Dropdown menu={{ items }}>
            <div className="cart__hover">
              <Space className="cart__safe-btn">
                Скачать корзину
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>

          <Button type="primary" size={'middle'}>
            Сохранить
          </Button>

          <Popconfirm
            title="Удаление"
            description="Все товары из корзины пропадут. Вы точно хотите очистить корзину?"
            okText="Да"
            cancelText="Отмена">
            <Button type="primary" danger size={'middle'}>
              Очистить корзину
            </Button>
          </Popconfirm>
        </div>

        <Table
          columns={columns}
          expandable={{
            expandedRowRender,
            defaultExpandedRowKeys: ['0'],
          }}
          dataSource={data}
          bordered
          className="table"
          scroll={{
            x: 1000,
          }}
          pagination={false}
        />

        <Space direction={'vertical'} className="cart__total-block">
          <Row justify={'start'}>
            <Col span={12}>
              <Row
                justify={'start'}
                gutter={10}
                className="cart__down-container">
                <Col span={12} className="cart__span-container">
                  <span>Кол-во:</span>
                </Col>
                <Col span={12} className="cart__sum-container">
                  <p className="cart__paragraph">15 ед.</p>
                </Col>
                <Col span={12} className="cart__span-container">
                  <span>Налог НДС 20%:</span>
                </Col>
                <Col span={12} className="cart__sum-container">
                  <p className="cart__paragraph">60.24 руб.</p>
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <Statistic
                className="cart__total"
                title="ИТОГО (включая НДС 20%)"
                value={value}
                precision={2}
              />
            </Col>
          </Row>

          <Button
            style={{
              marginTop: 16,
            }}
            type="primary">
            Перейти к оформлению
          </Button>
        </Space>
      </div>
    </Layout>
  );
};

export default cartPage;

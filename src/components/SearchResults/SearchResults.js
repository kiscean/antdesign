import React from 'react';
import './SearchResults.css';

import {
  Button,
  Col,
  message,
  Pagination,
  Row,
  Space,
  Table,
  Layout,
} from 'antd';
import { CheckOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const TableComponentSearch = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Товар добавлен в корзину',
    });
  };

  const columns = [
    {
      title: 'Поставщик',
      dataIndex: 'provider',
      align: 'left',
      render: (text) => <a>{text}</a>,
      fixed: 'left',
      width: '140px',
    },
    {
      title: '',
      dataIndex: 'cart',
      align: 'center',
      render: (_, record) => (
        <Space size="middle">
          {record.cart === '1' ? (
            <a className="component__backet-active">
              <CheckOutlined />
            </a>
          ) : (
            <Space>
              {contextHolder}
              <Button onClick={success}>
                <ShoppingCartOutlined />
              </Button>
            </Space>
          )}
        </Space>
      ),
      fixed: 'left',
      width: '80px',
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
  const data = [
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
    <Layout className="search-results">
      <h2 className="search-results__title">
        Результаты поиска:
        <span className="search-results__text">
          по запросу "<span className="search-results__result">diod</span>"
          найдено: <span className="search-title__result">10</span>
        </span>
      </h2>

      <Table
        columns={columns}
        dataSource={data}
        bordered
        className="search-results__table"
        title={() => (
          <Space size="middle">
            <img
              src="https://static.chipdip.ru/lib/294/DOC005294472.jpg"
              alt={''}
              className="search-results__image"
            />
            <Row className="search-results__text">
              <Col span={24}>
                <a>DIODESKITFS</a>
              </Col>
              <Col span={24}>
                <p>Kit Diode 10EA Of 10 Values</p>
              </Col>
              <Col span={24} className="search-results__manufacturer">
                <p>
                  Производитель: <a>onsemi</a>
                </p>
              </Col>
            </Row>
          </Space>
        )}
        scroll={{
          x: 1000,
        }}
        pagination={false}
      />
      {/* Эти таблицы для тестирования и визуальной составляющей - далее их можно просто удалить */}
      {/* <Table
        columns={columns}
        dataSource={data}
        bordered
        className="table"
        title={() => (
          <Space size="middle">
            <img
              src={'https://static.chipdip.ru/lib/211/DOC001211284.jpg'}
              alt={''}
              className="component__image"
            />
            <Row className="component__text">
              <Col span={24}>
                <a>DIODESKITFS</a>
              </Col>
              <Col span={24}>
                <p>Kit Diode 10EA Of 10 Values</p>
              </Col>
              <Col span={24} className="component__manufacturer">
                <p>
                  Производитель: <a>onsemi</a>
                </p>
              </Col>
            </Row>
          </Space>
        )}
        scroll={{
          x: 1000,
        }}
        pagination={false}
      />
      <Table
        columns={columns}
        dataSource={data}
        bordered
        className="table"
        title={() => (
          <Space size="middle">
            <img
              src={'https://static.chipdip.ru/lib/313/DOC005313873.jpg'}
              alt={''}
              className="component__image"
            />
            <Row className="component__text">
              <Col span={24}>
                <a>DIODESKITFS</a>
              </Col>
              <Col span={24}>
                <p>Kit Diode 10EA Of 10 Values</p>
              </Col>
              <Col span={24} className="component__manufacturer">
                <p>
                  Производитель: <a>onsemi</a>
                </p>
              </Col>
            </Row>
          </Space>
        )}
        scroll={{
          x: 1000,
        }}
        pagination={false}
      />
      <Table
        columns={columns}
        dataSource={data}
        bordered
        className="table"
        title={() => (
          <Space size="middle">
            <img
              src={'https://static.chipdip.ru/lib/464/DOC002464721.jpg'}
              alt={''}
              className="component__image"
            />
            <Row className="component__text">
              <Col span={24}>
                <a>DIODESKITFS</a>
              </Col>
              <Col span={24}>
                <p>Kit Diode 10EA Of 10 Values</p>
              </Col>
              <Col span={24} className="component__manufacturer">
                <p>
                  Производитель: <a>onsemi</a>
                </p>
              </Col>
            </Row>
          </Space>
        )}
        scroll={{
          x: 1000,
        }}
        pagination={false}
      />
      <Table
        columns={columns}
        dataSource={data}
        bordered
        className="table"
        title={() => (
          <Space size="middle">
            <img
              src={'https://static.chipdip.ru/lib/243/DOC004243462.jpg'}
              alt={''}
              className="component__image"
            />
            <Row className="component__text">
              <Col span={24}>
                <a>DIODESKITFS</a>
              </Col>
              <Col span={24}>
                <p>Kit Diode 10EA Of 10 Values</p>
              </Col>
              <Col span={24} className="component__manufacturer">
                <p>
                  Производитель: <a>onsemi</a>
                </p>
              </Col>
            </Row>
          </Space>
        )}
        scroll={{
          x: 1000,
        }}
        pagination={false}
      /> */}
      {/* Конец таблиц для тестирования */}
      <Space className="search-results__pagination-block">
        <Pagination
          className="search-results__pagination"
          showQuickJumper
          defaultCurrent={2}
          total={500}
        />
      </Space>
    </Layout>
  );
};

export default TableComponentSearch;

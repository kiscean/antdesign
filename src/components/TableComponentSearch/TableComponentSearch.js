import React from 'react';
import './TableComponentSearch.css';

import { Button, Col, message, Pagination, Row, Space, Table } from 'antd';
import { CheckOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const TableComponentSearch = ({ onOpenCart }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Товар добавлен в корзину',
    });
  };

  const onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
  };

  const columns = [
    {
      title: 'Поставщик',
      dataIndex: 'provider',
      className: 'table__column-provider',
      align: 'left',
      render: (text) => <a>{text}</a>,
      fixed: 'left',
      width: '140px',
    },
    {
      title: '',
      dataIndex: 'basket',
      align: 'center',
      render: (_, record) => (
        <Space size="middle">
          {record.basket === '1' ? (
            <a onClick={onOpenCart} className="component__backet-active">
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
      dataIndex: 'in_stock',
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
      dataIndex: 'type_box',
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
      basket: '0',
      country: 'US',
      timeDelivery: '14 недель',
      in_stock: '3',
      moq: '1',
      type_box: '-',
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
      basket: '1',
      country: 'HK',
      timeDelivery: '8 недель',
      in_stock: '3958',
      moq: '',
      type_box: '-',
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
      basket: '0',
      country: 'CN',
      timeDelivery: '8 недель',
      in_stock: '38260',
      moq: '100',
      type_box: '-',
      price: '-',
      price_for_1: '-',
      price_for_10: '-',
      price_for_100: '-',
      price_for_1000: '-',
      price_for_10000: '-',
    },
  ];

  return (
    <section className="table-selling">
      <Table
        columns={columns}
        dataSource={data}
        bordered
        className="table"
        title={() => (
          <Space size="middle">
            <img
              src={'https://static.chipdip.ru/lib/294/DOC005294472.jpg'}
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
      {/* Эти таблицы для тестирования и визуальной составляющей - далее их можно просто удалить */}
      <Table
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
      />
      {/* Конец таблиц для тестирования */}

      <Space className="pagination-block">
        <Pagination
          className="pagination"
          showQuickJumper
          defaultCurrent={2}
          total={500}
          onChange={onChange}
        />
      </Space>
    </section>
  );
};

export default TableComponentSearch;

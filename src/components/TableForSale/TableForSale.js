import React from 'react';
import './TableForSale.css';

import {
  Button,
  Col,
  Layout,
  message,
  Rate,
  Row,
  Space,
  Table,
  Tag,
} from 'antd';

import {
  CheckOutlined,
  FilePdfFilled,
  HeartFilled,
  HeartOutlined,
  PlusOutlined,
} from '@ant-design/icons';

import { tableForSaleComponents } from '../../assets/constants';

const TablesForSale = ({ onOpenCart }) => {
  /* Этот кусочек - попап с конфирмом */
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Товар добавлен в корзину',
    });
  };

  /* Шапка таблицы */
  const tableHeader = [
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
          </Row>
        </Space>
      ),
      width: '40%',
    },
    {
      title: 'Файл',
      key: 'file',
      render: (_, record) => (
        <Space size="middle">
          {record.file === 'PDF' ? (
            <a>
              <FilePdfFilled /> PDF
            </a>
          ) : (
            ''
          )}
        </Space>
      ),
      width: '10ch',
    },
    {
      title: 'Рейтинг',
      dataIndex: 'rating',
      key: 'rating',
      render: (_, record) => (
        <Rate
          disabled
          defaultValue={record.rating}
          className="component__rate"
        />
      ),
      width: '125px',
      sorter: (a, b) => a.rating - b.rating,
    },
    {
      title: 'Производитель',
      dataIndex: 'production',
      key: 'production',
      width: '20%',
      sorter: (a, b) => a.production.length - b.production.length,
    },
    {
      title: 'Теги',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <span>
          {tags.map((tag) => {
            let color = tag.length > 10 ? 'geekblue' : 'green';
            if (tag === 'под заказ') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag} className="component__tag">
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
      width: '20ch',
    },
    {
      title: 'Покупка',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {record.action === '1' ? (
            <a onClick={onOpenCart} className="component__backet-active">
              <CheckOutlined /> В корзине
            </a>
          ) : (
            <Space>
              {contextHolder}
              <Button onClick={success}>
                <PlusOutlined /> Добавить в корзину
              </Button>
            </Space>
          )}
        </Space>
      ),
      width: '25ch',
    },
    {
      key: 'heart',
      render: (_, record) => (
        <Space size="middle">
          {record.heart === '1' ? (
            <a>
              <HeartFilled className="component__heart-active" />
            </a>
          ) : (
            <a>
              <HeartOutlined />
            </a>
          )}
        </Space>
      ),
      width: '5ch',
    },
  ];

  return (
    <Layout className="table-selling">
      <Table
        columns={tableHeader}
        dataSource={tableForSaleComponents}
        scroll={{
          x: 1000,
        }}
      />
    </Layout>
  );
};

export default TablesForSale;

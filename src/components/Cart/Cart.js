import React from 'react';
import './Cart.css';

import {
  Button,
  Col,
  Drawer,
  Row,
  Space,
  Statistic,
  Table,
  InputNumber,
} from 'antd';

import { DeleteOutlined } from '@ant-design/icons';

import { dataCart } from '../../assets/drawerCartArray';

function Cart({ onCloseCart, open }) {
  //видимо нужно для корзины
  const onChange = (value) => {
    console.log('changed', value);
  };

  //видимо что-то для корзины.
  const columnsCart = [
    {
      title: 'Компонент',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <Space size="middle">
          <img src={record.image} alt={'#'} className="cart__image" />
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
      width: '58%',
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      render: (_, record) => (
        <Space size="middle">
          <p>{record.price} руб.</p>
        </Space>
      ),
      width: '80px',
    },
    {
      title: 'Ед.',
      render: (_) => (
        <Space size="middle">
          <InputNumber
            size="small"
            min={1}
            max={1000}
            defaultValue={23}
            onChange={onChange}
            style={{ width: 60 }}
          />
        </Space>
      ),
      width: '60px',
    },
    {
      render: (_) => (
        <Space>
          <a>
            <DeleteOutlined />
          </a>
        </Space>
      ),
      width: 10,
    },
  ];

  return (
    <Drawer
      className="cart"
      title="Ваша корзина"
      placement={'right'}
      width={500}
      onClose={onCloseCart}
      open={open}
      extra={
        <Space>
          <Button onClick={onCloseCart}>Перейти</Button>
          <Button type="primary" onClick={onCloseCart}>
            OK
          </Button>
        </Space>
      }>
      <Table
        columns={columnsCart}
        dataSource={dataCart}
        bordered
        size="small"
      />
      <Space direction={'vertical'}>
        <Row justify={'start'}>
          <Col span={16}>
            <p>Кол-во</p>
          </Col>
          <Col span={8}>
            <p>
              <span>46</span> шт.
            </p>
          </Col>
          <Col span={16}>
            <p>Налог НДС 20%</p>
          </Col>
          <Col span={8}>
            <p>
              <span>345</span> руб.
            </p>
          </Col>
        </Row>
        <Statistic
          className="cart__total"
          title="ИТОГО (включая НДС 20%)"
          value={2070}
          precision={2}
        />
        <Button
          style={{
            marginTop: 16,
          }}
          type="primary">
          Перейти к оформлению
        </Button>
      </Space>
    </Drawer>
  );
}

export default Cart;

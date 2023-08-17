import React from 'react';
import './BascketPage.css';

import {Button, Col, Divider, Popconfirm, Row, Space, Statistic, Table, message} from "antd";
import {CloseOutlined} from "@ant-design/icons";

const BascketPage = () => {

    const columns = [
        {
            title: 'п/п',
            dataIndex: 'key',
            width: '56px',
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
                    </Row>
                </Space>
            ),

        },
        {
            title: 'Время поставки',
            dataIndex: 'time_delivery',
            align: 'left',
            width: '150px',
        },
        {
            title: 'Поставщик',
            dataIndex: 'provider',
            className: 'table__column-provider',
            align: 'left',
            render: (text) => <a>{text}</a>,
            width: '140px',
        },
        {
            title: 'Включая НДС20%',
            dataIndex: 'tax',
            align: 'center',
            width: '80px',
        },
        {
            title: 'Цена (за ед.)',
            dataIndex: 'price',
            align: 'center',
            width: '80px',
        },
        {
            title: 'Количество',
            align: 'center',
            width: '80px',
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
                        cancelText="Нет"
                    >
                        <Button type="primary" danger size={"small"}><CloseOutlined/></Button>
                    </Popconfirm>
                </Space>
            ),
            width: '80px',
        },
    ];
    const data = [
        {
            key: '1',
            provider: 'DigiKey',
            bascket: '0',
            country: 'US',
            time_delivery: '14 недель',
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
            bascket: '1',
            country: 'HK',
            time_delivery: '8 недель',
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
            bascket: '0',
            country: 'CN',
            time_delivery: '8 недель',
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
        {
            key: '4',
            provider: 'Allchips',
            bascket: '0',
            country: 'CN',
            time_delivery: '8 недель',
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
        {
            key: '5',
            provider: 'Allchips',
            bascket: '0',
            country: 'CN',
            time_delivery: '8 недель',
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
        <section className="bascket">
            <Divider className="bascket-devider" orientation="left">
                <h4>Ваша корзина</h4>
            </Divider>
            <Space size="middle" className='bascket__top-buttons'>
                <Button type="link">Скачать корзину</Button>
                <Popconfirm
                    title="Удаление"
                    description="Все товары из корзины пропадут. Вы точно хотите очистить корзину?"
                    okText="Да"
                    cancelText="Отмена"
                >
                    <Button type="primary" danger size={"middle"}>Очистить корзину</Button>
                </Popconfirm>
            </Space>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                className='table'
                scroll={{
                    x: 1000,
                }}
                pagination={false}
            />
            <Space direction={'vertical'} className='bascket-totalblock'>
                <Row justify={'start'}>
                    <Col
                        xs={19}
                        sm={19}
                        lg={22}
                    >
                        <p>Кол-во</p>
                    </Col>
                    <Col
                        xs={5}
                        sm={5}
                        lg={2}
                    >
                        <p>
                            <span>46</span> шт.
                        </p>
                    </Col>
                    <Col
                        xs={19}
                        sm={19}
                        lg={22}
                    >
                        <p>Налог НДС 20%</p>
                    </Col>
                    <Col
                        xs={5}
                        sm={5}
                        lg={2}
                    >
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
        </section>
    );
};

export default BascketPage;
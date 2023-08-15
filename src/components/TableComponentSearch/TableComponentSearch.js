import React from 'react';
import './TableComponentSearch.css';

import {Button, Col, message, Row, Space, Table} from 'antd';
import {CheckOutlined, PlusOutlined, ShoppingCartOutlined} from "@ant-design/icons";

const TableComponentSearch = ({ onOpenCart }) => {

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
            className: 'table__column-provider',
            align: 'left',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '',
            dataIndex: 'bascket',
            align: 'center',
            render: (_, record) => (
                <Space size="middle">
                    {record.bascket === '1' ? (
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
        },
        {
            title: 'Страна',
            dataIndex: 'country',
            align: 'center',
        },
        {
            title: 'Время поставки',
            dataIndex: 'time_delivery',
            align: 'left',
        },
        {
            title: 'На складе',
            dataIndex: 'in_stock',
            align: 'center',
        },
        {
            title: 'MOQ',
            dataIndex: 'moq',
            align: 'center',
        },
        {
            title: 'Тип упаковки',
            dataIndex: 'type_box',
            align: 'center',
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            align: 'center',
        },
        {
            title: '1',
            dataIndex: 'price_for_1',
            align: 'center',
        },
        {
            title: '10',
            dataIndex: 'price_for_10',
            align: 'center',
        },
        {
            title: '100',
            dataIndex: 'price_for_100',
            align: 'center',
        },
        {
            title: '1000',
            dataIndex: 'price_for_1000',
            align: 'center',
        },
        {
            title: '10000',
            dataIndex: 'price_for_10000',
            align: 'center',
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
    ];

    return (
        <section className="table-selling">
            <Table
                columns={columns}
                dataSource={data}
                bordered
                title={() =>
                    (
                        <Space size="middle">
                            <img src={'#'} alt={''} className="component__image" />
                            <Row>
                                <Col span={24}>
                                    <a>DIODESKITFS</a>
                                </Col>
                                <Col span={24}>
                                    <p>Kit Diode 10EA Of 10 Values</p>
                                </Col>
                                <Col span={24} className='component__manufacturer'>
                                    <p>Производитель: <span className='component__manufacturer-name'>onsemi</span></p>
                                </Col>
                            </Row>
                        </Space>
                    )
                }
                scroll={{
                    x: 1000,
                }}
            />
        </section>
    );
};

export default TableComponentSearch;
import React from 'react';
import './TableComponentSearch.css';

import {Button, Col, message, Pagination, Row, Space, Table} from 'antd';
import {CheckOutlined, ShoppingCartOutlined} from "@ant-design/icons";

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
                            <img src={'https://static.chipdip.ru/lib/294/DOC005294472.jpg'} alt={''} className="component__image" />
                            <Row className='component__text'>
                                <Col span={24}>
                                    <a>DIODESKITFS</a>
                                </Col>
                                <Col span={24}>
                                    <p>Kit Diode 10EA Of 10 Values</p>
                                </Col>
                                <Col span={24} className='component__manufacturer'>
                                    <p>Производитель: <a>onsemi</a></p>
                                </Col>
                            </Row>
                        </Space>
                    )
                }
                scroll={{
                    x: 1000,
                }}
            />
            {/* Эти таблицы для тестирования и визуальной составляющей - далее их можно просто удалить */}
            <Table
                columns={columns}
                dataSource={data}
                bordered
                title={() =>
                    (
                        <Space size="middle">
                            <img src={'https://static.chipdip.ru/lib/211/DOC001211284.jpg'} alt={''} className="component__image" />
                            <Row className='component__text'>
                                <Col span={24}>
                                    <a>DIODESKITFS</a>
                                </Col>
                                <Col span={24}>
                                    <p>Kit Diode 10EA Of 10 Values</p>
                                </Col>
                                <Col span={24} className='component__manufacturer'>
                                    <p>Производитель: <a>onsemi</a></p>
                                </Col>
                            </Row>
                        </Space>
                    )
                }
                scroll={{
                    x: 1000,
                }}
            />
            <Table
                columns={columns}
                dataSource={data}
                bordered
                title={() =>
                    (
                        <Space size="middle">
                            <img src={'https://static.chipdip.ru/lib/313/DOC005313873.jpg'} alt={''} className="component__image" />
                            <Row className='component__text'>
                                <Col span={24}>
                                    <a>DIODESKITFS</a>
                                </Col>
                                <Col span={24}>
                                    <p>Kit Diode 10EA Of 10 Values</p>
                                </Col>
                                <Col span={24} className='component__manufacturer'>
                                    <p>Производитель: <a>onsemi</a></p>
                                </Col>
                            </Row>
                        </Space>
                    )
                }
                scroll={{
                    x: 1000,
                }}
            />
            <Table
                columns={columns}
                dataSource={data}
                bordered
                title={() =>
                    (
                        <Space size="middle">
                            <img src={'https://static.chipdip.ru/lib/464/DOC002464721.jpg'} alt={''} className="component__image" />
                            <Row className='component__text'>
                                <Col span={24}>
                                    <a>DIODESKITFS</a>
                                </Col>
                                <Col span={24}>
                                    <p>Kit Diode 10EA Of 10 Values</p>
                                </Col>
                                <Col span={24} className='component__manufacturer'>
                                    <p>Производитель: <a>onsemi</a></p>
                                </Col>
                            </Row>
                        </Space>
                    )
                }
                scroll={{
                    x: 1000,
                }}
            />
            <Table
                columns={columns}
                dataSource={data}
                bordered
                title={() =>
                    (
                        <Space size="middle">
                            <img src={'https://static.chipdip.ru/lib/243/DOC004243462.jpg'} alt={''} className="component__image" />
                            <Row className='component__text'>
                                <Col span={24}>
                                    <a>DIODESKITFS</a>
                                </Col>
                                <Col span={24}>
                                    <p>Kit Diode 10EA Of 10 Values</p>
                                </Col>
                                <Col span={24} className='component__manufacturer'>
                                    <p>Производитель: <a>onsemi</a></p>
                                </Col>
                            </Row>
                        </Space>
                    )
                }
                scroll={{
                    x: 1000,
                }}
            />
            {/* Конец таблиц для тестирования */}

            <Space className='pagination-block'>
                <Pagination className='pagination' showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
            </Space>
        </section>
    );
};

export default TableComponentSearch;
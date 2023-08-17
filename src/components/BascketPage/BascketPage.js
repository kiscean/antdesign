import React from 'react';
import './BascketPage.css';

import {Button, Col, Divider, Popconfirm, Row, Space, Statistic, Table, Badge, Dropdown} from "antd";
import {CloseOutlined, DownOutlined} from "@ant-design/icons";

const BascketPage = () => {

    const items = [
        {
            key: '1',
            label: 'Action 1',
        },
        {
            key: '2',
            label: 'Action 2',
        },
    ];
    const expandedRowRender = () => {
        const columns = [
            {
                title: 'Найдены дополнительные результаты, соответствующие данному компоненту',
                align: 'left',
                className: 'alternative-component__title',
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
                                        <p className='component__info'>Производитель: <a>{record.provider}</a></p>
                                    </Col>
                                </Row>
                            </Space>
                        ),
                        width: '30%',
                    },
                    {
                        title: 'Время поставки',
                        dataIndex: 'time_delivery',
                        align: 'left',
                    },
                    {
                        title: 'Поставщик',
                        dataIndex: 'provider',
                        className: 'table__column-provider',
                        align: 'left',
                        render: (text) => <a>{text}</a>,
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
                                <Button>Добавить</Button>
                            </Space>
                        ),
                    },
                ],
            },

        ];
        return <Table columns={columns} dataSource={data} pagination={false} />;
    };
    const columns = [
        {
            title: 'п/п',
            dataIndex: 'key',
            width: '4%',
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
                            <p className='component__info'>Производитель: <a>{record.provider}</a></p>
                        </Col>
                        <Col span={24}>
                            <p className='component__info'>MOQ: {record.moq}</p>
                        </Col>
                    </Row>
                </Space>
            ),
            width: '30%',
        },
        Table.EXPAND_COLUMN,
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
            image: 'https://www.mouser.fi/images/vishay/lrg/TEMD5010_SPL.jpg',
            name: 'TEMD5120X01',
            description: 'Photodiodes Top view 790-1050nm +/-65 deg',
            provider: 'DigiKey',
            country: 'US',
            time_delivery: '14 недель',
            moq: '1',
            price: 151.95,

        },
        {
            key: '2',
            image: 'https://vakits.com/sites/default/files/imagecache/product_full/DO-41%20Case_2.JPG',
            name: 'DIODESKITFS',
            description: 'Kit Diode 10EA Of 10 Values',
            provider: 'Fly-Wing Technology',
            country: 'HK',
            time_delivery: '8 недель',
            moq: '',
            price: 42.75,
        },
        {
            key: '3',
            image: 'https://www.wago.com/medias/1024-020000010001bf97000100b6-DE.jpg?context=bWFzdGVyfGltYWdlc3w4NDA3M3xpbWFnZS9qcGVnfGg5Mi9oZTgvMTM4MDM1NzE5MzczMTAvMTAyNF8wMjAwMDAwMTAwMDFiZjk3MDAwMTAwYjZfREUuanBnfDA3ZDg0NTU1OTAwMDI0MjFiYmNhZDUyZjNiYjEwM2ZmMzY2MzcwYWZjYzhmNmIwZmJmOGJjMGEyNjZhOTcwNGI',
            name: 'YR2.DIODE',
            description: 'DIN Rail Diode Module for use with Y Series',
            provider: 'Allchips',
            country: 'CN',
            time_delivery: '8 недель',
            moq: '10',
            price: 25.11,
        },
        {
            key: '4',
            image: 'https://www.mouser.com/images/marketingid/2019/img/117150561.png?v=070223.0416',
            name: 'REFAUDIODMA12070PTOBO1',
            description: 'Evaluation Board for MA12040P Series',
            provider: 'Chip One Stop',
            country: 'CN',
            time_delivery: '8 недель',
            moq: '100',
            price: 101.20,
        },
        {
            key: '5',
            image: 'https://www.heliosps.com.au/wp-content/uploads/sites/2/2017/06/HPS-PS-DIN-DLP-PU.png',
            name: 'YRM2.DIODE',
            description: 'DIN Rail Diode Module for use with Y Series',
            provider: 'Mouser',
            country: 'US',
            time_delivery: '8 недель',
            moq: '1',
            price: 40.3,
        },
    ];

    return (
        <section className="bascket">
            <Divider className="bascket-devider" orientation="left">
                <h4>Ваша корзина</h4>
            </Divider>
            <Space size="middle" className='bascket__top-buttons'>
                <Button type="link">Скачать корзину</Button>
                <Button type="primary" size={"middle"}>Сохранить</Button>
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
                expandable={{
                    expandedRowRender,
                    defaultExpandedRowKeys: ['0'],
                }}
                dataSource={data}
                bordered
                className='table'
                scroll={{
                    x: 1000,
                }}
                pagination={false}
            />
            <Space direction={'vertical'} className='bascket__totalblock'>
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
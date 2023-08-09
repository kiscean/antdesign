import React, {useState} from "react";
import './Tables.css';

import {Button, Col, Drawer, InputNumber, message, Rate, Row, Space, Statistic, Table, Tag} from "antd";
import {
    CheckOutlined,
    DeleteOutlined,
    FilePdfFilled,
    HeartFilled,
    HeartOutlined,
    PlusOutlined
} from "@ant-design/icons";

import {data_components} from "../../assets/componentsArray";
import {data_basket} from "../../assets/basketArray";

const TablesForSale = () => {

    const [open, setOpen] = useState(false);
    const [placement] = useState('right');

    const onClose = () => {
        setOpen(false);
    };
    const showDrawer = () => {
        setOpen(true);
    };

    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Товар добавлен в корзину',
        });
    };

    const onChange = (value) => {
        console.log('changed', value);
    };

    const columns_components = [
        {
            title: 'Компонент',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => (
                <Space size="middle">
                    <img src={record.image} alt={'#'} className='component__image' />
                    <Row>
                        <Col span={24}>
                            <a>{record.name}</a>
                        </Col>
                        <Col span={24}>
                            <p>{record.discription}</p>
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
                    {
                        record.file==='PDF' ? <a><FilePdfFilled /> PDF</a> : ''
                    }
                </Space>
            ),
            width: '10ch'
        },
        {
            title: 'Рейтинг',
            dataIndex: 'rating',
            key: 'rating',
            render: (_, record) => (
                <Rate disabled defaultValue={record.rating} className='component__rate'/>
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
                <Tag color={color} key={tag} className='component__tag'>
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
                    {
                        record.action==='1' ? <a onClick={showDrawer} className='component__backet-active'><CheckOutlined /> В корзине</a> : <Space>{contextHolder}<Button onClick={success}><PlusOutlined /> Добавить в корзину</Button></Space>
                    }
                </Space>

            ),
            width: '25ch',
        },
        {
            key: 'heart',
            render: (_, record) => (
                <Space size="middle">
                    {
                        record.heart==='1' ? <a><HeartFilled className='component__heart-active'/></a> : <a><HeartOutlined /></a>
                    }
                </Space>
            ),
            width: '5ch'
        },
    ];

    const columns_basket = [
        {
            title: 'Компонент',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => (
                <Space size="middle">
                    <img src={record.image} alt={'#'} className='component__image' />
                    <Row>
                        <Col span={24}>
                            <a>{record.name}</a>
                        </Col>
                        <Col span={24}>
                            <p>{record.discription}</p>
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
                    <InputNumber size="small" min={1} max={1000} defaultValue={23} onChange={onChange} style={{width: 60}} />
                </Space>
            ),
            width: '60px',
        },
        {
            render: (_) => (
                <Space>
                    <a><DeleteOutlined /></a>
                </Space>
            ),
            width: 10
        },
    ];

    return (
        <component>
            <section className='search-results'>
                <div>
                    <Table
                        columns={columns_components}
                        dataSource={data_components}
                        scroll={{
                            x: 1000,
                        }}
                    />
                </div>
            </section>
            <Drawer
                title="Ваша корзина"
                placement={placement}
                width={500}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>Перейти</Button>
                        <Button type="primary" onClick={onClose}>
                            OK
                        </Button>
                    </Space>
                }
            >
                <Table
                    columns={columns_basket}
                    dataSource={data_basket}
                    bordered
                    size="small" />
                <Space direction={"vertical"}>
                    <Row justify={"start"}>
                        <Col span={16}>
                            <p>Кол-во</p>
                        </Col>
                        <Col span={8}>
                            <p><span>46</span> шт.</p>
                        </Col>
                        <Col span={16}>
                            <p>Налог НДС 20%</p>
                        </Col>
                        <Col span={8}>
                            <p><span>345</span> руб.</p>
                        </Col>
                    </Row>
                    <Statistic className='basket-right__total' title="ИТОГО (включая НДС 20%)" value={2070} precision={2} />
                    <Button
                        style={{
                            marginTop: 16,
                        }}
                        type="primary"
                    >
                        Перейти к оформлению
                    </Button>
                </Space>
            </Drawer>
        </component>
    );
};

export default TablesForSale;


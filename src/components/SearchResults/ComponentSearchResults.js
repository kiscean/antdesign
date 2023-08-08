import React, {useState} from 'react';
import './SearchResults.css';

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchEKB from "../SearchEKB/SearchEKB";

import { Content } from "antd/es/layout/layout";
import {
    CheckOutlined,
    FilePdfFilled,
    HeartFilled,
    HeartOutlined,
    HomeOutlined,
    PlusOutlined
} from '@ant-design/icons';
import {Breadcrumb, Button, Col, Divider, Rate, Row, Space, Table, Tag, message, Drawer, Radio,} from "antd";

const ComponentSearchResults = () => {

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
    const showDrawer = () => {
        setOpen(true);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };
    const onClose = () => {
        setOpen(false);
    };

    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Товар добавлен в корзину',
        });
    };

    const columns = [
        {
            title: 'Компонент',
            dataIndex: 'name',
            key: 'name',
            render: (_, record) => (
                <Space size="middle">
                    <img src={record.image} className='component__image' />
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
            width: '70ch',

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
            width: '19ch',
            sorter: (a, b) => a.rating - b.rating,
        },
        {
            title: 'Производитель',
            dataIndex: 'production',
            key: 'production',
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
            width: '25ch'
        },
        {
            title: 'Избранное',
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

    const data = [
        {
            key: '1',
            image: 'https://static.chipdip.ru/lib/211/DOC001211284.jpg',
            name: 'К10-17А М47',
            discription: 'Конденсатор керамический выводной М47 6.8пФ, 20%',
            file: 'PDF',
            rating: '3',
            production: 'Россия, ОАО Завод деталей',
            tags: ['в наличии', 'быстрая доставка'],
            action: '',
            heart: '1',
        },
        {
            key: '2',
            image: 'https://static.chipdip.ru/lib/294/DOC005294472.jpg',
            name: '78D05L',
            discription: 'Стабилизатор напряжения +5В 1А',
            file: 'PDF',
            rating: '4',
            production: 'USA, ElectricAdvence',
            tags: ['под заказ'],
            action: '',
            heart: '0',
        },
        {
            key: '3',
            image: 'https://static.chipdip.ru/lib/313/DOC005313873.jpg',
            name: '1N4148WS-7-F',
            discription: 'Диод 150мА 75В [SOD-323]',
            file: 'PDF',
            rating: '4',
            production: 'Россия, ОАО Завод деталей',
            tags: ['в наличии', 'быстрая доставка'],
            action: '1',
            heart: '0',
        },
        {
            key: '4',
            image: 'https://static.chipdip.ru/lib/464/DOC002464721.jpg',
            name: '2А517А-2',
            discription: 'Диод СВЧ',
            file: 'PDF',
            rating: '3',
            production: 'Россия, ОАО Завод деталей',
            tags: ['в наличии', 'быстрая доставка'],
            action: '1',
            heart: '0',
        },
        {
            key: '5',
            image: 'https://static.chipdip.ru/lib/036/DOC024036278.jpg',
            name: 'BAR6304WH6327XTSA1',
            discription: 'Электроэлемент PIN DIODE, AEC-Q101, 50V, 0.1A, SOT-323',
            file: '',
            rating: '5',
            production: 'USA, ElectricAdvence',
            tags: ['под заказ'],
            action: '',
            heart: '1',
        },
        {
            key: '6',
            image: 'https://static.chipdip.ru/lib/243/DOC004243462.jpg',
            name: 'TDR-240-24',
            discription: 'Блок питания, вход: 3-фазное 340-550В, выход: 24В,10А,240Вт',
            file: 'PDF',
            rating: '4',
            production: 'Россия, ОАО Завод деталей',
            tags: ['в наличии', 'быстрая доставка'],
            action: '',
            heart: '1',
        },
        {
            key: '7',
            image: 'https://static.chipdip.ru/lib/304/DOC005304605.jpg',
            name: 'TZC3P200A110',
            discription: '5-20пФ, SMD конденсатор подстроечный',
            file: 'PDF',
            rating: '4',
            production: 'Россия, ОАО Завод деталей',
            tags: ['в наличии', 'быстрая доставка'],
            action: '',
            heart: '0',
        },
        {
            key: '8',
            image: 'https://static.chipdip.ru/lib/337/DOC004337152.jpg',
            name: 'JYC3D471KBB',
            discription: '470 пФ, 2 кВ, 10%, Y5P, D=6.5мм, Конденсатор керамический дисковый',
            file: '',
            rating: '1',
            production: 'USA, ElectricAdvence',
            tags: ['под заказ'],
            action: '',
            heart: '0',
        },
        {
            key: '9',
            image: 'https://static.chipdip.ru/lib/638/DOC021638278.jpg',
            name: 'CK45-R3DD102K-VRAF',
            discription: 'Конденсатор керамический дисковый, напряжение 2000, емкость 1000P, отклонение K, вид керамики R',
            file: 'PDF',
            rating: '4',
            production: 'USA, ElectricAdvence',
            tags: ['под заказ'],
            action: '',
            heart: '0',
        },
        {
            key: '10',
            image: 'https://static.chipdip.ru/lib/193/DOC001193601.jpg',
            name: 'HC-49U',
            discription: 'Кварцевый резонатор',
            file: 'PDF',
            rating: '4',
            production: 'USA, ElectricAdvence',
            tags: ['под заказ'],
            action: '',
            heart: '0',
        },
        {
            key: '11',
            image: 'https://static.chipdip.ru/lib/638/DOC021638278.jpg',
            name: 'CK45-R3DD102K-VRAF',
            discription: 'Конденсатор керамический дисковый, напряжение 2000, емкость 1000P, отклонение K, вид керамики R',
            file: 'PDF',
            rating: '3',
            production: 'USA, ElectricAdvence',
            tags: ['под заказ'],
            action: '',
            heart: '0',
        },
        {
            key: '12',
            image: 'https://static.chipdip.ru/lib/256/DOC031256591.jpg',
            name: 'К53-4Т',
            discription: '3.3мкФ 16в 20%, Конденсатор ниобиевый оксидно-полупроводниковый',
            file: 'PDF',
            rating: '3',
            production: 'Россия, ОАО Завод деталей',
            tags: ['в наличии', 'быстрая доставка'],
            action: '',
            heart: '1',
        },

    ];

    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });

    return (
        <section>
            <Header />
            <SearchEKB />
            <Content className='container'>
                <Breadcrumb
                    className='routing-path'
                    items={[
                        {
                            href: '',
                            title: <HomeOutlined />,
                        },
                        {
                            href: '',
                            title: (
                                <>
                                    <span>Все категории</span>
                                </>
                            ),
                        },
                        {
                            title: 'Оптоэлектроника',
                        },
                    ]}
                />
                <section className='category-nestedlist'>
                    <Divider orientation="left"><h4>Оптоэлектроника</h4></Divider>


                </section>
                <section className='search-results'>
                    <div>
                        <Table
                            columns={columns}
                            dataSource={data}
                        />
                    </div>
                </section>
            </Content>
            <Space>
                <Radio.Group value={placement} onChange={onChange}>
                    <Radio value="top">top</Radio>
                    <Radio value="right">right</Radio>
                    <Radio value="bottom">bottom</Radio>
                    <Radio value="left">left</Radio>
                </Radio.Group>
                <Button type="primary" onClick={showDrawer}>
                    Open
                </Button>
            </Space>
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
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <Footer />
        </section>
    );
};

export default ComponentSearchResults;
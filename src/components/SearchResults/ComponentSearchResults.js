import React, {useState} from 'react';
import './SearchResults.css';

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchEKB from "../SearchEKB/SearchEKB";

import { Content } from "antd/es/layout/layout";
import {DownloadOutlined, HomeOutlined} from '@ant-design/icons';
import { Breadcrumb, Pagination, Radio, Space, Table, Tag } from "antd";

const ComponentSearchResults = () => {

    const columns = [
        {
            title: 'Компонент',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Файл',
            key: 'file',
            render: (_, record) => (
                <Space size="middle">
                    <a><DownloadOutlined />{record.file}</a>
                </Space>
            )
        },
        {
            title: 'Производитель',
            dataIndex: 'production',
            key: 'production',
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
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        })}
      </span>
            ),
        },
        {
            title: 'Покупка',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Добавить в корзину</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            file: 'PDF',
            production: 'New York No. 1 Lake Park',
            tags: ['в наличии', 'быстрая доставка'],
        },
        {
            key: '2',
            name: 'Jim Green',
            file: '',
            production: 'London No. 1 Lake Park',
            tags: ['под заказ'],
        },
        {
            key: '3',
            name: 'Joe Black',
            file: 'PDF',
            production: 'Sydney No. 1 Lake Park',
            tags: ['в наличии', 'быстрая доставка'],
        },
    ];

    const [top, setTop] = useState('topRight');
    const [bottom, setBottom] = useState('bottomRight');

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
            </Content>
            <section className='category-nestedlist'>
                <h3>Оптоэлектроника</h3>


            </section>
            <section className='search-results'>
                <div>
                    <Table
                        columns={columns}
                        pagination={{
                            position: [top, bottom],
                            pageSize: 10,
                            current: 1,
                        }}
                        dataSource={data}
                    />
                </div>

                <Pagination
                    total={85}
                    showSizeChanger
                    showQuickJumper
                    showTotal={(total) => `Total ${total} items`}
                />
            </section>
            <Footer />
        </section>
    );
};

export default ComponentSearchResults;
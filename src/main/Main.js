import React, {useState} from "react";
import {
    Dropdown,
    Space,
    Col,
    Layout,
    Menu,
    Row,
    theme
} from 'antd';
import SearchEKB from "./search/SearchEKB";
import CategoriesEKB from "./categories/CategoriesEKB";
import logo from "../static/img/ekb_portal_logo.png"
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                Профиль
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                Настройки партнера
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="#">
                История заказов
            </a>
        ),
        disabled: true,
    },
    {
        key: '4',
        danger: true,
        label: 'Выйти',
    },
];

const Main = () => {

    const MenuItems = [
        {Icon: "<NotificationOutlined />", Name: "Опыт инженеров", Link: '#'},
        {Icon: "<FireOutlined />", Name: "Популярное", Link: '#'},
        {Icon: "<BarsOutlined />", Name: "Категории", Link: '#'},
        {Icon: "<ToolOutlined />", Name: "Помощь", Link: '#'},
    ];

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>
        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Row justify="center"
                    style={{
                        height: '13ch',
                        width: '100vw',
                        alignItems: "center",
                    }}
                >
                    <Col span={8}>
                        <div
                            style={{
                                marginTop: "3.5ch",
                                marginRight: "10ch",
                            }}
                        >
                            <img src={logo} width={"250"} height={"40"}/>
                        </div>
                    </Col>
                    <Col span={8}>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['4']}
                            items={MenuItems.map((item) => {
                                const key = item.Name;
                                return {
                                    key,
                                    label: `${key}`,
                                };
                            })}
                        />

                    </Col>
                    <Col span={8}>
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Hover me
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </Col>
                </Row>
            </Header>
            <Content
                style={{
                    textAlign: "center",
                }}
            >
                <SearchEKB />
            </Content>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <CategoriesEKB />
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Маркетплейс ЭКБ ©2023 Проект АО ЗАСЛОН
            </Footer>
        </Layout>
        </>
    );
};

export default Main;
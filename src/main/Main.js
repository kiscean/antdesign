import React from "react";
import {
    Layout,
    Menu,
    theme
} from 'antd';
import SearchEKB from "./search/SearchEKB";
import CategoriesEKB from "./categories/CategoriesEKB";
import logo from "../static/img/ekb_portal_logo.png"


const { Header, Content, Footer } = Layout;

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
        <Layout className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        marginTop: "3.5ch",
                        marginRight: "10ch",
                    }}
                >
                    <img src={logo} width={"250"} height={"40"}/>
                </div>
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
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                    textAlign: "center",
                    marginTop: "20ch",
                    height: "10vw",

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
    );
};

export default Main;
import React, {useState} from 'react';
import {Dropdown, Space, Col, Layout, Menu, Row, Avatar, Divider} from 'antd';
import {
    AppstoreOutlined,
    DownOutlined,
    ShoppingCartOutlined,
    IssuesCloseOutlined,
    SmileOutlined,
    HeartOutlined,
    ImportOutlined,
} from '@ant-design/icons';
import { items, menuItems } from '../../assets/constants';
import './Main.css';

import SearchEKB from '../SearchEKB/SearchEKB';
import CategoriesEKB from '../CategoriesEKB/CategoriesEKB';
import PopProducts from "../PopProducts/PopProducts";

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const rightmenuItems = [
    getItem('ОчумелыеРучки', '6', <SmileOutlined />, [
        getItem('Профиль', '7'),
        getItem('Кабинет клиента', '8'),
    ]),
    getItem('Избранное', '9', <HeartOutlined />),
    getItem('Меню сайта', '10', <AppstoreOutlined />, [
        getItem('Опыт инжинеров', '11'),
        getItem('Популярное', '12'),
        getItem('Категории', '13'),
    ]),
    getItem(
        <a href="https://avatars.mds.yandex.net/i?id=89987775783b0069dbf4acf35505bec60780ce40-8497233-images-thumbs&n=13" target="_blank" rel="noopener noreferrer">
            Тех поддержка
        </a>,
        'link',
        <IssuesCloseOutlined />,
    ),
    getItem('Выйти', '14', <ImportOutlined />),
];

const { Header, Content, Footer } = Layout;

const Main = () => {

    const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <Layout className="layout">
        <Header
            className={'navbar'}
        >
            <Space direction={"horizontal"} className={'container'}>
                <Space direction="horizontal">
                    <div
                        className={'logo'}
                    >
                        <h1>
                            <a href={'#'} className={'logo__a'}>
                                ЭКБ
                            </a>
                        </h1>
                    </div>

                    <div
                        className={'logo__slogan'}
                    >
                        <p>Маркетплейс <br /> для инженеров</p>
                    </div>
                </Space>
                <Col span={24} className='navbar__menu'>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['4']}
                        items={
                            menuItems.map((item) => {
                                    const key = item.name;
                                    return {
                                        key,
                                        label: `${key}`,
                                    };
                                })}
                    />
                </Col>
                <div className={'header-user'}>
                    <Space direction={"horizontal"}>
                        <ShoppingCartOutlined className={'navbar-basket'}/>
                        <Avatar
                            className={'navbar-user__icon'}
                        >
                            OR
                        </Avatar>
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <Space className={'navbar-user'}>
                                ОчумелыеРучки
                                <DownOutlined />
                            </Space>
                        </Dropdown>
                    </Space>
                </div>
            </Space>
        </Header>
        <Space direction={"horizontal"}
            style={{
                alignContent: "right",
                alignItems: "right",

            }}
        >
              <Menu
                  style={{
                      width: 256,
                      position: 'absolute',
                      zIndex: 99,
                      height: '100%',
                      paddingTop: '8ch',
                  }}
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode={'inline'}
                  theme={"light"}
                  items={rightmenuItems}
              />
        </Space>

        <Content style={{ textAlign: 'center' }}>
          <SearchEKB />
        </Content>

        <Content style={{ textAlign: 'center' }}>
            <PopProducts />
        </Content>

        <Content style={{ textAlign: "center" }}>
          <CategoriesEKB />
        </Content>

        <Footer style={{ textAlign: 'center' }}>
            <Row gutter={1}>
                <Col span={24}>
                    Маркетплейс ЭКБ &copy; 2023 ООО Банда
                </Col>
                <Col span={24}
                    style={{
                        marginTop: '2ch',
                    }}
                >
                    <a href="#">О проекте</a>
                    <Divider type="vertical" />
                    <a href="#">Карьера</a>
                    <Divider type="vertical" />
                    <a href="#">Сертификаты</a>
                    <Divider type="vertical" />
                    <a href="#">Тех поддержка</a>
                </Col>
            </Row>
        </Footer>
      </Layout>
    </>
  );
};

export default Main;

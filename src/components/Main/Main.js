import React, {useState} from 'react';
import {Dropdown, Space, Col, Layout, Menu, Row, Avatar, Divider} from 'antd';
import {
    DownOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';
import { items, menuItems } from '../../assets/constants';
import './Main.css';

import SearchEKB from '../SearchEKB/SearchEKB';
import CategoriesEKB from '../CategoriesEKB/CategoriesEKB';
import PopProducts from "../PopProducts/PopProducts";
import RightMenu from "../RightMenu/RightMenu";

const { Header, Content, Footer } = Layout;

const Main = () => {

    const [menuActive, setMenuActive] = useState(false)

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
                <Space direction={"horizontal"} size={20}>
                    <ShoppingCartOutlined className={'navbar-basket'}/>

                    <Space className='navbar-user__full'>
                        <Avatar
                            className='navbar-user__icon'
                        >
                            OR
                        </Avatar>
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <Space className={'navbar-user__name'}>
                                ОчумелыеРучки
                                <DownOutlined />
                            </Space>
                        </Dropdown>
                    </Space>

                    <div className='navbar-user__rightmenu' onClick={() => setMenuActive(!menuActive)}>
                        <Avatar
                            className='navbar-user__icon'
                        >
                            OR
                        </Avatar>
                        <DownOutlined className='navbar-user__rightmenuicon'/>
                    </div>

                </Space>
            </Space>
        </Header>
        <RightMenu active={menuActive} setActive={setMenuActive}/>

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

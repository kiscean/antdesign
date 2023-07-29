import React from 'react';
import { Dropdown, Space, Col, Layout, Menu, Row, Avatar, Divider } from 'antd';
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { items, menuItems } from '../../assets/constants';
import './Main.css';

import SearchEKB from '../SearchEKB/SearchEKB';
import CategoriesEKB from '../CategoriesEKB/CategoriesEKB';
import PopProducts from '../PopProducts/PopProducts';
import RightMenu from '../RightMenu/RightMenu';

const { Header, Content, Footer } = Layout;

const Main = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  const onClickBurger = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <Layout className="layout">
        <Header className="header">
          <Space direction="horizontal" className="header__container">
            <Space direction="horizontal">
              <div className="header__logo">
                <h1>
                  <a href="#" className="header__logo-link">
                    ЭКБ
                  </a>
                </h1>
              </div>

              <span className="header__logo-description">
                Маркетплейс <br /> для инженеров
              </span>
            </Space>

            <Col span={24} className="header__menu">
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['4']}
                items={menuItems.map((item) => {
                  const key = item.name;
                  return {
                    key,
                    label: `${key}`,
                  };
                })}
              />
            </Col>
            <Space direction="horizontal" size={20}>
              <ShoppingCartOutlined className="header__basket-logo" />

              <Space className="header__user-info">
                <Avatar className="header__user-icon">MC</Avatar>
                <Dropdown
                  menu={{
                    items,
                  }}>
                  <Space className="header__user-name">
                    МояКомпания
                    <DownOutlined />
                  </Space>
                </Dropdown>
              </Space>

              <div className="header__burger-menu" onClick={onClickBurger}>
                <Avatar className="header__user-icon">MC</Avatar>
                <DownOutlined className="header__down-arrow" />
              </div>
            </Space>
          </Space>
        </Header>

        <RightMenu active={menuActive} />

        <SearchEKB />

        <Content style={{ textAlign: 'center' }}>
          <PopProducts />
        </Content>

        <Content style={{ textAlign: 'center' }}>
          <CategoriesEKB />
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          <Row gutter={1}>
            <Col span={24}>Маркетплейс ЭКБ &copy; 2023 ООО Компания</Col>
            <Col
              span={24}
              style={{
                marginTop: '2ch',
              }}>
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

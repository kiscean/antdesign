import React from 'react';
import { Dropdown, Space, Col, Layout, Menu, Row, Avatar, Divider } from 'antd';
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { items, menuItems } from '../../assets/constants';
import './Main.css';

import Header from '../Header/Header';
import SearchEKB from '../SearchEKB/SearchEKB';
import CategoriesEKB from '../CategoriesEKB/CategoriesEKB';
import PopProducts from '../PopProducts/PopProducts';
import RightMenu from '../RightMenu/RightMenu';

const { Footer } = Layout;

const Main = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  const onClickBurger = () => {
    setMenuActive(!menuActive);
  };

  return (
    <Layout className="layout">
      <Header onClickBurger={onClickBurger} />
      <RightMenu active={menuActive} />
      <SearchEKB />
      <PopProducts />

      <CategoriesEKB />

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
  );
};

export default Main;

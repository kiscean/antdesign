import React from 'react';
import './Header.css';

import { Dropdown, Space, Col, Layout, Menu, Avatar, Badge } from 'antd';
import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { items, menuItems } from '../../assets/constants';

const Header = ({ onOpen }) => {
  const { Header } = Layout;

  return (
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
          <Badge
            color="#ec386e"
            size="small"
            count={5}
            className="header__backet-badge">
            <ShoppingCartOutlined className="header__basket-logo" />
          </Badge>
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

          <div className="header__burger-menu" onClick={onOpen}>
            <Avatar className="header__user-icon">MC</Avatar>
            <DownOutlined className="header__down-arrow" />
          </div>
        </Space>
      </Space>
    </Header>
  );
};

export default Header;

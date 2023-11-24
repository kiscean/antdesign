import React from 'react';
import './Header.css';

import { Dropdown, Space, Col, Layout, Menu, Avatar, Badge } from 'antd';
import {
  AuditOutlined,
  ExportOutlined,
  HeartOutlined,
  HomeOutlined,
  DownOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

import useResize from '../../hooks/useResize';

const Header = ({ onOpen }) => {
  const { pathname } = useLocation();
  const { Header } = Layout;

  const menuItems = [
    { name: 'Опыт инженеров', link: '#' },
    { name: 'Популярное', link: '#' },
    { name: 'Категории', link: '#' },
    { name: 'Помощь', link: '#' },
  ];

  const items = [
    {
      key: '1',
      label: <Link to="/user-profile">Профиль</Link>,
      icon: <HomeOutlined />,
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Избранное
        </a>
      ),
      icon: <HeartOutlined />,
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Кабинет клиента
        </a>
      ),
      icon: <AuditOutlined />,
    },
    {
      key: '4',
      danger: true,
      label: <Link to="/sign-in">Выйти</Link>,
      icon: <ExportOutlined />,
    },
  ];

  let size = useResize();

  return (
    <Header className="header">
      <Space direction="horizontal" className="header__container">
        <Space direction="horizontal">
          <div className="header__logo">
            <h1>
              <Link to="/" className="header__logo-link">
                ЭКБ
              </Link>
            </h1>
          </div>

          <span className="header__logo-description">
            Маркетплейс <br /> для инженеров
          </span>
        </Space>

        {size.width > 1050 &&
          (pathname === '/sign-in' ? (
            ''
          ) : (
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
          ))}

        {pathname === '/sign-in' ? (
          ''
        ) : (
          <Space direction="horizontal" size={20}>
            <Link to="/cart">
              <Badge
                color="#ec386e"
                size="small"
                count={5}
                className="header__basket-badge">
                <ShoppingCartOutlined className="header__basket-logo" />
              </Badge>
            </Link>
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
        )}
      </Space>
    </Header>
  );
};

export default Header;

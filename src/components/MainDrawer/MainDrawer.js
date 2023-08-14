import React from 'react';
import './MainDrawer.css';

import { Avatar, Drawer, Menu } from 'antd';
import {
  AppstoreOutlined,
  HeartOutlined,
  ImportOutlined,
  IssuesCloseOutlined,
} from '@ant-design/icons';

const MainDrawer = ({ menuActive, onClose }) => {
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const mainDrawerItems = [
    getItem(
      <div className="navbar__rightmenuname">МояКомпания</div>,
      'sub1',
      <Avatar className="navbar__rightmenuicon">MC</Avatar>,
      [getItem('Профиль', '6'), getItem('Кабинет клиента', '7')],
    ),
    getItem('Избранное', '8', <HeartOutlined />),
    getItem('Меню сайта', 'sub2', <AppstoreOutlined />, [
      getItem('Опыт инженеров', '9'),
      getItem('Популярное', '10'),
      getItem('Категории', '11'),
    ]),
    getItem(
      <a href="#" target="_blank" rel="noopener noreferrer">
        Тех поддержка
      </a>,
      'link',
      <IssuesCloseOutlined />,
    ),
    getItem('Выйти', '12', <ImportOutlined />),
  ];

  return (
    <>
      <Drawer
        title="Навигация"
        placement="right"
        onClose={onClose}
        open={menuActive}>
        <Menu
          defaultOpenKeys={['sub1']}
          mode={'inline'}
          theme={'light'}
          items={mainDrawerItems}
          style={{
            borderRight: 'none',
          }}
        />
      </Drawer>
    </>
  );
};
export default MainDrawer;

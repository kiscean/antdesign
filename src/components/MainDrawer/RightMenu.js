import React from 'react';
import { Avatar, Menu } from 'antd';
import {
  AppstoreOutlined,
  HeartOutlined,
  ImportOutlined,
  IssuesCloseOutlined,
} from '@ant-design/icons';
import './MainDrawer.css';

const RightMenu = ({ active }) => {
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const rightmenuItems = [
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
      <Menu
        className={`drawer ${active ? '' : 'drawer_active'}`}
        defaultOpenKeys={['sub1']}
        mode={'inline'}
        theme={'light'}
        items={rightmenuItems}
      />
      <div
        className={`drawer__background ${
          active ? '' : 'drawer__background_active'
        }`}></div>
    </>
  );
};

export default RightMenu;

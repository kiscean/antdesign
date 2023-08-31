import React from 'react';
import './UserProfile.css';

import { Layout, Avatar } from 'antd';
import { UserOutlined, SmileOutlined } from '@ant-design/icons';

function UserProfile() {
  return (
    <Layout className="user-profile">
      <div className="left-side">
        <h2 className="left-side__title">Иванов Иван Иванович</h2>
        <Avatar
          size={180}
          icon={<UserOutlined />}
          className="left-side__avatar"
        />
        <ul className="list-one">
          <li className="list-one__point">
            <span className="list-one__span">Личная информация</span>
          </li>
          <li className="list-one__point">Контактные данные</li>
          <li className="list-one__point">Данные предприятия</li>
        </ul>
        <ul className="list-two">
          <li className="list-two__point">
            <span className="list-two__span">Заказы</span>
          </li>
          <li className="list-two__point">Моя корзина</li>
          <li className="list-two__point">Мои заказы</li>
        </ul>
      </div>

      <div className="right-side">
        <h2 className="right-side__title">Контактные данные</h2>

        <p className="right-side__description">
          Здесь вы можете менять данные своей учётной записи и управлять
          аккаунтом.
        </p>
      </div>
    </Layout>
  );
}

export default UserProfile;

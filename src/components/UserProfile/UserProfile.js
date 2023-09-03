import React from 'react';
import './UserProfile.css';

import { Layout, Avatar } from 'antd';
import { Button, Select, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function UserProfile() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        defaultValue={'+7'}
        style={{
          width: 75,
        }}>
        <Option value="russia">+7</Option>
        <Option value="375">+375</Option>
        <Option value="994">+994</Option>
        <Option value="374">+374</Option>
        <Option value="996">+996</Option>
        <Option value="992">+992</Option>
        <Option value="993">+993</Option>
        <Option value="998">+998</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Layout className="user-profile">
      <div className="left-side">
        <h2 className="left-side__title">Профиль</h2>
        <Avatar
          size={200}
          icon={<UserOutlined />}
          className="left-side__avatar"
        />
        <ul className="list-one">
          <li>
            <span className="list-one__span">Личная информация</span>
          </li>
          <li>
            <a className="list-one__point" href="#">
              Контактные данные
            </a>
          </li>
          <li>
            <a className="list-one__point" href="#">
              Данные предприятия
            </a>
          </li>
        </ul>
        <ul className="list-two">
          <li>
            <span className="list-two__span">Заказы</span>
          </li>
          <li>
            <a className="list-two__point" href="#">
              Моя корзина
            </a>
          </li>
          <li>
            <a className="list-two__point" href="#">
              Мои заказы
            </a>
          </li>
        </ul>
      </div>

      <div className="right-side">
        <h2 className="right-side__title">Контактные данные</h2>

        <p className="right-side__description">
          Здесь вы можете менять данные своей учётной записи и управлять
          аккаунтом.
        </p>

        <Form
          className="right-side__user-data"
          name="user-data"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}>
          <Form.Item label="Фамилия" name="surname">
            <Input defaultValue="Иванов" />
          </Form.Item>

          <Form.Item label="Имя" name="name">
            <Input defaultValue="Иван" />
          </Form.Item>

          <Form.Item label="Отчество" name="middle-name">
            <Input defaultValue="Ивананович" />
          </Form.Item>

          <Form.Item label="Телефон" name="number">
            <Input addonBefore={prefixSelector} defaultValue="921-635-85-64" />
            <a className="right-side__password" href="#">
              Изменить пароль
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="right-side__user-button">
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
}

export default UserProfile;

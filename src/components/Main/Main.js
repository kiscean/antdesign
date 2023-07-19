import React from 'react';
import { Dropdown, Space, Col, Layout, Menu, Row, Avatar } from 'antd';
import logo from '../../assets/img/ekb_portal_logo.png';
import { DownOutlined } from '@ant-design/icons';
import { items, menuItems } from '../../assets/constants';

import SearchEKB from '../SearchEKB/SearchEKB';
import CategoriesEKB from '../CategoriesEKB/CategoriesEKB';

const { Header, Content, Footer } = Layout;

const Main = () => {
  return (
    <>
      <Layout className="layout">
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            position: "fixed",
            zIndex: '100',
            width: '100vw',
          }}>
          <Row
            style={{
              height: '13ch',
              width: '300ch',
              alignItems: 'center',
            }}>
            <Col span={8}>
              <div
                style={{
                  marginTop: '3.5ch',
                  marginRight: '10ch',
                }}>
                <a href="#" style={{ cursor: 'pointer' }} target="_blank">
                  <img src={logo} width={'250'} height={'40'} alt="logo" />
                </a>
              </div>
            </Col>
            <Col span={8}>
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
            <Col span={8}
                 style={{
                     textAlign: "end"
                 }}
            >
               <Avatar
                   style={{
                       backgroundColor: '#7fcdea',
                       color: '#05112c',
                       marginRight: '1.5ch',
                       marginTop: '-0.5ch',
                   }}
               >
                   ZA
               </Avatar>
              <Dropdown
                menu={{
                  items,
                }}>
                <span style={{ color: 'white', cursor: 'pointer' }}>
                  <Space>
                    АО ЗАСЛОН
                    <DownOutlined />
                  </Space>
                </span>
              </Dropdown>
            </Col>
          </Row>
        </Header>

        <Content style={{ textAlign: 'center' }}>
          <SearchEKB />
        </Content>

        <Content style={{ padding: '0 50px' }}>
          <CategoriesEKB />
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Маркетплейс ЭКБ &copy; 2023 Проект АО ЗАСЛОН
        </Footer>
      </Layout>
    </>
  );
};

export default Main;

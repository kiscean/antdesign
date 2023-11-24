import React from 'react';
import './Footer.css';

import { Col, Row, Divider, Layout } from 'antd';

const Footer = () => {
  const { Footer } = Layout;

  return (
    <Footer className="footer">
      <Row gutter={1}>
        <Col span={24}>Маркетплейс ТАБЛО &copy; 2023 ООО Компания</Col>
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
  );
};

export default Footer;

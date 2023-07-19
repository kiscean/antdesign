import React from 'react';
import { Card, Space } from 'antd';
import { Col, Divider, Row } from 'antd';
import lines from '../../assets/img/line.png';
import { popularCards } from '../../assets/popularCardsArray';

const style = {
  padding: '8px 0',
};

const CategoriesEKB = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <Divider orientation="left">Популярные категории</Divider>
        </Col>
        <Col span={12}>
          <Divider orientation="right">
            <a href="#">все категории</a>
          </Divider>
        </Col>
      </Row>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        align={'middle'}>
        {popularCards.map((card) => (
          <Col className="gutter-row" span={4.8}>
            <div style={style}>
              <Space direction="vertical" size={16}>
                <Card
                  key={card.title}
                  size="small"
                  title={card.title}
                  extra={
                    <a href="#" target="_blank">
                      {card.sum}
                    </a>
                  }
                  style={{
                    width: 400,
                    height: 150,
                    backgroundImage: `url(${lines})`,
                    position: 'relative',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: '0% -130%',
                  }}>
                  <Col span={18}>
                    <h5>Инженеры рекомендуют:</h5>
                    <a href="#">{card.name}</a>
                    <p>{card.description}</p>
                  </Col>
                </Card>
              </Space>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CategoriesEKB;

import React from 'react';
import { Card, Space } from 'antd';
import { Col, Divider, Row } from 'antd';
import { Link } from 'react-router-dom';
import { popularCards } from '../../assets/popularCardsArray';
import './CategoriesEСB.css';

const CategoriesEСB = () => {
  return (
    <section className="cards">
      <Row className="cards__dividers">
        <Col span={12}>
          <Divider orientation="left">Популярные категории</Divider>
        </Col>
        <Col span={12}>
          <Divider orientation="right">
            <Link to="/all-categories">все категории</Link>
          </Divider>
        </Col>
      </Row>

      <Space size={[10, 20]} wrap className="cards__box">
        {popularCards.map((card, i) => (
          <div key={i} className="cards__card-container">
            <Card
              key={card.title}
              size="large"
              title={card.title}
              extra={
                <a href="#" target="_blank">
                  {card.sum}
                </a>
              }
              className={'cards__card'}>
              <Space direction={'vertical'}>
                <a href="#">{card.name1}</a>
                <a href="#">{card.name2}</a>
              </Space>
            </Card>
          </div>
        ))}
      </Space>
    </section>
  );
};

export default CategoriesEСB;

import React from 'react';
import { Card, Space } from 'antd';
import { Col, Divider, Row } from 'antd';
import { popularCards } from '../../assets/popularCardsArray';
import './CategoriesEKB.css';

const style = {
  padding: '2ch 0',
  textAlign: 'start',
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
          <Row gutter={30} align={"middle"}
            style={{
                marginLeft: '5ch',
                marginRight: '5ch',
                display: "flex",
            }}
          >
              {popularCards.map((card, i) => (
                  <Col key={i}
                       className="gutter-row"
                       xs={24}
                       sm={12}
                       md={8}
                       lg={6}
                       >
                      <div style={style}>
                          <Space direction="horizontal" size={18}>
                              <Card
                                  key={card.title}
                                  size="large"
                                  title={card.title}
                                  extra={
                                      <a href="#" target="_blank">
                                          {card.sum}
                                      </a>
                                  }
                                  className={'card_bg'}
                                  >
                                  <Col span={16} >
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

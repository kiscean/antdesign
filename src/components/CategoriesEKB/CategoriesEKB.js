import React from 'react';
import { Card, Space } from 'antd';
import { Col, Divider, Row } from 'antd';
import { popularCards } from '../../assets/popularCardsArray';
import './CategoriesEKB.css';

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
          <Row align={"stretch"}
               className={"row_card_padding_categories"}>
              {popularCards.map((card, i) => (
                  <Col key={i}
                       xs={24}
                       sm={12}
                       md={12}
                       lg={8}
                       xl={6}
                       >
                      <div className={"card_pbotton"}>
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

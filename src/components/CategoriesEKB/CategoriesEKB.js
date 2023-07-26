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
        <Space size={[30, 30]} wrap className='card__box'>
              {popularCards.map((card, i) => (
                  <div key={i} className={'card__wrap'}>
                    <Card
                        key={card.title}
                        size="large"
                        title={card.title}
                        extra={
                          <a href="#" target="_blank">
                            {card.sum}
                          </a>
                        }
                        className={'card__bg'}
                    >
                      <Space direction={"vertical"}>
                        <a href="#">{card.name1}</a>
                        <a href="#">{card.name2}</a>
                      </Space>
                    </Card>
                  </div>
              ))}
        </Space>
    </>
  );
};

export default CategoriesEKB;

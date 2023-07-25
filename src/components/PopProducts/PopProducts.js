import React from 'react';
import { Col, Divider, Row, Avatar, Card, Space, Image } from 'antd';
import { DashOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import './PopProducts.css';
import useResize from '../../hooks/useResize';
import popprod1 from '../../assets/img/pop_prod_1.jpg';
import popprod2 from '../../assets/img/pop_prod_2.jpg';
import popprod3 from '../../assets/img/pop_prod_3.jpg';

const PopProducts = () => {
  let size = useResize();

  React.useEffect(() => {
    console.log(size.width);
  }, [size]);
  return (
    <>
      <Row>
        <Col span={12}>
          <Divider orientation="left">Чаще всего ищут</Divider>
        </Col>
        <Col span={12}>
          <Divider orientation="right">
            <a href="#">топ 50</a>
          </Divider>
        </Col>
      </Row>
      <Row
        justify={'center'}
        style={{
          alignSelf: 'center',
        }}>
        <Space direction="horizontal" size={size.width > 1280 ? 80 : 50}>
          <Col>
            <LeftOutlined className={'card-switch-button'} />
          </Col>
          <Col span={8}>
            <Card
              style={{
                width: 300,
              }}>
              <Row align={'middle'} gutter={20}>
                <Col span={6}>
                  <Image src={popprod1} width={'7ch'} height={'7ch'} />
                </Col>
                <Col span={18}>
                  <h3 align={'start'}>
                    <a>TGFSB</a>
                  </h3>
                  <p align={'start'}>
                    Wire Ducting & Raceways TG FIB Spool Bracket
                  </p>
                </Col>
                <Col span={24}>
                  <Row align={'bottom'}>
                    <Col span={24}>
                      <Divider />
                    </Col>
                    <Col
                      span={10}
                      style={{
                        color: 'darkgrey',
                      }}>
                      <p>5442 шт</p>
                    </Col>
                    <Col span={4}>
                      <Divider type="vertical" />
                    </Col>
                    <Col span={10}>
                      <h4>120.00 руб</h4>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{
                width: 300,
              }}>
              <Row align={'middle'} gutter={20}>
                <Col span={6}>
                  <Image src={popprod2} width={'7ch'} height={'7ch'} />
                </Col>
                <Col span={18}>
                  <h3 align={'start'}>
                    <a>HMC432E</a>
                  </h3>
                  <p align={'start'}>
                    Prescaler InGaP HBT Divide-by-2 SMT, DC - 8 GHz
                  </p>
                </Col>
                <Col span={24}>
                  <Row align={'bottom'}>
                    <Col span={24}>
                      <Divider />
                    </Col>
                    <Col
                      span={10}
                      style={{
                        color: 'darkgrey',
                      }}>
                      <p>10552 шт</p>
                    </Col>
                    <Col span={4}>
                      <Divider type="vertical" />
                    </Col>
                    <Col span={10}>
                      <h4>17.00 руб</h4>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{
                width: 300,
              }}>
              <Row align={'middle'} gutter={20}>
                <Col span={6}>
                  <Image src={popprod3} width={'7ch'} height={'7ch'} />
                </Col>
                <Col span={18}>
                  <h3 align={'start'}>
                    <a>P-TCO-U450/12-2</a>
                  </h3>
                  <p align={'start'}>
                    Термические защитные выключатели 50A 12V
                  </p>
                </Col>
                <Col span={24}>
                  <Row align={'bottom'}>
                    <Col span={24}>
                      <Divider />
                    </Col>
                    <Col
                      span={10}
                      style={{
                        color: 'darkgrey',
                      }}>
                      <p>871 шт</p>
                    </Col>
                    <Col span={4}>
                      <Divider type="vertical" />
                    </Col>
                    <Col span={10}>
                      <h4>4800.00 руб</h4>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col>
            <RightOutlined className={'card-switch-button'} />
          </Col>
        </Space>
      </Row>
      <Space direction="horizontal" className={'card-switch-lines'}>
        <DashOutlined
          className={'card-switch-lines__item card-switch-lines__active'}
        />
        <DashOutlined className={'card-switch-lines__item'} />
        <DashOutlined className={'card-switch-lines__item'} />
      </Space>
    </>
  );
};

export default PopProducts;

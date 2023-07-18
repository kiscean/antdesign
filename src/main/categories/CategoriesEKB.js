import React from "react";
import { Card, Space } from 'antd';
import { Col, Divider, Row } from 'antd';

const style = {
    padding: '8px 0',
};

const CategoriesEKB = () => {
    return (
        <>
            <Divider orientation="left">Популярные категории</Divider>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
                align={"middle"}
            >
                <Col className="gutter-row" span={4.8}>
                    <div style={style}>
                        <Space direction="vertical" size={16}>
                            <Card
                                size="small"
                                title="Оптоэлектроника"
                                extra={<a href="#">59603</a>}
                                style={{
                                    width: 400,
                                    height: 150,
                                }}
                            >
                                <Col span={18}>
                                    <h5>Инженеры рекомендуют:</h5>
                                    <a href="#">MIKROE-4943</a>
                                    <p>Optical Sensors - Development Tools Ambient 18 Click</p>
                                </Col>
                            </Card>
                        </Space>
                    </div>
                </Col>
                <Col className="gutter-row" span={4.8}>
                    <div style={style}>
                        <Space direction="vertical" size={16}>
                            <Card
                                size="small"
                                title="Полупроводниковые приборы"
                                extra={<a href="#">302619</a>}
                                style={{
                                    width: 400,
                                    height: 150,
                                }}
                            >
                                <Col span={18}>
                                    <h5>Инженеры рекомендуют:</h5>
                                    <a href="#">TPS92665QPHPRQ1</a>
                                    <p>Драйверы систем светодиодного освещения 16-channel low noise LED ...</p>
                                </Col>
                            </Card>
                        </Space>
                    </div>
                </Col>
                <Col className="gutter-row" span={4.8}>
                    <div style={style}>
                        <Space direction="vertical" size={16}>
                            <Card
                                size="small"
                                title="Пассивные компоненты"
                                extra={<a href="#">469154</a>}
                                style={{
                                    width: 400,
                                    height: 150,
                                }}
                            >
                                <Col span={18}>
                                    <h5>Инженеры рекомендуют:</h5>
                                    <a href="#">MXO45HST-2I-15M367000</a>
                                    <p>Стандартные тактовые генераторы 0015.367000 MHZ Hybrid Circuit</p>
                                </Col>
                            </Card>
                        </Space>
                    </div>
                </Col>
                <Col className="gutter-row" span={4.8}>
                    <div style={style}>
                        <Space direction="vertical" size={16}>
                            <Card
                                size="small"
                                title="Встроенные решения"
                                extra={<a href="#">321</a>}
                                style={{
                                    width: 400,
                                    height: 150,
                                }}
                            >
                                <Col span={18}>
                                    <h5>Инженеры рекомендуют:</h5>
                                    <a href="#">BH1790GLC-EVK-001</a>
                                    <p>Инструменты разработки оптического датчика Evaluation Kit ...</p>
                                </Col>

                            </Card>
                        </Space>
                    </div>
                </Col>
                <Col className="gutter-row" span={4.8}>
                    <div style={style}>
                        <Space direction="vertical" size={16}>
                            <Card
                                size="small"
                                title="Электромеханический"
                                extra={<a href="#">155337</a>}
                                style={{
                                    width: 400,
                                    height: 150,
                                }}
                            >
                                <Col span={18}>
                                    <h5>Инженеры рекомендуют:</h5>
                                    <a href="#">SK42D07G5NS</a>
                                    <p>Ползунковые переключатели Miniature Slide Switch</p>
                                </Col>
                            </Card>
                        </Space>
                    </div>
                </Col>
                <Col className="gutter-row" span={4.8}>
                    <div style={style}>
                        <Space direction="vertical" size={16}>
                            <Card
                                size="small"
                                title="Электромеханический"
                                extra={<a href="#">155337</a>}
                                style={{
                                    width: 400,
                                    height: 150,
                                }}
                            >
                                <Col span={18}>
                                    <h5>Инженеры рекомендуют:</h5>
                                    <a href="#">SK42D07G5NS</a>
                                    <p>Ползунковые переключатели Miniature Slide Switch</p>
                                </Col>
                            </Card>
                        </Space>
                    </div>
                </Col>
                <Col className="gutter-row" span={4.8}>
                    <div style={style}>
                        <Space direction="vertical" size={16}>
                            <Card
                                size="small"
                                title="Электромеханический"
                                extra={<a href="#">155337</a>}
                                style={{
                                    width: 400,
                                    height: 150,
                                }}
                            >
                                <Col span={18}>
                                    <h5>Инженеры рекомендуют:</h5>
                                    <a href="#">SK42D07G5NS</a>
                                    <p>Ползунковые переключатели Miniature Slide Switch</p>
                                </Col>
                            </Card>
                        </Space>
                    </div>
                </Col>
                <Col className="gutter-row" span={4.8}>
                    <div style={style}>
                        <Space direction="vertical" size={16}>
                            <Card
                                size="small"
                                title="Электромеханический"
                                extra={<a href="#">155337</a>}
                                style={{
                                    width: 400,
                                    height: 150,
                                }}
                            >
                                <Col span={18}>
                                    <h5>Инженеры рекомендуют:</h5>
                                    <a href="#">SK42D07G5NS</a>
                                    <p>Ползунковые переключатели Miniature Slide Switch</p>
                                </Col>
                            </Card>
                        </Space>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default CategoriesEKB;
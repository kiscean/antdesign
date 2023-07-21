import React from "react";
import {Col, Divider, Row, Avatar, Card, Space, Image} from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import popprod1 from '../../assets/img/prod/pop_prod_1.jpg'

const PopProducts = () => {
    return (
        <>
            <Row>
                <Col span={12}>
                    <Divider orientation="left">Чаще всего ищат</Divider>
                </Col>
                <Col span={12}>
                    <Divider orientation="right">
                        <a href="#">топ 50</a>
                    </Divider>
                </Col>
            </Row>
            <Row justify={"center"}
                style={{
                    alignSelf: "center",
                }}>
                <Col>

                </Col>
                <Space direction="horizontal" size={80}>
                        <Col span={8}>
                            <Card
                                style={{
                                    width: 300,
                                }}
                            >
                                <Row align={"middle"} gutter={20}>
                                    <Col span={6}>
                                        <Image src={(popprod1)} width={'7ch'} height={'7ch'}/>
                                    </Col>
                                    <Col span={18}>
                                        <h3 align={'start'}><a>TGFSB</a></h3>
                                        <p align={'start'}>Wire Ducting & Raceways TG FIB Spool Bracket</p>
                                    </Col>
                                    <Col span={24}>
                                        <Row align={'bottom'}

                                        >
                                            <Col span={24}><Divider /></Col>
                                            <Col span={10}
                                                style={{
                                                    color: "darkgrey",
                                                }}
                                            ><p>5442 шт</p></Col>
                                            <Col span={4}><Divider type="vertical" /></Col>
                                            <Col span={10}><h4>120.00 руб</h4></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                style={{
                                    width: 300,
                                }}
                            >
                                <Row align={"middle"} gutter={20}>
                                    <Col span={6}>
                                        <Image src={(popprod1)} width={'7ch'} height={'7ch'}/>
                                    </Col>
                                    <Col span={18}>
                                        <h3 align={'start'}><a>TGFSB</a></h3>
                                        <p align={'start'}>Wire Ducting & Raceways TG FIB Spool Bracket</p>
                                    </Col>
                                    <Col span={24}>
                                        <Row align={'bottom'}

                                        >
                                            <Col span={24}><Divider /></Col>
                                            <Col span={10}
                                                 style={{
                                                     color: "darkgrey",
                                                 }}
                                            ><p>5442 шт</p></Col>
                                            <Col span={4}><Divider type="vertical" /></Col>
                                            <Col span={10}><h4>120.00 руб</h4></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                style={{
                                    width: 300,
                                }}
                            >
                                <Row align={"middle"} gutter={20}>
                                    <Col span={6}>
                                        <Image src={(popprod1)} width={'7ch'} height={'7ch'}/>
                                    </Col>
                                    <Col span={18}>
                                        <h3 align={'start'}><a>TGFSB</a></h3>
                                        <p align={'start'}>Wire Ducting & Raceways TG FIB Spool Bracket</p>
                                    </Col>
                                    <Col span={24}>
                                        <Row align={'bottom'}

                                        >
                                            <Col span={24}><Divider /></Col>
                                            <Col span={10}
                                                 style={{
                                                     color: "darkgrey",
                                                 }}
                                            ><p>5442 шт</p></Col>
                                            <Col span={4}><Divider type="vertical" /></Col>
                                            <Col span={10}><h4>120.00 руб</h4></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    <Col>

                    </Col>
                </Space>
            </Row>
        </>
    );
};

export default PopProducts;
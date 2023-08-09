import React from "react";
import './CategoryNestedList.css';

import {Breadcrumb, Col, Divider, Row} from "antd";
import {HomeOutlined} from "@ant-design/icons";
import {Content} from "antd/es/layout/layout";

const CategoryNestedList = () => {
    return (
            <section className='category-nestedlist'>
                <Divider orientation="left"><h4>Оптоэлектроника</h4></Divider>
                <Row className='category-nestedlist__list'>
                    <Col
                        md={24}
                        lg={12}
                        xl={8}
                    >
                        <Row>
                            <Col span={3} className='category-nestedlist__quntity'>
                                <a><p>238</p></a>
                            </Col>
                            <Col span={21} className='category-nestedlist__name'>
                                <p>Аналогокварцвые умножители</p>
                            </Col>
                            <Col span={3} className='category-nestedlist__quntity'>
                                <a><p>2122</p></a>
                            </Col>
                            <Col span={21} className='category-nestedlist__name'>
                                <p>Электроэлемент</p>
                            </Col>
                            <Col span={3} className='category-nestedlist__quntity'>
                                <a><p>27888</p></a>
                            </Col>
                            <Col span={21} className='category-nestedlist__name'>
                                <p>Кварцевый резонатор</p>
                            </Col>
                            <Col span={3} className='category-nestedlist__quntity'>
                                <a><p>2578</p></a>
                            </Col>
                            <Col span={21} className='category-nestedlist__name'>
                                <p>Конденсатор ниобиевый оксидно-полупроводниковый</p>
                            </Col>
                            <Col span={3} className='category-nestedlist__quntity'>
                                <a><p>7378</p></a>
                            </Col>
                            <Col span={21} className='category-nestedlist__name'>
                                <p>Конденсаторы керамические выводные многослойные</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col
                        md={24}
                        lg={12}
                        xl={8}
                    >
                        <Row>
                            <Col span={3} className='category-nestedlist__quntity'>
                                <a><p>1548</p></a>
                            </Col>
                            <Col span={21} className='category-nestedlist__name'>
                                <p>Стабилизатор напряжения</p>
                            </Col>
                            <Col span={3} className='category-nestedlist__quntity'>
                                <a><p>7775</p></a>
                            </Col>
                            <Col span={21} className='category-nestedlist__name'>
                                <p>Конденсатор керамический дисковый</p>
                            </Col>
                            <Col span={3} className='category-nestedlist__quntity'>
                                <a><p>11</p></a>
                            </Col>
                            <Col span={21} className='category-nestedlist__name'>
                                <p>Чип резисторы (SMD, для поверхностного монтажа)</p>
                            </Col>
                            <Col span={3} className='category-nestedlist__quntity'>
                                <a><p>2754</p></a>
                            </Col>
                            <Col span={21} className='category-nestedlist__name'>
                                <p>Конденсатор ниобиевый оксидно-полупроводниковый</p>
                            </Col>
                            <Col span={3} className='category-nestedlist__quntity'>
                                <a><p>9447</p></a>
                            </Col>
                            <Col span={21} className='category-nestedlist__name'>
                                <p>	Диоды защиты от электростатики (ESD)</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col
                        md={24}
                        lg={12}
                        xl={8}
                    >
                        <Row>
                            <Col span={3} className='category-nestedlist__quntity'>
                                <a><p>12358</p></a>
                            </Col>
                            <Col span={21} className='category-nestedlist__name'>
                                <p>Диоды</p>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </section>
    );
};

export default CategoryNestedList;

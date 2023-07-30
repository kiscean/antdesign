import React, { useState } from 'react';

import './StartPage.css';

import Footer from "../Footer/Footer";
import {Layout, Space, Button, Checkbox, Form, Input, Radio, Row, Col, Divider, Segmented, Carousel} from "antd";
import {Content} from "antd/es/layout/layout";
import {Header} from "antd/lib/layout/layout";

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const StartPage = () => {

    const [placement, SetPlacement] = useState('topLeft');
    const placementChange = (e) => {
        SetPlacement(e.target.value);
    };

    const [form] = Form.useForm();
    const registration = () => {
        form.setFieldsValue({
            note: 'Hello world!',
        });
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <Layout className="layout">
            <Header className="header">
                <Space direction="horizontal" className="header__container">
                    <Space direction="horizontal">
                        <div className="header__logo">
                            <h1>
                                <a href="#" className="header__logo-link">
                                    ЭКБ
                                </a>
                            </h1>
                        </div>
                        <span className="header__logo-description">
                            Маркетплейс <br /> для инженеров
                        </span>
                    </Space>
                </Space>
            </Header>
                <Content className='container'>
                    <Row align={"top"}>
                        <Col span={12}>
                            <Segmented block options={["Вход", "Регистрация"]} className='form-selector' />
                            <Form
                                size="large"
                                name="basic"
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                style={{
                                    maxWidth: 600,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item {...tailLayout}>
                                    <h3>Вход в аккаунт</h3>
                                </Form.Item>
                                <Form.Item
                                    label="E-mail:"
                                    name="e-mail"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Ваша электронная почта',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Пароль"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Введите свой пароль',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    wrapperCol={{
                                        offset: 8,
                                        span: 16,
                                    }}
                                >
                                    <Checkbox>Запомнить меня</Checkbox>
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Войти
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col span={12}>
                            <Carousel effect="fade">
                                <div>
                                    <h3 className='slider-content__wrap'>1</h3>
                                </div>
                                <div>
                                    <h3 className='slider-content__wrap'>2</h3>
                                </div>
                                <div>
                                    <h3 className='slider-content__wrap'>3</h3>
                                </div>
                                <div>
                                    <h3 className='slider-content__wrap'>4</h3>
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                </Content>
            <Footer />
        </Layout>
    );
};

export default StartPage;

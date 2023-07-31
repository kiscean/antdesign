import React, { useState } from 'react';

import './StartPage.css';

import Footer from "../Footer/Footer";
import {Layout, Space, Button, Checkbox, InputNumber, Select, Form, Input, AutoComplete, Row, Col, Cascader, Segmented, Carousel} from "antd";
import {Content} from "antd/es/layout/layout";
import {Header} from "antd/lib/layout/layout";
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const onFinish = (values) => {
    console.log('Received values of form: ', values);
};

const StartPage = () => {

    const [placement, SetPlacement] = useState('topLeft');
    const placementChange = (e) => {
        SetPlacement(e.target.value);
    };
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="USD">$</Option>
                <Option value="CNY">¥</Option>
            </Select>
        </Form.Item>
    );
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));
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

                        <Col span={8}>
                            <Segmented block options={["Вход", "Регистрация"]} className='form-selector' />
                            <div className='form-enter'>
                                <Form
                                    size="large"
                                    name="normal_login"
                                    className="login-form"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                >
                                    <Form.Item>
                                        <h3>Вход в аккаунт</h3>
                                    </Form.Item>
                                    <Form.Item
                                        name="e-mail"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Введите свой эл.адрес',
                                            },
                                        ]}
                                    >
                                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Введите пароль',
                                            },
                                        ]}
                                    >
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            type="password"
                                            placeholder="Пароль"
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                            <Checkbox>запомнить меня</Checkbox>
                                        </Form.Item>

                                        <a className="login-form-forgot" href="">
                                            Забыли пароль?
                                        </a>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            Войти
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className='form-registration'>
                                <Form
                                    {...formItemLayout}
                                    form={form}
                                    name="register"
                                    onFinish={onFinish}
                                    initialValues={{
                                        residence: ['zhejiang', 'hangzhou', 'xihu'],
                                        prefix: '86',
                                    }}
                                    style={{
                                        maxWidth: 600,
                                    }}
                                    scrollToFirstError
                                >
                                    <Form.Item>
                                        <h3>Регистрация нового пользователя</h3>
                                    </Form.Item>
                                    <Form.Item
                                        name="email"
                                        label="E-mail"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your E-mail!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name="password"
                                        label="Password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item
                                        name="confirm"
                                        label="Confirm Password"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please confirm your password!',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item
                                        name="nickname"
                                        label="Nickname"
                                        tooltip="What do you want others to call you?"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your nickname!',
                                                whitespace: true,
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name="phone"
                                        label="Phone Number"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your phone number!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            addonBefore={prefixSelector}
                                            style={{
                                                width: '100%',
                                            }}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="website"
                                        label="Website"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input website!',
                                            },
                                        ]}
                                    >
                                        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                                            <Input />
                                        </AutoComplete>
                                    </Form.Item>

                                    <Form.Item
                                        name="intro"
                                        label="Intro"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input Intro',
                                            },
                                        ]}
                                    >
                                        <Input.TextArea showCount maxLength={100} />
                                    </Form.Item>

                                    <Form.Item
                                        name="gender"
                                        label="Gender"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select gender!',
                                            },
                                        ]}
                                    >
                                        <Select placeholder="select your gender">
                                            <Option value="male">Male</Option>
                                            <Option value="female">Female</Option>
                                            <Option value="other">Other</Option>
                                        </Select>
                                    </Form.Item>

                                    <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                                        <Row gutter={8}>
                                            <Col span={12}>
                                                <Form.Item
                                                    name="captcha"
                                                    noStyle
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input the captcha you got!',
                                                        },
                                                    ]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Button>Get captcha</Button>
                                            </Col>
                                        </Row>
                                    </Form.Item>

                                    <Form.Item
                                        name="agreement"
                                        valuePropName="checked"
                                        rules={[
                                            {
                                                validator: (_, value) =>
                                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                            },
                                        ]}
                                        {...tailFormItemLayout}
                                    >
                                        <Checkbox>
                                            I have read the <a href="">agreement</a>
                                        </Checkbox>
                                    </Form.Item>
                                    <Form.Item {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit">
                                            Register
                                        </Button>
                                    </Form.Item>
                                </Form>

                            </div>

                        </Col>
                        <Col span={16}>
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

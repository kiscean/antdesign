import React, { useState } from 'react';

import './StartPage.css';

import Footer from "../Footer/Footer";
import {
    Layout,
    Space,
    Button,
    Checkbox,
    Select,
    Form,
    Input,
    AutoComplete,
    Row,
    Col,
    Segmented,
    Carousel,
    Divider, DatePicker
} from "antd";
import {Content} from "antd/es/layout/layout";
import {Header} from "antd/lib/layout/layout";
import {BarsOutlined, ImportOutlined, LockOutlined, UserAddOutlined, UserOutlined} from '@ant-design/icons';

const { Option } = Select;
const StartPage = () => {

    const [triggerForms, setTriggerAction] = React.useState(false);

    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 75,
                }}
            >
                <Option value="russia">+7</Option>
                <Option value="375">+375</Option>
                <Option value="994">+994</Option>
                <Option value="374">+374</Option>
                <Option value="996">+996</Option>
                <Option value="992">+992</Option>
                <Option value="993">+993</Option>
                <Option value="998">+998</Option>
            </Select>
        </Form.Item>
    );
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.ru', '.рф', '.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));

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
                    <Row justify={"center"}>
                        <Col
                            xs={24}
                            sm={24}
                            md={12}
                            lg={10}
                            xl={6}
                        >
                            <Segmented block
                                       options={[
                                           {
                                               label: 'Вход',
                                               value: 'Enter',
                                               icon: <ImportOutlined />,
                                           },
                                           {
                                               label: 'Регистрация',
                                               value: 'Registration',
                                               icon: <UserAddOutlined />,
                                           },
                                       ]}
                                       onChange={() => setTriggerAction(!triggerForms)}
                                       className='form-selector'
                            />
                            <Space className={`form-enter ${triggerForms ? '' : 'form-enter_active'}`}>
                                <Form
                                    size="large"
                                    name="normal_login"
                                    className="login-form"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    style={{
                                        maxWidth: 400,
                                    }}
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
                            </Space>
                            <div className={`form-registration ${triggerForms ? '' : 'form-registration_active'}`}>
                                <Form
                                    layout="vertical"
                                    form={form}
                                    name="register"
                                    onFinish={onFinish}
                                    initialValues={{
                                        prefix: 'russia',
                                    }}
                                    style={{
                                        maxWidth: 400,
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
                                                message: 'Не соответствует формату электронной почты',
                                            },
                                            {
                                                required: true,
                                                message: 'Введите свою эл.почту',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name="nickname"
                                        label="Имя пользователя"
                                        tooltip="Имя пользователя должно быть уникальным!"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Придумайте имя пользователя',
                                                whitespace: true,
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name="password"
                                        label="Пароль"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Создайте пароль',
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item
                                        name="confirm"
                                        label="Подтверждение"
                                        dependencies={['password']}
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Введите пароль еще раз',
                                            },
                                            ({ getFieldValue }) => ({
                                                validator(_, value) {
                                                    if (!value || getFieldValue('password') === value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject(new Error('Пароли не совпадают'));
                                                },
                                            }),
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Divider plain>Контактные данные</Divider>

                                    <Form.Item
                                        name="firstname"
                                        label="Имя"
                                        tooltip="Имя является обязательным для заполнения"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'ваше имя',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name="middlename"
                                        label="Отчество"
                                        rules={[
                                            {
                                                required: false,
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name="lastname"
                                        label="Фамилия"
                                        rules={[
                                            {
                                                required: false,
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        name="phone"
                                        label="Телефон"
                                        rules={[
                                            {
                                                required: false,
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
                                    <Form.Item label="Дата рождения">
                                        <DatePicker />
                                    </Form.Item>
                                    <Form.Item
                                        name="gender"
                                        label="Пол"
                                        rules={[
                                            {
                                                required: false,
                                                message: 'Выберете пол',
                                            },
                                        ]}
                                    >
                                        <Select placeholder="выберете пол"
                                                style={{
                                                    width: '41%',
                                                }}
                                        >
                                            <Option value="male">Муж</Option>
                                            <Option value="female">Жен</Option>
                                        </Select>
                                    </Form.Item>

                                    <Divider plain>Корпоративные данные</Divider>

                                    <Form.Item
                                        name="unicnumber"
                                        label="ИНН"
                                        rules={[
                                            {
                                                required: false,
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name="website"
                                        label="Сайт"
                                        rules={[
                                            {
                                                required: false,
                                                message: 'сайт компании',
                                            },
                                        ]}
                                    >
                                        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="сайт компании">
                                            <Input />
                                        </AutoComplete>
                                    </Form.Item>

                                    <Form.Item
                                        name="agreement"
                                        valuePropName="checked"
                                        rules={[
                                            {
                                                validator: (_, value) =>
                                                    value ? Promise.resolve() : Promise.reject(new Error('Вы не согласны с условиями пользовательского соглашения?')),
                                            },
                                        ]}
                                    >
                                        <Checkbox>
                                            Я согласен с условиями <a href="">пользовательского соглашения</a>
                                        </Checkbox>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Регистрация
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Col>
                        <Col className='slider-container'
                             xs={24}
                             sm={24}
                             md={12}
                             lg={14}
                             xl={18}
                        >
                            <Carousel effect="fade" className='slider'>
                                <div className='slider-content__wrap'>
                                    <div className='card-header'>
                                        <div className='top-line'>
                                            <div className='container-fluid'>
                                                <Row>
                                                    <Col
                                                        md={24}
                                                        lg={12}
                                                        xl={12}
                                                    >
                                                        <h2 className='logo'>ЭКБ <span className='span-mark'>маркетплейс</span></h2>
                                                    </Col>
                                                    <Col
                                                        md={24}
                                                        lg={12}
                                                        xl={12}
                                                        className='text-right'
                                                    >
                                                        <h3 className='slogan'>Со всего мира - инженерам нашей страны.</h3>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                        <div className='content'>
                                            <div className='content-center'>
                                                <Content className='container-content'>
                                                    <Row justify={"center"}>
                                                        <Col className='container-text__wrapper'
                                                            md={24}
                                                            lg={10}
                                                            xl={10}
                                                        >
                                                            <h2 className='content-title'>
                                                                Безграничный охват предложений в <span className='content-logo'>ЭКБ</span>!
                                                            </h2>
                                                            <p className='content-text'>
                                                                Для инженеров со всех уголков страны мы предлагаем комплектующие от производителей со всего мира - с инновационным и быстрым поиском.
                                                                <br/> Професстональная консультация, помощь в подборе комплектующих, исходя из ваших задач.
                                                                <br/> Создавайте будущее - не ограничивайте свой выбор.
                                                            </p>
                                                            <a href={'#'} className='trylink'><i className='trylink-bird'>✓</i> Зарегистрироваться</a>
                                                        </Col>
                                                        <Col
                                                            md={24}
                                                            lg={14}
                                                            xl={14}
                                                        >

                                                        </Col>
                                                    </Row>
                                                    <Row align={"bottom"}  className='content-down'>
                                                        <Col span={24}>Проект разработан и создан компанией ООО Компания в 2023 году.</Col>
                                                    </Row>
                                                </Content>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='slider-content__wrap'>
                                    <img src={'https://img.freepik.com/free-photo/mount-mont-blanc-covered-snow-reflecting-water-evening-chamonix-france_181624-33408.jpg?w=1380&t=st=1690812750~exp=1690813350~hmac=43e7a69daeabb881f1044f82919936c2569bcd8b03da0333cf9a1b89a01bb8c7'} />
                                </div>
                                <div className='slider-content__wrap'>
                                    <img src={'https://img.freepik.com/free-photo/beautiful-shot-snowy-mountain-sunset_181624-37878.jpg?w=1380&t=st=1690812559~exp=1690813159~hmac=42e931792c7ca05b6694e4a41a97eb79d3b63106185dc7efb41af6daa871a32b'} />
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

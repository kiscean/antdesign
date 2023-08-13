import React from 'react';
import './SignForms.css';

import Footer from '../Footer/Footer';
import {
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
  Divider,
  DatePicker,
} from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import {
  CommentOutlined,
  FileProtectOutlined,
  FundOutlined,
  GlobalOutlined,
  ImportOutlined,
  LockOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';

const StartPage = () => {
  const [triggerForms, setTriggerForms] = React.useState(false);
  const [autoCompleteResult, setAutoCompleteResult] = React.useState([]);

  const { Option } = Select;
  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 75,
        }}>
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

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  const signOptionArr = [
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
  ];

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        ['.ru', '.рф', '.com', '.org', '.net'].map(
          (domain) => `${value}${domain}`,
        ),
      );
    }
  };

  const onChangeCheckbox = () => {
    setTriggerForms(!triggerForms);
  };

  return (
    <section className="authorization">
      {/* <Header className="header">
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
      </Header> */}

      <Content className="authorization__container">
        <Row justify="center">
          <Col xs={24} sm={24} md={12} lg={10} xl={6}>
            <Segmented
              block
              options={signOptionArr}
              onChange={onChangeCheckbox}
              className="authorization__form-selector"
            />

            <Space
              className={`authorization__form-enter ${
                triggerForms ? '' : 'authorization__form-enter_active'
              }`}>
              <Form
                size="large"
                name="normal_login"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                style={{
                  maxWidth: 400,
                }}>
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
                  ]}>
                  <Input prefix={<UserOutlined />} placeholder="E-mail" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Введите пароль',
                    },
                  ]}>
                  <Input
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Пароль"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Запомнить меня</Checkbox>
                  </Form.Item>
                  <a href="">Забыли пароль?</a>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Войти
                  </Button>
                </Form.Item>
              </Form>
            </Space>
            <div
              className={`authorization__form-registration ${
                triggerForms ? '' : 'authorization__form-registration_active'
              }`}>
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
                scrollToFirstError>
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
                  ]}>
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
                  ]}>
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
                  hasFeedback>
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
                  ]}>
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
                      message: 'Введите свое имя',
                    },
                  ]}>
                  <Input />
                </Form.Item>

                <Form.Item
                  name="middlename"
                  label="Отчество"
                  rules={[
                    {
                      required: false,
                    },
                  ]}>
                  <Input />
                </Form.Item>

                <Form.Item
                  name="lastname"
                  label="Фамилия"
                  rules={[
                    {
                      required: false,
                    },
                  ]}>
                  <Input />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Телефон"
                  rules={[
                    {
                      required: false,
                    },
                  ]}>
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
                  ]}>
                  <Select
                    placeholder="выберете пол"
                    style={{
                      width: '41%',
                    }}>
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
                  ]}>
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
                  ]}>
                  <AutoComplete
                    options={websiteOptions}
                    onChange={onWebsiteChange}
                    placeholder="сайт компании">
                    <Input />
                  </AutoComplete>
                </Form.Item>

                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error(
                                'Вы не согласны с условиями пользовательского соглашения?',
                              ),
                            ),
                    },
                  ]}>
                  <Checkbox>
                    Я согласен с условиями{' '}
                    <a href="">пользовательского соглашения</a>
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

          <Col className="description" xs={24} sm={24} md={12} lg={14} xl={18}>
            <Content className="description__container">
              <div className="description__wrap">
                <div className="description__card-header">
                  <div className="description__top-line">
                    <div className="description__container-fluid">
                      <Row>
                        <Col md={24} lg={12} xl={12}>
                          <h2 className="description__logo">
                            ЭКБ{' '}
                            <span className="description__span-mark">
                              маркетплейс
                            </span>
                          </h2>
                        </Col>
                        <Col
                          md={24}
                          lg={12}
                          xl={12}
                          className="description__text-right">
                          <h3 className="description__slogan">
                            Со всего мира - инженерам нашей страны.
                          </h3>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="description__content">
                    <Content>
                      <Row justify="center">
                        <Col
                          className="description__text-wrapper"
                          md={24}
                          lg={24}
                          xl={10}>
                          <h2 className="description__content-title">
                            Безграничный охват предложений в{' '}
                            <span className="content-logo">ЭКБ</span>!
                          </h2>
                          <p className="description__content-text">
                            Для инженеров со всех уголков страны мы предлагаем
                            комплектующие от производителей со всего мира - с
                            инновационным и быстрым поиском.
                            <br /> Професстональная консультация, помощь в
                            подборе комплектующих, исходя из ваших задач.
                            <br /> Создавайте будущее - не ограничивайте свой
                            выбор.
                          </p>
                          <a href={'#'} className="description__trylink">
                            <i className="description__trylink-bird">✓</i>{' '}
                            Зарегистрироваться
                          </a>
                        </Col>
                        <Col
                          md={24}
                          lg={24}
                          xl={14}
                          className="description-rightblock">
                          <Row className="description__rightblock-content">
                            <Col span={24}>
                              <Row
                                justify={'start'}
                                className="description__rightblock-wrap">
                                <Col span={4}>
                                  <FundOutlined className="description__rightblock-icon" />
                                </Col>
                                <Col span={20}>
                                  <h4>
                                    Удобный и функциональный кабинет клиента.
                                  </h4>
                                </Col>
                              </Row>
                            </Col>
                            <Col span={24}>
                              <Row
                                justify={'start'}
                                className="description__rightblock-wrap">
                                <Col span={4}>
                                  <FileProtectOutlined className="description__rightblock-icon" />
                                </Col>
                                <Col span={20}>
                                  <h4>
                                    Все сделки защищены - гарантия получения
                                    товара или возврат денег.
                                  </h4>
                                </Col>
                              </Row>
                            </Col>
                            <Col span={24}>
                              <Row
                                justify={'start'}
                                className="description__rightblock-wrap">
                                <Col span={4}>
                                  <GlobalOutlined className="description__rightblock-icon" />
                                </Col>
                                <Col span={20}>
                                  <h4>Глобальный международный поиск.</h4>
                                </Col>
                              </Row>
                            </Col>
                            <Col span={24}>
                              <Row
                                justify={'start'}
                                className="description__rightblock-wrap">
                                <Col span={4}>
                                  <CommentOutlined className="description__rightblock-icon" />
                                </Col>
                                <Col span={20}>
                                  <h4>
                                    Консультируют специалисты - ответят на любые
                                    вопросы.
                                  </h4>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      <Col
                        span={24}
                        align={'bottom'}
                        className="description__text-down">
                        Проект разработан и создан компанией ООО Компания в 2023
                        году.
                      </Col>
                    </Content>
                  </div>
                </div>
              </div>
            </Content>
          </Col>
        </Row>
      </Content>
      <Footer />
    </section>
  );
};

export default StartPage;

import React  from 'react';
import './PagesSuccess.css';

import {Button, Result, Space} from 'antd';
import Footer from "../Footer/Footer";
import {Content} from "antd/es/layout/layout";
import {Header} from "antd/lib/layout/layout";

const RegistrationPS = () => {
    return (
        <section>
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

            <Content className='succespage-container'>
                <Result
                    className='succespage-registration'
                    status="success"
                    title="Поздравляем! Вы стали частью семьи ЭКБ Маркетплейс."
                    subTitle="Теперь вы можете использовать портал ЭКБ для поиска и заказа необходимых комплектующих. Наши специалисты обязательно ответят на любые ваши вопросы. Вы также можете зарегистрировать компанию, которую представляете для более быстрого обмена документацией."
                    extra={[
                        <Button type="primary" key="console">
                            Начать работу
                        </Button>,
                        <Button key="buy">Добавить компанию</Button>,
                    ]}
                />
            </Content>
            <Footer />
        </section>
    );
};

export default RegistrationPS;
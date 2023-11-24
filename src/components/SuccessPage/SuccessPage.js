import React from 'react';
import './SuccessPage.css';

import { Button, Result, Layout } from 'antd';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <Layout className="success-page">
      <div className="success-page__container">
        <Result
          className="success-page__registration"
          status="success"
          title="Поздравляем! Вы стали частью семьи ЭКБ Маркетплейс."
          subTitle="Теперь вы можете использовать портал ЭКБ для поиска и заказа необходимых комплектующих. Наши специалисты обязательно ответят на любые ваши вопросы. Вы также можете зарегистрировать компанию, которую представляете для более быстрого обмена документацией."
          extra={[
            <Link to="/">
              <Button type="primary" key="console">
                Начать работу
              </Button>
            </Link>,
            <Button key="buy">Добавить компанию</Button>,
          ]}
        />
      </div>
    </Layout>
  );
};

export default SuccessPage;

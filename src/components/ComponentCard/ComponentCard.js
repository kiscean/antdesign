import React from 'react';
import './ComponentCard.css';

import { Image, Button } from 'antd';
import { HeartTwoTone, HeartFilled } from '@ant-design/icons';
import popprod2 from '../../assets/img/pop_prod_2.jpg';

const ComponentCard = () => {
  const [isLiked, setIsLiked] = React.useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="component-card">
      <h2 className="component-card__title">TEMD5120X01</h2>
      <div className="component-card__container">
        <Image src={popprod2} alt="component" width={200} />
        <div className="component-card__right-zone">
          <ul className="component-card__list">
            <li className="component-card__description">
              <span className="card-component__span">Описание:</span> Photodiode
              PIN Chip 940nm Automotive 4-Pin SMD T/R
            </li>
            <li className="component-card__description">
              <span className="card-component__span">Производитель:</span>{' '}
              Vishay
            </li>
            <li className="component-card__description">
              <span className="card-component__span">
                Страна происхождения:
              </span>{' '}
              Германия
            </li>
          </ul>
          <span className="component-card__price">150.95 ₽/шт</span>
          <div className="component-card__btns">
            <Button type="primary" size={'middle'}>
              Добавить в корзину
            </Button>

            <HeartTwoTone
              onClick={toggleLike}
              className="component-card__like"
            />
          </div>
        </div>
      </div>
      <p className="component-card__footnote">
        * Изображения служат только для ознакомления, см. техническую
        документацию
      </p>
    </div>
  );
};

export default ComponentCard;

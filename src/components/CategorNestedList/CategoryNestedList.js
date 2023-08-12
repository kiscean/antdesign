import React from 'react';
import './CategoryNestedList.css';

import { Divider } from 'antd';
import CategoryNestedRow from '../CategoryNestedRow/CategoryNestedRow';

//!эту колбасу нужно как-то переписать!
const CategoryNestedList = () => {
  const categoryNestedArr = [
    { quantity: 238, name: 'Аналогокварцвые умножители' },
    { quantity: 2122, name: 'Электроэлемент' },
    { quantity: 27888, name: 'Кварцевый резонатор' },
    { quantity: 2578, name: 'Конденсатор ниобиевый оксидно-полупроводниковый' },
    { quantity: 7378, name: 'Конденсаторы керамические выводные многослойные' },
    { quantity: 1548, name: 'Стабилизатор напряжения' },
    { quantity: 7775, name: 'Конденсатор керамический дисковый' },
    { quantity: 11, name: 'Чип резисторы (SMD, для поверхностного монтажа)' },
    { quantity: 2754, name: 'Конденсатор ниобиевый оксидно-полупроводниковый' },
    { quantity: 9447, name: 'Диоды защиты от электростатики (ESD)' },
    { quantity: 12358, name: 'Диоды' },
  ];

  return (
    <section className="category-nestedlist">
      <Divider orientation="left">
        <h4>Оптоэлектроника</h4>
      </Divider>
      <div className="category-nestedlist__box">
        {categoryNestedArr.map((row, i) => {
          return (
            <CategoryNestedRow
              key={i}
              quantity={row.quantity}
              name={row.name}
            />
          );
        })}
      </div>
      {/* <Row className="category-nestedlist__list">
        <Col md={24} lg={12} xl={8}>
          <Row>
            <Col span={3} className="category-nestedlist__quntity">
              <a href="#" target="_blank">
                <p>238</p>
              </a>
            </Col>
            <Col span={21} className="category-nestedlist__name">
              <p>Аналогокварцвые умножители</p>
            </Col>
            <Col span={3} className="category-nestedlist__quntity">
              <a href="#" target="_blank">
                <p>2122</p>
              </a>
            </Col>
            <Col span={21} className="category-nestedlist__name">
              <p>Электроэлемент</p>
            </Col>
            <Col span={3} className="category-nestedlist__quntity">
              <a href="#" target="_blank">
                <p>27888</p>
              </a>
            </Col>
            <Col span={21} className="category-nestedlist__name">
              <p>Кварцевый резонатор</p>
            </Col>
            <Col span={3} className="category-nestedlist__quntity">
              <a href="#" target="_blank">
                <p>2578</p>
              </a>
            </Col>
            <Col span={21} className="category-nestedlist__name">
              <p>Конденсатор ниобиевый оксидно-полупроводниковый</p>
            </Col>
            <Col span={3} className="category-nestedlist__quntity">
              <a href="#" target="_blank">
                <p>7378</p>
              </a>
            </Col>
            <Col span={21} className="category-nestedlist__name">
              <p>Конденсаторы керамические выводные многослойные</p>
            </Col>
          </Row>
        </Col>
        <Col md={24} lg={12} xl={8}>
          <Row>
            <Col span={3} className="category-nestedlist__quntity">
              <a href="#" target="_blank">
                <p>1548</p>
              </a>
            </Col>
            <Col span={21} className="category-nestedlist__name">
              <p>Стабилизатор напряжения</p>
            </Col>
            <Col span={3} className="category-nestedlist__quntity">
              <a href="#" target="_blank">
                <p>7775</p>
              </a>
            </Col>
            <Col span={21} className="category-nestedlist__name">
              <p>Конденсатор керамический дисковый</p>
            </Col>
            <Col span={3} className="category-nestedlist__quntity">
              <a href="#" target="_blank">
                <p>11</p>
              </a>
            </Col>
            <Col span={21} className="category-nestedlist__name">
              <p>Чип резисторы (SMD, для поверхностного монтажа)</p>
            </Col>
            <Col span={3} className="category-nestedlist__quntity">
              <a href="#" target="_blank">
                <p>2754</p>
              </a>
            </Col>
            <Col span={21} className="category-nestedlist__name">
              <p>Конденсатор ниобиевый оксидно-полупроводниковый</p>
            </Col>
            <Col span={3} className="category-nestedlist__quntity">
              <a href="#" target="_blank">
                <p>9447</p>
              </a>
            </Col>
            <Col span={21} className="category-nestedlist__name">
              <p> Диоды защиты от электростатики (ESD)</p>
            </Col>
          </Row>
        </Col>
        <Col md={24} lg={12} xl={8}>
          <Row>
            <Col span={3} className="category-nestedlist__quntity">
              <a href="#" target="_blank">
                <p>12358</p>
              </a>
            </Col>
            <Col span={21} className="category-nestedlist__name">
              <p>Диоды</p>
            </Col>
          </Row>
        </Col>
      </Row> */}
    </section>
  );
};

export default CategoryNestedList;

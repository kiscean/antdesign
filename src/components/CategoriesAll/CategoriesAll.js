import React from 'react';

import './CategoriesAll.css';
import { Collapse, Layout } from 'antd';
import CategoryNestedRow from '../CategoryNestedRow/CategoryNestedRow';
import { categoryNestedArr } from '../../assets/constants';

const CategoriesAll = () => {
  const items = [
    {
      key: '1',
      label: 'ОПТОЭЛЕКТРОНИКА',
      children: (
        <div className="category-list">
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
      ),
    },
    {
      key: '2',
      label: 'ПОЛУПРОВОДНИКОВЫЕ КОМПОНЕНТЫ',
      children: (
        <div className="category-list">
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
      ),
    },
    {
      key: '3',
      label: 'ПАССИВНЫЕ ЭЛЕМЕНТЫ',
      children: (
        <div className="category-list">
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
      ),
    },
    {
      key: '4',
      label: 'ЭЛЕКТРОМЕХАНИЧЕСКИЕ КОМПОНЕНТЫ',
      children: (
        <div className="category-list">
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
      ),
    },
    {
      key: '5',
      label: 'ТЕРМОРЕГУЛИРОВАНИЕ',
      children: (
        <div className="category-list">
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
      ),
    },
    {
      key: '6',
      label: 'СОЕДИНИТЕЛИ',
      children: (
        <div className="category-list">
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
      ),
    },
  ];

  return (
    <Layout className="table-selling">
      <h2 className="search-results__title">Все категории</h2>
      <Collapse items={items} defaultActiveKey={['1']} />
    </Layout>
  );
};

export default CategoriesAll;

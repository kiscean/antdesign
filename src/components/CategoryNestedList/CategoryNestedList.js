import React from 'react';
import './CategoryNestedList.css';

import { Divider } from 'antd';
import CategoryNestedRow from '../CategoryNestedRow/CategoryNestedRow';
import { categoryNestedArr } from '../../assets/constants';

const CategoryNestedList = () => {
  return (
    <section className="category-nestedlist">
      <Divider className="category-nestedlist__divider" orientation="left">
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
    </section>
  );
};

export default CategoryNestedList;

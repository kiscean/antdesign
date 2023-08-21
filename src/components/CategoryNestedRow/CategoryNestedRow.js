import React from 'react';
import './CategoryNestedRow.css';

function CategoryNestedRow({ quantity, name }) {
  return (
    <div className="category-nestedlist__container">
      <a href="#" target="_blank" className="category-nestedlist__quantity">
        {quantity}
      </a>
      <p className="category-nestedlist__paragraph">{name}</p>
    </div>
  );
}

export default CategoryNestedRow;

import React from 'react';

import './Main.css';

import SearchECB from '../SearchECB/SearchECB';
import CategoriesEСB from '../CategoriesEСB/CategoriesEСB';
import PopProducts from '../PopProducts/PopProducts';
import CategoryNestedList from '../CategoryNestedList/CategoryNestedList';

const Main = () => {
  return (
    <>
      <SearchECB />
      <PopProducts />
      <CategoryNestedList />
      <CategoriesEСB />
    </>
  );
};

export default Main;

import React from 'react';

import './Main.css';

import SearchECB from '../SearchECB/SearchECB';
import CategoriesEСB from '../CategoriesEСB/CategoriesEСB';
import PopProducts from '../PopProducts/PopProducts';

const Main = () => {
  return (
    <>
      <SearchECB />
      <PopProducts />
      <CategoriesEСB />
    </>
  );
};

export default Main;

import React from 'react';

import './Main.css';

import SearchECB from '../SearchECB/SearchECB';
import CategoriesEСB from '../CategoriesEСB/CategoriesEСB';
import PopProducts from '../PopProducts/PopProducts';

import SearchResultsTitle from '../SearchResultsTitle/SearchResultsTitle';
import TableComponentSearch from '../TableComponentSearch/TableComponentSearch';

const Main = () => {
  return (
    <>
      <SearchECB />
      <PopProducts />
      <CategoriesEСB />
      {/*
      <TableComponentSearch/>
      <SearchResultsTitle />
       */}
    </>
  );
};

export default Main;

import React from 'react';

import './Main.css';

import SearchECB from '../SearchECB/SearchECB';
import CategoriesEСB from '../CategoriesEСB/CategoriesEСB';
import PopProducts from '../PopProducts/PopProducts';

import TableForSale from '../TableForSale/TableForSale';
import CategoryNestedList from '../CategoryNestedList/CategoryNestedList';
import RoutingRoad from '../RoutingRoad/RoutingRoad';
import SearchResultsTitle from '../SearchResultsTitle/SearchResultsTitle';
import TableComponentSearch from '../TableComponentSearch/TableComponentSearch';
import { Content } from 'antd/es/layout/layout';

const Main = () => {
  const [openCart, setOpenCart] = React.useState(false);

  const onCloseCart = () => {
    setOpenCart(false);
  };

  const onOpenCart = () => {
    setOpenCart(true);
  };

  return (
    <>
      <SearchECB />
      <PopProducts />
      <CategoriesEСB />
      {/*
      <SearchResultsTitle />
      <TableComponentSearch onOpenCart={onOpenCart} />
      <CartDrawer onCloseCart={onCloseCart} open={openCart} />
      <CategoryNestedList />
      <TableForSale onOpenCart={onOpenCart} />
       */}
    </>
  );
};

export default Main;

import React, { useState } from 'react';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import './Main.css';

import Header from '../Header/Header';
import SearchEKB from '../SearchEKB/SearchEKB';
import CategoriesEСB from '../CategoriesEСB/CategoriesEСB';
import PopProducts from '../PopProducts/PopProducts';
import Footer from '../Footer/Footer';
import SignForms from '../SignForms/SignForms';
import MainDrawer from '../MainDrawer/MainDrawer';
import TableForSale from '../TableForSale/TableForSale';
import CategoryNestedList from '../CategoryNestedList/CategoryNestedList';
import RoutingRoad from '../RoutingRoad/RoutingRoad';
import Cart from '../Cart/Cart';
import SuccessPage from '../SuccessPage/SuccessPage';
import SearchResultsTitle from "../SearchResultsTitle/SearchResultsTitle";
import TableComponentSearch from "../TableComponentSearch/TableComponentSearch";

const Main = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [openCart, setOpenCart] = React.useState(false);

  const onOpenBurgerMenu = () => {
    setMenuActive(true);
  };
  const onCloseBurgerMenu = () => {
    setMenuActive(false);
  };

  const onCloseCart = () => {
    setOpenCart(false);
  };

  const onOpenCart = () => {
    setOpenCart(true);
  };

  return (
    <Layout className="layout">
      <Header onOpen={onOpenBurgerMenu} />
      <MainDrawer menuActive={menuActive} onClose={onCloseBurgerMenu} />
      <SearchEKB />
      <SearchResultsTitle />
      <TableComponentSearch onOpenCart={onOpenCart} />
      <Cart onCloseCart={onCloseCart} open={openCart} />
      {/* <RoutingRoad />
      <CategoryNestedList /> *
      <TableForSale onOpenCart={onOpenCart} />
      {/* <PopProducts />
      <CategoriesEСB />
      <SuccessPage />
      <SignForms /> */}
      <Footer />
    </Layout>
  );
};

export default Main;

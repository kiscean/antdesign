import React, { useState } from 'react';
import { Layout } from 'antd';

import './Main.css';

import Header from '../Header/Header';
import SearchECB from '../SearchECB/SearchECB';
import CategoriesEСB from '../CategoriesEСB/CategoriesEСB';
import PopProducts from '../PopProducts/PopProducts';
import Footer from '../Footer/Footer';
import SignForms from '../SignForms/SignForms';
import MainDrawer from '../MainDrawer/MainDrawer';
import TableForSale from '../TableForSale/TableForSale';
import CategoryNestedList from '../CategoryNestedList/CategoryNestedList';
import RoutingRoad from '../RoutingRoad/RoutingRoad';
import CartDrawer from '../CartDrawer/CartDrawer';
import SuccessPage from '../SuccessPage/SuccessPage';
import SearchResultsTitle from '../SearchResultsTitle/SearchResultsTitle';
import TableComponentSearch from '../TableComponentSearch/TableComponentSearch';
import Cart from '../Cart/Cart';
import { Content } from 'antd/es/layout/layout';

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

      <TableComponentSearch onOpenCart={onOpenCart} />
      {/* <SearchECB />
      <Cart />
      <SearchResultsTitle />
      <TableComponentSearch onOpenCart={onOpenCart} />
      <CartDrawer onCloseCart={onCloseCart} open={openCart} />
      <CategoryNestedList />
      <TableForSale onOpenCart={onOpenCart} />
      <PopProducts />
      <SignForms />
      <PopProducts />
      <CategoriesEСB />
      <SuccessPage />
      <SignForms /> */}
      <Footer />
    </Layout>
  );
};

export default Main;

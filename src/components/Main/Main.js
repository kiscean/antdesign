import React, { useState } from 'react';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import './Main.css';

import Header from '../Header/Header';
import SearchEKB from '../SearchEKB/SearchEKB';
import CategoriesEСB from '../CategoriesEСB/CategoriesEСB';
import PopProducts from '../PopProducts/PopProducts';
import Footer from '../Footer/Footer';
import StartPage from '../StartPage/StartPage';
import MainDrawer from '../MainDrawer/MainDrawer';
import TableForSale from '../TableForSale/TableForSale';
import CategoryNestedList from '../CategoryNestedList/CategoryNestedList';
import RoutingRoad from '../RoutingRoad/RoutingRoad';
import Cart from '../Cart/Cart';
import SuccessPage from '../SuccessPage/SuccessPage';

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
      <Header onOpen={onOpenBurgerMenu} onOpenCart={onOpenCart} />
      <MainDrawer menuActive={menuActive} onClose={onCloseBurgerMenu} />
      {/* <SearchEKB />
      <RoutingRoad />
      <CategoryNestedList />
      <TableForSale onOpenCart={onOpenCart} /> */}
      <Cart onCloseCart={onCloseCart} open={openCart} />
      <PopProducts />
      <CategoriesEСB />
      <SuccessPage />
      <StartPage />
      <Footer />
    </Layout>
  );
};

export default Main;

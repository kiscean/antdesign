import React from 'react';
import './App.css';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';

import Header from '../Header/Header';
import MainDrawer from '../MainDrawer/MainDrawer';
import Main from '../Main/Main';
import Cart from '../Cart/Cart';
import CartDrawer from '../CartDrawer/CartDrawer';
import SuccessPage from '../SuccessPage/SuccessPage';
import SignForms from '../SignForms/SignForms';
import TableForSale from '../TableForSale/TableForSale';
import SearchResults from '../SearchResults/SearchResults';
import ComponentPage from '../ComponentPage/ComponentPage';
import CategoriesAll from '../CategoriesAll/CategoriesAll';
import UserProfile from '../UserProfile/UserProfile';
import Footer from '../Footer/Footer';

function App() {
  // const { pathname } = useLocation();
  const [menuActive, setMenuActive] = React.useState(false);
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
    <div className="page">
      <Header onOpen={onOpenBurgerMenu} />
      <Content className="main">
        {/* <Main />
        <MainDrawer menuActive={menuActive} onClose={onCloseBurgerMenu} />
        <SignForms />
        <Cart />
        <CartDrawer onCloseCart={onCloseCart} open={openCart} />
        <SuccessPage />
        <TableForSale onOpenCart={onOpenCart} />
        <SearchResults />
        <CategoriesAll />
        <ComponentPage /> */}
        <UserProfile />
        <SignForms />
      </Content>

      <Footer />
    </div>
  );
}

export default App;

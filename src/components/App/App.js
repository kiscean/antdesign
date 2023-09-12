import React from 'react';
import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();
  const footerPaths = [
    '/',
    '/sign-in',
    'cart',
    '/selling-table',
    '/all-categories',
    '/results',
    '/user-profile',
    '/company-profile',
  ];

  const [menuActive, setMenuActive] = React.useState(false);
  const [openCart, setOpenCart] = React.useState(false);
  //const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign-in" element={<SignForms />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success-page" element={<SuccessPage />} />
          <Route
            path="/selling-table"
            element={<TableForSale onOpenCart={onOpenCart} />}
          />
          <Route path="/results" element={<SearchResults />} />
          <Route path="/all-categories" element={<CategoriesAll />} />
          <Route path="/product" element={<ComponentPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/company-profile" element={<UserProfile />} />
        </Routes>
        <MainDrawer menuActive={menuActive} onClose={onCloseBurgerMenu} />
        <CartDrawer onCloseCart={onCloseCart} open={openCart} />
      </Content>

      {footerPaths.includes(pathname) && <Footer />}
    </div>
  );
}

export default App;

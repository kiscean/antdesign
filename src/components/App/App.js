import React from 'react';
import './App.css';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';

import Header from '../Header/Header';
import MainDrawer from '../MainDrawer/MainDrawer';
import Main from '../Main/Main';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';

function App() {
  // const { pathname } = useLocation();
  const [menuActive, setMenuActive] = React.useState(false);

  const onOpenBurgerMenu = () => {
    setMenuActive(true);
  };
  const onCloseBurgerMenu = () => {
    setMenuActive(false);
  };

  return (
    <div className="page">
      <Header onOpen={onOpenBurgerMenu} />

      <Content className="main">
        <Main />
        <MainDrawer menuActive={menuActive} onClose={onCloseBurgerMenu} />
        <Cart />
      </Content>

      <Footer />
    </div>
  );
}

export default App;

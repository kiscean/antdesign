import React from 'react';
import { Layout } from 'antd';

import './Main.css';

import Header from '../Header/Header';
import SearchEKB from '../SearchEKB/SearchEKB';
import CategoriesEKB from '../CategoriesEKB/CategoriesEKB';
import PopProducts from '../PopProducts/PopProducts';
import RightMenu from '../RightMenu/RightMenu';
import Footer from '../Footer/Footer';

const Main = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  const onClickBurger = () => {
    setMenuActive(!menuActive);
  };

  return (
    <Layout className="layout">
      <Header onClickBurger={onClickBurger} />
      <RightMenu active={menuActive} />
      <SearchEKB />
      <PopProducts />
      <CategoriesEKB />
      <Footer />
    </Layout>
  );
};

export default Main;

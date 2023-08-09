import React, { useState } from 'react';
import { Layout } from 'antd';

import './Main.css';

import Header from '../Header/Header';
import SearchEKB from '../SearchEKB/SearchEKB';
//import CategoriesEKB from '../CategoriesEKB/CategoriesEKB';
//import PopProducts from '../PopProducts/PopProducts';
import Footer from '../Footer/Footer';
//import StartPage from '../StartPage/StartPage';
//import RegistrationPS from '../PagesSuccess/RegistrationPS';
import MainDrawer from '../MainDrawer/MainDrawer';
import TableForSale from '../Tables/TableForSale';
import CategoryNestedList from '../CategorNestedList/CategoryNestedList';
import { Content } from 'antd/es/layout/layout';
import RoutingRoad from '../RoutingRoad/RoutingRoad';

const Main = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout className="layout">
      <Header showDrawer={showDrawer} />
      <MainDrawer open={open} onClose={onClose} />
      <SearchEKB />
      <Content className="container">
        <RoutingRoad />
        <CategoryNestedList />
        <TableForSale />
        {/* <PopProducts />
            <CategoriesEKB />
            <RegistrationPS />
            <StartPage /> */}
      </Content>
      <Footer />
    </Layout>
  );
};

export default Main;

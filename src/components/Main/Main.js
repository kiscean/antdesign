import React from 'react';
import { Layout } from 'antd';

import './Main.css';

import Header from '../Header/Header';
import SearchEKB from '../SearchEKB/SearchEKB';
import CategoriesEKB from '../CategoriesEKB/CategoriesEKB';
import PopProducts from '../PopProducts/PopProducts';
import RightMenu from '../MainDrawer/RightMenu';
import Footer from '../Footer/Footer';
import StartPage from '../StartPage/StartPage';
import RegistrationPS from "../PagesSuccess/RegistrationPS";
import MainDrawer from "../MainDrawer/MainDrawer";
import TableForSale from "../Tables/TableForSale";
import CategoryNestedList from "../CategorNestedList/CategoryNestedList";
import {Content} from "antd/es/layout/layout";
import RoutingRoad from "../RoutingRoad/RoutingRoad";

const Main = () => {

  return (
    <Layout className="layout">
        <Header />
        <MainDrawer />
        <SearchEKB />
        <Content className='container'>
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

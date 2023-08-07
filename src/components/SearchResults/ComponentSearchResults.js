import React  from 'react';
import './SearchResults.css';

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchEKB from "../SearchEKB/SearchEKB";
import {Content} from "antd/es/layout/layout";

const ComponentSearchResults = () => {
    return (
        <section>
            <Header />
            <SearchEKB />
            <Content>

            </Content>
            <Footer />
        </section>
    );
};

export default ComponentSearchResults;
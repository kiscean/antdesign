import React from 'react';
import './BascketPage.css';
import {Divider} from "antd";

const BascketPage = () => {
    return (
        <section className="bascket">
            <Divider className="bascket-devider" orientation="left">
                <h4>Ваша корзина</h4>
            </Divider>
        </section>
    );
};

export default BascketPage;
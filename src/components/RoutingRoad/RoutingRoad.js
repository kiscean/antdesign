import React from "react";
import './RoutingRoad.css';

import {Breadcrumb} from "antd";
import {HomeOutlined} from "@ant-design/icons";
import MainDrawer from "../MainDrawer/MainDrawer";

const RoutingRoad = () => {
    return (
        <section>
            <Breadcrumb
                className='routing-path'
                items={[
                    {
                        href: '',
                        title: <HomeOutlined />,
                    },
                    {
                        href: '',
                        title: (
                            <>
                                <span>Все категории</span>
                            </>
                        ),
                    },
                    {
                        title: 'Оптоэлектроника',
                    },
                ]}
            />
        </section>
    );
};

export default RoutingRoad;

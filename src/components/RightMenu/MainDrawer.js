import React, { useState } from 'react';
import './RightMenu.css';

import {Avatar, Button, Drawer, Menu} from 'antd';
import {AppstoreOutlined, HeartOutlined, ImportOutlined, IssuesCloseOutlined} from "@ant-design/icons";

const MainDrawer = () => {

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const rightmenuItems = [
        getItem(
            <div className="navbar__rightmenuname">МояКомпания</div>,
            'sub1',
            <Avatar className="navbar__rightmenuicon">MC</Avatar>,
            [getItem('Профиль', '6'), getItem('Кабинет клиента', '7')],
        ),
        getItem('Избранное', '8', <HeartOutlined />),
        getItem('Меню сайта', 'sub2', <AppstoreOutlined />, [
            getItem('Опыт инженеров', '9'),
            getItem('Популярное', '10'),
            getItem('Категории', '11'),
        ]),
        getItem(
            <a href="#" target="_blank" rel="noopener noreferrer">
                Тех поддержка
            </a>,
            'link',
            <IssuesCloseOutlined />,
        ),
        getItem('Выйти', '12', <ImportOutlined />),
    ];

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <Drawer title="Навигация" placement="right" onClose={onClose} open={open}>
                <Menu
                    defaultOpenKeys={['sub1']}
                    mode={'inline'}
                    theme={'light'}
                    items={rightmenuItems}
                    style={{
                        borderRight: 'none',
                    }}
                />
            </Drawer>
        </>
    );
};
export default MainDrawer;
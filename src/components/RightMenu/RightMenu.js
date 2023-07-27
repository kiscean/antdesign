import React, {useState} from 'react';
import {Avatar, Menu} from "antd";
import {AppstoreOutlined, HeartOutlined, ImportOutlined, IssuesCloseOutlined} from "@ant-design/icons";
import './RightMenu.css';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const rightmenuItems = [
    getItem(<div className='navbar__rightmenuname'>Моя компания</div>, 'sub1',
        <Avatar className='navbar__rightmenuicon'>OR</Avatar>, [
            getItem('Профиль', '6'),
            getItem('Кабинет клиента', '7'),
        ]),
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

const RightMenu = ({active, setActive}) => {

    const [menuActive, setMenuActive] = useState(false)

    return (

        <div onClick={() => setActive(true)}>
            <div onClick={e => e.stopPropagation()}>
                <Menu
                    className={active ? 'navbar__rightmenu active' : 'navbar__rightmenu'}
                    defaultOpenKeys={['sub1']}
                    mode={'inline'}
                    theme={"light"}
                    items={rightmenuItems}
                />
            </div>
            <div className={active ? 'navbar__rightmenublur active' : 'navbar__rightmenublur'}></div>
        </div>

    );
};

export default RightMenu;
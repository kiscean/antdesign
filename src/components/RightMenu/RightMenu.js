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
    getItem(<div className='navbar__rightmenuname'>ОчумелыеРучки</div>, 'sub1',
        <Avatar className='navbar__rightmenuicon'>OR</Avatar>, [
            getItem('Профиль', '6'),
            getItem('Кабинет клиента', '7'),
        ]),
    getItem('Избранное', '8', <HeartOutlined />),
    getItem('Меню сайта', 'sub2', <AppstoreOutlined />, [
        getItem('Опыт инжинеров', '9'),
        getItem('Популярное', '10'),
        getItem('Категории', '11'),
    ]),
    getItem(
        <a href="https://avatars.mds.yandex.net/i?id=89987775783b0069dbf4acf35505bec60780ce40-8497233-images-thumbs&n=13" target="_blank" rel="noopener noreferrer">
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

        <div>
            <Menu
                className={active ? 'navbar__rightmenu active' : 'navbar__rightmenu'}
                defaultOpenKeys={['sub1']}
                mode={'inline'}
                theme={"light"}
                items={rightmenuItems}
            />
            <div className={active ? 'navbar__rightmenublur active' : 'navbar__rightmenublur'}></div>
        </div>

    );
};

export default RightMenu;
import {
  AuditOutlined,
  ExportOutlined,
  HeartOutlined,
  HomeOutlined,
} from '@ant-design/icons';

export const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Профиль
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Избранное
      </a>
    ),
    icon: <HeartOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Кабинет клиента
      </a>
    ),
    icon: <AuditOutlined />,
  },
  {
    key: '4',
    danger: true,
    label: 'Выйти',
    icon: <ExportOutlined />,
  },
];

export const menuItems = [
  { icon: '<NotificationOutlined />', name: 'Опыт инженеров', link: '#' },
  { icon: '<FireOutlined />', name: 'Популярное', link: '#' },
  { icon: '<BarsOutlined />', name: 'Категории', link: '#' },
  { icon: '<ToolOutlined />', name: 'Помощь', link: '#' },
];

export const routingRoadMenu = [
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
];

export const categoryNestedArr = [
  { quantity: 238, name: 'Аналогокварцвые умножители' },
  { quantity: 2122, name: 'Электроэлемент' },
  { quantity: 27888, name: 'Кварцевый резонатор' },
  { quantity: 2578, name: 'Конденсатор ниобиевый оксидно-полупроводниковый' },
  { quantity: 7378, name: 'Конденсаторы керамические выводные многослойные' },
  { quantity: 1548, name: 'Стабилизатор напряжения' },
  { quantity: 7775, name: 'Конденсатор керамический дисковый' },
  { quantity: 11, name: 'Чип резисторы (SMD, для поверхностного монтажа)' },
  { quantity: 2754, name: 'Конденсатор ниобиевый оксидно-полупроводниковый' },
  { quantity: 9447, name: 'Диоды защиты от электростатики (ESD)' },
  { quantity: 12358, name: 'Диоды' },
];

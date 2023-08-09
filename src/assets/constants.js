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

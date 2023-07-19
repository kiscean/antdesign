import { SmileOutlined } from '@ant-design/icons';

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
        Настройки партнера
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        История заказов
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'Выйти',
  },
];

export const menuItems = [
  { icon: '<NotificationOutlined />', name: 'Опыт инженеров', link: '#' },
  { icon: '<FireOutlined />', name: 'Популярное', link: '#' },
  { icon: '<BarsOutlined />', name: 'Категории', link: '#' },
  { icon: '<ToolOutlined />', name: 'Помощь', link: '#' },
];

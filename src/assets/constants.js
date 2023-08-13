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

export const tableForSaleComponents = [
  {
    key: '1',
    image: 'https://static.chipdip.ru/lib/211/DOC001211284.jpg',
    name: 'К10-17А М47',
    description: 'Конденсатор керамический выводной М47 6.8пФ, 20%',
    file: 'PDF',
    rating: '3',
    production: 'Россия, ОАО Завод деталей',
    tags: ['в наличии', 'быстрая доставка'],
    action: '',
    heart: '1',
  },
  {
    key: '2',
    image: 'https://static.chipdip.ru/lib/294/DOC005294472.jpg',
    name: '78D05L',
    description: 'Стабилизатор напряжения +5В 1А',
    file: 'PDF',
    rating: '4',
    production: 'USA, ElectricAdvence',
    tags: ['под заказ'],
    action: '',
    heart: '0',
  },
  {
    key: '3',
    image: 'https://static.chipdip.ru/lib/313/DOC005313873.jpg',
    name: '1N4148WS-7-F',
    description: 'Диод 150мА 75В [SOD-323]',
    file: 'PDF',
    rating: '4',
    production: 'Россия, ОАО Завод деталей',
    tags: ['в наличии', 'быстрая доставка'],
    action: '1',
    heart: '0',
  },
  {
    key: '4',
    image: 'https://static.chipdip.ru/lib/464/DOC002464721.jpg',
    name: '2А517А-2',
    description: 'Диод СВЧ',
    file: 'PDF',
    rating: '3',
    production: 'Россия, ОАО Завод деталей',
    tags: ['в наличии', 'быстрая доставка'],
    action: '1',
    heart: '0',
  },
  {
    key: '5',
    image: 'https://static.chipdip.ru/lib/036/DOC024036278.jpg',
    name: 'BAR6304WH6327XTSA1',
    description: 'Электроэлемент PIN DIODE, AEC-Q101, 50V, 0.1A, SOT-323',
    file: '',
    rating: '5',
    production: 'USA, ElectricAdvence',
    tags: ['под заказ'],
    action: '',
    heart: '1',
  },
  {
    key: '6',
    image: 'https://static.chipdip.ru/lib/243/DOC004243462.jpg',
    name: 'TDR-240-24',
    description: 'Блок питания, вход: 3-фазное 340-550В, выход: 24В,10А,240Вт',
    file: 'PDF',
    rating: '4',
    production: 'Россия, ОАО Завод деталей',
    tags: ['в наличии', 'быстрая доставка'],
    action: '',
    heart: '1',
  },
  {
    key: '7',
    image: 'https://static.chipdip.ru/lib/304/DOC005304605.jpg',
    name: 'TZC3P200A110',
    description: '5-20пФ, SMD конденсатор подстроечный',
    file: 'PDF',
    rating: '4',
    production: 'Россия, ОАО Завод деталей',
    tags: ['в наличии', 'быстрая доставка'],
    action: '',
    heart: '0',
  },
  {
    key: '8',
    image: 'https://static.chipdip.ru/lib/337/DOC004337152.jpg',
    name: 'JYC3D471KBB',
    description:
      '470 пФ, 2 кВ, 10%, Y5P, D=6.5мм, Конденсатор керамический дисковый',
    file: '',
    rating: '1',
    production: 'USA, ElectricAdvence',
    tags: ['под заказ'],
    action: '',
    heart: '0',
  },
  {
    key: '9',
    image: 'https://static.chipdip.ru/lib/638/DOC021638278.jpg',
    name: 'CK45-R3DD102K-VRAF',
    description:
      'Конденсатор керамический дисковый, напряжение 2000, емкость 1000P, отклонение K, вид керамики R',
    file: 'PDF',
    rating: '4',
    production: 'USA, ElectricAdvence',
    tags: ['под заказ'],
    action: '',
    heart: '0',
  },
  {
    key: '10',
    image: 'https://static.chipdip.ru/lib/193/DOC001193601.jpg',
    name: 'HC-49U',
    description: 'Кварцевый резонатор',
    file: 'PDF',
    rating: '4',
    production: 'USA, ElectricAdvence',
    tags: ['под заказ'],
    action: '',
    heart: '0',
  },
  {
    key: '11',
    image: 'https://static.chipdip.ru/lib/638/DOC021638278.jpg',
    name: 'CK45-R3DD102K-VRAF',
    description:
      'Конденсатор керамический дисковый, напряжение 2000, емкость 1000P, отклонение K, вид керамики R',
    file: 'PDF',
    rating: '3',
    production: 'USA, ElectricAdvence',
    tags: ['под заказ'],
    action: '',
    heart: '0',
  },
  {
    key: '12',
    image: 'https://static.chipdip.ru/lib/256/DOC031256591.jpg',
    name: 'К53-4Т',
    description:
      '3.3мкФ 16в 20%, Конденсатор ниобиевый оксидно-полупроводниковый',
    file: 'PDF',
    rating: '3',
    production: 'Россия, ОАО Завод деталей',
    tags: ['в наличии', 'быстрая доставка'],
    action: '',
    heart: '1',
  },
];

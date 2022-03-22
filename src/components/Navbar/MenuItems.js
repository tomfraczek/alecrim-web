export const MenuItems = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    cName: 'nav-links',
  },
  {
    id: 2,
    title: 'Capoeira',
    path: '/capoeira',
    cName: 'nav-links',
    img: 'capoeira-main.jpg',
    submenu: [
      {
        id: 2,
        title: 'History',
        path: '/capoeira/history',
        cName: 'dropdown-link',
        img: 'history.jpg',
        parent: 'Capoeira',
      },
      {
        id: 2,
        title: 'Music',
        path: '/capoeira/music',
        cName: 'dropdown-link',
        img: 'instruments.jpeg',
        parent: 'Capoeira',
      },
    ]
  },
  {
    id: 3,
    title: 'Academy',
    path: '/academy',
    cName: 'nav-links',
    img: 'academia.jpeg',
    submenu: [
      {
        id: 3,
        title: 'Gym',
        path: '/capoeira/history',
        cName: 'dropdown-link',
        img: 'history.jpg',
        parent: 'Academy',
      },
      {
        id: 3,
        title: 'Projects',
        path: '/capoeira/music',
        cName: 'dropdown-link',
        img: '1.jpg',
        parent: 'Academy',
      },
    ]
  },
  {
    id: 4,
    title: 'Alecrim',
    path: '/academy',
    cName: 'nav-links',
    img: 'alecrim-logo.png',
    submenu: [
      {
        id: 4,
        title: 'Mission',
        path: '/capoeira/history',
        cName: 'dropdown-link',
        img: 'history.jpg',
        parent: 'Alecrim',
      },
      {
        id: 4,
        title: 'Projects',
        path: '/capoeira/music',
        cName: 'dropdown-link',
        img: '1.jpg',
        parent: 'Alecrim',
      },
    ],
  },
  {
    id: 5,
    title: 'Trenings',
    path: '/trainings',
    cName: 'nav-links',
  },
  {
    id: 6,
    title: 'Contact Us',
    path: '/contact-us',
    cName: 'nav-links',
  },
];
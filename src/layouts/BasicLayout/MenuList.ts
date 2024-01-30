export default [
  {
    title: 'MenuName1',
    link: '/list',
    key: 'list',
    icon: null,
    permissions: 'portal',
  },
  {
    title: 'MenuName2',
    key: 'MenuName2',
    icon: null,
    permissions: 'portal',
    children: [
      {
        title: 'MenuName2-1',
        link: '/detail',
        key: 'detail',
        permissions: 'portal',
      },
    ],
  },
];

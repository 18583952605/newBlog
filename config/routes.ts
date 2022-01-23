import routeJson from './routeJson.json';

export default [
  {path: '/', redirect: '/1.Html/1.标签介绍'},
  {path: '/welcome', name: '欢迎', menu: false, component: 'Welcome'},
  ...(routeJson || []),
  {component: './404'},
]

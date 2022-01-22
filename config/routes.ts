import routeJson from './routeJson.json';

export default [
  {path: '/', redirect: '/welcome'},
  {path: '/welcome', name: '欢迎', menu: false, component: 'Welcome'},
  ...(routeJson || []),
  {component: './404'},
]

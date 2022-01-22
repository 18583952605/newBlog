import routeJson from './routeJson.json';

export const docRoutes = routeJson

export default [
  {path: '/', redirect: '/welcome'},
  {path: '/welcome', name: '欢迎', menu: false, component: 'Welcome'},
  ...(docRoutes || []),
  {component: './404'},
]

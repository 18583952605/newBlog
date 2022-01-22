import {Settings as LayoutSettings} from '@ant-design/pro-layout'

export default {
  navTheme: 'light',
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'newNote',
  pwa: false,
  logo: '/icon.webp',
  iconfontUrl: '',
} as LayoutSettings & { pwa?: boolean; logo?: string; }

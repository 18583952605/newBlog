import {Settings as LayoutSettings} from '@ant-design/pro-layout'

export default {
  navTheme: 'light',
  primaryColor: '#4569d4',
  layout: 'top',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'newNote',
  pwa: false,
  logo: '/icon.webp',
  iconfontUrl: '',
} as LayoutSettings & { pwa?: boolean; logo?: string; }

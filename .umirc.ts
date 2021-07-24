import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'newNote',
  mode: 'site',
  locales: [['zh-CN', '中文']],
  // plugins: ['./plugins/handle.ts'],
  publicPath: process.env.NODE_ENV === 'development' ? undefined : '/newBlog/',
})

import {history} from 'umi'
import routes from '../config/routes'
import Footer from '@/components/Footer'

export const layout = () => {
  return {
    links: [],
    disableContentMargin: false,
    menuHeaderRender: undefined,
    unAccessible: <div>unAccessible</div>,
    rightContentRender: () => null,
    footerRender: () => <Footer/>,
    onPageChange: (pathInfo: any) => {
      const {pathname, state} = pathInfo
      // @ts-ignore
      const {routes: childrenRoutes} = routes.find(item => item.path === `.${pathname}`) || {}
      if (state?.ok || !childrenRoutes?.length) {
        return
      }
      const targetPath = `${pathname}/${childrenRoutes?.[0].path}`.replaceAll('./', '')
      history.push(targetPath, {ok: true})
    }
  }
}

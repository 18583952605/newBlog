import RightContent from '@/components/RightContent'
import Footer from '@/components/Footer'

export const layout = () => {
  return {
    links: [],
    disableContentMargin: false,
    menuHeaderRender: undefined,
    unAccessible: <div>unAccessible</div>,
    rightContentRender: () => <RightContent/>,
    footerRender: () => <Footer/>,
    onPageChange: () => undefined
  }
}

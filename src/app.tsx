import {Link} from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import {BookOutlined, LinkOutlined} from '@ant-design/icons';

const isDev = process.env.NODE_ENV === 'development';

// ProLayout
export const layout = () => {
  return {
    rightContentRender: () => <RightContent/>,
    disableContentMargin: false,
    footerRender: () => <Footer/>,
    onPageChange: () => {
      // const {location} = history;
      // // 如果没有登录，重定向到 login
      // if (!initialState?.currentUser && location.pathname !== loginPath) {
      //   history.push(loginPath);
      // }
    },
    links: isDev
      ? [
        <Link to="/umi/plugin/openapi" target="_blank">
          <LinkOutlined/>
          <span>openAPI 文档</span>
        </Link>,
        <Link to="/~docs">
          <BookOutlined/>
          <span>业务组件文档</span>
        </Link>,
      ]
      : [],
    menuHeaderRender: undefined,
    // unAccessible: <div>unAccessible</div>,
  };
};

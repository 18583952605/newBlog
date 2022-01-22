import {useMemo} from 'react'
import {Menu} from 'antd';
import {history, Link} from 'umi';
import routes from '../../../../config/routes';

export default () => {
  const {pathname} = history.location
  const routePath = pathname.split('/')

  // @ts-ignore
  const {routes: childrenRoutes = []} = routes.find(item => item.path === `./${routePath[1]}`) || {}

  return useMemo(() => {
    const openKeys: string[] = []

    const renderMenuItem = ({name = '', path = ''}) => {
      return (
        <Menu.Item key={path}>
          <Link to={path}>{name}</Link>
        </Menu.Item>
      )
    }

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const renderSubMenu = ({name = '', path = '', routes = []}) => {
      openKeys.push(path)
      return (
        <Menu.SubMenu key={path} title={name}>
          {routes?.map((item) => {
            if (!item.path) {
              return null
            }
            return item?.routes?.length ? renderSubMenu(item) : renderMenuItem(item)
          })}
        </Menu.SubMenu>
      )
    }
    return (
      <Menu mode='inline' openKeys={openKeys} defaultSelectedKeys={[`./${routePath[2]}`]}>
        {childrenRoutes.map((item: any) => {
          return item?.routes?.length ? renderSubMenu(item) : renderMenuItem(item)
        })}
      </Menu>
    )
  }, [childrenRoutes, routePath])
}

import { IApi } from 'dumi'
import { IThemeLoadResult } from '@umijs/preset-dumi/lib/theme/loader'

export default (api: IApi) => {
  api.register({
    key: 'dumi.modifyThemeResolved',
    fn(resolved: IThemeLoadResult) {
      console.log(666, resolved)
      // 修改 resolved 并返回
      return resolved
    },
  })
}

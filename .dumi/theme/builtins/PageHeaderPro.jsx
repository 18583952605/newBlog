import React from 'react'
import { PageHeader } from 'antd'
import '../style/index.less'

export default (props) => {
  let { title = '', sub_title = '' } = props

  return (
    <PageHeader
      title={title}
      subTitle={sub_title}
      style={{ margin: 0, padding: 0 }}
    />
  )
}

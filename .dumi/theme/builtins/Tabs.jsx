import React from 'react'
import { Card, Tabs } from 'antd'
import { highlightText, str2Array } from '../tools'
import '../style/index.less'

export default (props) => {
  let { cardTitle = '', size = 'small', data = '[]' } = props

  // 转换data
  if (typeof data === 'string') {
    data = str2Array(data) || []
  }

  if (typeof data[0] === 'string') {
    data = data.map((item, index) => ({
      title: `第${index + 1}步`,
      content: highlightText(item),
    }))

  } else if (typeof data[0] === 'object') {
    data = data.map(item => ({
      title: highlightText(item.title),
      content: highlightText(item.content),
    }))
  }

  const tabs = (
    <Tabs size={size}>
      {data.map((item, index) => (
        <Tabs.TabPane tab={item.title} key={index}>
          {item.content}
        </Tabs.TabPane>
      ))}
    </Tabs>
  )

  if (!cardTitle) {
    return tabs
  }

  return (
    <Card size={size} title={cardTitle}>
      {tabs}
    </Card>
  )
}

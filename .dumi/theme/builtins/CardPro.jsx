import React from 'react'
import { Card, Descriptions, Table } from 'antd'
import { highlightText, str2Array } from '../tools'
import '../style/index.less'

export default (props) => {
  let { size = '', type = 'table', title = '', data = '[]', showHeader = false } = props

  // 支持的字段
  const attrs = [
    { key: 'label', label: '标签' },
    { key: 'desc', label: '描述' },
    { key: 'value', label: '值' },
    { key: 'example', label: '示例' },
  ]

  // 转换data
  data = str2Array(data) || []

  // 取第一个
  const firstItem = data[0] || {}

  // 给data里的字符串高亮
  data = data.map((item) => {
    return attrs.reduce(
      (o, { key }) => ({ ...o, [key]: firstItem[key] ? highlightText(item[key]) : null }),
      {},
    )
  })

  // 给title里的字符串高亮
  title = highlightText(title)

  // 渲染类型
  const renderMap = {
    descriptions: () => {
      return (
        <Descriptions
          size={size}
          column={1}
          bordered
          labelStyle={{ width: '40%' }}
          style={{ border: 'none' }}
          contentStyle={{ border: 'none' }}
        >
          {data.map((item, index) => (
            <Descriptions.Item key={index} style={{ fontWeight: 400 }} label={item.label}>
              {item.desc}
            </Descriptions.Item>
          ))}
        </Descriptions>
      )
    },
    table: () => {
      // 生成columns
      const columns = attrs
        .map(({ key, label }) => (firstItem[key] ? { title: label, dataIndex: key } : null))
        .filter((i) => i)

      // 给第一列40%的宽度
      columns[0].width = '40%'

      return (
        <Table
          size={size}
          dataSource={data}
          columns={columns}
          pagination={false}
          showHeader={showHeader}
        />
      )
    },
  }

  return (
    <Card size={size} title={title || null} bodyStyle={{ padding: 0 }}>
      {renderMap[type]()}
    </Card>
  )
}

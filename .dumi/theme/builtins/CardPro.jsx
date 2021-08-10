import React from 'react'
import { Card, Descriptions, Table } from 'antd'
import { checkAttr, highlightText, str2Array } from '../tools'
import '../style/index.less'

export default (props) => {
  let {
    size = '',
    type = 'table',
    title = '',
    data = '[]',
    showHeader = false,
    pagination = false,
  } = props

  // 支持的字段
  const attrs = [
    { key: 'label', label: '标签', isMerge: true },
    { key: 'attr', label: '属性', isMerge: true },
    { key: 'desc', label: '描述' },
    { key: 'value', label: '值', isCopy: true },
    { key: 'example', label: '示例', isCopy: true },
    { key: 'effect', label: '效果' },
    { key: 'attach', label: '附加' },
  ]

  // 转换data
  if (typeof data === 'string') {
    data = str2Array(data) || []
  }

  // example字段，自动标红
  let dataSource = data.map(item => ({ ...item, example: item.example ? `‘${item.example}’` : undefined }))

  // 给data里的字符串高亮
  dataSource = dataSource.map(item => {
    return attrs.reduce(
      (o, { key, isCopy }) => ({
        ...o,
        [key]: checkAttr(dataSource, key) ? highlightText(item[key], isCopy && item[key]) : null,
      }),
      {},
    )
  })

  // 给title里的字符串高亮
  title = title ? highlightText(title) : null

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
      let columns = attrs
      .map((item) => (checkAttr(dataSource, item.key) ? { title: item.label, dataIndex: item.key, ...item } : null))
      .filter((i) => i)
      .map(item => !item.isMerge ? item : {
        ...item,
        render: (text, _, index) => ({
          children: text,
          props: {
            rowSpan: getRowSpan(item, index),
          },
        }),
      })

      // 计算应该占几行
      const getRowSpan = (column, index) => {
        if (index > 0 && data[index][column.dataIndex] === data[index - 1][column.dataIndex]) {
          return 0
        }
        if (Object.keys(data[index]).length === 0) {
          return 0
        }
        return data.reduce((t, i) => data[index][column.dataIndex] === i[column.dataIndex] ? t + 1 : t, 0)
      }

      // 给第一列40%的宽度
      if (columns[0]) {
        columns[0].width = '30%'
      }

      // 没有数据不显示表格
      if (dataSource.length === 0) {
        return null
      }

      return (
        <Table
          size={size}
          dataSource={dataSource}
          columns={columns}
          pagination={pagination}
          showHeader={Boolean(showHeader)}
        />
      )
    },
  }

  return (
    <Card size={size} title={title} bodyStyle={{ padding: 0 }} bordered={false}>
      {renderMap[type]()}
    </Card>
  )
}

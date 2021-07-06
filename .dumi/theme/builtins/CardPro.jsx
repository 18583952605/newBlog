import React from 'react'
import { Card, Descriptions, Typography } from 'antd'
import '../style/index.less'

export default (props) => {
  let { size = '', type = 'descriptions', title = '', data = '[]' } = props

  try {
    data = JSON.parse(data.replaceAll(`'`, `"`))
  } catch (err) {
    console.error('JSON.parse失败', err, data)
  }

  // 将字符串中`包含的部分`，增加颜色
  const replace = (text = '') => {
    let startOrEnd = false

    const sourceText = text.trim().replaceAll('‘', '"').replaceAll('’', '"')

    const __html = sourceText.replaceAll('`', () => {
      startOrEnd = !startOrEnd
      return startOrEnd
        ? '<xmp style="display: inline-block; color: #d56161; margin: 0 3px; font-family: Consolas, Monaco, monospace;">'
        : '</xmp>'
    })

    return (
      <Typography.Paragraph copyable={{ text: sourceText.replaceAll('`', '') }}>
        <span style={{ whiteSpace: 'pre' }} dangerouslySetInnerHTML={{ __html }} />
      </Typography.Paragraph>
    )
  }

  // 渲染类型
  const renderMap = {
    descriptions: (
      <Descriptions
        size={size}
        column={1}
        bordered
        labelStyle={{ width: '40%' }}
        style={{ border: 'none' }}
        contentStyle={{ border: 'none' }}
      >
        {data.map((item, index) => (
          <Descriptions.Item key={index} style={{ fontWeight: 400 }} label={replace(item.label)}>
            {replace(item.desc)}
          </Descriptions.Item>
        ))}
      </Descriptions>
    ),
  }

  return [
    <Card size={size} title={title ? replace(title) : null} bodyStyle={{ padding: 0 }}>
      {renderMap[type]}
    </Card>,
  ]
}

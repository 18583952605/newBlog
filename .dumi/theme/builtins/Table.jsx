import React, { useState } from 'react'
import { Button, Form, Input, message, Space } from 'antd'
import { MinusCircleOutlined } from '@ant-design/icons'
import _ from 'lodash'
import copy from 'copy-to-clipboard'

export default () => {
  const [title, setTitle] = useState('')
  const attrs = 'label,attr,desc,value,example,effect,attach'

  const onFinish = (values) => {
    values.list = values.list.map(item => {
      return _.pickBy(_.pick(item, attrs.split(',')), _.identity)
    })

    let str = `<CardPro
  title='${title}'
  data='${JSON.stringify(values.list)}'
/>`
    str = str.replaceAll(/\"(.*?)\"\:\"(.*?)\"/g, '$1: `$2`')
    str = str.replaceAll('\'', '"')
    str = str.replaceAll(/,\b/g, ', ')
    str = str.replaceAll('\{', '\n    {')
    str = str.replaceAll('\]', '\n  \]')

    message.success(copy(str) ? '复制成功' : '复制失败')
  }

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <Form name='form' onFinish={onFinish} autoComplete='off' style={{ flex: 1 }}>
        <Form.List name='list'>
          {(fields, { add, remove }) => (
            <>
              <Form.Item>
                <Space>
                  <Input value={title} style={{ width: '300px' }} onChange={ev => setTitle(ev.target.value)} />
                  <Button type='dashed' onClick={add}>添加一行</Button>
                  <Button type='primary' htmlType='submit'>复制</Button>
                </Space>
              </Form.Item>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align='baseline'>
                  {attrs.split(',').map((item, index) => (
                    <Form.Item key={index} {...restField} name={[name, item]}>
                      <Input placeholder={item} />
                    </Form.Item>
                  ))}
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
            </>
          )}
        </Form.List>
      </Form>
    </div>
  )
}

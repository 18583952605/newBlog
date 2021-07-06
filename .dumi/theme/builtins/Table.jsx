import React from 'react'
import { Button, Form, Input, Space } from 'antd'
import { MinusCircleOutlined } from '@ant-design/icons'
import copy from 'copy-to-clipboard'

const temp = `<CardPro
  data='_text_'
/>
`.replaceAll("'", '"')

export default () => {
  const onFinish = (values) => {
    values.list = values.list.map((i) => ({
      label: i.label.replaceAll('"', '‘').replaceAll('"', '‘'),
      desc: i.desc.replaceAll('"', '‘').replaceAll('"', '‘'),
    }))

    const text = JSON.stringify(values.list).replaceAll('"', "'")
    console.log(666, copy(temp.replaceAll('_text_', text)))
  }

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ flex: 1 }}>
        <Input.TextArea rows={4} />
      </div>
      <Form name="form" onFinish={onFinish} autoComplete="off" style={{ flex: 1 }}>
        <Form.List name="list">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item {...restField} name={[name, 'label']} fieldKey={[fieldKey, 'label']}>
                    <Input
                      placeholder="label"
                      onKeyDown={(ev) => {
                        if (ev.keyCode === 13) {
                          add()
                        }
                      }}
                    />
                  </Form.Item>
                  <Form.Item {...restField} name={[name, 'desc']} fieldKey={[fieldKey, 'desc']}>
                    <Input placeholder="desc" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={add}>
                  添加一行
                </Button>
                <Button type="primary" htmlType="submit">
                  复制
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  )
}

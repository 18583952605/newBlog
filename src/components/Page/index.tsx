import {Row, Col} from 'antd'
import Menu from './components/Menu'

export default (props: any) => {
  const {children} = props
  return (
    <Row style={{height: 'calc(100vh - 64px)', overflow: 'hidden'}}>
      <Col span={5}>
        <Menu/>
      </Col>
      <Col span={24 - 8} style={{padding: '10px'}}>
        {children}
      </Col>
      <Col span={3} style={{padding: '10px'}}>
        right
      </Col>
    </Row>
  )
}

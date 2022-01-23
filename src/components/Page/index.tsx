import {useEffect} from "react"
import {useHistory, useModel} from 'umi'

import {Row, Col, Space} from 'antd'
import Menu from './components/Menu'
import AnchorList from './components/AnchorList'

import styles from './index.less'

export default (props: any) => {
  const {children} = props
  const {setData, setActive} = useModel('anchorData')

  // 监听到页面改变时，清空anchorData
  const {listen, location: {hash}} = useHistory()
  useEffect(() => {
    listen((_, type) => {
      if (type === 'PUSH') {
        setData([])
      }
    })
  }, [listen, setData])

  // 地址栏锚点改变时，改变active
  useEffect(() => {
    setActive(decodeURIComponent(hash).replace('#', ''))
  }, [hash, setActive])

  return (
    <Row className={styles.row}>
      <Col span={4}>
        <Menu/>
      </Col>
      <Col span={24 - 8} className={styles.col}>
        <Space direction='vertical' className={styles.content}>
          {children}
        </Space>
      </Col>
      <Col span={3} className={styles.col}>
        <AnchorList/>
      </Col>
    </Row>
  )
}

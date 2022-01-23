import {useState} from 'react'

export default () => {
  const [data, setData] = useState([])
  const [active, setActive] = useState('')
  return {
    data,
    push: item => setData(data => [...data, item]),
    setData,
    active,
    setActive,
  }
}

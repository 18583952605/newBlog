import React from 'react'
import { str2Object } from '../tools'
import jsonToVirtualDom from '../tools/jsonToVirtualDom'

import CardPro from '../builtins/CardPro'

const components = {
  CardPro,
}

export default (props) => {
  return jsonToVirtualDom(components, str2Object(props.data))
}

import React from 'react'

const jsonToVirtualDom = (components, o) => {
  const type = Object.prototype.toString.call(o).slice(8, -1)

  if (type === 'Array') {
    return o.map(i => jsonToVirtualDom(components, i))
  }

  if (type === 'Object') {
    const obj = Object.entries(o).reduce((_o, [key, value]) => {

      if (key === 'component') {
        _o.component = components[o.component]
      } else {
        _o[key] = jsonToVirtualDom(components, value)
      }

      return _o
    }, {})

    if (obj.component) {
      const { component, props, children } = obj
      return React.createElement(component, props, children)
    }

    return obj
  }

  return o
}

export default jsonToVirtualDom

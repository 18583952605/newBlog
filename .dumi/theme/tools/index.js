import { Typography } from 'antd'

// 根据规则替换字符串
export const replaceByRules = (text = '', rules = []) => {
  rules.forEach(([a, b]) => {
    text = text.replaceAll(a, b)
  })
  return text
}

// 字符串转为数组
export const str2Array = (str = '') => {
  let data = []
  try {
    data = eval(replaceByRules(str, [['\\n', '']]))
  } catch (err) {
    data = [{ desc: str }]
  }
  return data
}

// 将字符串中‘’包含的部分，显示高亮颜色
export const highlightText = (text = '', isCopy = false, isEllipsis = true) => {
  const sourceText = text.trim()
  const __html = replaceByRules(sourceText, [
    [
      '‘',
      '<xmp style="display: inline-block; color: #d56161; margin: 0 3px; font-family: Consolas, Monaco, monospace;">',
    ],
    ['’', '</xmp>'],
  ])
  return (
    <Typography.Paragraph
      ellipsis={isEllipsis ? { rows: 1 } : false}
      copyable={
        isCopy
          ? {
              text: replaceByRules(sourceText, [
                ['‘', ''],
                ['’', ''],
              ]),
            }
          : undefined
      }
    >
      <span style={{ whiteSpace: 'pre' }} dangerouslySetInnerHTML={{ __html }} />
    </Typography.Paragraph>
  )
}

// 判断是否有包含指定属性的对象
export const checkAttr = (list = [], attr = '') => {
  return list.some((item) => item[attr])
}

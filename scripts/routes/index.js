const fs = require('fs')
const path = require('path')
const lodash = require('lodash')
const watch = require('watch')

// pages的目录
const pagesPath = path.resolve('', '../src/pages')
// 要写入的routes路径
const jsonPath = path.resolve('', '../config/routeJson.json')

// 获取指定目录下的目录和文件
const getFiles = (path_) => {
  const files = fs.readdirSync(path_)
  return {
    dirs: files.filter(item => !fs.statSync(path.resolve(path_, item)).isFile()),
    files: files.filter(item => fs.statSync(path.resolve(path_, item)).isFile()),
  }
}

// 替换全部指定字符串
const replaceAll = (str = '', searchValue, replaceValue) => {
  str = str.replace(searchValue, replaceValue)
  if (!str.includes(searchValue)) {
    return str
  }
  return replaceAll(str, searchValue, replaceValue)
}

// 根据名称的前缀序号排序 ['1.Html', '5.Git', '2.Css']
const sortNames = (names) => {
  names = names.map((item, index) => ({
    index: item.includes('.') ? Number(item.split('.')[0]) : index,
    name: item,
  }))
  return names.sort((a, b) => a.index - b.index).map(item => item.name) || []
}

// 处理名称 1.Html = Html
const handleName = (name) => {
  if (/^\d*\./.test(name)) {
    return name.split('.')[1]
  }
  return name
}

// 获取路由数据
const getRoutes = (page_, topPath = '', ignoreFile = false, menu = false) => {
  const {dirs = [], files = []} = getFiles(page_)

  const route = sortNames(dirs).map(item => ({
    path: `./${item}`,
    name: handleName(item),
    routes: getRoutes(`${page_}\\${item}`, `${topPath}/${item}`),
  }))

  if (ignoreFile) {
    return route
  }

  route.push(...sortNames(files).map(item => {
    const {name} = path.parse(item)
    return {
      path: `./${name}`,
      name: handleName(name),
      component: `.${topPath}/${name}`,
      menu,
    }
  }))

  route.push({component: './404'})

  return route
}

// 监听
watch.watchTree(pagesPath, lodash.debounce(() => {
  console.log(666, '监听到[pages]的改变，正在重新生成routes...')
  fs.writeFileSync(jsonPath, JSON.stringify(getRoutes(pagesPath, '', true)))
}, 100))

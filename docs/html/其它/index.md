---
title: 其它
order: 5
---

### 相对路径

<ComponentPro
  data="{
    component: 'CardPro',
    props: {
      data: [
        {desc: `同一目录`, example: `<img src='logo.jpg' /> <img src='./logo.jpg' />`},
        {desc: `上级目录`, example: `<img src='../logo.jpg' />`},
        {desc: `下级目录`, example: `<img src='./img/logo.jpg' />`},
      ]
    }
  }"
/>

### 绝对路径

<ComponentPro
  data="{
    component: 'CardPro',
    props: {
      data: [
        {example: `<img src='D:\WEB\img\logo.jpg' />`},
        {example: `<img src='/logo.jpg' />`},
        {example: `<img src='//www.baidu.com/logo.jpg' />`},
        {example: `<img src='http://www.baidu.com/logo.jpg' />`},
      ]
    }
  }"
/>

### 单选框
<ComponentPro
  data="{
    component: 'CardPro',
    props: {
      data: '单选框的 name 属性值一样才能实现单选效果' 
    }
  }"
/>

### 复选框

<ComponentPro
  data="{
    component: 'CardPro',
    props: {
      data: '复选框的 name 属性值是例如‘aihao[]’的形式才能提交多个 value 到服务器'
    }
  }"
/>

### src 和 href 的区别

<ComponentPro
  data="{
    component: 'CardPro',
    props: {
      data: 'src 用于替换当前元素，<br>href 用于在当前文档和引用资源间确立联系，<br>img、script 使用 src 属性，a、link 使用 href 属性'
    }
  }"
/>

### align 属性

<ComponentPro
  data="{
    component: 'CardPro',
    props: {
      data: '大部分元素的 align 属性都是控制元素里内容的位置，<br>table、img 元素的 align 属性是控制自身在行内的位置'
    }
  }"
/>

### table 表格的隐藏 tbody

<ComponentPro
  data="{
    component: 'CardPro',
    props: {
      data: 'css 选择器选择 table 下的元素时，要注意 table 下有个自动生成的 tbody<br>所以用子代选择器选不到 tr 元素，建议用后代选择器'
    }
  }"
/>

### 拖拽元素的属性

<ComponentPro
  data="{
    component: 'CardPro',
    props: {
      data: `要在页面上拖拽元素，需要给元素添加‘draggable='true'’属性，这样元素才能拖拽`
    }
  }"
/>

---
title: Head标签
order: 2
---

<PageHeaderPro 
  title="head标签"  
  sub_title="一般用于定义文档的头部，描述文档的各种属性和信息，用于存放：title、meta、style、script、link、base" 
/>

### title 标签

<CardPro
  data="[{'label':'`<title></title>`', 'desc':'定义文档的标题，显示在浏览器窗口的标题栏上'}]"
/>

### meta 标签

<CardPro
  data="[{'label': '`<meta charset=’utf-8‘ />`', 'desc': '网页编码'}, {'label': '`<meta name=’keywords‘ content=’关键字1,关键字2‘ />`', 'desc': '网页关键字'}, {'label':'`<meta name=‘description‘ content=‘描述‘ />`','desc':'网页描述'},{'label':'`<meta name=‘renderer‘ content=‘webkit‘ />` ','desc':'优先使用webkit内核'},{'label':'`<meta name=‘viewport‘ content=‘width=device-width,`<br>` user-scalable=no, initial-scale=1.0,`<br>` maximum-scale=1.0, minimum-scale=1.0‘ />`','desc':'视口设置'},{'label':'`<meta http-equiv=‘refresh‘ content=‘5; http://www.qq.com‘ />`','desc':'重定向'},{'label':'`<meta http-equiv=‘X-UA-Compatible‘ content=‘IE=edge,chrome=1‘ />`','desc':'优先使用edge渲染'}]"
/>

### link 标签

<CardPro 
  data="[{'label':'`<link rel=‘stylesheet’ href=‘index.css’>`', 'desc':'引入样式表'}, {'label':'`<link rel=‘icon’ href=‘1.ico’>`', 'desc':'引入小图标'}]"
/>

### base 标签

<CardPro
  data="[{'label':'`<base target=’_blank‘ />`', 'desc': '网页所有链接为_blank方式打开'}]"
/>

## style 标签

```html
<style>
  ...;
</style>
```

## script 标签

```html
<script type="text/javascript" src="index.js"></script>

<script>
  ...
</script>
```

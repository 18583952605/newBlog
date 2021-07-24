---
title: Body标签
order: 3
---

<PageHeaderPro 
  title="body标签"  
  sub_title="一般定义页面的主体部分，包含页面的所有内容（如文本、超链接、图片、列表和表格等）" 
/>

### 3.1 文本类标签

<CardPro
  type="table"
  data="[
    {desc: `加粗`, example: `<strong>加粗</strong>`, effect: `<strong>加粗</strong>` },
    {desc: `斜体`, example: `<em>斜体</em>`, effect: `<em>斜体</em>` },
    {desc: `删除线`, example: `<del>删除线</del>`, effect: `<del>删除线</del>` },
    {desc: `下划线`, example: `<ins>下划线</ins>`, effect: `<ins>下划线</ins>` },
    {},
    {desc: `上标`, example: `<sup>上标</sup>`, effect: `<sup>上标</sup>` },
    {desc: `下标`, example: `<sub>下标</sub>`, effect: `<sub>下标</sub>` },
    {},
    {desc: `换行`, example: `<br />`, effect: `<br />` },
    {desc: `分隔线`, example: `<hr />`, effect: `<hr />` },
    {},
    {desc: `标题`, example: `<h1~h6>标题</h1~h6>`, effect: `<h5>标题</h5>`, attach: `dir` },
    {desc: `段落`, example: `<p>段落</p>`, effect: `<p>段落</p>`, attach: `align` },
  ]"
/>

### 3.2 图像标签

```html
<img src="图片路径" alt="提示" title="标题" />
```

<CardPro
  type="table"
  data="[
    {attr: `src`, desc: `图片路径`, example: `src='img/logo.jpg'` },
    {attr: `alt`, desc: `图片显示失败时的提示文本`, example: `alt='这是一张图片'` },
    {attr: `title`, desc: `鼠标悬浮时的提示文本`, example: `title='这是一张图片'` }
  ]"
/>

## 3.3 链接标签

```html
<!--普通链接-->
<a href="链接网址">链接名称</a>

<!--锚点定位-->
<a name="mao">这是要跳转到的位置</a>
<!--第一种方法定义锚点-->
<p id="mao">这是要跳转到的位置</p>

<!--第二种方法定义锚点-->
<a href="#mao">链接名称</a>
<!--链接到锚点-->
```

|  属性名  |                   含义                    |             值              |
| :------: | :---------------------------------------: | :-------------------------: |
|   href   |                 跳转网址                  |   `href="http://qq.com"`    |
|          |               跳转本地链接                |     `href="./new.html"`     |
|          |                  空链接                   |         `href="#"`          |
|          |                  无反应                   | `href="javascript:void(0)"` |
|  target  |                新窗口打开                 |      `target="_blank"`      |
|          |                本窗口打开                 |      `target="_self"`       |
| download | 将 href 地址的文件下载并以 file_name 命名 |   `download="file_name"`    |
|   rel    |               禁止蜘蛛抓取                |      `rel="nofollow"`       |

## 3.4 列表标签

::: tip 无序列表

```html
<ul>
  <!--ul标签下只允许有li标签-->
  <li>无序表项1</li>
  <!--li标签下允许有其它标签-->
  <li>无序表项2</li>
</ul>
```

| 属性名 |             值              |         含义         |
| :----: | :-------------------------: | :------------------: |
|  type  | `type="square/disc/circle"` | 小方块/实心圆/空心圆 |

:::

::: tip 有序列表

```html
<ol>
  <!--ol标签下只允许有li标签-->
  <li>有序表项1</li>
  <!--li标签下允许有其它标签-->
  <li>有序表项2</li>
</ol>
```

|  属性名  |         值         |       含义       |
| :------: | :----------------: | :--------------: |
|   type   | `type="1/a/A/i/I"` | 表项前的序号格式 |
|  start   |    `start="3"`     |   序号从几开始   |
| reversed |     `reversed`     |  序号为降序显示  |

:::

::: tip 自定义列表

```html
<dl>
  <!--dl标签下可以有多对dt、dd标签，但不能有其它标签-->
  <dt>北京</dt>
  <!--dt标签后允许多个dd标签-->
  <dd>海淀区</dd>
  <dd>昌平区</dd>
  <dd>顺义区</dd>
</dl>
```

:::

## 3.5 表格标签

```html
<table>
  <!--tr是行，th是表头，td是单元格-->
  <caption>
    这是表格标题
  </caption>
  <tr>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
```

::: tip table 标签
| 属性名 | 含义 | 值 |
|:------------:|:--------------------:|:-----------------: |
| border | 边框 | `border="1"` |
| bordercolor | 边框颜色 | `bordercolor="red"`|
| bgcolor | 背景颜色 | `bgcolor="red"` |
| background | 背景图片 | `background="1.jpg"`|
| width | 整个表格宽度 | `width=300"` |
| height | 整个表格高度 | `height="200"` |
| algin | 整个表格对齐方式 | `algin="left/right/"`|
| **cellspacing** | 单元格之间的距离 | `cellspacing="2"` |
| **cellpadding** | 单元格内容与边框的距离 | `cellpadding="1"` |
:::

::: tip tr、td、th 标签
| 属性名 | 含义 | 值 |
|:------------:|:--------------------------:|:----------------: |
| bgcolor | 背景颜色 | `bgcolor="red"` |
| background | 背景图片 | `background="1.jpg"`|
| width | 整个表格宽度 | `width=300"` |
| height | 整个表格高度 | `height="200"` |
| **align** | 单元格内容水平对齐方式 | `align="left/right/center"`|
| **valign** | 单元格内容竖直对齐方式 | `valign="top/middle/bottom"`|
:::

::: tip 表格标题

```html
<caption>
  这是表格标题
</caption>
```

| 属性名 |    含义    |          值          |
| :----: | :--------: | :------------------: |
| align  | 标题的位置 | `align="top/bottom"` |

:::

::: tip 表格分组

```html
<thead></thead>
<tbody></tbody>
<tfoot></tfoot>
```

用于对表格的行进行分组、thead 和 tfoot 只出现一次，tbody 可出现多次<br>
没有定义的话，全部在 tbody 里
:::

::: tip 合并单元格

```html
<table>
  <tr>
    <th>表头1</th>
    <th>表头2</th>
    <th>表头3</th>
  </tr>
  <tr>
    <td colspan="3">合并的列</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td rowspan="2">合并的行</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>
```

跨行合并 `rowspan="要合并的行数"` 并把多余格删掉<br>
跨列合并 `colspan="要合并的列数"` 并把多余格删掉
:::

## 3.6 音频/视频/资源标签

```html
<audio src="" [autoplay] [controls] [loop] [muted] />
<video src="" [autoplay] [controls] [loop] [muted] [width] [height] />

<audio>
  <source src="horse.wav" type="audio/wav" />
  <source src="horse.mp3" type="audio/mpeg" />
</audio>
```

::: tip
autoplay 属性在个别浏览器下失效，是因为有的浏览器不允许自动播放有声音的视频<br>
可以加个静音属性，或者在 video.oncanplay 事件中执行 video.play()方法来实现自动播放
:::
::: tip
| 属性名 | 含义 | 值 |
|:------------:|:------------------:|:----------------: |
| autoplay | 自动播放 | `autoplay`|
| controls | 播放控制条 | `controls`|
| loop | 循环播放 | `loop` |
| muted | 静音 (值是 false 为静音) | `false` |
:::

## 3.7 语义化标签 && 其它标签

::: tip
| 语义化标签 ||
| -------: | :----- |
| `<header></header>` | 头部 |
| `<nav></nav>` | 导航 |
| `<main></main>` | 主体内容 |
| `<aside></aside>` | 侧边栏 |
| `<section></section>` | 片段/区块 |
| `<footer></footer>` | 底部 |
|||
| **其它标签** ||
| `<code></code>` | 代码标签 |
| `<template></template>` | 模板标签(天生 isplay:none) |
| `<pre></pre>` | 源码原样显示 |
| `<blockquote></blockquote>`| 长引用(`<q></q>`为短引用) |
| `<font>字体</font>` | 字体标签，属性(face、color、size) |
| `<!--注释-->` | 注释 |
| `<progress />` | 进度条 |
| `<abbr title="缩写内容">WHO</abbr>` | <abbr title="缩写内容">缩写标签</abbr> |
| `<dialog></dialog>`| 对话框标签 |
| `<mark></mark>` | 突出标签，文本为黄色背景 |
| `<time></time>` | 时间标签，表示内容是一个时间(语义化)|
| `<address></address>` | 地址标签，表示内容是一个地址(语义化) |
| `<figure></figure>` | 多媒体标签，表示内容是多媒体区域(语义化) |
| `<kbd></kbd>` | 键位标签，表示内容是一个键盘键位 |
| `<details>`<br>`<summary>问题</summary>`<br>`回答`<br>`</details>` | 折<br>叠<br>问<br>答 |
| `<!--[if lt IE 9 ]>`<br>`</h2>版本过低，请您升级浏览器</h2>`<br>`<script src="html5shiv.js"></script>`<br>`<![endif]-->` | 条件注释<br>满足 IE 版本小于 9 才渲染里面的 html 代码<br>一般用来有选择性的输出内容或加载 js |
:::

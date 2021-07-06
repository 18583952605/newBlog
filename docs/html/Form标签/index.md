---
title: Form标签
order: 4
---

## 4.1 input 标签

::: tip 单行文本框

```html
<input type="text" />
```

:::

::: tip 密码输入框

```html
<input type="password" />
```

:::

::: tip 隐藏文本框

```html
<input type="hidden" />
```

:::

::: tip 属性
| 属性名 | 含义 | 值 |
|:------------:|:--------------------------:|:----------------: |
| name | 表单元素名称 | `name="user"` |
| value | 默认值 | `value="默认值"` |
| size | 宽度(字符数) | `size="10"` |
| maxlength | 允许输入的最多字符数 | `maxlength="6"` |
| placeholder | 提示文本 | `placeholder="提示文本"`|
| readonly | 只读 | `readonly` |
| disabled | 禁止且内容不会随表单提交 | `disabled"` |
| autofocus | 自动获取焦点 | `autofocus` |
| required | 内容不可为空 | `required` |
| list | 可显示自动输入列表 | `详见4.5章` |
| autocomplete| 在编辑框双击时弹出输入历史 | `autocomplete="off/on"` |
:::

::: tip 单选框

```html
<input type="radio" name="sex" value="boy" [checked] />
<input type="radio" name="sex" value="girl" />
```

:::

::: tip 复选框

```html
<input type="checkbox" name="aihao[]" value="yinyue" [checked] />
<input type="checkbox" name="aihao[]" value="meishu" />
```

:::

::: tip 普通按钮

```html
<input type="button" />
```

:::

::: tip 重置按钮

```html
<input type="reset" />
```

:::

::: tip 提交按钮

```html
<input type="submit" />
```

:::

::: tip 图形按钮

```html
<input type="image" src="图片路径" alt="[图片显示失败的提示文本]" />
```

:::

::: tip 文件域

```html
<input type="file" [multiple] [accept="image/gif,image/jpeg" ] />
```

:::

::: tip 更多类型
| 类型 | |
|:------------:|:---------------:|
| 搜索 | `<input type="search" />`|
| 邮箱 | `<input type="email" />`|
| 网址 | `<input type="url" />`|
| 数字 | `<input type="number" />`|
| 日期 | `<input type="date" />`|
| 电话 | `<input type="tel" />`|
| 颜色 | `<input type="color" />`|
:::

## 4.2 label 标签

::: tip

```html
<!--点击手机号码，光标进入输入框，有两种方法-->
(1) <label>手机号码：<input type="text"></input></label>
(2) <label for="num">手机号码：</label><input type="text" id="num"></input>
```

:::

## 4.3 textarea 文本域

::: tip

```html
<textarea cols="[每行的字符数]" rows="[行数]">这里写内容</textarea>
```

:::

## 4.4 select 下拉列表

::: tip

```html
<select name="city" [multiple] [size]>
  <optgroup label="分组名">
    <option value="1" [selected]>北京</option>
    <option value="2">上海</option>
    <option value="3">深圳</option>
  </optgroup>
</select>
```

|  属性名  |     含义     |     值     |
| :------: | :----------: | :--------: |
| multiple |     多选     | `multiple` |
|   size   | 显示的表项数 | `size="3"` |
| selected |   默认选中   | `selected` |

:::

## 4.5 datalist 数据列表

::: tip

```html
<input type="text" list="list_id" />
<!--该input可显示自动输入列表-->
<datalist id="list_id">
  <option value="java">java</option>
  <option value="javascript">javascript</option>
  <option value="php">php</option>
</datalist>
```

:::

## 4.6 form 表单域

::: tip

```html
<form action="./one.php" method="get">
  帐号：<input type="text" name="user" /> 密码：<input type="password" name="pwd" />
</form>
```

|    属性名    |                                              含义                                              |               值                |
| :----------: | :--------------------------------------------------------------------------------------------: | :-----------------------------: |
|    action    |                                            提交地址                                            |      `action="./one.php"`       |
|    method    |                                            提交方式                                            |       `method="get/post"`       |
|   enctype    |                                   编码方式 (上传文件时必须)                                    | `enctype="multipart/form-data"` |
| autocomplete |                      双击弹出历史<br>自动完成是在编辑框双击时弹出输入历史                      |     `autocomplete="off/on"`     |
|  novalidate  | 不对用户输入的内容进行验证<br>例如不验证 email 类型的 input 框<br>用户输入的内容是否为邮箱地址 |          `novalidate`           |

:::

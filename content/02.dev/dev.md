---
title: '开发笔记'

navigation:
  icon: '🏡'

tags: ['vue', 'note']
categories: ['dev', '2024看年']
date: '2024-06-01'
author: '[iczp](../html/nofollow.md)'
---

Learn how to use @nuxt/content.

<!--more-->

Full amount of content beyond the more divider.

# 开发笔记

[nofollow 标签 - ggg](../html/nofollow.md)

> https://www.tailwindcss.cn/docs/installation

引入了 `tailwindcss`，其中 `tailwindcss/base` 中有一个 `preflight` 机制，它会注入一些全局样式，来统一不同浏览器的默认标签样式。

比如像 `h1`,`h2`,`h3` 这类标签，原先编写后，浏览器默认会给它们不同的字体大小。引入 `tailwindcss/base` 后，浏览器给的样式被覆盖和统一，所以这些标签就都一样大了，我们称之为 `css normalize`。

浏览器呈现后，发现字都是一样大的，这样就看不出文章标题的层级。此时你就需要一些专门为文章展示场景设计 [`typography-plugin`](https://link.juejin.cn?target=https%3A%2F%2Ftailwindcss.com%2Fdocs%2Ftypography-plugin) 了。接下来让我开始安装：

```bash
bash

复制代码yarn add -D @tailwindcss/typography
```

接着在 `tailwind.config.js` 中注册它:

```js
js复制代码;
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
```

此时你就可以使用 `prose` 相关的原子化 `class` 来美化你的文章内容了，它会给你编写的文章内容添加预设的样式。只需在我们的 `ContentDoc` 添加属性: `<ContentDoc class="prose" />` 即可呈现效果。

作者：icebreaker
链接：https://juejin.cn/post/7117806971226423304
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# Vue3 开发笔记

::app-header
Default slot text

#description
This will be rendered inside the `description` slot.
::

---

current: 1

---

::tab{:items='["Nuxt", "Vue", "React"]' :current="1"}
content tab-content
::

::tab-panels{:items='["Nuxt", "Vue", "React"]' :current="1"}
default content tab-content

---

# index0 1

# index1 1

# index2 1

---

::

```js [file.js]{4-6,7} meta-info=val
export default () => {
  console.log('Code block');
};
```

This will be rendered inside the `description` slot.

```ts

::a-tabs{activeKey="1"}
  :::a-tab-pance{key="1"}
    往往
  :::
::

::a-button{type="primary"}
我是按鈕
::

```

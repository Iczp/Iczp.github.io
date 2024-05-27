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

```vue

::a-tabs{activeKey="1"}
  :::a-tab-pance{key="1"}
    往往
  :::
::

::a-button{type="primary"}
我是按鈕
::

```
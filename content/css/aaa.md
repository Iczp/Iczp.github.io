# 在实用程序类前添加`hover:bg-sky-700`

## 修饰符堆叠

- `<button class="dark:md:hover:bg-fuchsia-600">`
- 以下为修饰符

## 伪类伪元素

- 使用方法：
  - 在实用程序类前添加`hover:bg-sky-700`
- 伪类
  - hover
  - focus
  - focus-within 用来选择和样式化一个元素或者它的任何后代元素获得焦点的情况
  - focus-visible 用来选择和样式化一个元素或者它的任何后代元素获得焦点的情况，用非指针方法获得焦点时
  - active 伪类选择器是用来选择和样式化被激活的元素，比如被点击的链接或按钮
  - visited 用来选择和样式化用户已经访问过的链接
  - target 元素的 ID 与当前 URL 片段匹配
  - first 如果元素是第一个使用修饰符的子元素
  - last 如果元素是最后一个使用修饰符的子元素
  - only 如果元素是唯一使用修饰符的子元素
  - odd 如果元素是奇数编号的子元素
  - even 如果元素是偶数编号的子元素
  - first-of-type 如果元素是其类型的第一个子元素
  - last-of-type 如果元素是其类型的最后一个子元素
  - only-of-type 如果元素是其类型中唯一的子元素
  - empty 如果元素没有内容
  - disabled 在禁用输入时设置输入样式
  - enabled 在元素未禁用时应用另一种样式时
  - checked 选中复选框或单选按钮时
  - indeterminate 不确定状态的复选框或单选按钮的样式
  - default 这些选项、复选框或单选按钮是最初使用修饰符加载页面时的默认值
  - required 可以选择和样式化任何带有required属性的<input>、<select>或<textarea>元素
  - valid 输入有效时的样式
  - invalid 输入无效时的样式
  - in-range 当输入的值在指定的范围限制内时
  - out-of-range 当输入的值超出指定范围限制时
  - placeholder-shown 显示占位符时设置输入样式
  - autofill 自动填充输入时，用户未编辑过
  - read-only 在输入为只读时
- 伪元素
  - before 创建一个元素作为当前元素的第一个子元素
  - after
  - placeholder
  - file 代表 type="file" 的 <input> 的按钮 ::file-selector-button
  - marker: 匹配当前标签下 列表的标记框（通常为一个符号或数字）。它作用在任何设置了 display: list-item 的元素或伪元素上，例如 <li> 和 <summary> 元素
  - selection 是一个CSS伪元素选择器，它可以用来给用户选中的文本添加样式
  - first-line 首行
  - first-letter 首字
  - backdrop ::backdrop在任何处于全屏模式的元素下的即刻渲染的盒子（并且在所有其他在堆中的层级更低的元素之上）

## 媒体查询

- 使用方法：
  - 在实用程序类前添加`sm:bg-sky-700`
- 媒体查询
  - sm @media (min-width: 640px)
  - md @media (min-width: 768px)
  - lg @media (min-width: 1024px)
  - xl @media (min-width: 1280px)
  - 2xl @media (min-width: 1536px)
  - min-[…] 自定义 @media (min-width: …)`min-[320px]`
  - max-sm @media not all and (min-width: 640px)
  - max-md @media not all and (min-width: 768px)
  - max-lg @media not all and (min-width: 1024px)
  - max-xl @media not all and (min-width: 1280px)
  - max-2xl @media not all and (min-width: 1536px)
  - max-[…] 自定义@media (max-width: …)
  - portrait 竖屏，@media (orientation: portrait)
  - landscape 横屏
  - dark @media (prefers-color-scheme: dark)
  - motion-reduce 一个CSS媒体查询，它可以用来检测用户是否在设备上启用了减少非必要动画或运动的设置
  - motion-safe 当用户没有设置 prefers-reduced-motion 时才添加样式
  - contrast-more 用户请求更多对比度时，@media (prefers-contrast: more)
  - print 打印样式
  - supports-[...] 特性查询，用来判断浏览器是否支持某些 css 特性，例如：@supports (display: grid) { ... }`supports-[display:grid]:grid`

## 其他

### 属性选择器

- aria-* 属性选择器
  - `<div aria-checked="true" class="aria-checked:bg-sky-700">`
  - `<th aria-sort="ascending" class="aria-[sort=ascending]:bg-[url('/img/down-arrow.svg')]">`
  - 和 group 和 peer 配合使用`<svg class="group-aria-[sort=ascending]:rotate-0>`
- data-* 属性选择器
  - `<div data-size="large" class="data-[size=large]:p-8">`
- open 具有 open 属性的元素
  - `<details class="open:bg-white>`
  - details 和 dialog 标签具有 open 属性

### 后代选择器

- ltr、rtl 不同文本展示方式下设置样式，html 中设置

  ```
  <html dir="ltr">
  ```

  才能够生效

  - `<div class="ltr:ml-3 rtl:mr-3">`

- 根据父元素状态设置元素样式时，在父元素绑定group，在子元素绑定group-*来定义

```html
<a href="#" class="group">
  <h3 class="group-hover:text-white">New project</h3>
</a>
```

- 根据特定父元素状态来设置元素样式，在父元素绑定group/{name}，在子元素绑定group-hover/{name}来定义

```html
<li class="group/item">
  <a class="group-hover/item:visible"></a>
</li>
```

- 可以在 group-[] 的方括号内传入任意选择器来指定特定的父元素

```xml
<div class="group is-published">
  <div class="group-[.is-published]:block">
    Published
  </div>
</div>
```

- & 用来作为 group 的占位符，空格用 _ 代替`group-[.is-published]:block`是`group-[&.is-published]:block`的简写

```vue
<div class="group">
  <div class="group-[:nth-of-type(3)_&]:block">
  </div>
</div>
```

```css
:nth-of-type(3) .group .group-\[\:nth-of-type\(3\)_\&\]\:block {
  display: block;
}
```



https://www.tailwindcss.cn/docs/configuration

# 安装（略）

# 编辑器设置（略）

# Using with Preprocessors 与预处理器一起使用（略）

# Optimizing for Production 针对生产进行优化（略）

# Browser Support 浏览器支持（略）

# Upgrade Guide 升级指南（略）

# Utility-First Fundamentals 效用优先基础知识

- 好处
  - You aren’t wasting energy inventing class names. 你不是在浪费精力发明类名
    - 注释：一个自定义类有什么作用？
  - Your CSS stops growing 您的 CSS 停止增长
  - Making changes feels safer 进行更改感觉更安全
    - 注释：只影响当前标签
- Why not just use inline styles? 为什么不直接使用内联样式？
  - Designing with constraints.有约束的设计。
    - 注释：使用 tailwindcss 的值有一定的范围，并不是可任意定义的
  - Responsive design 响应式设计
  - Hover, focus, and other states. 悬停、焦点和其他状态

# Hover, Focus, and Other States 悬停、焦点和其他状态

- Every utility class in Tailwind can be applied conditionally by adding a modifier to the beginning of the class name that describes the condition you want to target.
  - Tailwind 中的每个实用程序类都可以有条件地应用，方法是在描述要面向的条件的类名的开头添加一个修饰符。
  - 注释：实用程序类 是指 Tailwind 提供的基础类

```vue
<button class="bg-sky-500 hover:bg-sky-700 ...">
  Save changes
</button>
```

```css
// 生成的 css
.bg-sky-500 {
  background-color: #0ea5e9;
}
.hover\:bg-sky-700:hover {
  background-color: #0369a1;
}
```



- Pseudo-classes, like :hover, :focus, :first-child, and :required
  - 伪类
  - hover
  - focus
  - focus-within 用来选择和样式化一个元素或者它的任何后代元素获得焦点的情况
  - focus-visible 用来选择和样式化一个元素或者它的任何后代元素获得焦点的情况，用非指针方法获得焦点时
  - active 伪类选择器是用来选择和样式化被激活的元素，比如被点击的链接或按钮
  - visited 用来选择和样式化用户已经访问过的链接
  - target 元素的 ID 与当前 URL 片段匹配
  - first 如果元素是第一个使用修饰符的子元素
  - last 如果元素是最后一个使用修饰符的子元素
  - only 如果元素是唯一使用修饰符的子元素
  - odd 如果元素是奇数编号的子元素
  - even 如果元素是偶数编号的子元素
  - first-of-type 如果元素是其类型的第一个子元素
  - last-of-type 如果元素是其类型的最后一个子元素
  - only-of-type 如果元素是其类型中唯一的子元素
  - empty 如果元素没有内容
  - disabled 在禁用输入时设置输入样式
  - enabled 在元素未禁用时应用另一种样式时
  - checked 选中复选框或单选按钮时
  - indeterminate 不确定状态的复选框或单选按钮的样式
  - default 这些选项、复选框或单选按钮是最初使用修饰符加载页面时的默认值
  - required 可以选择和样式化任何带有required属性的<input>、<select>或<textarea>元素
  - valid 输入有效时的样式
  - invalid 输入无效时的样式
  - in-range 当输入的值在指定的范围限制内时
  - out-of-range 当输入的值超出指定范围限制时
  - placeholder-shown 显示占位符时设置输入样式
  - autofill 自动填充输入时，用户未编辑过
  - read-only 在输入为只读时
- Pseudo-elements, like ::before, ::after, ::placeholder, and ::selection
  - 伪元素
  - before 创建一个元素作为当前元素的第一个子元素
  - after
  - Note that if you’ve disabled our preflight base styles, the content property will not be set to an empty string by default, and you will need to include content-[''] any time you use the before and after modifiers.
    - 如果没有`@tailwind base;`引入基本样式，那么 before 等为元素不会自动 content 一个空字符串，需要`<div class="before:content-[''] before:block ...">`手动实现
  - placeholder
  - file 代表 type="file" 的 <input> 的按钮 ::file-selector-button
    - Note that Tailwind’s border reset is not applied to file input buttons. This means that to add a border to a file input button, you need to explicitly set the border-style using a class like alongside any border-width utility:file:border-solid
      - `@tailwind base;`中对于边框的样式重置不会影响 file input，如果需要边框的话，需要手动设置`file:border-solid`
  - We’ve designed the marker modifier to be inheritable, so although you can use it directly on an <li> element, you can also use it on a parent to avoid repeating yourself.
    - marker: 匹配当前标签下 列表的标记框（通常为一个符号或数字）。它作用在任何设置了 display: list-item 的元素或伪元素上，例如 <li> 和 <summary> 元素
    - 注意后代选择器样式影响范围问题

```javascript
<ul role="list" class="pl-5 space-y-3 list-disc marker:text-sky-400 text-slate-500">
  <li>5 cups chopped Porcini mushrooms</li>
  <li>1/2 cup of olive oil</li>
  <li>3lb of celery</li>
</ul>

// css应该是
.marker:text-sky-400 ::marker{
  // text-sky-400的样式
}
```

- 接上面

  - selection 是一个CSS伪元素选择器，它可以用来给用户选中的文本添加样式
    - We’ve designed the selection modifier to be inheritable, so you can add it anywhere in the tree and it will be applied to all descendant elements.
      - selection 可以用于给所有选中的子孙文件添加样式，`selection:bg-fuchsia-300`对应的 css 应该是`selection\:bg-fuchsia-300 ::selection{}`
      - 注释：注意后代选择器导致的影响范围不明确问题
  - first-line 首行
  - first-letter 首字
  - backdrop
    - ::backdrop 在任何处于全屏模式的元素下的即刻渲染的盒子（并且在所有其他在堆中的层级更低的元素之上）
    - 注释：原生 dialog 标签就是一个全屏模式的元素，可以用这个类来修改它的容器的样式

- Media and feature queries, like responsive breakpoints, dark mode, and prefers-reduced-motion

  - 响应

    - 媒体查询 @media：屏幕宽度、分辨率、方向
      - 屏幕宽度 md、lg 等
        - sm @media (min-width: 640px)
        - md @media (min-width: 768px)
        - lg @media (min-width: 1024px)
        - xl @media (min-width: 1280px)
        - 2xl @media (min-width: 1536px)
        - min-[…] @media (min-width: …)
        - max-sm @media not all and (min-width: 640px)
        - max-md @media not all and (min-width: 768px)
        - max-lg @media not all and (min-width: 1024px)
        - max-xl @media not all and (min-width: 1280px)
        - max-2xl @media not all and (min-width: 1536px)
        - max-[…] @media (max-width: …)
      - 方向
        - portrait 竖屏，`@media (orientation: portrait)`
        - landscape 横屏
    - 流式布局：百分比、flex
    - 响应图片：根据分辨率加载不同大小图片

  - 黑暗：

    - 媒体查询

      - ```
        dark:bg-slate-900
        ```

        - `@media (prefers-color-scheme: dark) { ... }`和`@media (prefers-color-scheme: light) { ... }`

    - 使用 CSS 中的过滤器（filter），利用 invert 和 hue-rotate 两个函数来反转和调整页面元素的颜色

      - filter 属性来给元素（通常是图片）添加一些视觉效果（类似于 Photoshop 中的滤镜）。CSS filter 属性可以让您实现一些预定义的效果，例如模糊、亮度、对比度、阴影、灰度、色相、反转、透明度、饱和度和棕褐色等。您也可以使用 url () 函数来引用 SVG 文件中定义的滤镜效果。`filter: blur(5px) brightness(0.5) hue-rotate(90deg);`
      - invert() 函数是一种滤镜函数，可以用来给元素（通常是图片）添加反色的效果。invert() 函数的作用是将输入图像中的每个颜色样本反转，即用 255 减去原来的颜色值。可以传入参数表示反转的程度
      - hue-rotate() 函数是一种滤镜函数，可以用来给元素（通常是图片）添加色相旋转的效果。色相旋转的意思是将输入图像中的每个颜色样本沿着色环（色彩模型中的一个圆形区域，表示不同的色相）旋转一定的角度，从而改变图像的色调。
      - 注释：invert 使图片的颜色趋于中和然后反向，hue-rotate 使图片中的颜色变成其他颜色

    - 使用 CSS 中的混合模式（mix-blend-mode），让页面元素的颜色与背景色相互影响，产生不同的视觉效果

      - mix-blend-mode 是一种 CSS 属性，它定义了一个元素的内容如何与其父元素的内容和元素的背景如何混合。它允许你创建令人惊艳的视觉效果，可以用于创建半透明效果、添加阴影、制作图片蒙版和很多其他效果。具体来说，mix-blend-mode 定义了两个元素之间的颜色混合模式。

  - motion-reduce

    - prefers-reduced-motion 是一个CSS媒体查询，它可以用来检测用户是否在设备上启用了减少非必要动画或运动的设置`@media (prefers-reduced-motion) { ... }`
    - motion-safe 当用户没有设置 prefers-reduced-motion 时才添加样式`motion-safe:hover:-translate-x-0.5`

  - contrast-more 用户请求更多对比度时，

    ```
    @media (prefers-contrast: more)
    ```

    - contrast-less 用户要求降低对比度时

  - print 打印样式

  - Use the supports-[...] modifier to style things based on whether a certain feature is supported in the user’s browser.

    - 特性查询，用来判断浏览器是否支持某些 css 特性，例如：`@supports (display: grid) { ... }`
    - `<div class="flex supports-[display:grid]:grid ...">`
    - Under the hood the supports-[...] modifier generates @supports rules and takes anything you’d use with @supports (...) between the square brackets, like a property/value pair, and even expressions using and and or.
      - 方括号内支持 @supports () 内的所有语法
    - For terseness, if you only need to check if a property is supported (and not a specific value), you can just specify the property name:
      - 为了简洁起见可以直接用属性名判断是否支持该属性`supports-[backdrop-filter]:bg-black/25`
      - backdrop-filter 是一种 CSS 属性，它可以让你对一个元素的背景或背景区域应用图形效果，比如模糊、色彩变换等。它和 filter 属性的效果类似，但是 filter 属性是对元素的内容应用效果，而 backdrop-filter 属性是对元素的背景应用效果。
    - You can configure shortcuts for common @supports rules you’re using in your project in the theme.supports section of your tailwind.config.js file:
      - 可以在配置文件中为[]内内容配置快捷方式，注意：快捷方式不是通过[]传入

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    supports: {
      grid: 'display: grid',
    },
  },
}

// 可以在项目中使用这些自定义修饰符：supports-*
<div class="supports-grid:grid">
```

- Attribute selectors, like [dir="rtl"] and [open]

  - Use the aria-* modifier to conditionally style things based on ARIA attributes.

    - 根据是否有 aria-* 属性来控制

      ```
      <div aria-checked="true" class="bg-gray-600 aria-checked:bg-sky-700">
      ```

      - ARIA 用于修改无障碍树中定义的元素的状态和属性，例如：把 aria-hidden="true" 加到元素上会把该元素和它的所有子元素从无障碍树上移除。这样做可以通过隐藏下列内容来提升使用辅助技术的用户体验

    - By default we’ve included modifiers for the most common boolean ARIA attributes:

      - 为[常用](https://www.tailwindcss.cn/docs/hover-focus-and-other-states#aria-states)的 aria 属性提供了快捷方式

    - [原生所有的 aria 属性](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA/Attributes)

    - If you need to use a one-off aria modifier that doesn’t make sense to include in your theme, or for more complex ARIA attributes that take specific values, use square brackets to generate a property on the fly using any arbitrary value.

      - 使用 [] 可以使用任意 aria 属性，例如：`<th aria-sort="ascending" class="aria-[sort=ascending]:bg-[url('/img/down-arrow.svg')]">`

    - ARIA state modifiers can also target parent and sibling elements using the group-aria-* and peer-aria-* modifiers:

      - 可以和 group 和 peer 配合使用，`<svg class="group-aria-[sort=ascending]:rotate-0>`标识父组件具有`aria-sort=ascending`属性时 svg 的样式

    - You can customize which aria-* modifiers are available by editing theme.aria or theme.extend.aria in your tailwind.config.js file

      - 可以在配置中为[]内内容配置快捷方式，注意：快捷方式不是通过[]传入

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      aria: {
        asc: 'sort="ascending"',
        desc: 'sort="descending"',
      },
    },
  },
};
```

- 接上面
  - Since there are no standard data-* attributes by definition, by default we only support arbitrary values out of the box, for example:
    - data- 没有官方默认属性，所以默认只支持[]传入任意值，例如`<div data-size="large" class="data-[size=large]:p-8">`
    - You can configure shortcuts for common data attribute selectors you’re using in your project in the theme.data section of your tailwind.config.js file:
      - 可以在配置文件中配置快捷方式
      - ~= 是一种 CSS 属性选择器，它用来选择具有指定属性和值的元素，其中值是一个由空格分隔的列表，且列表中包含指定的值。

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    data: {
      checked: 'ui~="checked"',
    },
  },
}

// 使用
<div data-ui="checked active" class="data-checked:underline">
```

- 接上面

  - Use the rtl and ltr modifiers to conditionally add styles in right-to-left and left-to-right modes respectively when building multi-directional layouts:

    - 使用 rtl 和 ltr 在不同文本展示方式下设置样式`<div class="ltr:ml-3 rtl:mr-3">`
    - Note that the ltr modifier will not take effect unless the dir attribute is explicitly set to ltr, so if you are building a multi-directional site make sure to always set a direction, not just in rtl mode.
    - 必须在 html 中设置`<html dir="ltr">`才能够生效

  - Use the open modifier to conditionally add styles when a <details> or <dialog> element is in an open state:

    - details 和 dialog 标签具有 open 属性

      ```
      <details class="open:bg-white>
      ```

      - details 折叠框标签

- These modifiers can even be stacked to target more specific situations, for example changing the background color in dark mode, at the medium breakpoint, on hover:

  - 这些修饰符甚至可以堆叠

```xml
<button class="dark:md:hover:bg-fuchsia-600 ...">
  Save changes
</button>
```

- When you need to style an element based on the state of some parent element, mark the parent with the group class, and use group-* modifiers like group-hover to style the target element:
  - 根据父元素状态设置元素样式时，在父元素绑定`group`，在子元素绑定`group-*`来定义
  - 注释：嵌套容易导致影响范围不明确
  - 下例：当 <a> hover 时，svg、h3、p 改变字体颜色
  - 适用于每个伪类
  - 注释：group不是通过原生css的伪类实现的，文档的归类会导致误导

```xml
<a href="#" class="block max-w-xs p-6 mx-auto space-y-3 bg-white rounded-lg shadow-lg group ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500">
  <div class="flex items-center space-x-3">
    <svg class="w-6 h-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
    <h3 class="text-sm font-semibold text-slate-900 group-hover:text-white">New project</h3>
  </div>
  <p class="text-sm text-slate-500 group-hover:text-white">Create a new project from a variety of starting templates.</p>
</a>
```

- When nesting groups, you can style something based on the state of a specific parent group by giving that parent a unique group name using a group/{name} class, and including that name in modifiers using classes like group-hover/{name}:
  - 根据特定父元素状态来设置元素样式，在父元素绑定`group/{name}`，在子元素绑定`group-hover/{name}`来定义

```xml
<ul role="list">
  {#each people as person}
    <li class="group/item hover:bg-slate-100 ...">
      <img src="{person.imageUrl}" alt="" />
      <div>
        <a href="{person.url}">{person.name}</a>
        <p>{person.title}</p>
      </div>
      <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href="tel:{person.phone}">
        <span class="group-hover/edit:text-gray-700 ...">Call</span>
        <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
          <!-- ... -->
        </svg>
      </a>
    </li>
  {/each}
</ul>
```

- You can create one-off group-* modifiers on the fly by providing your own selector as an arbitrary value between square brackets:
  - 可以在 group-[] 的方括号内传入任意选择器来指定特定的父元素

```csharp
<div class="group is-published">
  <div class="hidden group-[.is-published]:block">
    Published
  </div>
</div>

// 生成的 css
.group.is-published .group-\[\.is-published\]\:block {
  display: block;
}
```

- For more control, you can use the & character to mark where .group should end up in the final selector relative to the selector you are passing in:
  - & 用来作为 group 的占位符，空格用 _ 代替

```typescript
<div class="group">
  <div class="group-[:nth-of-type(3)_&]:block">
    <!-- ... -->
  </div>
</div>

// 生成的css
:nth-of-type(3) .group .group-\[\:nth-of-type\(3\)_\&\]\:block {
  display: block;
}
```

- When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers like peer-invalid to style the target element:
  - 根据同级元素来设置之后元素，`peer`用来标记需要观察的同级元素，`peer-*`用来标记之后元素在同级元素处于 * 状态时的样式
  - 注释：p ~ span 只能选中 p 之后同个父级的 span 并不能选中之前的
  - 注释：peer不是通过 css原生伪类实现的，文档的分类具有误导

```javascript
<form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Email</span>
    <input type="email" class="peer ..."/>
    <p class="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
      Please provide a valid email address.
    </p>
  </label>
</form>

// css
peer:invalid ~ peer-invalid\:visible{
  // visible 实用程序类预定义的样式
}
```

- When using multiple peers, you can style something on the state of a specific peer by giving that peer a unique name using a peer/{name} class, and including that name in modifiers using classes like peer-checked/{name}:
  - 根据特定同级元素来设置之后元素，`peer/{name}`用来标记需要观察的同级元素，`peer-*/{name}`用来标记之后元素在同级元素处于 * 状态时的样式

```xml
<fieldset>
  <legend>Published status</legend>

  <input id="draft" class="peer/draft" type="radio" name="status" checked />
  <label for="draft" class="peer-checked/draft:text-sky-500">Draft</label>

  <input id="published" class="peer/published" type="radio" name="status" />
  <label for="published" class="peer-checked/published:text-sky-500">Published</label>

  <div class="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
  <div class="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
</fieldset>
```

- You can create one-off peer-* modifiers on the fly by providing your own selector as an arbitrary value between square brackets:
  - 可以在 pree-[] 的方括号内传入任意选择器来指定特定的同级元素
  - 注释：pree-[] 和 pree-* 可以同时使用，应该和 peer-*/{name} 也能同时使用，group 应该也一样

```xml
<form>
  <label for="email">Email:</label>
  <input id="email" name="email" type="email" class="is-dirty peer" required />
  <div class="peer-[.is-dirty]:peer-required:block hidden">This field is required.</div>
  <!-- ... -->
</form>
```

- For more control, you can use the & character to mark where .peer should end up in the final selector relative to the selector you are passing in:
  - & 用来作为 .peer 的占位符，空格用 _ 代替，`peer-[:nth-of-type(3)_&]`最终被解析为`:nth-of-type(3) .peer`

```xml
<div>
  <input type="text" class="peer" />
  <div class="hidden peer-[:nth-of-type(3)_&]:block">
    <!-- ... -->
  </div>
</div>
```

- Arbitrary variants are just format strings that represent the selector, wrapped in square brackets. For example, this arbitrary modifier selects an element only when it is the third child:
  - 可以使用 [] 定义任意的选择器`<li class="[&:nth-child(3)]:underline">{item}</li>`
  - Arbitrary variants can be stacked with built-in modifiers or with each other, just like the rest of the modifiers in Tailwind:
    - []可以和其他内置类名共同使用`<li class="lg:[&:nth-child(3)]:hover:underline">{item}</li>`
  - You can also use at-rules like @media or @supports in arbitrary variants:
    - 可以在[]中使用 @media or @supports`<div class="flex [@supports(display:grid)]:grid">`
  - You can even combine at-rules and regular selector modifiers by including the selector modifier within curly braces after the at-rule:
    - 在 [] 可以使用 {} 包含选择器，例如：`<button type="button" class="[@media(any-hover:hover){&:hover}]:opacity-100">`
    - `@media(any-hover:hover)`当前设备有输入机制可以实现 hover 效果
- If you find yourself using the same arbitrary modifier multiple times in your project, it might be worth extracting it to a plugin using the addVariant API:
  可以把 [] 定义的任意选择器配置为插件

```javascript
let plugin = require('tailwindcss/plugin')

module.exports = {
  // ...
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('third', '&:nth-child(3)')
    })
  ]
}
```

- All of Tailwind’s modifiers are available to use with your own custom classes as long as you’ve defined them in one of Tailwind’s layers or added them using a plugin:
  - 所有修饰符都可以和自定义类一起使用

```ts
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  // 自定义类名
  .content-auto {
    content-visibility: auto;
  }
}

// 使用时
<div class="lg:content-auto">
```

- For the most part this doesn’t actually matter, but there are a few situations where the order you use actually generates meaningfully different CSS.
  - 修饰符的绑定顺序会导致结果的不同
  - dark: 在 tailwind 中可选择实现方法，一种是通过 @media 另一种是通过 html 中添加 .dark，当以 class 方式实现时，第二种顺序会导致错误

```css
/* dark:group-hover:opacity-100 */
.dark .group:hover .dark\:group-hover\:opacity-100 {
  opacity: 1;
}

/* group-hover:dark:opacity-100 */
.group:hover .dark .group-hover\:dark\:opacity-100 {
  opacity: 1;
}
```

- For example, if you have darkMode configured to class, combining the dark and group-hover modifiers generates a different result depending on the order you use:
  - 例如：使用 prose-headings 时需要注意顺序
  - prose-headings 是官方插件中提供的修饰符，会影响 h1, h2, h3, h4, th 这些元素的样式，你可以在它后面加上任何 Tailwind 的工具类，来改变标题的字体、颜色、大小、对齐等属性
  - :is() 是 CSS 中的一个伪类函数，它可以接受一个选择器列表作为参数，并选择该列表中任何一个选择器可以选择的元素。这对于以更紧凑的形式编写复杂的选择器非常有用。
  - :where 和 :is 的功能一样，但是 is 匹配中的化等于静态选择器的优先级，而 where 匹配中的化只等于其余选择器的优先级，例如：`:where(.foo) .bar {}`的优先级只计算`.bar部分`
  - 注释：伪类会修饰随后的实体，如果没有则修饰自身，例如：`hover:prose-headings:underline`这里的`hover:`修饰的是`prose-headings:`

```css
/* prose-headings:hover:underline */
.prose-headings\:hover\:underline:hover :is(:where(h1, h2, h3, h4, th)) {
  text-decoration: underline;
}

/* hover:prose-headings:underline */
.hover\:prose-headings\:underline :is(:where(h1, h2, h3, h4, th)):hover {
  text-decoration: underline;
}
```

# Responsive Design 响应式设计

- What this means is that unprefixed utilities (like uppercase) take effect on all screen sizes, while prefixed utilities (like md:uppercase) only take effect at the specified breakpoint and above.
  - 移动优先，不带前缀所有尺寸适用，加了前缀，指定断点及以上适用
- If you’d like to apply a utility only when a specific breakpoint range is active, stack a responsive modifier like md with a max-* modifier to limit that style to a specific range:
  - 可以堆叠断点以设置一个区间类使用的样式`<div class="md:max-xl:flex">`
- You can completely customize your breakpoints in your tailwind.config.js file:
  - 可以自定义断点

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
}
```

- If you need to use a one-off breakpoint that doesn’t make sense to include in your theme, use the min or max modifiers to generate a custom breakpoint on the fly using any arbitrary value.
  - 可以使用[]自定义断点

```html
<div class="min-[320px]:text-center max-[600px]:bg-sky-300">
```

# Dark Mode 暗黑模式

- If you want to support toggling dark mode manually instead of relying on the operating system preference, use the class strategy instead of the media strategy:
  - 如果要手动切换暗黑模式，需要使用 class 实现方式
  - Window 的 matchMedia() 方法返回一个新的 MediaQueryList 对象，表示指定的媒体查询字符串解析后的结果。返回的 MediaQueryList 可被用于判定 Document 是否匹配媒体查询，或者监控一个 document 来判定它匹配了或者停止匹配了此媒体查询。
- You can customize the dark mode selector name by setting darkMode to an array with your custom selector as the second item:
  - 'class'表示使用类（class）策略来切换暗黑模式，也就是说，当HTML元素上存在dark类时，就会启用暗黑模式。
  - '[data-mode="dark"]'表示使用自定义的属性选择器来切换暗黑模式，也就是说，当HTML元素上存在data-mode="dark"属性时，就会启用暗黑模式。

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  // ...
}
```

# Reusing Styles 重用样式

- 不建议这么做
- While it’s highly recommended that you create proper template partials for more complex components, you can use Tailwind’s @apply directive to extract repeated utility patterns to custom CSS classes when a template partial feels heavy-handed.
  - 使用 @apply 将实用程序类整合成重用样式

```less
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}
```

- If you’re going to use @apply, use it for very small, highly reusable things like buttons and form controls — and even then only if you’re not using a framework like React where a component would be a better choice.
  - 只有当只有单个 html 标签时才尝试使用 @apply 整合重用样式，其他情况组件会是更好的选择

# Adding Custom Styles 添加自定义样式

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
```

- When you find yourself really needing something like top: 117px to get a background image in just the right spot, use Tailwind’s square bracket notation to generate a class on the fly with any arbitrary value:
  - 可以使用 [] 来突破 Tailwind 给出的限定值

```html
<div class="top-[117px]">
```

- This is basically like inline styles, with the major benefit that you can combine it with interactive modifiers like hover and responsive modifiers like lg:
  - [] 可以和装饰符一起实用

```html
<div class="before:content-['Festivus'] lg:top-[344px]">
```

- It’s even possible to use the theme function to reference the design tokens in your tailwind.config.js file:
  - 在 [] 中可以使用 theme 函数应用 配置 中定义的变量
  - fit-content(max-content)是一个CSS属性，它可以用来调整元素的大小，使其适应内容的尺寸。
    - 这意味着盒子会使用可用的空间，但永远不会超过max-content。
    - 当fit-content用于设置元素的width、height、min-width、min-height、max-width和max-height时，最大和最小尺寸将基于元素的内容尺寸计算

```html
<div class="grid grid-cols-[fit-content(theme(spacing.32))]">
```

- When using a CSS variable as an arbitrary value, wrapping your variable in var(...) isn’t needed — just providing the actual variable name is enough:
  - 当使用 css 原生变量时不需要使用 var() 包裹，只需要直接使用变量名

```html
<div class="bg-[--my-color]">
```

- If you ever need to use a CSS property that Tailwind doesn’t include a utility for out of the box, you can also use square bracket notation to write completely arbitrary CSS:
  - [] 同样可以用来，完全自定义 css
  - This is really like inline styles, but again with the benefit that you can use modifiers:
    - 依然可以使用修饰符
  - mask-type:luminance是一个CSS属性，它表示SVG <mask>元素是用作亮度掩码还是alpha掩码。
    - 掩码是一串二进制代码，用于对目标字段进行位与运算，屏蔽或选择当前的输入位。
    - alpha掩码是一种CSS属性，它可以用来指定一个颜色的透明度或不透明度。
  - div 元素可以使用 mask-type 属性，但是需要满足以下条件：
    - div 元素必须有一个 mask-image 属性，用于指定遮罩图片的路径。`mask-image: url(masks.svg#star);`
    - 遮罩图片必须是一个 SVG 图形，且包含一个 id 属性，用于在 mask-image 中引用。

```html
<div class="[mask-type:luminance] hover:[mask-type:alpha]">
```

- This can be useful for things like CSS variables as well, especially when they need to change under different conditions:
  - 还可以用来修改css原生变量的值

```html
<div class="[--scroll-offset:56px] lg:[--scroll-offset:44px]">
```

- Arbitrary variants are like arbitrary values but for doing on-the-fly selector modification, like you can with built-in pseudo-class variants like hover:{utility} or responsive variants like md:{utility} but using square bracket notation directly in your HTML.
  - []和：配合使用还可以用来实现任意变体

```xml
<li class="lg:[&:nth-child(3)]:hover:underline">{item}</li>
```

- In situations where underscores are common but spaces are invalid, Tailwind will preserve the underscore instead of converting it to a space, for example in URLs:
  - 在[]中并不是所有_都表示空格，在 空格 无效的情况下_保持原样，例如在url()中

```html
<div class="bg-[url('/what_a_rush.png')]">
```

- In the rare case that you actually need to use an underscore but it’s ambiguous because a space is valid as well, escape the underscore with a backslash and Tailwind won’t convert it to a space:
  - 当明确不转换_为空格的地方可以使用\标识

```html
<div class="before:content-['hello\_world']">
```

- If you’re using something like JSX where the backslash is stripped from the rendered HTML, use String.raw() so the backslash isn’t treated as a JavaScript escape character:
  - 在 jsx 中 `\_` 会被编译为 `_`，这和 tailwind 生成的 css 类名就会有出入导致样式无效，使用 String.raw() 包裹这个类名来解决
  - String.raw() 用来处理模板字符串，会计算插值的结果并获取HTML转义序列中的字符的原始字符串形式，例如`\n => \\n`

```javascript
<div className={String.raw`before:content-['hello\_world']`}>
```

- Many utilities in Tailwind share a common namespace but map to different CSS properties. For example text-lg and text-black both share the text- namespace, but one is for font-size and the other is for color.
  - 当使用[]作为任意属性时会面临命名空间的问题
  - When using arbitrary values, Tailwind can generally handle this ambiguity automatically based on the value you pass in:
    - 一般 tailwind 会根据传入值来自动判断

```xml
<!-- Will generate a font-size utility -->
<div class="text-[22px]">...</div>

<!-- Will generate a color utility -->
<div class="text-[#bada55]">...</div>
```

- In these situations, you can “hint” the underlying type to Tailwind by adding a CSS data type before the value:
  - 当参数是个变量时无法进行自动判断，可以在参数前添加[css数据类型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Types)来进行区别

```xml
<!-- Will generate a font-size utility -->
<div class="text-[length:var(--my-var)]">...</div>

<!-- Will generate a color utility -->
<div class="text-[color:var(--my-var)]">...</div>
```

- For more power, you can also use the @layer directive to add styles to Tailwind’s base, components, and utilities layers:
  - 可以使用 @layer 把自定义样式添加到 base, components, and utilities 中
  - components 是一些预定义的组件样式，用于创建一些常见的 UI 元素，例如按钮，卡片，表单等。utilities 是一些功能性的样式，用于控制一些细节的样式属性，例如颜色，边框，定位，布局等。
  - utilities 中定义得类的优先级应该高于其他
  - The @layer directive helps you control declaration order by automatically relocating your styles to the corresponding @tailwind directive, and also enables features like modifiers and tree-shaking for your own custom CSS.
    - 自定义的类能够和修饰符一起使用，会被按顺序归纳到各自分类中保证优先级，并且如果没有使用会从最终打包结果中树摇掉

```less
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .my-custom-style {
    /* ... */
  }
}
```

- Use the theme function or @apply directive when adding custom base styles if you want to refer to any of the values defined in your theme.
  - 如果要引用主题中定义的值可以使用 @apply 和 theme

```less
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl rounded-b-lg;
  }
  h2 {
    @apply text-xl;
  }
  /* ... */
}

@layer components {
  .card {
    background-color: theme('colors.white');
    border-radius: theme('borderRadius.lg');
    padding: theme('spacing.6');
    box-shadow: theme('boxShadow.xl');
  }
  /* ... */
}
```

- If you want to add some custom CSS that should always be included, add it to your stylesheet without using the @layer directive:
  - 没有使用 @layer 的类不会被树摇掉
- Make sure to put your custom styles where they need to go to get the precedence behavior you want. In the example above, we’ve added the .card class before @tailwind utilities to make sure utilities can still override it.
  - 需要注意没有使用 @layer 的类的引用顺序，建议如下，保证 utilities 类型的优先级最高

```less
@tailwind base;
@tailwind components;

/* This will always be included in your compiled CSS */
.card {
  /* ... */
}

@tailwind utilities;
```

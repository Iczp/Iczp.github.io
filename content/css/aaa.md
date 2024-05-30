# 归纳

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

```haskell
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

```kotlin
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

```cpp
<div class="min-[320px]:text-center max-[600px]:bg-sky-300">
```

# Dark Mode 暗黑模式

- If you want to support toggling dark mode manually instead of relying on the operating system preference, use the class strategy instead of the media strategy:
  - 如果要手动切换暗黑模式，需要使用 class 实现方式
  - Window 的 matchMedia() 方法返回一个新的 MediaQueryList 对象，表示指定的媒体查询字符串解析后的结果。返回的 MediaQueryList 可被用于判定 Document 是否匹配媒体查询，或者监控一个 document 来判定它匹配了或者停止匹配了此媒体查询。
- You can customize the dark mode selector name by setting darkMode to an array with your custom selector as the second item:
  - 'class'表示使用类（class）策略来切换暗黑模式，也就是说，当HTML元素上存在dark类时，就会启用暗黑模式。
  - '[data-mode="dark"]'表示使用自定义的属性选择器来切换暗黑模式，也就是说，当HTML元素上存在data-mode="dark"属性时，就会启用暗黑模式。

```haskell
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

```cpp
<div class="top-[117px]">
```

- This is basically like inline styles, with the major benefit that you can combine it with interactive modifiers like hover and responsive modifiers like lg:
  - [] 可以和装饰符一起实用

```cpp
<div class="before:content-['Festivus'] lg:top-[344px]">
```

- It’s even possible to use the theme function to reference the design tokens in your tailwind.config.js file:
  - 在 [] 中可以使用 theme 函数应用 配置 中定义的变量
  - fit-content(max-content)是一个CSS属性，它可以用来调整元素的大小，使其适应内容的尺寸。
    - 这意味着盒子会使用可用的空间，但永远不会超过max-content。
    - 当fit-content用于设置元素的width、height、min-width、min-height、max-width和max-height时，最大和最小尺寸将基于元素的内容尺寸计算

```cpp
<div class="grid grid-cols-[fit-content(theme(spacing.32))]">
```

- When using a CSS variable as an arbitrary value, wrapping your variable in var(...) isn’t needed — just providing the actual variable name is enough:
  - 当使用 css 原生变量时不需要使用 var() 包裹，只需要直接使用变量名

```cpp
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

```cpp
<div class="[mask-type:luminance] hover:[mask-type:alpha]">
```

- This can be useful for things like CSS variables as well, especially when they need to change under different conditions:
  - 还可以用来修改css原生变量的值

```cpp
<div class="[--scroll-offset:56px] lg:[--scroll-offset:44px]">
```

- Arbitrary variants are like arbitrary values but for doing on-the-fly selector modification, like you can with built-in pseudo-class variants like hover:{utility} or responsive variants like md:{utility} but using square bracket notation directly in your HTML.
  - []和：配合使用还可以用来实现任意变体

```xml
<li class="lg:[&:nth-child(3)]:hover:underline">{item}</li>
```

- In situations where underscores are common but spaces are invalid, Tailwind will preserve the underscore instead of converting it to a space, for example in URLs:
  - 在[]中并不是所有_都表示空格，在 空格 无效的情况下_保持原样，例如在url()中

```cpp
<div class="bg-[url('/what_a_rush.png')]">
```

- In the rare case that you actually need to use an underscore but it’s ambiguous because a space is valid as well, escape the underscore with a backslash and Tailwind won’t convert it to a space:
  - 当明确不转换_为空格的地方可以使用\标识

```cpp
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

- If you are writing a lot of CSS and organizing it into multiple files, make sure those files are combined into a single stylesheet before processing them with Tailwind, or you’ll see errors about using @layer without the corresponding @tailwind directive.
  - 如果 css 分散在多个文件中，且包含 @layer 或 @tailwind，那么必须在 tailwind 处理前将这些文件合并成一个
  - The easiest way to do this is using the postcss-import plugin:
    - 使用 postcss-import 插件能根据 css 的 @import 方法将多个 css 文件在打包时合并成一个
  - While you can use features like @apply and theme inside component styles like this, the @layer directive will not work and you’ll see an error about @layer being used without a matching @tailwind directive:
    - 在 vue 这样的框架的样式中，可以使用 @apply 和 theme，但是不能使用 @layer
    - 注释：但是这里的 @apply 和 theme 只能引用到配置文件定义的类和主题，不能引用到 css 中定义的类
  - This is because under-the-hood, frameworks like Vue and Svelte are processing every single <style> block independently, and running your PostCSS plugin chain against each one in isolation.
    - 因为在 vue 这些框架中，他们是独立调用 tailwind 处理每个 vue 文件的 style 标签的，所以 tailwind    - 无法知道要把 @layer 定义的组件塞入哪个 @tailwind 中- You can also add custom styles to your project using Tailwind’s plugin system instead of using a CSS ile-   - 可以在配置文件中通过插件系统将自定义类添加到样式中
  - 参考：https://tailwindcss.com/docs/using-with-preprocessors#writing-custom-styles

```javascript
const plugin = require('tailwindcss/plugin')

module.exports = {
  // ...
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.2xl'),
        },
        'h2': {
          fontSize: theme('fontSize.xl'),
        },
      })
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        }
      })
      addUtilities({
        '.content-auto': {
          contentVisibility: 'auto',
        }
      })
    })
  ]
}
```

# Functions & Directives 功能与指令

- Directives are custom Tailwind-specific at-rules you can use in your CSS that offer special functionality for Tailwind CSS projects.
  - 指令参考 css 原生 [at-rules](https://developer.mozilla.org/zh-CN/docs/Web/CSS/At-rule)，能够直接在 css 文件中使用，为tailwind 扩展功能
- @tailwind
  - 原生 css 没有

```less
/**
 * This injects Tailwind's base styles and any base styles registered by
 * plugins.
 */
@tailwind base;

/**
 * This injects Tailwind's component classes and any component classes
 * registered by plugins.
 */
@tailwind components;

/**
 * This injects Tailwind's utility classes and any utility classes registered
 * by plugins.
 */
@tailwind utilities;

/**
 * 悬停、焦点和其他状态样式的文件，没有显示声明的化，默认会被添加到样式表的最后
 * Use this directive to control where Tailwind injects the hover, focus,
 * responsive, dark mode, and other variants of each class.
 *
 * If omitted, Tailwind will append these classes to the very end of
 * your stylesheet by default.
 */
@tailwind variants;
```

- Use the @layer directive to tell Tailwind which “bucket” a set of custom styles belong to. Valid layers are base, components, and utilities.
  - @layer 只能用来定义 base, components, and utilities
  - 原生 css 有相同的
- Any rules inlined with @apply will have !important removed by default to avoid specificity issues:
  - 任何使用 @apply 内联来的样式都将会删除其中的 !important

```scss
/* Input */
.foo {
  color: blue !important;
}

.bar {
  @apply foo;
}
```

- If you’d like to @apply an existing class and make it !important, simply add !important to the end of the declaration:
  - 如果你想要让生成的样式的属性都添加上 !important，只需要在 @apply 的末尾加上他就行

```scss
/* Input */
.btn {
  @apply font-bold py-2 px-4 rounded !important;
}

/* Output */
.btn {
  font-weight: 700 !important;
  padding-top: .5rem !important;
  padding-bottom: .5rem !important;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
  border-radius: .25rem !important;
}
```

- Note that if you’re using Sass/SCSS, you’ll need to use Sass’ interpolation feature to get this to work:
  - 和 sass/scss 预处理器一起使用时，!important 要以 sass 的插值语法加入，才能正常工作

```scss
.btn {
  @apply font-bold py-2 px-4 rounded #{!important}; // sass 处理后应该是生成 @apply font-bold py-2 px-4 rounded !important 然后再交由 tailwind 处理
}
```

- If you try to @apply a custom class you’ve defined in your global CSS in one of these per-component <style> blocks, you’ll get an error about the class not existing:
  - 在 vue 的 style 中如果 @apply 某个在其他 css 中定义的类时将会导致错误
  - The solution to this problem is to define any custom styles you want to @apply in your components using the plugin system instead:
    - 这个问题的解决方法是使用插件的形式将类添加到样式中

```javascript
const plugin = require('tailwindcss/plugin')

module.exports = {
  // ...
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        }
      })
    })
  ]
}
```

- Use the @config directive to specify which config file Tailwind should use when compiling that CSS file. This is useful for projects that need to use different configuration files for different CSS entry points.
  - @config 可以用来设置当前 css 使用的配置文件
  - 注释：可以为每个css文件指定不同的配置文件
  - The path you provide to the @config directive is relative to that CSS file, and will take precedence over a path defined in your PostCSS configuration or in the Tailwind CLI.
    - 配置文件的路径相对于当前文件
  - Note that if you’re using postcss-import, your @import statements need to come before @config for things to work correctly, as postcss-import is strict about following the CSS spec which requires @import statements to precede any other rules in the file.
    - 和 @import 一起使用时，根据 css 规则，@import 要放在最前面
- If you need to access a value that contains a dot (like the 2.5 value in the spacing scale), you can use square bracket notation:
  - 如果 theme 获取的属性的名称包含点的化，使用[]包裹

```css
.content-area {
  height: calc(100vh - theme(spacing[2.5]));
}
```

- Since Tailwind uses a nested object syntax to define its default color palette, make sure to use dot notation to access the nested colors.
  - tailwind用嵌套语法定义颜色，因此必须使用.来访问颜色
  - 注释：嵌套语法是指颜色在配置时可以直接配置一个色号，也可以配置为一个对象，里面包含多个色号

```css
.btn-blue {
  background-color: theme(colors.blue.500);
}
```

- To adjust the opacity of a color retrieved with theme, use a slash followed by the opacity value you want to use:
  - 使用 them 获取色号时可传入`/ 百分比`来设置透明度

```css
.btn-blue {
  background-color: theme(colors.blue.500 / 75%);
}
```

- The screen function allows you to create media queries that reference your breakpoints by name instead of duplicating their values in your own CSS.
  - screen() 用来根据配置的断点生成对应的媒体查询

```scss
@media screen(sm) {
  /* ... */
}

@media (min-width: 640px) {
  /* ... */
}
```

# Configuration 配置

- Every section of the config file is optional, so you only have to specify what you’d like to change. Any missing sections will fall back to Tailwind’s default configuration.
  - [默认配置](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js)
- Generate a Tailwind config file for your project using the Tailwind CLI utility included when you install the tailwindcss npm package:
  - 生成配置文件`npx tailwindcss init`
  - This will create a minimal tailwind.config.js file at the root of your project:
    - 指定配置文件名称`npx tailwindcss init tailwindcss-config.js`
  - When you use a custom file name, you will need to specify it as a command-line argument when compiling your CSS with the Tailwind CLI tool:
    - 命令行方式指定编译时使用的配置文件`npx tailwindcss -c ./tailwindcss-config.js -i input.css -o output.css`
  - If you’re using Tailwind as a PostCSS plugin, you will need to specify your custom configuration path in your PostCSS configuration:
    - tailwind 作为 postcss 插件使用时，在 postcss.config.js 中配置 tailwind 的配置文件路径

```java
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: { config: './tailwindcss-config.js' },
  },
}
```

- You can also configure Tailwind CSS in ESM or even TypeScript:
  - 配置项支持 ts
  - satisfies 是一个 TypeScript 4.9 中引入的新的操作符，保证声明的值满足类型

```typescript
// tailwindcss-config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
```

- When you run npx tailwindcss init, we’ll detect if your project is an ES Module and automatically generate your config file with the right syntax.
  - 生成配置文件时会自动检测是生成 es 模块类型的还是 ts 类型的
  - You can also generate an ESM config file explicitly by using the --esm flag:
    - 也可以显示的声明你要生成哪种类型的文件`npx tailwindcss init --esm`或`npx tailwindcss init --ts`
- Use the -p flag if you’d like to also generate a basic postcss.config.js file alongside your tailwind.config.js file:
  - -p 用来生成具有 tailwindcss 插件的 postcss.config.js 配置文件
- If you’d rather scaffold a complete configuration file that includes all of Tailwind’s default configuration, use the --full option:
  - --full 生成一个包含所有默认配置的 tailwind 配置文件，不建议这么干
- The content section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.
  - content 用来配置需要检查是否包含 tailwind 类名的文件

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  // ...
}
```

- The theme section is where you define your color palette, fonts, type scale, border sizes, breakpoints — anything related to the visual design of your site.
  - theme 下用来配置 颜色、字体、字体比例、边框、间距、断点
- The plugins section allows you to register plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.
  - plugins 用来引入插件
  - 插件可以实现 utilities, components, base 和 variants

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
  ],
}
```

- The presets section allows you to specify your own custom base configuration instead of using Tailwind’s default base configuration.
  - presets 用来引入预设
  - 预设应该就是一套配置项

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  presets: [
    require('@acmecorp/base-tailwind-config')
  ],

  // Project-specific customizations
  theme: {
    //...
  },
}
```

- The prefix option allows you to add a custom prefix to all of Tailwind’s generated utility classes. This can be really useful when layering Tailwind on top of existing CSS where there might be naming conflicts.
  - 为所有实用类增加前缀

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
}
```

- It’s important to understand that this prefix is added after any variant modifiers. That means that classes with responsive or state modifiers like sm: or hover: will still have the responsive or state modifier first, with your custom prefix appearing after the colon:
  - 前缀是加在实用类上的和修饰符无关`hover:tw-bg-blue-500`
- The dash modifier for negative values should be added before your prefix, so -mt-8 would become -tw-mt-8 if you’ve configured tw- as your prefix:
  - 前缀也和负值标识无关`-tw-mt-8`
- Prefixes are only added to classes generated by Tailwind; no prefix will be added to your own custom classes.
  - 前缀只和 tailwind 提供的实用类有关，和自定义无关
- The important option lets you control whether or not Tailwind’s utilities should be marked with !important. This can be really useful when using Tailwind with existing CSS that has high specificity selectors.
  - important 用于配置实用类所有属性是否都带有!important
  - Now all of Tailwind’s utility classes will be generated as !important:
    - 适用于使用 @layer utilities 自定义的类

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
}
```

- To get around this, you can set important to an ID selector like #app instead:
  - 可以把 important 设置为 css 选择器，用来提高 tailwind 类的权重
  - When using the selector strategy, be sure that the template file that includes your root selector is included in your content configuration, otherwise all of your CSS will be removed when building for production.
    - 当使用选择器时，content 必须包含引用该选择器的元素所在的文件，不然其他类都会被视为没有使用而被树摇掉

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  important: '#app',
}
```

- Alternatively, you can make any utility important by adding a ! character to the beginning:
  - 可以在类名前加入！来标明这个类属性需要加 !important
  - The ! always goes at the beginning of the utility name, after any variants, but before any prefix:
    - !对于实用类生效，在修饰符之后，在前缀之前

```
<div class="sm:hover:!tw-font-bold">
```

- The separator option lets you customize which character should be used to separate modifiers (screen sizes, hover, focus, etc.) from utility names (text-center, items-end, etc.).
  - separator 用于定义修饰符的分隔符，默认为`：`
  - 有些模板语言把`：`作为保留字符`separator: '_'`
- The corePlugins section lets you completely disable classes that Tailwind would normally generate by default if you don’t need them for your project.
  - corePlugins 用于禁用默认生成的实用类
  - If you’d like to safelist which core plugins should be enabled, provide an array that includes a list of the core plugins you’d like to use:
    - 可以通过传入数组来声明只实用哪些实用类
  - 核心插件及对应实用类[对照表](https://www.tailwindcss.cn/docs/configuration#core-plugins)

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    float: false,
    objectFit: false,
    objectPosition: false,
  }
}
```

- To make this easy, Tailwind provides a resolveConfig helper you can use to generate a fully merged version of your configuration object:
  - resolveConfig 用于获取配置文件合并后的内容
  - Note that this will transitively pull in a lot of our build-time dependencies, resulting in bigger client-side bundle size. To avoid this, we recommend using a tool like babel-plugin-preval to generate a static version of your configuration at build-time.
    - 这种方式会导致 resolveConfig 中的很多依赖被打包到项目中，使得打包后的体积变大，但实际上我们只需要 tailwindConfig 的最终结果不需要过程，可以使用 babel-plugin-preval 解决这个问题
    - [babel-plugin-preval](https://github.com/kentcdodds/babel-plugin-preval) 可以让你在编译时运行一些代码，并把结果替换到JavaScript文件中。

```javascript
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

fullConfig.theme.width[4]
// => '1rem'

fullConfig.theme.screens.md
// => '768px'

fullConfig.theme.boxShadow['2xl']
// => '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
```

# Content 内容

- Paths are configured as glob patterns, making it easy to match all of the content files in your project without a ton of configuration:
  - content 配置的路径为 glob patterns 模式
  - glob patterns是一种用于指定文件名或字符串的通配符模式。
    - Use * to match anything except slashes and hidden files
      - `*`通配符，除了/以外的字符串
    - Use ** to match zero or more directories
      - `**`匹配1个或多个目录
    - Use comma separate values between {} to match against a list of options
      - 匹配 {} 提供的选项之一
  - Tailwind uses the fast-glob library under-the-hood — check out their documentation for other supported pattern features.
    - Tailwind 使用 [fast-glob](https://github.com/mrmlnc/fast-glob) 查找匹配的文件，上面的列表没有包含全部的使用方法
  - Paths are relative to your project root, not your tailwind.config.js file, so if your tailwind.config.js file is in a custom location, you should still write your paths relative to the root of your project.
    - 文件的路径相对于 tailwind 命令运行时的目录，而不是相对于 tailwind.config.js 文件
  - It’s also important that you don’t scan any CSS files — configure Tailwind to scan your templates where your class names are being used, never the CSS file that Tailwind is generating.
    - content 不要包含任何 css 文件

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  // ...
}
```

- If you use string interpolation or concatenate partial class names together, Tailwind will not find them and therefore will not generate the corresponding CSS:
  - 动态拼接的类名将不被 tailwind 正确识别，将会被树摇掉

```xml
<div class="text-{{ error ? 'red' : 'green' }}-600"></div>
```

- If you’ve created your own reusable set of components that are styled with Tailwind and are importing them in multiple projects, make sure to configure Tailwind to scan those components for class names:
  - 如果外部组件通过 Tailwind 实现了样式，应该把外部组件的代码包含进来
  - 注释：前缀会造成问题
  - require.resolve获取模块的绝对路径
  - path.dirname获取路径的目录名

```js
const path = require('path');

module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    path.join(path.dirname(require.resolve('@my-company/tailwind-components')), '**/*.js'),
  ],
  // ...
}
```

- To always resolve paths relative to the tailwind.config.js file, use the object notation for your content configuration and set the relative property to true:
  - 设置 content.relative 可以使解析 files 时相对于配置文件的路径，而不是命令运行的当前工作目录

```java
module.exports = {
  content: {
    relative: true,
    files: [
      './pages/**/*.{html,js}',
      './components/**/*.{html,js}',
    ],
  },
  // ...
}
```

- If for whatever reason you need to configure Tailwind to scan some raw content rather than the contents of a file, use an object with a raw key instead of a path:
  - content 可以直接指定要扫描的文本内容

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    { raw: '<div class="font-bold">', extension: 'html' },
  ],
  // ...
}
```

- If you need to make sure Tailwind generates certain class names that don’t exist in your content files, use the safelist option:
  - 某些类无法通过扫描被保留下来，可以使用 safelist 显示声明哪些要保留

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  safelist: [
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
  ]
  // ...
}
```

- Tailwind supports pattern-based safelisting for situations where you need to safelist a lot of classes:
  - safelist 中支持正则匹配哪些类需要被保留

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  safelist: [
    'text-2xl',
    'text-3xl',
    {
      pattern: /bg-(red|green|blue)-(100|200|300)/,
    },
  ],
  // ...
}
```

- If you want to force Tailwind to generate variants for any matched classes, include them using the variants option:
  - safelist 中使用正则匹配时只会保留能够匹配的类，不会自动包括修饰符，可以通过 variants 指定该正则的哪些修饰符应该被保留

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  safelist: [
    'text-2xl',
    'text-3xl',
    {
      pattern: /bg-(red|green|blue)-(100|200|300)/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    },
  ],
  // ...
}
```

- In these situations, you can use the blocklist option to tell Tailwind to ignore specific classes that it detects in your content:
  - 可以使用 blocklist 声明哪些类不被包含
  - Unlike safelist, the blocklist option only supports strings, and you cannot block classes using regular expressions.
    - 只能使用字符串模式

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  blocklist: [
    'container',
    'collapse',
  ],
  // ...
}
```

- Use the content.transform option to transform any content matching a specific file extension before extracting classes:
  - 使用 transform 可以在文件被检查前对其进行处理
  - 注释：下例中将 md 文件转换为 html 文本，然后才交由 tailwind 去提取使用的 class

```javascript
const remark = require('remark')

module.exports = {
  content: {
    files: ['./src/**/*.{html,md}'],
    transform: {
      md: (content) => {
        return remark().process(content)
      }
    }
  },
  // ...
}
```

- Use the extract option to override the logic Tailwind uses to detect class names for specific file extensions:
  - extract 用于定义对某类文件的检查方法

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ['./src/**/*.{html,wtf}'],
    extract: {
      wtf: (content) => {
        return content.match(/[^<>"'`\s]*/)
      }
    }
  },
  // ...
}
```

- If your CSS seems to be rebuilding in an infinite loop, there’s a good chance it’s because your build tool doesn’t support the glob option when registering PostCSS dependencies.

  - 在构建过程中，如果发现 css 无限循环更新，可能是因为注册 PostCSS 依赖项时不支持 glob
  - glob 是文件路径通配符
  - Many build tools (such as webpack) don’t support this option, and as a result we can only tell them to watch specific files or entire directories. We can’t tell webpack to only watch *.html files in a directory for example.
    - webpack 不支持通过 glob 的 *.html 方式注入某个文件类型的依赖项，所以 tailwind 注入的整个文件夹下的所有文件，如果生成的文件包含在这个文件夹中，那么会导致无限循环的产生

- If you are experiencing weird, hard to describe issues with the output, or things just don’t seem like they are working at all, there’s a good chance it’s due to your build tool not supporting PostCSS dependency messages properly (or at all). One known example of this currently is

   

  Stencil

  .

  - Stencil这个构建工具不支持 PostCSS 注入依赖项，当文件变化时不会重新打包
  - 注释：tailwind cli 支持 watch 的，可以直接用来打包 css 不需要继承到打包工具中

# Theme 主题

- By default, these colors are inherited by all color-related core plugins, like backgroundColor, borderColor, textColor, and others.
  - 默认情况下 config.theme.colors 配置的颜色会被和颜色相关的实用类继承，例如：backgroundColor, borderColor, textColor
- The spacing key allows you to customize the global spacing and sizing scale for your project.
  - theme.spacing 用来配置距离数值
  - By default, these values are inherited by the padding, margin, width, height, maxHeight, flex-basis, gap, inset, space, translate, scrollMargin, scrollPadding, and textIndent core plugins.
    - 默认情况距离数值会被 padding, margin, width, height, maxHeight, flex-basis, gap, inset, space, translate, scrollMargin, scrollPadding, and textIndent 继承，还会被核心插件继承
- You’ll notice that using a key of DEFAULT in the theme configuration created the class rounded with no suffix. This is a common convention in Tailwind and is supported by all core plugins.
  - DEFAULT 是特殊的配置 key，可以用来配置没有后缀的实用类，例如`.rounded`
- If you’d like to preserve the default values for a theme option but also add new values, add your extensions under the theme.extend key in your configuration file. Values under this key are merged with existing theme values and automatically become available as new classes that you can use.
  - theme.extend 用来保留默认配置的情况下添加新的配置
- 注释：theme中的配置即有全局 css 变量（theme.color），又有允许实用的类(theme.fontFamily.display => font-display)，还有运用于所有实用类的装饰（theme.screens）
- If you need to reference another value in your theme, you can do so by providing a closure instead of a static value. The closure will receive an object that includes a theme() function that you can use to look up other values in your theme using dot notation.
  - 可以传入一个函数，函数的参数将接收 theme 对象，可以用来引用配置中的其他选项
  - 注释：好像会尝试递归去寻找引用的 theme 配置项的值

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    spacing: {
      // ...
    },
    backgroundSize: ({ theme }) => ({
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      ...theme('spacing')
    })
  }
}
```

- If you’d like to reference a value in the default theme for any reason, you can import it from tailwindcss/defaultTheme.
  - 可以从`tailwindcss/defaultTheme`引入默认值

```java
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Lato',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    }
  }
}
```

- Except for screens, colors, and spacing, all of the keys in the theme object map to one of Tailwind’s core plugins.
  - 除了 screens, colors, and spacing 其他实用类是以核心插件的方式实现的
  - [核心插件配置对照表](https://www.tailwindcss.cn/docs/theme#configuration-reference)

# Screens 屏幕

- This will replace the default screens value with the same name, without changing the order of your breakpoints.
  - 直接定义`theme.screens`会根据顺序生成断点样式，注意优先级
  - 使用`theme.extend.screens`修改原有断点的值不会修改顺序，添加新值会添加到所有断点的最后
- If you want to add an additional small breakpoint, you can’t use extend because the small breakpoint would be added to the end of the breakpoint list, and breakpoints need to be sorted from smallest to largest in order to work as expected with a min-width breakpoint system.
  - 要在最前面添加断点样式，需要重写整个`theme.screens`，这个时候`tailwindcss/defaultTheme`提供的默认值非常有用

```java
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
```

- If you want to work with max-width breakpoints instead of min-width, you can specify your screens as objects with a max key:
  - max 可以用来设置 @media (max-width: 1535px) 的媒体查询

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  }
}
```

- If you want your breakpoints to specify both a min-width and a max-width, use the min and max keys together:
  - 同时使用 min 和 max 可以设置一个区间的媒体查询

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  }
}
```

- For example, say you have a sidebar and want your breakpoints to be based on the content-area width rather than the entire viewport. You can simulate this by having one of your breakpoints fall back to a smaller breakpoint when the sidebar becomes visible and shrinks the content area:
  - 可以使用数组设置多段的断点区间

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'sm': '500px',
      'md': [
        // Sidebar appears at 768px, so revert to `sm:` styles between 768px
        // and 868px, after which the main content area is wide enough again to
        // apply the `md:` styles.
        {'min': '668px', 'max': '767px'},
        {'min': '868px'}
      ],
      'lg': '1100px',
      'xl': '1400px',
    }
  }
}
```

- If you want full control over the generated media query, use the raw key:
  - 使用 raw key 可以自定义 @media() 中的媒体查询条件

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 800px)' },
        // => @media (min-height: 800px) { ... }
      }
    }
  }
}
```

# Colors 颜色

- [所有预设颜色](https://www.tailwindcss.cn/docs/customizing-colors)
- Don’t forget to include values like transparent and currentColor if you want to use them in your project.
  - 自定义颜色时不要忘记 transparent 和 currentColor 两个值
  - currentColor 代表当前元素的文本颜色
  - transparent表示完全透明的颜色
- If you are creating your own custom color palette and don’t feel confident doing it by hand, UI Colors is a great tool that can give you a good starting point based on any custom color.
  - tailwind提供的[颜色生成器](https://uicolors.app/create)，用来帮助你选择颜色
- Two other useful tools we recommend for building your own palettes are Palettte and ColorBox — they won’t do the work for you but their interfaces are well-designed for doing this sort of work.
  - 另外两个颜色生成器 [Palettte](https://palettte.app/) and [ColorBox](https://colorbox.io/)
- If you don’t have a set of completely custom colors in mind for your project, you can curate your colors from our default palette by importing tailwindcss/colors in your configuration file and choosing the colors you want to use:
  - 可以通过`tailwindcss/colors`访问默认的颜色配置

```yaml
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
  },
}
```

- 注释：暗黑模式最好是支持单页面应用的，便于用户切换
- 注释：主题可以是刷新后生效，通过切换不同 css 文件实现
- 注释：tailwind 的 color 并不是通过 cssVar 实现的`background-color: rgb(99 102 241/var(--tw-bg-opacity));`
- If you’d like to define your colors as CSS variables, you’ll need to define those variables as just the color channels if you want them to work with the opacity modifier syntax:
  - 当通过 cssVar 定义 color 时，且希望同透明修饰符`text-blue-600/100`共同使用时，需要把颜色定义为如下
  - When defining your colors this way, make sure that the format of your CSS variables is correct for the color function you are using. You’ll want to use spaces if using the modern space-separated syntax, and commas if using legacy functions like rgba or hsla:
    - 当 config 中不是采用 var() 拼接值时，定义的 cssVar 要符合目标 value 的格式，例如`--color-primary: 255, 115, 179;`=>`rgba(255, 115, 179, <alpha-value>)`
    - 注释：cassVar 本质上是个字符串，被用来在 config 中拼接成正确的 css 属性，也可以相同方式用于其他属性值

```java
// css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-primary: 255 115 179;
    --color-secondary: 111 114 185;
    /* ... */
  }
}

// config
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      // Using modern `rgb`
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',

      // Using modern `hsl`
      primary: 'hsl(var(--color-primary) / <alpha-value>)',
      secondary: 'hsl(var(--color-secondary) / <alpha-value>)',

      // Using legacy `rgba`
      primary: 'rgba(var(--color-primary), <alpha-value>)',
      secondary: 'rgba(var(--color-secondary), <alpha-value>)',
    }
  }
}
```

# Spacing 间距

- [所有默认间距](https://www.tailwindcss.cn/docs/customizing-spacing#default-spacing-scale)
- 注释：间距单位是 rem，html font-size 默认是 32，间距 0.5 对应 0.125rem 即 2px

# Plugins 插件

- To get started with your first plugin, import Tailwind’s plugin function from tailwindcss/plugin. Then inside your plugins array, call the imported plugin function with an anonymous function as the first argument.
  - 如何使用插件
  - Plugin functions receive a single object argument that can be destructured into several helper functions:
    - 传入 plugin 的函数的参数可以解构为多个方法
    - addUtilities(), for registering new static utility styles
      - addUtilities() 用于注册静态实用类
      - addUtilities 添加的所有类默认可以和所有修饰符一起实用
    - matchUtilities(), for registering new dynamic utility styles
      - matchUtilities 用于注册动态实用类，和 addUtilities 的区别主要在于，而 matchUtilities 接收的参数的 value 允许是个函数（见例子）
      - matchUtilities 支持 [] 的方式接收参数，在下例中 [] 中的值将作为 skew 的参数 modifier 传入
    - addComponents(), for registering new static component styles
      - addComponents()，用于注册新的静态组件样式
    - matchComponents(), for registering new dynamic component styles
      - matchComponents()，用于注册新的动态组件样式
    - addBase(), for registering new base styles
      - addBase()，用于注册新的基本样式
      - 注释：可以用来注册 cssVar，从而实现对外部库 cssVar 的覆盖和配置统一
    - addVariant(), for registering custom static variants
      - addVariant()，用于注册自定义静态变体
    - matchVariant(), for registering custom dynamic variants
      - matchVariant()，用于注册自定义动态变体
    - theme(), for looking up values in the user’s theme configuration
      - theme()，用于在用户的主题配置中查找值
    - config(), for looking up values in the user’s Tailwind configuration
      - config()，用于在用户的顺风配置中查找值
    - corePlugins(), for checking if a core plugin is enabled
      - corePlugins()，用于检查是否启用了核心插件
    - e(), for manually escaping strings meant to be used in class names
      - e()，用于手动转义要在类名中使用的字符串，例如将`.btn/important`=>`.btn\/important`

```javascript
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities, addComponents, e, config }) {
      matchUtilities({
        'skew': (modifier, { theme }) => {
          let value = theme('skew')[modifier]

          if (value === undefined) {
            return []
          }

          return { [`.${e(`skew-${modifier}`)}`]: { transform: `skewY(${value})` } }
        }
      }, {
        // 注释：tailwind 根据 theme('skew') 的 key 生成 class 名，把 value 传入 skew 方法的 modifier 中生成对应的样式
        values: theme('skew'),
        variants: ['responsive', 'hover'],
      })
    },
    // 注释：这部分 theme 会被合并到默认配置中，用户可以通过 config 下的 theme 配置修改
    theme:{
      skew:{
        // modifier 包括的键值对
      }
    }),
  ]
}
```

- Official plugins
  - 官方插件
  - The @tailwindcss/typography plugin adds a set of prose classes that can be used to quickly add sensible typographic styles to content blocks that come from sources like markdown or a CMS database.
    - @tailwindcss/typography 用于向无法直接修改标签 class 的 html 添加样式的插件，例如：vuepress 把 md 生成 html 插入到模板中，你可以在模板的容器标签中实用这个插件提供的 class
  - The @tailwindcss/forms plugin adds an opinionated form reset layer that makes it easier to style form elements with utility classes.
    - @tailwindcss/forms 提供了应用于表单元素的 class
  - The @tailwindcss/aspect-ratio plugin is an alternative to native aspect-ratio support that works in older browsers, and adds aspect-w-{n} and aspect-h-{n} classes that can be combined to give an element a fixed aspect ratio.
    - @tailwindcss/aspect-ratio 是 aspect-ratio 的替代方案
    - aspect-ratio 是一个用于设置元素纵横比的属性，即宽度变化后，高度会根据 aspect-ratio 的值得处结果
  - The @tailwindcss/container-queries plugin adds new @{size} variants like @sm and @md that let you style an element based on the dimensions of a parent marked with @container instead of the viewport.
    - @tailwindcss/container-queries 允许根据父元素的尺寸来设置当前元素的样式
    - @container 是 css 的新特性，用于定义绑定它的标签内部的标签是独立的布局上下文，和媒体查询类似，支持设置尺寸断点，当元素达到不同断点时实用不同断点下的样式
- By default, plugin utilities automatically respect the user’s prefix and important preferences.
  - 插件生成的类依然遵守 prefix and important 配置的结果
- By default, component classes automatically respect the user’s prefix preference, but they are not affected by the user’s important preference.
  - 通过 addComponents 创建的类遵循 prefix 的配置，但不遵循 important 的配置
  - All classes in a selector will be prefixed by default, so if you add a more complex style like:
    - addComponents 生成的所有选择器都会根据 prefix 添加前缀

```javascript
const plugin = require('tailwindcss/plugin')

module.exports = {
  prefix: 'tw-',
  plugins: [
    plugin(function({ addComponents }) {
      const components = {
        // ...
        '.navbar-inverse a.nav-link': {
            color: '#fff',
        }
      }

      addComponents(components)
    })
  ]
}

// css
.tw-navbar-inverse a.tw-nav-link {
    color: #fff;
}
```

- Since base styles are meant to target bare selectors like div or h1, they do not respect the user’s prefix or important configuration.
  - 通过 addBase 添加的类不支持 prefix or important 配置
- Use the addVariant function for simple custom variants, passing in the name of your custom variant, and a format string that represents how the selector should be modified.
  - addVariant 用来定义简单的装饰器
  - 注释：inverted-colors 是 CSS 中的一个媒体特性，用于检测用户代理或底层操作系统是否反转了所有颜色
  - 注释：:optional 是一个 CSS 的伪类选择器，用于匹配表单元素中的可选项，即没有 required 属性的元素

```javascript
const plugin = require('tailwindcss/plugin')

module.exports = {
  // ...
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('optional', '&:optional')
      addVariant('hocus', ['&:hover', '&:focus'])
      addVariant('inverted-colors', '@media (inverted-colors: inverted)')
    })
  ]
}
```

- Use the matchVariant function to register new parameterized variants like the built-in supports-

  , data-

  , and aria-* variants:

  - matchVariant 用于定义动态的装饰器
  - Use the sort option to control the source order of the generated CSS if needed to avoid precedence issues with other values that come from the same variant:
    - 动态定义都支持[]接收参数，可以实用 sort 选项控制生成的 class 的顺序

```javascript
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ matchVariant }) {
      matchVariant(
        'nth',
        (value) => {
          return `&:nth-child(${value})`;
        },
        {
          values: {
            1: '1',
            2: '2',
            3: '3',
          },
          sort(a, z) {
            return parseInt(a.value) - parseInt(z.value);
          },
        }
      );
    })
  ]
}
```

- Your custom modifiers won’t automatically work with Tailwind’s parent and sibling state modifiers.
  - 自定义装饰器无法同 group 和 peer 这两个状态共同使用
  - To support the group-* and peer-* versions of your own custom modifiers, register them as separate variants using the special :merge directive to ensure the .group and .peer classes only appear once in the final selector.
    - 需要支持化需要使用 :merge 显示的实现
    - 注释：`:merge`应该是为了支持作用域而存在的，例如：`group/edit`

```javascript
// group-hover:opacity-100 => group:hover group-hover\:opacity-100{ ... }

const plugin = require('tailwindcss/plugin')

module.exports = {
  // ...
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('optional', '&:optional')
      addVariant('group-optional', ':merge(.group):optional &')
      addVariant('peer-optional', ':merge(.peer):optional ~ &')
    })
  ]
}
```

- Sometimes it makes sense for a plugin to be configurable in a way that doesn’t really belong under theme, like perhaps you want users to be able to customize the class name your plugin uses.
  - 插件允许定义为可接收参数得形式

```javascript
const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(function (options = {}) {
  return function({ addComponents }) {
    const className = options.className ?? 'markdown'

    addComponents({
      [`.${className}`]: {
        // ...
      }
    })
  }
}, function (options) {
  return {
    theme: {
      markdown: {
        // ...
      }
    },
  }
})

// config
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('./plugins/markdown.js')({
      className: 'wysiwyg'
    })
  ],
}
```

- The user can also register plugins created this way normally without invoking them if they don’t need to pass in any custom options:
  - 用户还可以直接引用需要参数得插件函数，而不需要调用它

```java
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('./plugins/markdown.js')
  ],
}
```

- CSS in-JS 语法
  - Tailwind’s plugin system expects CSS rules written as JavaScript objects, using the same sort of syntax you might recognize from CSS-in-JS libraries like Emotion, powered by postcss-js under-the-hood.
    - tailwind 在配置中把 js 对象编译为 css 文本，是通过 postcss-js 这个库实现
    - 注释：[postcss-js](https://github.com/postcss/postcss-js) 它可以把CSS代码转换成抽象语法树（AST），然后用API来分析和修改它。postcss-js提供了一个方便的方法，让你可以用CSS-in-JS的风格来写CSS，然后用PostCSS的插件来优化和转换它。
    - For convenience, property names can also be written in camelCase and will be automatically translated to dash-case:
      - 属性名可以用驼峰形式
  - Nesting is also supported (powered by postcss-nested), using the same syntax you might be familiar with from Sass or Less:
    - 支持&嵌套、媒体查询、伪元素、伪类，由 [postcss-nested](https://github.com/postcss/postcss-nested) 提供支持

```bash
addComponents({
  '.card': {
    backgroundColor: '#fff',
    borderRadius: '.25rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    '&:hover': {
      boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
    },
    '@media (min-width: 500px)': {
      borderRadius: '.5rem',
    }
  }
})
```

- …or as an array of objects in case you need to repeat the same key:
  - addComponents 等方法支持传入对象数组，以方便需要定义重复 key 的样式

```less
addComponents([
  {
    '@media (min-width: 500px)': {
      // ...
    }
  },
  {
    '@media (min-width: 500px)': {
      // ...
    }
  },
  {
    '@media (min-width: 500px)': {
      // ...
    }
  },
])
```

# Presets 预设

```yaml
// Example preset
module.exports = {
  theme: {
    colors: {
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {
      flexGrow: {
        2: '2',
        3: '3',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

- By default, presets themselves extend Tailwind’s default configuration just like your own configuration would. If you’d like to create a preset that completely replaces the default configuration, include an empty presets key in the preset itself:
  - 默认情况下预设是对默认配置的扩展，即使是不使用 theme.extend，要覆盖默认配置需要在预设中配置 presets 为空数组
  - 注释：因为预设中的 theme.extend 是用来扩展 plugin 提供的默认配置的

```java
// Example preset
module.exports = {
  presets: [],
  theme: {
    // ...
  },
  plugins: [
    // ...
  ],
}
```

- The following options in tailwind.config.js simply replace the same option if present in a preset:
  - 以下预设项会被直接替换
  - content
  - darkMode
  - prefix
  - important
  - variantOrder 能够使用的装饰符
  - separator 修饰符的分割符好
  - safelist 手动声明需要保留的类
- The theme object is merged shallowly, with top-level keys in tailwind.config.js replacing the same top-level keys in any presets. The exception to this is the extend key, which is collected across all configurations and applied on top of the rest of the theme configuration.
  - theme 配置中除了 extend 外，其他都是浅层合并
- The plugins array is merged across configurations to make it possible for a preset to register plugins while also allowing you to add additional plugins at the project-level.
  - 插件会跨预设合并，所以无法禁用预设中的插件
- The corePlugins option behaves differently depending on whether you configure it as an object or as an array.
  - corePlugins 的合并规则取决于主配置中值的类型
  - If you configure corePlugins as an object, it is merged across configurations.
    - 如果值是对象，预设和主配置会合并为一个
  - If you configure corePlugins as an array, it replaces any corePlugins configuration provided by your configured preset(s).
    - 如果是数组，主配置会覆盖预设中的值

# Preflight 浏览器样式重置

- Built on top of modern-normalize, Preflight is a set of base styles for Tailwind projects that are designed to smooth over cross-browser inconsistencies and make it easier for you to work within the constraints of your design system.
  - tailwind 基于 [modern-normalize](https://github.com/sindresorhus/modern-normalize) 生成浏览器重置样式
  - For a complete reference of all the styles applied by Preflight, see the stylesheet.
    - [完整被重置的样式](https://unpkg.com/tailwindcss@3.3.3/src/css/preflight.css)
- Tailwind automatically injects these styles when you include @tailwind base in your CSS:
  - @tailwind base 会被自动注入到样式文件的顶部
- Preflight removes all of the default margins from elements like headings, blockquotes, paragraphs, etc.
  - 标题、块引号、段落等元素外据为 0
  - blockquote 代表其中的文字是引用内容，块级
  - dl 包含术语定义以及描述的列表，通常用于展示词汇表或者元数据 (键 - 值对列表)
  - dd 用来指明一个描述列表 (<dl>) 元素中一个术语的描述。
  - h1-h6、hr（分割线）、pre（保留格式的文本）
  - figure 代表一段独立的内容，可能包含 <figcaption> 元素定义的说明元素。该插图、标题和其中的内容通常作为一个独立的引用单元
    - figure元素的内容应该与主内容相关，但如果被删除，不会影响主内容的流程
    - 插入文档中的图像、插图、图表等
    - 插入文档中的代码片段、公式、引用等
    - 插入文档中的诗歌、歌词、对话等
- All heading elements are completely unstyled by default, and have the same font-size and font-weight as normal text.
  - h1-h6 没有 font-size、font-weight 样式
- If you’d like to selectively introduce sensible default heading styles into article-style parts of a page, we recommend the @tailwindcss/typography plugin.
  - @tailwindcss/typography 插件提供了 h1-h6、ol、ul 的默认样式
- Ordered and unordered lists are unstyled by default, with no bullets/numbers and no margin or padding.
  - ol、ul 没有 list-style:none、margin、padding
- Unstyled lists are not announced as lists by VoiceOver. If your content is truly a list but you would like to keep it unstyled, add a “list” role to the element:
  - 没有样式的 ol、ul 不会被屏幕阅读器识别为列表，可以通过`role="list"`显示声明它是一个列表
  - 注释：屏幕阅读器可能是通过 list-style 识别的
  - 注释：role属性为内容提供了语义，允许屏幕阅读器和其他工具与对象类型的用户预期一致的方式进行呈现并支持交互。
- Images and other replaced elements (like svg, video, canvas, and others) are display: block by default.
  - 图像和其他多媒体元素是块级的`display: block; vertical-align: middle;`
  - img,svg,video,canvas,audio,iframe,
  - embed 将外部内容嵌入文档中的指定位置。此内容由外部应用程序或其他交互式内容源（如浏览器插件）提供。（不建议使用)
  - object 表示引入一个外部资源，这个资源可能是一张图片，一个嵌入的浏览上下文，亦或是一个插件所使用的资源
    - 注释：可以通过data属性来指定资源的URL，也可以通过type属性来指定资源的MIME类型，object标签的内容是透明的，也就是说，如果浏览器不能显示或者加载object标签指定的资源，就会显示object标签内部的内容，作为替代或者提示。是 embed 的替代
- Images and videos are constrained to the parent width in a way that preserves their intrinsic aspect ratio.
  - img、video 被设置了`max-width: 100%; height: auto;`
- In order to make it easy to add a border by simply adding the border class, Tailwind overrides the default border styles for all elements with the following rules:
  - 为了便于实用类能快速生效，定了了`*,::before,::after`的样式为`border-width: 0; border-style: solid; border-color: theme('borderColor.DEFAULT', currentColor);`
  - 注释：theme 的第二个参数是指参数一找不到对应配置时回退的默认值
- https://www.tailwindcss.cn/docs/adding-base-styles
  - You can use the same approach to add your @font-face rules for any custom fonts you’re using:
    - 实用 @font-face 添加自定义字体

```less
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  @font-face {
    font-family: Proxima Nova;
    font-weight: 400;
    src: url(/fonts/proxima-nova/400-regular.woff) format("woff");
  }
  @font-face {
    font-family: Proxima Nova;
    font-weight: 500;
    src: url(/fonts/proxima-nova/500-medium.woff) format("woff");
  }
}
```

- If you’d like to completely disable Preflight — perhaps because you’re integrating Tailwind into an existing project or because you’d like to provide your own base styles — all you need to do is set preflight to false in the corePlugins section of your tailwind.config.js file:
  - corePlugins.preflight:false 用于设置禁用样式重置

```java
module.exports = {
  corePlugins: {
    preflight: false,
  }
}
```
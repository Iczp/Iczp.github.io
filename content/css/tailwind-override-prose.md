---
descript: "重写prose"
---

descript: "重写prose"

<!--more-->


# tailwind css override prose(重写prose)

> Tailwind CSS 的 Prose 类是用于快速创建排版样式的一种类。如果您想修改这些样式以适应您的项目需求，可以使用 Tailwind CSS 的自定义功能来实现。

首先，您需要在 `tailwind.config.js` 文件中将 `prose` 类的样式定义提取出来，然后对这些样式进行修改。您可以使用 `@apply` 指令将您的样式应用到 `prose` 类上。以下是一个示例：

```js
// tailwind.config.js

const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // 将 Prose 类的样式提取出来
            'h1,h2,h3,h4,h5,h6': {
              color: colors.gray[900],
              'font-weight': 'bold',
              'line-height': '1.2',
            },
            'ul > li::before': {
              content: '"-"',
              'font-weight': 'bold',
              'margin-left': '-1em',
              'margin-right': '.5em',
            },
            'a': {
              color: colors.blue[600],
              'text-decoration': 'underline',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

然后，您可以在自己的 CSS 文件中定义要覆盖 Prose 类中的样式，然后使用 `@apply` 指令将其应用到 `prose` 类上。以下是一个示例：

```css
css复制代码/* styles.css */

.my-prose h1 {
  font-size: 3rem;
}

.my-prose a {
  color: red;
}

.prose {
  @apply my-prose;
}
```

在这个示例中，我们创建了一个名为 `my-prose` 的新类，用于修改 Prose 类中的样式。然后，我们将 `my-prose` 类应用到 `prose` 类上，以覆盖默认的样式。
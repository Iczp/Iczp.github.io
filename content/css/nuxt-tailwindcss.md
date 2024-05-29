# Nuxt 中使用 tailwindcss

## Nuxt 中使用 tailwindcss

## 安装

1. 将依赖项安装`@nuxtjs/tailwindcss`到您的项目中：

```bash
npx nuxi@latest module add tailwindcss
```

1. 如果尚未完成，请将其添加到您的`modules`部分`nuxt.config`：

```ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss']
})
```

就这样！你现在可以在 Nuxt 应用中使用 Tailwind 类了 ✨

[使用Tailwind 查看器](https://tailwindcss.nuxtjs.org/tailwind/viewer)根据您的 Tailwind 配置发现您的调色板。

## Visual Studio Code 的扩展

Tailwind 提供了[Visual Studio Code 的扩展](https://github.com/tailwindlabs/tailwindcss-intellisense)，它提供了自动完成、语法突出显示和 linting 等高级功能。

您可以[通过 Visual Studio Code Marketplace 安装它](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)。

将以下配置添加到您的`.vscode/settings.json`文件中，以便 Tailwind 指令具有正确的自动完成、语法突出显示和 linting：

.vscode/settings.json



```json
"files.associations": {
    "*.css": "tailwindcss"
},
"editor.quickSuggestions": {
    "strings": true
}
```

如果您使用 pnpm，请确保 tailwindcss 安装在您的顶层 node_modules 文件夹中。

## [字符串类自动完成](https://tailwindcss.nuxtjs.org/tailwind/editor-support#string-classes-autocomplete)

使用 Tailwind 类的字符串时，您可以使用选项启用 IntelliSense 建议。您必须添加以下 VSCode 设置：[`editorSupport.autocompleteUtil`](https://tailwindcss.nuxtjs.org/getting-started/configuration#editorsupport)

.vscode/settings.json



```diff
// ...
+ "tailwindCSS.experimental.classRegex": ["tw`(.*?)`", "tw\\('(.*?)'\\)", "tw\\(\\s*('(.*?)'|\"(.*?)\")\\s*\\)"],
"files.associations": {
    "*.css": "tailwindcss"
},
// ...
```

添加后，可以按如下方式使用新的实用程序函数，在编写 Tailwind 类时提供 IntelliSense 建议：

索引.vue



```vue
<script setup lang="ts">
const variantClasses = {
  primary: tw`bg-red-400`,
  secondary: tw('bg-green-400')
}
</script>
```

## [配置智能感知](https://tailwindcss.nuxtjs.org/tailwind/editor-support#configuration-intellisense)

自 Tailwind CSS v3.3 以来，[ESM/TS 配置已得到支持，](https://tailwindcss.com/blog/tailwindcss-v3-3#esm-and-type-script-support)因此您的编辑器应根据您的配置自动配置自动完成`tailwind.config`。如果您有一个复杂的 Nuxt 项目，其中包含多个 Tailwind 配置，这些配置位于层内、从钩子传递或内联`nuxt.config`，并且想要使用合并的配置，则模块会生成它，`.nuxt/tailwind.config.cjs`您可以通过添加以下 VSCode 设置来使用它：

.vscode/settings.json



```diff
// ...
+ "tailwindCSS.experimental.configFile": ".nuxt/tailwind.config.cjs",
"files.associations": {
    "*.css": "tailwindcss"
},
// ...
```

如果您需要对 IntelliSense 扩展读取的配置进行更多自定义，则可以利用挂钩，尤其是`tailwindcss:resolvedConfig`运行配置以提供完整配置对象的挂钩。[`tailwindcss/resolveConfig`](https://github.com/tailwindlabs/tailwindcss/blob/master/resolveConfig.js)

模块/tw-cjs-config.ts



```ts
import { defineNuxtModule, addTemplate } from '@nuxt/kit'

export default defineNuxtModule({
  setup (options, nuxt) {
    nuxt.hook('tailwindcss:resolvedConfig', (config) => {
      addTemplate({
        filename: 'intellisense-tw.cjs', // gets prepended by .nuxt/
        getContents: () => `
          /* my-comment */
          module.exports = ${JSON.stringify(config)}
        `,
        write: true
      })
    })
  }
})
```

这个钩子允许您通过模块以不同的方式（例如，不同的文件名、内容等）自定义生成的模板。请注意，使用`JSON.stringify`将从您的配置中删除插件。
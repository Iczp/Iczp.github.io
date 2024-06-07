---
title: 'Yaml与JSON互转 typescript'
# description: '在 TypeScript（或 JavaScript）中，你可以使用第三方库如 `js-yaml` 来实现 YAML 和 JSON 之间的转换'
navigation:
  icon: '🏡'
tags: 'json ts yaml typescript'
categories: 'npm converter js-yaml'
author: '[iczp](../html/nofollow.md)'
date: '2024-06-01'
---

<!-- # Yaml与JSON互转 typescript -->


在 TypeScript（或 JavaScript）中，你可以使用第三方库如 `js-yaml` 来实现 YAML 和 JSON 之间的转换55。

<!--more-->

# Yaml与JSON互转 typescript


在 TypeScript（或 JavaScript）中，你可以使用第三方库如 `js-yaml` 来实现 YAML 和 JSON 之间的转换。以下是如何进行转换的示例：

### 1. 安装 `js-yaml`

首先，你需要安装 `js-yaml` 库。你可以使用 npm 或 yarn 来安装它：

```bash
npm install js-yaml
# 或者
yarn add js-yaml
```

### 2. 在 TypeScript 中使用 `js-yaml`

安装完成后，你可以在 TypeScript 文件中导入并使用它：

```ts
import * as yaml from 'js-yaml';

// JSON 转为 YAML
const jsonObj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const yamlStr = yaml.dump(jsonObj);
console.log(yamlStr);
// 输出：
// name: John
// age: 30
// city: New York

// YAML 转为 JSON
const yamlStr2 = `
name: Jane
age: 25
city: San Francisco
`;

const jsonObj2 = yaml.load(yamlStr2, { json: true }) as any;
console.log(jsonObj2);
// 输出：
// { name: 'Jane', age: 25, city: 'San Francisco' }
```

注意：

- `yaml.dump()` 方法用于将 JSON 对象转换为 YAML 字符串。
- `yaml.load()` 方法用于将 YAML 字符串转换为 JSON 对象。在 `yaml.load()` 中，我们传递了 `{ json: true }` 选项，以确保返回的是一个标准的 JSON 对象，而不是其他可能的类型（如 Date 对象或 RegExp 对象）。这在处理复杂 YAML 结构时特别有用，可以确保得到一致的 JSON 输出。然而，如果你确定 YAML 字符串只包含简单的键值对，并且希望保留某些特殊类型，你可以省略这个选项。
- 在 TypeScript 中，由于类型系统的存在，我们可能需要对 `yaml.load()` 的返回值进行类型断言（如 `as any`），以便能够正确地使用它。


# Nuxt3中使用Tailwind 

> 官方网站：[https://www.tailwindcss.cn/docs/guides/nuxtjs#standard](https://www.tailwindcss.cn/docs/guides/nuxtjs#standard)

## 步骤



1. ## Create your project

   Start by creating a new Nuxt project if you don’t have one set up already. The most common approach is to use the [Nuxt Command Line Interface](https://nuxt.com/docs/getting-started/installation).

   Terminal

   

   ```bash
   npx nuxi init my-projectcd my-project
   ```

2. ## Install Tailwind CSS

   Install `tailwindcss` and i peer dependencies via npm, and then run the init command to generate a `tailwind.config.js` file.

   Terminal

   

   ```bash
   npm install -D tailwindcss postcss autoprefixernpx tailwindcss init
   ```

3. ## Add Tailwind to your PostCSS configuration

   Add `tailwindcss` and `autoprefixer` to the `postcss.plugins` object in your `nuxt.config.js` file.

   nuxt.config.js

   

   ```ts
   // https://nuxt.com/docs/api/configuration/nuxt-config
   export default defineNuxtConfig({
     devtools: { enabled: true },
     postcss: {
       plugins: {
         tailwindcss: {},
         autoprefixer: {},
       },
     },
   })
   ```

4. ## Configure your template paths

   Add the paths to all of your template files in your `tailwind.config.js` file.

   tailwind.config.js

   

   ```ts
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./components/**/*.{js,vue,ts}",
       "./layouts/**/*.vue",
       "./pages/**/*.vue",
       "./plugins/**/*.{js,ts}",
       "./app.vue",
       "./error.vue",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

5. ## Add the Tailwind directives to your CSS

   Create an `./assets/css/main.css` file and add the `@tailwind` directives for each of Tailwind’s layers.

   main.css

   

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. ## Add the CSS file globally

   Add your newly-created `./assets/css/main.css` to the `css` array in your `nuxt.config.js` file.

   nuxt.config.js

   

   ```ts
   // https://nuxt.com/docs/api/configuration/nuxt-config
   export default defineNuxtConfig({
     devtools: { enabled: true },
     css: ['~/assets/css/main.css'],
     postcss: {
       plugins: {
         tailwindcss: {},
         autoprefixer: {},
       },
     },
   })
   ```

7. ## Start your build process

   Run your build process with `npm run dev`.

   Terminal

   

   ```bash
   npm run dev
   ```

8. ## Start using Tailwind in your project

   Start using Tailwind’s utility classes to style your content.

   app.vue

   

   ```vue
   <template>
     <h1 class="text-3xl font-bold underline">
       Hello world!
     </h1>
   </template>
   ```
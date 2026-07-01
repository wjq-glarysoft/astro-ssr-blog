import { defineConfig, envField } from "astro/config";
//import cloudflare from "@astrojs/cloudflare"; // 导入适配器

export default defineConfig({
  output: "static", // 必须改为 "server" 或 "hybrid"
  build: {
    // 启用压缩
    minify: true,
    // 如果使用服务端渲染，确保只包含必要的代码
  },
  /* adapter: cloudflare({
    mode: 'directory', // 改为 directory 模式
  }), */
  site: "https://astro-ssr-blog.1003056522.workers.dev",
 /*  env: {
    schema: {
      OAUTH_GITHUB_CLIENT_ID: envField.string({ context: "server", access: "secret" }),
      OAUTH_GITHUB_CLIENT_SECRET: envField.string({ context: "server", access: "secret" }),
    },
  } */
});
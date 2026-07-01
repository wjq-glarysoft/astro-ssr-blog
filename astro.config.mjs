import { defineConfig } from "astro/config";
export default defineConfig({
  output: "static", // 必须改为 "server" 或 "hybrid"
  build: {
    // 启用压缩
    minify: true,
    // 如果使用服务端渲染，确保只包含必要的代码
  },
  site: "https://astro-ssr-blog.1003056522.workers.dev",
 
});
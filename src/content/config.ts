// 1. 从 `astro:content` 导入工具函数
import { defineCollection } from 'astro:content';

// 2. 导入加载器
import { glob, file } from 'astro/loaders';

// 3. 导入 Zod
import { z } from 'astro/zod';

// 4. 为每个集合定义一个 `loader` 和 `schema`
const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    author: z.string().optional(),    
    categories: z.array(z.string()).optional(),
    slug: z.string(),
    updatedDate: z.coerce.date().optional(),
  }),
});

// 5. 导出一个 `collections` 对象来注册你的集合
export const collections = { posts };
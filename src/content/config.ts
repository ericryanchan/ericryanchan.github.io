import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const papers = defineCollection({
  loader: glob({
    pattern: '*/index.mdx',
    base: './src/content/papers',
  }),
  schema: z.object({
    // Higher priority = shown earlier on research page.
    priority: z.number().default(0),
    name: z.string(),
    venue: z.string().default(''),
    authors: z.string().default(''),
    // Mixed images + videos in any order. Use co-located paths (./file.jpg)
    // or absolute public paths (/papers/slug/file.mp4). Videos detected by extension.
    thumbnails: z.array(z.string()).default([]),
    projectUrl: z.string().optional(),
    arxivUrl: z.string().optional(),
    codeUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { papers };

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const GROUPS = ['Getting started', 'Sections', 'Your data'] as const;

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    group: z.enum(GROUPS),
    order: z.number(),
    color: z.string().optional(),
  }),
});

export const collections = { docs };

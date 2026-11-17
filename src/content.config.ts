import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const GROUPS = ['Getting started', 'Sections', 'Your data'] as const;

const schema = z.object({
  title: z.string(),
  description: z.string(),
  group: z.enum(GROUPS),
  order: z.number(),
  color: z.string().optional(),
});

// The Spanish guides use the same file names (and so the same URLs under /es/docs/).
const docs = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/docs' }), schema });
const docsEs = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/docs-es' }), schema });

export const collections = { docs, docsEs };

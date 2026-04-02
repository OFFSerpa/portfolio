import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
    titulo: z.string(),
    descricao: z.string(),
    stack: z.array(z.string()),
    repositorio: z.string().url().optional(),
    data: z.coerce.date(),
    destaque: z.boolean().default(false),
  }),
});

export const collections = { projetos };

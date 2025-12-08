import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			titleEn: z.string().optional(),
			description: z.string(),
			slug: z.string().optional(),
			category: z.enum(['neethi', 'pei', 'kadhal', 'famous', 'motivation']).optional(),
			moral: z.string().optional(),
			readingTime: z.number().optional(),
			genre: z.string().optional(),
			// Draft posts are hidden from the website
			draft: z.boolean().default(false),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

// Drafts collection - posts here are never published
// Move files from drafts to blog when ready to publish
const drafts = defineCollection({
	loader: glob({ base: './src/content/drafts', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			titleEn: z.string().optional(),
			description: z.string(),
			slug: z.string().optional(),
			category: z.enum(['neethi', 'pei', 'kadhal', 'famous', 'motivation']).optional(),
			moral: z.string().optional(),
			readingTime: z.number().optional(),
			genre: z.string().optional(),
			draft: z.boolean().default(false),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

export const collections = { blog, drafts };


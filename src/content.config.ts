import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.string(),
    dateISO: z.string(),
    location: z.string(),
    locationAddress: z.string().optional(),
    partners: z.array(z.object({
      name: z.string(),
      logo: z.string().optional(),
    })),
    description: z.string(),
    speakers: z.array(z.object({
      name: z.string(),
      company: z.string(),
      role: z.string().optional(),
      topic: z.string(),
      details: z.array(z.string()).optional(),
      photo: z.string().optional(),
    })).optional(),
    program: z.array(z.object({
      time: z.string(),
      title: z.string(),
      speaker: z.string().optional(),
    })).optional(),
    photos: z.array(z.string()).optional(),
    conclusions: z.array(z.object({
      title: z.string(),
      items: z.array(z.string()),
    })).optional(),
    recommendations: z.object({
      immediate: z.array(z.string()).optional(),
      strategic: z.array(z.string()).optional(),
    }).optional(),
    techStack: z.array(z.object({
      name: z.string(),
      description: z.string(),
      color: z.string().optional(),
    })).optional(),
    contact: z.object({
      name: z.string().optional(),
      phone: z.string().optional(),
      email: z.string().optional(),
      telegram: z.string().optional(),
      website: z.string().optional(),
    }).optional(),
    ctaQuestion: z.string().optional(),
    ogImage: z.string().optional(),
    eventType: z.enum(['own', 'participation']).default('own'),
  }),
});

export const collections = { events };

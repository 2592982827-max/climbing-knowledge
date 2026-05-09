import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseSchema = z.object({
  title: z.string(),
  titleEn: z.string().optional(),
  description: z.string(),
  descriptionEn: z.string().optional(),
  pubDate: z.date(),
  updatedDate: z.date().optional(),
  featuredImage: z.string().optional(),
  tags: z.array(z.string()).default([]),
  order: z.number().default(999),
  draft: z.boolean().default(false),
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: baseSchema.extend({
    level: z.enum(["absolute-beginner", "beginner", "intermediate"]).optional(),
  }),
});

const techniques = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/techniques" }),
  schema: baseSchema.extend({
    discipline: z.enum(["bouldering", "trad", "sport", "all"]).optional(),
  }),
});

const equipment = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/equipment" }),
  schema: baseSchema.extend({
    category: z.enum(["shoes", "harness", "belay", "quickdraws", "rope", "chalk", "helmet", "other"]).optional(),
  }),
});

const safety = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/safety" }),
  schema: baseSchema,
});

const training = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/training" }),
  schema: baseSchema.extend({
    focus: z.enum(["finger", "endurance", "core", "flexibility", "mental"]).optional(),
  }),
});

const injury = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/injury" }),
  schema: baseSchema.extend({
    bodyPart: z.enum(["finger", "shoulder", "elbow", "wrist", "knee", "back", "general"]).optional(),
  }),
});

const grades = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/grades" }),
  schema: baseSchema,
});

const terminology = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/terminology" }),
  schema: baseSchema,
});

const history = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/history" }),
  schema: baseSchema,
});

const buying = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/buying" }),
  schema: baseSchema.extend({
    budget: z.enum(["budget", "mid", "premium"]).optional(),
  }),
});

const weather = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/weather" }),
  schema: baseSchema,
});

export const collections = {
  guides,
  techniques,
  equipment,
  safety,
  training,
  injury,
  grades,
  terminology,
  history,
  buying,
  weather,
};

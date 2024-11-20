import { z } from "zod";

const BaseInterfaceSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  link: z.union([z.string(), z.array(z.string())]).optional(),
  tags: z.array(z.string()).optional(),
  isShareable: z.boolean(),
  type: z.enum(["image", "tweet", "tag", "link", "note"]),
});

// NoteInterface schema
export const NoteInterfaceSchema = BaseInterfaceSchema.extend({
  type: z.literal("note"),
  list: z.array(z.string()).min(1, "At least one item is required"),
  link: z.string().optional(),
});

// TweetInterface schema
export const TweetInterfaceSchema = BaseInterfaceSchema.extend({
  type: z.literal("tweet"),
  description: z.string(),
  link: z.string().optional(),
});

// TagsInterface schema
export const TagsInterfaceSchema = BaseInterfaceSchema.extend({
  type: z.literal("tag"),
  tags: z.array(z.string()),
  link: z.string().optional(),
});

// LinkInterface schema
export const LinkInterfaceSchema = BaseInterfaceSchema.extend({
  type: z.literal("link"),
  link: z.array(z.string()),
});

// ImageInterface schema
export const ImageInterfaceSchema = BaseInterfaceSchema.extend({
  type: z.literal("image"),
  image: z.union([z.string(), z.instanceof(File)]),
  link: z.string().optional(),
});

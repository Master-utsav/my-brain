import { z } from "zod";

// Custom regex for validations
const userNameRegex = /^[a-zA-Z0-9_]{3,16}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Zod schema
export const signupSchema = z
  .object({
    userName: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(16, { message: "Username can't exceed 16 characters" })
      .regex(userNameRegex, {
        message:
          "Username should only contain letters, numbers, or underscores",
      }),

    email: z
      .string()
      .email({ message: "Invalid email format" })
      .regex(emailRegex, { message: "Please provide a valid email" }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(passwordRegex, {
        message:
          "Password must contain at least one uppercase, one lowercase, one digit, and one special character",
      }),

    confirmPassword: z
      .string()
      .min(8, {
        message: "Confirm Password must be at least 8 characters long",
      })
      .regex(passwordRegex, {
        message: "Confirm Password must match the required pattern",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  identity: z
    .string()
    .min(3, { message: "Identity must be at least 3 characters long" })
    .max(50, { message: "Identity can't exceed 50 characters" })
    .refine((value) => userNameRegex.test(value) || emailRegex.test(value), {
      message: "Identity must be a valid username or email",
    }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(passwordRegex, {
      message:
        "Password must contain at least one uppercase, one lowercase, one digit, and one special character",
    }),
});

export const ResetPasswordSchema = z.object({
  identity: z
    .string()
    .min(3, { message: "Identity must be at least 3 characters long" })
    .max(50, { message: "Identity can't exceed 50 characters" })
    .refine((value) => userNameRegex.test(value) || emailRegex.test(value), {
      message: "Identity must be a valid username or email",
    }),
})

export const ResetPasswordOTPFormSchema = z.object({
  identity: z
    .string()
    .min(3, { message: "Identity must be at least 3 characters long" })
    .max(50, { message: "Identity can't exceed 50 characters" })
    .refine((value) => userNameRegex.test(value) || emailRegex.test(value), {
      message: "Identity must be a valid username or email",
    }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(passwordRegex, {
        message:
          "Password must contain at least one uppercase, one lowercase, one digit, and one special character",
      }),
})

const BaseInterfaceSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  link: z.union([z.string().url(), z.array(z.string().url()), z.null()]).optional(),
  tags: z.array(z.string()).optional(),
  isShareable: z.boolean(),
  type: z.enum(["image", "tweet", "tag", "link", "note"]),
});

// NoteInterface schema
export const NoteInterfaceSchema = BaseInterfaceSchema.extend({
  type: z.literal("note"),
  list: z
    .array(z.string().nonempty("List item cannot be empty"))
    .min(1, "At least one item is required"),
   link: z.union([z.string().url().optional(), z.null()]).optional(),
});

// TweetInterface schema
export const TweetInterfaceSchema = BaseInterfaceSchema.extend({
  type: z.literal("tweet"),
  description: z.string().min(10 , "min 10 characters required"),
  link: z.union([z.string().url().optional(), z.null()]).optional(),
});

// TagsInterface schema
export const TagsInterfaceSchema = BaseInterfaceSchema.extend({
  type: z.literal("tag"),
  tags: z.array(z.string().nonempty("input - tag item cannot be empty"))
  .min(1, "At least one item is required"),
  link: z.union([z.string().url().optional(), z.null()]).optional(),
});

// LinkInterface schema
export const LinkInterfaceSchema = BaseInterfaceSchema.extend({
  type: z.literal("link"),
  link: z.array(z.string().url().nonempty("List item cannot be empty"))
  .min(1, "At least one item is required"),
});

// ImageInterface schema
export const ImageInterfaceSchema = BaseInterfaceSchema.extend({
  type: z.literal("image"),
  image: z.union([z.string(), z.instanceof(File)]),
  link: z.union([z.string().url().optional(), z.null()]).optional(),
});

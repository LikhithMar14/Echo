import { any, z } from "zod";

export const CreatePostSchema = z.object({
    postMatter:z.string().min(1,"Cannot create an empty Post").max(500,"Cannot be more than 500 characters"),
    postImage:z.string().url().optional(),
})

export type CreatePostType = z.infer<typeof CreatePostSchema>

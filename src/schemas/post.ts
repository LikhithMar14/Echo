import { any, z } from "zod";

export const CreatePostSchema = z.object({
    postMatter:z.string().min(1,"Cannot create an empty Post").max(500,"Cannot be more than 500 characters"),
    postImage:z.string().url().optional(),
})

export type CreatePostType = z.infer<typeof CreatePostSchema>


export const createCommentSchema = z.object({
    content:z.string().min (1,"Comment Cannot be empty").max(50,"Comment cannot be more than 50 characters")
})

export type createCommentType = z.infer<typeof createCommentSchema>
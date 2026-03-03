import { z } from 'zod'

export const postFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: 'Title is required' })
    .min(5, { message: 'Title must be at least 5 characters' }),
  content: z
    .string()
    .trim()
    .min(1, { message: 'Content is required' })
    .min(10, { message: 'Content must be at least 10 characters' }),
  createdAt: z.string().min(1, { message: 'Created date is required' }),
})

export type PostFormValues = z.infer<typeof postFormSchema>

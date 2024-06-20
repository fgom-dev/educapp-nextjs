import { z } from 'zod'

export const upsertSubjectSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
})

export const deleteSubjectSchema = z.object({
  id: z.string(),
})

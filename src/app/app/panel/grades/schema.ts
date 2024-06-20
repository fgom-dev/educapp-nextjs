import { z } from 'zod'

export const upsertGradeSchema = z.object({
  id: z.string().optional(),
  serie: z.string().optional(),
  grade: z.string().optional(),
  group: z.string().optional(),
})

export const deleteGradeSchema = z.object({
  id: z.string(),
})

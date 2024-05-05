import { z } from 'zod'

export const upsertGradeSchema = z.object({
  id: z.string().optional(),
  serie: z.preprocess(
    (a) => parseInt(z.string().parse(a), 9),
    z.number().optional(),
  ),
  grade: z.string().optional(),
})

export const deleteGradeSchema = z.object({
  id: z.string(),
})

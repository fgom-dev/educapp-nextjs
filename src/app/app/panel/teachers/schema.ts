import { z } from 'zod'

export const upsertTeacherSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  lastname: z.string().optional(),
  email: z.string().optional(),
  document: z.string().optional(),
})

export const deleteTeacherSchema = z.object({
  id: z.string(),
})

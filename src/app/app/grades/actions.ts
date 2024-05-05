'use server'

import { auth } from '@/services/auth'
import { prisma } from '@/services/database'
import { z } from 'zod'
import { deleteGradeSchema, upsertGradeSchema } from './schema'

export async function getUserGrades() {
  const session = await auth()
  const grades = await prisma.grade.findMany({
    where: {
      userId: session?.user?.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return grades
}

export async function upsertGrade(input: z.infer<typeof upsertGradeSchema>) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    }
  }

  if (input.id) {
    const grade = await prisma.grade.findUnique({
      where: {
        id: input.id,
        userId: session?.user?.id,
      },
      select: {
        id: true,
      },
    })

    if (!grade) {
      return {
        error: 'Not found',
        data: null,
      }
    }

    const updatedGrade = await prisma.grade.update({
      where: {
        id: input.id,
        userId: session?.user?.id,
      },
      data: {
        serie: input.serie,
        grade: input.grade?.toLowerCase(),
      },
    })

    return updatedGrade
  }

  if (!input.serie) {
    return {
      error: 'Serie is required',
      data: null,
    }
  }

  if (!input.grade) {
    return {
      error: 'Grade is required',
      data: null,
    }
  }

  const grade = await prisma.grade.create({
    data: {
      serie: input.serie,
      grade: input.grade.toLowerCase(),
      userId: session?.user?.id,
    },
  })

  return grade
}

export async function deleteGrade(input: z.infer<typeof deleteGradeSchema>) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    }
  }

  const grade = await prisma.grade.findUnique({
    where: {
      id: input.id,
      userId: session?.user?.id,
    },
    select: {
      id: true,
    },
  })

  if (!grade) {
    return {
      error: 'Not found',
      data: null,
    }
  }

  await prisma.grade.delete({
    where: {
      id: input.id,
      userId: session?.user?.id,
    },
  })

  return {
    error: null,
    data: 'Grade successfully deleted.',
  }
}

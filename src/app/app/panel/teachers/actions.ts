'use server'

import { auth } from '@/services/auth'
import { prisma } from '@/services/database'
import { z } from 'zod'
import { deleteTeacherSchema, upsertTeacherSchema } from './schema'

export async function getUserTeachers() {
  const session = await auth()
  const teachers = await prisma.teacher.findMany({
    where: {
      userId: session?.user?.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return teachers
}

export async function upsertTeacher(
  input: z.infer<typeof upsertTeacherSchema>,
) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    }
  }

  if (input.id) {
    const teacher = await prisma.teacher.findUnique({
      where: {
        id: input.id,
        userId: session?.user?.id,
      },
      select: {
        id: true,
      },
    })

    if (!teacher) {
      return {
        error: 'Not found',
        data: null,
      }
    }

    const updatedTeacher = await prisma.teacher.update({
      where: {
        id: input.id,
        userId: session?.user?.id,
      },
      data: {
        name: input.name,
        lastname: input.lastname,
        email: input.email,
        document: input.document,
      },
    })

    return updatedTeacher
  }

  if (!input.name) {
    return {
      error: 'Name is required',
      data: null,
    }
  }

  if (!input.lastname) {
    return {
      error: 'Lastname is required',
      data: null,
    }
  }

  const teacher = await prisma.teacher.create({
    data: {
      name: input.name,
      lastname: input.lastname,
      email: input.email,
      document: input.document,
      userId: session?.user?.id,
    },
  })

  return teacher
}

export async function deleteTeacher(
  input: z.infer<typeof deleteTeacherSchema>,
) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    }
  }

  const teacher = await prisma.teacher.findUnique({
    where: {
      id: input.id,
      userId: session?.user?.id,
    },
    select: {
      id: true,
    },
  })

  if (!teacher) {
    return {
      error: 'Not found',
      data: null,
    }
  }

  await prisma.teacher.delete({
    where: {
      id: input.id,
      userId: session?.user?.id,
    },
  })

  return {
    error: null,
    data: 'Teacher successfully deleted.',
  }
}

'use server'

import { auth } from '@/services/auth'
import { prisma } from '@/services/database'
import { z } from 'zod'
import { deleteSubjectSchema, upsertSubjectSchema } from './schema'

export async function getUserSubjects() {
  const session = await auth()
  const subjetcs = await prisma.subject.findMany({
    where: {
      userId: session?.user?.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return subjetcs
}

export async function upsertSubject(
  input: z.infer<typeof upsertSubjectSchema>,
) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    }
  }

  if (input.id) {
    const subject = await prisma.subject.findUnique({
      where: {
        id: input.id,
        userId: session?.user?.id,
      },
      select: {
        id: true,
      },
    })

    if (!subject) {
      return {
        error: 'Not found',
        data: null,
      }
    }

    const updatedSubject = await prisma.subject.update({
      where: {
        id: input.id,
        userId: session?.user?.id,
      },
      data: {
        name: input.name,
        description: input.description,
      },
    })

    return updatedSubject
  }

  if (!input.name) {
    return {
      error: 'Name is required',
      data: null,
    }
  }

  const subject = await prisma.subject.create({
    data: {
      name: input.name,
      description: input.description,
      userId: session?.user?.id,
    },
  })

  return subject
}

export async function deleteSubject(
  input: z.infer<typeof deleteSubjectSchema>,
) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    }
  }

  const subject = await prisma.subject.findUnique({
    where: {
      id: input.id,
      userId: session?.user?.id,
    },
    select: {
      id: true,
    },
  })

  if (!subject) {
    return {
      error: 'Not found',
      data: null,
    }
  }

  await prisma.subject.delete({
    where: {
      id: input.id,
      userId: session?.user?.id,
    },
  })

  return {
    error: null,
    data: 'Subject successfully deleted.',
  }
}

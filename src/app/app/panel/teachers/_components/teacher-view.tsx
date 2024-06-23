'use client'

import { usePathname } from 'next/navigation'
import { getTeacherById } from '../actions'
import { Teacher } from '../types'
import { useEffect, useState } from 'react'
import { TeacherUpsertForm } from './teacher-upsert-form'

export default function TeacherView() {
  const pathname = usePathname().split('/')
  const teacherId = pathname[pathname.length - 1]
  const [teacher, setTeacher] = useState<Teacher | null>(null)

  useEffect(() => {
    if (teacherId) {
      const fetchTeacher = async () => {
        const data = await getTeacherById(teacherId as string)
        setTeacher(data)
      }

      fetchTeacher()
    }
  }, [teacherId])

  if (!teacher) {
    return <div>Carregando...</div>
  }

  return <TeacherUpsertForm teacher={teacher} />
}

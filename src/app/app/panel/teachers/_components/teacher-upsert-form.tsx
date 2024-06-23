'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Teacher } from '../types'
import { upsertTeacherSchema } from '../schema'
import { upsertTeacher } from '../actions'
import { Input } from '@/components/ui/input'

type TeacherUpsertFormProps = {
  teacher?: Teacher
}

export function TeacherUpsertForm({ teacher }: TeacherUpsertFormProps) {
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(upsertTeacherSchema),
  })

  const onSubmit = form.handleSubmit(async (data) => {
    await upsertTeacher(data)
    form.reset()
    router.refresh()

    ref.current?.click()
    toast({
      title: 'Success',
      description: 'Your teacher has been saved successfully.',
    })
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8 h-screen">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o nome do professor"
                  defaultValue={teacher?.name}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sobrenome</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o sobrenome do professor"
                  defaultValue={teacher?.lastname}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o email do professor"
                  defaultValue={teacher?.email as string}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="document"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Documento</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o documento do professor"
                  defaultValue={teacher?.document as string}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

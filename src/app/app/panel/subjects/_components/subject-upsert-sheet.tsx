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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Subject } from '../types'
import { upsertSubjectSchema } from '../schema'
import { upsertSubject } from '../actions'
import { Input } from '@/components/ui/input'

type SubjectUpsertSheetProps = {
  children?: React.ReactNode
  defaultValue?: Subject
}

export function SubjectUpsertSheet({ children }: SubjectUpsertSheetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(upsertSubjectSchema),
  })

  const onSubmit = form.handleSubmit(async (data) => {
    await upsertSubject(data)
    form.reset()
    router.refresh()

    ref.current?.click()
    toast({
      title: 'Success',
      description: 'Your subject has been saved successfully.',
    })
  })

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div ref={ref}>{children}</div>
      </SheetTrigger>
      <SheetContent>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-8 h-screen">
            <SheetHeader>
              <SheetTitle>Upsert Subject</SheetTitle>
              <SheetDescription>
                Add or edit your subject item here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o nome da disciplina"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite uma descrição" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SheetFooter className="mt-auto">
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}

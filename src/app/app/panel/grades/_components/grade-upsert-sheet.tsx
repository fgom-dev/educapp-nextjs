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
import { upsertGrade } from '../actions'
import { upsertGradeSchema } from '../schema'
import { Grade } from '../types'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type GradeUpsertSheetProps = {
  children?: React.ReactNode
  defaultValue?: Grade
}

export function GradeUpsertSheet({ children }: GradeUpsertSheetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(upsertGradeSchema),
  })

  const onSubmit = form.handleSubmit(async (data) => {
    await upsertGrade(data)
    form.reset()
    router.refresh()

    ref.current?.click()
    toast({
      title: 'Success',
      description: 'Your grade has been saved successfully.',
    })
  })

  const listSelectGroup = ['Infantil', 'Fundamental', 'Médio']
  const listSelectGrade = ['1°', '2°', '3°', '4°', '5°', '6°', '7°', '8°', '9°']
  const listSelectClass = ['A', 'B', 'C', 'D', 'E', 'F']

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div ref={ref}>{children}</div>
      </SheetTrigger>
      <SheetContent>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-8 h-screen">
            <SheetHeader>
              <SheetTitle>Upsert Grade</SheetTitle>
              <SheetDescription>
                Add or edit your grade item here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>

            <FormField
              control={form.control}
              name="group"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Grupo</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um Grupo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {listSelectGroup.map((item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="serie"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Série</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma Série" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {listSelectGrade.map((item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="grade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Turma</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma turma" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {listSelectClass.map((item, index) => (
                        <SelectItem key={index} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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

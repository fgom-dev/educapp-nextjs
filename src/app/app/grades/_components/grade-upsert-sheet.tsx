'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
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
    router.refresh()

    ref.current?.click()
    toast({
      title: 'Success',
      description: 'Your grade has been saved successfully.',
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
              <SheetTitle>Upsert Grade</SheetTitle>
              <SheetDescription>
                Add or edit your grade item here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>

            <FormField
              control={form.control}
              name="serie"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Série</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      max={9}
                      inputMode="decimal"
                      placeholder="Enter your grade serie"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter a number of serie of grade.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="grade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Série</FormLabel>
                  <FormControl>
                    <Input
                      minLength={1}
                      maxLength={3}
                      placeholder="Enter your grade"
                      className="uppercase"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Enter a grade.</FormDescription>
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

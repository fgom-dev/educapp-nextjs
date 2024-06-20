import { ReturnTypeWithoutPromise } from '@/types/return-type-without-promise'
import { getUserTeachers } from './actions'

export type Teacher = ReturnTypeWithoutPromise<typeof getUserTeachers>[0]

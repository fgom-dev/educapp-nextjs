import { ReturnTypeWithoutPromise } from '@/types/return-type-without-promise'
import { getUserSubjects } from './actions'

export type Subject = ReturnTypeWithoutPromise<typeof getUserSubjects>[0]

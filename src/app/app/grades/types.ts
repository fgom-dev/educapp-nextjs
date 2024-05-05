import { ReturnTypeWithoutPromise } from '@/types/return-type-without-promise'
import { getUserGrades } from './actions'

export type Grade = ReturnTypeWithoutPromise<typeof getUserGrades>[0]

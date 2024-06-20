import {
  MainPage,
  MainPageHeader,
  MainPageHeaderNav,
  MainPageHeaderTitle,
  MainPageMain,
} from '@/components/main/main-page'
import { Button } from '@/components/ui/button'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { GradeDataTable } from '../_components/grade-data-table'
import { GradeUpsertSheet } from '../_components/grade-upsert-sheet'
import { getUserGrades } from '../actions'

export default async function Page() {
  const grades = await getUserGrades()
  return (
    <MainPage>
      <MainPageHeader>
        <MainPageHeaderTitle>Turmas</MainPageHeaderTitle>
        <MainPageHeaderNav>
          <GradeUpsertSheet>
            <Button variant="outline" size="sm">
              <PlusCircledIcon className="w-4 h-4 mr-3" />
              Add grade
            </Button>
          </GradeUpsertSheet>
        </MainPageHeaderNav>
      </MainPageHeader>
      <MainPageMain>
        <GradeDataTable data={grades} />
      </MainPageMain>
    </MainPage>
  )
}

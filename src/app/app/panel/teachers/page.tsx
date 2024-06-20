import {
  MainPage,
  MainPageHeader,
  MainPageHeaderNav,
  MainPageHeaderTitle,
  MainPageMain,
} from '@/components/main/main-page'
import { TeacherUpsertSheet } from './_components/teacher-upsert-sheet'
import { Button } from '@/components/ui/button'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { getUserTeachers } from './actions'
import { TeacherDataTable } from './_components/teacher-data-table'

export default async function Page() {
  const teachers = await getUserTeachers()
  return (
    <MainPage>
      <MainPageHeader>
        <MainPageHeaderTitle>Professores</MainPageHeaderTitle>
        <MainPageHeaderNav>
          <TeacherUpsertSheet>
            <Button variant="outline" size="sm">
              <PlusCircledIcon className="w-4 h-4 mr-3" />
              Add professor
            </Button>
          </TeacherUpsertSheet>
        </MainPageHeaderNav>
      </MainPageHeader>
      <MainPageMain>
        <TeacherDataTable data={teachers} />
      </MainPageMain>
    </MainPage>
  )
}

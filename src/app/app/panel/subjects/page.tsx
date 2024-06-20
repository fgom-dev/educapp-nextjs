import {
  MainPage,
  MainPageHeader,
  MainPageHeaderNav,
  MainPageHeaderTitle,
  MainPageMain,
} from '@/components/main/main-page'
import { SubjectDataTable } from './_components/subject-data-table'
import { getUserSubjects } from './actions'
import { SubjectUpsertSheet } from './_components/subject-upsert-sheet'
import { Button } from '@/components/ui/button'
import { PlusCircledIcon } from '@radix-ui/react-icons'

export default async function Page() {
  const subjects = await getUserSubjects()
  return (
    <MainPage>
      <MainPageHeader>
        <MainPageHeaderTitle>Disciplinas</MainPageHeaderTitle>
        <MainPageHeaderNav>
          <SubjectUpsertSheet>
            <Button variant="outline" size="sm">
              <PlusCircledIcon className="w-4 h-4 mr-3" />
              Add disciplina
            </Button>
          </SubjectUpsertSheet>
        </MainPageHeaderNav>
      </MainPageHeader>
      <MainPageMain>
        <SubjectDataTable data={subjects} />
      </MainPageMain>
    </MainPage>
  )
}

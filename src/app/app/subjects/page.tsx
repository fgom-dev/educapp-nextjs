import {
  MainPage,
  MainPageHeader,
  MainPageHeaderTitle,
  MainPageMain,
} from '@/components/main/main-page'
import { SubjectDataTable } from './_components/subject-data-table'
import { getUserSubjects } from './actions'

export default async function Page() {
  const subjects = await getUserSubjects()
  return (
    <MainPage>
      <MainPageHeader>
        <MainPageHeaderTitle>Disciplinas</MainPageHeaderTitle>
      </MainPageHeader>
      <MainPageMain>
        <SubjectDataTable data={subjects} />
      </MainPageMain>
    </MainPage>
  )
}

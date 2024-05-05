import {
  MainPage,
  MainPageHeader,
  MainPageHeaderTitle,
  MainPageMain,
} from '@/components/main/main-page'

export default async function Page() {
  return (
    <MainPage>
      <MainPageHeader>
        <MainPageHeaderTitle>Professores</MainPageHeaderTitle>
      </MainPageHeader>
      <MainPageMain></MainPageMain>
    </MainPage>
  )
}

import { PropsWithChildren } from 'react'
import {
  MainPage,
  MainPageHeader,
  MainPageHeaderTitle,
  MainPageMain,
} from '@/components/main/main-page'
import { PanelSidebar } from './_components/panel-sidebar'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <MainPage>
      <MainPageHeader>
        <MainPageHeaderTitle>Painel de controle</MainPageHeaderTitle>
      </MainPageHeader>
      <MainPageMain>
        <div className="container">
          <div className="grid grid-cols-[16rem_1fr] gap-12">
            <PanelSidebar />
            <div>{children}</div>
          </div>
        </div>
      </MainPageMain>
    </MainPage>
  )
}

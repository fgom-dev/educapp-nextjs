import { PropsWithChildren } from "react";
import { MainPage, MainPageHeader, MainPageHeaderTitle, MainPageMain } from "@/components/main/main-page";
import { SettingsSidebar } from "./_components/settings-sidebar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <MainPage>
      <MainPageHeader>
        <MainPageHeaderTitle>
          Configurações
        </MainPageHeaderTitle>
      </MainPageHeader>
      <MainPageMain>
        <div className="container max-w-screen-lg">
          <div className="grid grid-cols-[16rem_1fr] gap-12">
            <SettingsSidebar />
            <div>{children}</div>
          </div>
        </div>
      </MainPageMain>
    </MainPage>

  )
}
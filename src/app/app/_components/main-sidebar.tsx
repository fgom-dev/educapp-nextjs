'use client';


import { HomeIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import { UserDropdown } from "./user-dropdown";
import { Logo } from "@/components/logo";
import { Sidebar, SidebarHeader, SidebarMain, SidebarNav, SidebarNavMain, SidebarNavLink, SidebarNavHeader, SidebarNavHeaderTitle, SidebarFooter } from "@/components/main/sidebar";

type MainSidebarProps = {
  user: Session['user']
}

export function MainSidebar({ user }: MainSidebarProps) {
  const pathName = usePathname()

  const isActive = (path: string) => {
    return pathName === path
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarMain className="flex flex-col flex-grow">

        <SidebarNav>
          <SidebarNavMain>
            <SidebarNavLink href="/app" active={isActive('/app')}>
              <HomeIcon />
              Agenda
            </SidebarNavLink>
            <SidebarNavLink href="/app/grades" active={isActive('/app/grades')}>
              <HomeIcon />
              Turmas
            </SidebarNavLink>
            <SidebarNavLink href="/app/teachers" active={isActive('/app/teachers')}>
              <HomeIcon />
              Professores
            </SidebarNavLink>
            <SidebarNavLink href="/app/subjects" active={isActive('/app/subjects')}>
              <HomeIcon />
              Disciplinas
            </SidebarNavLink>
            <SidebarNavLink href="/app/settings" active={isActive('/app/settings')}>
              <MixerHorizontalIcon />
              Configurações
            </SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>

        <SidebarNav className="mt-auto">
          <SidebarNavHeader>
            <SidebarNavHeaderTitle>
              Links extras
            </SidebarNavHeaderTitle>
          </SidebarNavHeader>
          <SidebarNavMain>
            <SidebarNavLink href="/">Precisa de ajuda?</SidebarNavLink>
            <SidebarNavLink href="/">Site</SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>

      </SidebarMain>
      <SidebarFooter>
        <UserDropdown user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
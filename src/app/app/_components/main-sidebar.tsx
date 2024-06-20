'use client'

import {
  CalendarIcon,
  MixIcon,
  MixerHorizontalIcon,
} from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'
import { Session } from 'next-auth'
import { UserDropdown } from './user-dropdown'
import { Logo } from '@/components/logo'
import {
  Sidebar,
  SidebarHeader,
  SidebarMain,
  SidebarNav,
  SidebarNavMain,
  SidebarNavLink,
  SidebarNavHeader,
  SidebarNavHeaderTitle,
  SidebarFooter,
} from '@/components/main/sidebar'

type MainSidebarProps = {
  user: Session['user']
}

export function MainSidebar({ user }: MainSidebarProps) {
  const pathName = usePathname()

  const isActive = (path: string, includes: boolean = false) => {
    if (includes) {
      return pathName.includes(path)
    }

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
              <CalendarIcon />
              Agenda
            </SidebarNavLink>

            <SidebarNavLink
              href="/app/panel/grades"
              active={isActive('/app/panel', true)}
            >
              <MixIcon />
              Painel de controle
            </SidebarNavLink>

            <SidebarNavLink
              href="/app/settings"
              active={isActive('/app/settings', true)}
            >
              <MixerHorizontalIcon />
              Configurações
            </SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>

        <SidebarNav className="mt-auto">
          <SidebarNavHeader>
            <SidebarNavHeaderTitle>Links extras</SidebarNavHeaderTitle>
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

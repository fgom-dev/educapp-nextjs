'use client'

import {
  SidebarNav,
  SidebarNavMain,
  SidebarNavLink,
} from '@/components/main/sidebar'
import { usePathname } from 'next/navigation'

export function PanelSidebar() {
  const pathName = usePathname()

  const isActive = (path: string) => {
    return pathName === path
  }

  return (
    <aside>
      <SidebarNav>
        <SidebarNavMain>
          <SidebarNavLink
            href={'/app/panel/grades'}
            active={isActive('/app/panel/grades')}
          >
            Turmas
          </SidebarNavLink>

          <SidebarNavLink
            href={'/app/panel/subjects'}
            active={isActive('/app/panel/subjects')}
          >
            Disciplinas
          </SidebarNavLink>

          <SidebarNavLink
            href={'/app/panel/teachers'}
            active={isActive('/app/panel/teachers')}
          >
            Professores
          </SidebarNavLink>
        </SidebarNavMain>
      </SidebarNav>
    </aside>
  )
}

'use client'

import { SidebarNav, SidebarNavMain, SidebarNavLink } from "@/components/main/sidebar"
import { usePathname } from "next/navigation"

export function SettingsSidebar() {
  const pathName = usePathname()

  const isActive = (path: string) => {
    return pathName === path
  }

  return (
    <aside>
      <SidebarNav>
        <SidebarNavMain>
          <SidebarNavLink href={"/app/settings"} active={isActive('/app/settings')}>
            Meu perfil
          </SidebarNavLink>
          <SidebarNavLink href={"/app/settings/theme"} active={isActive('/app/settings/theme')}>
            Aparência
          </SidebarNavLink>
          <SidebarNavLink href={"/app/settings/billing"} active={isActive('/app/settings/billing')}>
            Assinatura
          </SidebarNavLink>
        </SidebarNavMain>
      </SidebarNav >
    </aside>
  )
}
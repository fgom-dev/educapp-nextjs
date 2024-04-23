import { cn } from "@/lib/utils"

export type MainPageGenericProps<T = any> = {
  children: React.ReactNode
  className?: string
} & T

export function MainPage({ children, className }: MainPageGenericProps) {
  return (
    <section className={cn(['h-screen', className])}>
      {children}
    </section>
  )
}

export function MainPageHeader({ children, className }: MainPageGenericProps) {
  return (
    <header className={cn(['px-6 py-3 border-b border-border flex items-center justify-between', className])}>
      {children}
    </header>
  )
}

export function MainPageHeaderTitle({ children, className }: MainPageGenericProps) {
  return (
    <span className={cn(['text-muted-foreground uppercase', className])}>
      {children}
    </span>
  )
}

export function MainPageHeaderNav({ children, className }: MainPageGenericProps) {
  return (
    <nav className={cn(['', className])}>
      {children}
    </nav>
  )
}

export function MainPageMain({ children, className }: MainPageGenericProps) {
  return (
    <main className={cn(['p-6', className])}>
      {children}
    </main>
  )
}
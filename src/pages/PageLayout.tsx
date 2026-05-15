import type { ReactNode } from "react"

type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-app font-sans text-ink">
      <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 py-16">
        <div className="w-full rounded-2xl border border-line bg-panel p-10 shadow-lg">
          <p className="mb-6 text-center text-sm font-semibold tracking-wide text-accent uppercase">
            FormWizard Premium
          </p>
          {children}
        </div>
      </div>
    </div>
  )
}

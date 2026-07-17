import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-100 p-6">
      <div className="w-full max-w-md">
        {children}
      </div>
    </main>
  );
}

export default PageLayout;
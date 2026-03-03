import type { Metadata } from 'next'
import './globals.css'
import ToastProvider from '../components/L2/toast/ToastProvider'
import { defaultMetadata } from '../lib/SEO'

export const metadata: Metadata = {
  ...defaultMetadata,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <header className="text-center bg-[#ccc] py-4 ">Header</header>
        <main>
          {children}
          <ToastProvider />
        </main>
        <footer className="text-center bg-[#ccc] py-4 fixed bottom-0 w-full">
          Footer
        </footer>
      </body>
    </html>
  )
}

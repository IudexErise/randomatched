import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
  title: 'RandoMatched',
  description: 'Приложение для выбора случайного персонажа и поле битвы для Unmatched',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

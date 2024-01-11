import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Однажды в сказке",
  description: "Веб-портал с сказками, написанными нейросетью, и иллюстрациями для детей любого возраста. Читай, учись, пиши!",
  generator: "Next.js",
  manifest: "/manifest.json",
  keyboards: ["сказки", "истории", "tales", "однаждывсказке", "onceuponatale"],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

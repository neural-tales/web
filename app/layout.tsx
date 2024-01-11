import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Однажды в сказке",
  description: "Веб-портал с сказками, написанными нейросетью, и иллюстрациями для детей любого возраста. Читай, учись, пиши!",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["сказки", "истории", "tales", "однаждывсказке", "onceuponatale"],
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
      <body className={cn(inter.className, "container")}>
           <main className="flex min-h-screen flex-col justify-between p-16 lg:p-24 items-center">
      
      <div className="z-10 w-full items-center justify-between text-sm lg:flex">
        <h1 className="font-bold text-2xl">Однажды в сказке</h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-amber-500">Предложить сказку</Button>
          </a>
        </div>
      </div>{children}
      </main>
      </body>
    </html>
  )
}

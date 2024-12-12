import type { Metadata } from 'next'
import { JetBrains_Mono as jetBrainsMono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
// import { PageTransition } from '@/components/PageTransition'
// import { StairTransition } from '@/components/StairTransition'

const jetbrainsMono = jetBrainsMono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        {/* <StairTransition /> */}
        {/* <PageTransition>{children}</PageTransition> */}
        {children}
      </body>
    </html>
  )
}

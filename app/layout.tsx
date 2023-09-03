import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Navbar from './navbar'

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})
export const metadata: Metadata = {
  title: 'Takumi Imanaka',
  description: 'Takumi Imanaka Personal Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}

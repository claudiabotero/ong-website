import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['700', '800'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Fundación.EH - Transformando vidas',
  description: 'Una organización dedicada a crear impacto positivo en nuestras comunidades',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={playfair.className}>
      <body className={`${montserrat.className} bg-white text-gray-900`}>{children}</body>
    </html>
  )
}

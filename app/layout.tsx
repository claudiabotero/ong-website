import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="es">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}

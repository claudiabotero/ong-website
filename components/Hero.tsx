'use client'
import { useEffect, useState } from 'react'

export function Hero() {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(Math.max(0.3, 1 - window.scrollY / 600))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen bg-white flex items-center" style={{ opacity }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Transformar vidas a través de acciones concretas
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-xl">
              Educación, salud e inclusión, deporte. Devolviéndole a Encarnación lo que permitió nuestro crecimiento.
            </p>
            <div className="flex gap-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded font-medium hover:bg-gray-800 transition">
                Conoce nuestro trabajo
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded font-medium hover:bg-gray-50 transition">
                Contacta
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="/images/img5.jpg" alt="Fundación" className="rounded-lg w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

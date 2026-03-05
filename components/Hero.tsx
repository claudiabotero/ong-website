'use client'
import { useEffect, useState } from 'react'

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20" style={{ transform: `translateY(${scrollY * 0.1}px)` }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl opacity-20" style={{ transform: `translateY(${-scrollY * 0.1}px)` }} />
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col md:flex-row items-center gap-16">
        {/* Text side */}
        <div className="md:w-1/2 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            Transformar vidas a través de acciones concretas
          </h1>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s backwards' }}>
            La Fundación Carlos y Miriam E.H. devuelve a Encarnación lo que permitió nuestro crecimiento. Educación, salud e inclusión, deporte.
          </p>
          <div className="flex gap-4 flex-wrap" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s backwards' }}>
            <button className="bg-white text-slate-900 px-8 py-4 rounded font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              Conoce nuestro trabajo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-all duration-300">
              Contacta
            </button>
          </div>
        </div>

        {/* Image side */}
        <div className="md:w-1/2" style={{ animation: 'fadeInRight 0.8s ease-out 0.3s backwards' }}>
          <img 
            src="/images/img5.jpg" 
            alt="Fundación" 
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transformando vidas, creando impacto
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Una organización comprometida con generar cambios positivos en nuestras comunidades
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Conoce nuestro trabajo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600">
              Donar ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

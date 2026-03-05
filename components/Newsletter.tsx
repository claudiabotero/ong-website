export function Newsletter() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Suscríbete a nuestras noticias</h2>
        <p className="text-xl text-gray-600 mb-8">
          Entérate de nuestros proyectos, logros e impacto
        </p>
        <form className="flex gap-2">
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-bold"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  )
}

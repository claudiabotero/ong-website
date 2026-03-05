export function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold mb-6 text-gray-900">Mantente Informado</h2>
        <p className="text-xl text-gray-700 mb-12">
          Recibe actualizaciones sobre nuestros proyectos, logros e impacto en la comunidad
        </p>
        <form className="flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-lg"
            required
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-bold text-lg transition"
          >
            Suscribirse
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4">
          No compartimos tu email. Puedes desuscribirse en cualquier momento.
        </p>
      </div>
    </section>
  )
}

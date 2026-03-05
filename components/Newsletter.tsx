export function Newsletter() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Mantente informado</h2>
        <p className="text-gray-600 mb-8">Recibe actualizaciones sobre nuestros proyectos</p>
        <div className="flex gap-2">
          <input type="email" placeholder="Tu correo" className="flex-1 px-4 py-3 rounded border border-gray-300 focus:outline-none" />
          <button className="bg-gray-900 text-white px-8 py-3 rounded font-medium hover:bg-gray-800 transition">Suscribir</button>
        </div>
      </div>
    </section>
  )
}

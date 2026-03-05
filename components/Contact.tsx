export function Contact() {
  return (
    <section id="contacto" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-16">Contacta con nosotros</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Información</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-900">Ubicación</p>
                <p className="text-gray-600">Encarnación, Paraguay</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Email</p>
                <p className="text-gray-600">contacto@fundacioneh.org</p>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Tu nombre" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900" />
            <input type="email" placeholder="Tu correo" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900" />
            <textarea placeholder="Tu mensaje" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900" />
            <button type="submit" className="w-full bg-gray-900 text-white py-3 rounded font-medium hover:bg-gray-800 transition">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

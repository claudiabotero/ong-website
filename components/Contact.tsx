export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Contáctanos</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
            <div className="space-y-4 text-gray-600">
              <p>📍 Dirección: [Tu dirección aquí]</p>
              <p>📧 Email: contacto@fundacion.eh.org</p>
              <p>📱 Teléfono: [Tu teléfono]</p>
              <p>🌐 Redes sociales:</p>
              <div className="flex gap-4 pt-4">
                <a href="#" className="text-blue-600 hover:underline">Instagram</a>
                <a href="#" className="text-blue-600 hover:underline">Facebook</a>
                <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Tu nombre" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input 
              type="email" 
              placeholder="Tu correo" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea 
              placeholder="Tu mensaje" 
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-bold"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

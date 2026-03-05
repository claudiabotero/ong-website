export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Contáctanos</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-blue-600">Información de Contacto</h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="font-bold text-lg">Ubicación</p>
                  <p>Encarnación, Paraguay</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <p className="font-bold text-lg">Email</p>
                  <p>contacto@fundacioneh.org</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="font-bold text-lg">Consultas Institucionales</p>
                  <p>Para solicitudes de acompañamiento y consultas sobre nuestros programas</p>
                </div>
              </div>
              <div className="flex gap-4 pt-6">
                <a href="#" className="text-blue-600 hover:text-blue-700 font-bold text-lg">Instagram</a>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-bold text-lg">Facebook</a>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Tu nombre" 
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-lg"
              required
            />
            <input 
              type="email" 
              placeholder="Tu correo" 
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-lg"
              required
            />
            <input 
              type="text" 
              placeholder="Asunto" 
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-lg"
              required
            />
            <textarea 
              placeholder="Tu mensaje" 
              rows={5}
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-lg resize-none"
              required
            />
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 font-bold text-lg transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

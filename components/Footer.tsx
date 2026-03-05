export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <img src="/images/img3.jpg" alt="Logo" className="h-8 w-8" />
              Fundación E.H.
            </h3>
            <p className="text-gray-400">Carlos y Miriam — Transformando vidas a través de acciones concretas</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Navegación</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#mision" className="hover:text-white">Misión</a></li>
              <li><a href="#pilares" className="hover:text-white">Pilares</a></li>
              <li><a href="#galeria" className="hover:text-white">Galería</a></li>
              <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Términos</a></li>
              <li><a href="#" className="hover:text-white">Privacidad</a></li>
              <li><a href="#" className="hover:text-white">Transparencia</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">📘 Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">📷 Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Fundación Carlos y Miriam E.H. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">Encarnación, Paraguay</p>
        </div>
      </div>
    </footer>
  )
}

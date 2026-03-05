export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            Fundación E.H.
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#mision" className="text-gray-600 hover:text-blue-600">Misión</a>
            <a href="#proyectos" className="text-gray-600 hover:text-blue-600">Proyectos</a>
            <a href="#impacto" className="text-gray-600 hover:text-blue-600">Impacto</a>
            <a href="#galeria" className="text-gray-600 hover:text-blue-600">Galería</a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600">Contacto</a>
          </nav>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Donar
          </button>
        </div>
      </div>
    </header>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
            <div className="text-sm font-semibold text-gray-900">Fundación E.H.</div>
          </div>
          <nav className="hidden md:flex gap-12">
            <a href="#mision" className="text-gray-600 hover:text-gray-900 font-medium text-sm">Misión</a>
            <a href="#pilares" className="text-gray-600 hover:text-gray-900 font-medium text-sm">Pilares</a>
            <a href="#instituciones" className="text-gray-600 hover:text-gray-900 font-medium text-sm">Instituciones</a>
            <a href="#contacto" className="text-gray-600 hover:text-gray-900 font-medium text-sm">Contacto</a>
          </nav>
          <button className="bg-gray-900 text-white px-6 py-2 rounded text-sm font-medium hover:bg-gray-800 transition">
            Donar
          </button>
        </div>
      </div>
    </header>
  )
}

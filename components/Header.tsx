export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Logo Fundación Carlos y Miriam E.H."
              className="h-16 w-16 object-contain"
            />
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#mision" className="text-gray-600 hover:text-blue-600 font-medium">Misión</a>
            <a href="#pilares" className="text-gray-600 hover:text-blue-600 font-medium">Pilares</a>
            <a href="#galeria" className="text-gray-600 hover:text-blue-600 font-medium">Galería</a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600 font-medium">Contacto</a>
          </nav>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-bold">
            Contacta
          </button>
        </div>
      </div>
    </header>
  )
}

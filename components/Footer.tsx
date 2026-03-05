export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-8 w-8" />
            <div className="text-sm font-semibold text-gray-900">Fundación E.H.</div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Instagram</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Facebook</a>
          </div>
        </div>
        <p className="text-gray-600 text-sm border-t border-gray-200 pt-8">
          © 2026 Fundación Carlos y Miriam E.H. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

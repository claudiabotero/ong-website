export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="font-semibold text-gray-900">Fundación E.H.</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#work" className="text-gray-600 hover:text-gray-900">Work</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}

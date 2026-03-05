export function Gallery() {
  const images = Array(6).fill(0).map((_, i) => ({
    id: i + 1,
    alt: `Galería ${i + 1}`,
  }))

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Galería de Proyectos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.id} className="aspect-square bg-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                <span className="text-gray-600 text-lg">Foto {img.id}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8">
          *Reemplaza con fotos reales de @fundacion.eh
        </p>
      </div>
    </section>
  )
}

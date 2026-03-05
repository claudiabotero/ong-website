export function Impact() {
  const gallery = [
    '/images/img1.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg',
    '/images/img7.jpg',
    '/images/img8.jpg',
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Nuestro Compromiso</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-6xl font-bold mb-2 text-blue-600">5</div>
              <p className="text-xl text-gray-700">Instituciones acompañadas</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-6xl font-bold mb-2 text-blue-600">3</div>
              <p className="text-xl text-gray-700">Pilares de acción</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-6xl font-bold mb-2 text-blue-600">∞</div>
              <p className="text-xl text-gray-700">Compromiso con Encarnación</p>
            </div>
          </div>
        </div>

        {/* Image Collage */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Nuestro trabajo en acción</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <div 
                key={i}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all group h-48"
              >
                <img 
                  src={img}
                  alt={`Impacto ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
          <p className="text-3xl font-semibold italic leading-relaxed">
            "Encarnación es nuestro origen. Servir a su comunidad es nuestro compromiso."
          </p>
        </div>
      </div>
    </section>
  )
}

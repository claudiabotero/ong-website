export function Gallery() {
  const images = [
    { id: 1, src: '/images/img1.jpg', alt: 'Hospital Día Oncológico', category: 'Salud' },
    { id: 2, src: '/images/img2.jpg', alt: 'Bandera Paraguay', category: 'Identidad' },
    { id: 3, src: '/images/img3.jpg', alt: 'Logo Fundación', category: 'Identidad' },
    { id: 4, src: '/images/img4.jpg', alt: 'Evento Educativo', category: 'Educación' },
    { id: 5, src: '/images/img5.jpg', alt: 'Grupo de Estudiantes', category: 'Educación' },
    { id: 6, src: '/images/img6.jpg', alt: 'Workshop Educativo', category: 'Educación' },
    { id: 7, src: '/images/img7.jpg', alt: 'Taller Práctico', category: 'Formación' },
    { id: 8, src: '/images/img8.jpg', alt: 'Presentación de Especialidades', category: 'Formación' },
    { id: 9, src: '/images/img9.jpg', alt: 'Programa de Becas', category: 'Apoyo' },
  ]

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">Galería de Proyectos</h2>
          <p className="text-xl text-gray-600">Visualiza el impacto de nuestro trabajo en la comunidad</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div 
              key={img.id} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image container */}
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full inline-block w-fit mb-3 text-sm font-semibold">
                  {img.category}
                </div>
                <p className="text-white font-bold text-lg">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

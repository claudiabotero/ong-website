export function Gallery() {
  const images = [
    { id: 1, src: '/images/img1.jpg', alt: 'Hospital Día Oncológico' },
    { id: 2, src: '/images/img2.jpg', alt: 'Fundación E.H. - Paraguay' },
    { id: 3, src: '/images/img3.jpg', alt: 'Logo Fundación Carlos y Miriam E.H.' },
    { id: 4, src: '/images/img4.jpg', alt: 'Evento Comunitario' },
    { id: 5, src: '/images/img5.jpg', alt: 'Actividad Educativa - Estudiantes' },
  ]

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Galería de Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.id} className="aspect-square rounded-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

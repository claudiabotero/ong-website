export function Gallery() {
  const images = [
    { id: 1, src: '/images/img1.jpg', alt: 'Fundación E.H.' },
    { id: 2, src: '/images/img2.jpg', alt: 'Hospital Día Oncológico' },
    { id: 3, src: '/images/img3.jpg', alt: 'Logo Fundación' },
    { id: 4, src: '/images/img4.jpg', alt: 'Bandera Paraguay' },
    { id: 5, src: '/images/img5.jpg', alt: 'Evento Educativo' },
    { id: 6, src: '/images/img6.jpg', alt: 'Proyecto Comunitario' },
    { id: 7, src: '/images/img7.jpg', alt: 'Actividad Social' },
    { id: 8, src: '/images/img8.jpg', alt: 'Iniciativa Fundación' },
    { id: 9, src: '/images/img9.jpg', alt: 'Impacto Comunitario' },
  ]

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Galería de Proyectos</h2>
        <div className="grid md:grid-cols-3 gap-6">
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

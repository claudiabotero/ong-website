export function Projects() {
  const institutions = [
    { name: 'Fundación Divino Niño', focus: 'Educación y desarrollo infantil', icon: '👶', image: '/images/img5.jpg' },
    { name: 'Fundación Sagrado Corazón', focus: 'Salud e inclusión social', icon: '❤️', image: '/images/img1.jpg' },
    { name: 'Fundación Lazos del Sur', focus: 'Cohesión comunitaria', icon: '🤝', image: '/images/img4.jpg' },
    { name: 'Fundación PRODE', focus: 'Desarrollo y oportunidades', icon: '🚀', image: '/images/img6.jpg' },
    { name: 'CENADE', focus: 'Educación especializada', icon: '🎓', image: '/images/img7.jpg' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-6 text-gray-900">Instituciones Acompañadas</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Trabajamos en articulación con instituciones debidamente constituidas y comprometidas con el bienestar social, apoyando proyectos e iniciativas alineadas con nuestros pilares.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {institutions.map((inst, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all mb-4 h-48">
                <img 
                  src={inst.image} 
                  alt={inst.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md group-hover:shadow-lg transition">
                <div className="text-3xl mb-2">{inst.icon}</div>
                <h3 className="text-lg font-bold text-blue-600 group-hover:text-blue-700">{inst.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{inst.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

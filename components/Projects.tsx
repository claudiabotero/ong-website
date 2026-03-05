export function Projects() {
  const institutions = [
    { name: 'Fundación Divino Niño', focus: 'Educación y desarrollo infantil', icon: '👶' },
    { name: 'Fundación Sagrado Corazón', focus: 'Salud e inclusión social', icon: '❤️' },
    { name: 'Fundación Lazos del Sur', focus: 'Cohesión comunitaria', icon: '🤝' },
    { name: 'Fundación PRODE', focus: 'Desarrollo y oportunidades', icon: '🚀' },
    { name: 'CENADE', focus: 'Educación especializada', icon: '🎓' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-6 text-gray-900">Instituciones Acompañadas</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Trabajamos en articulación con instituciones debidamente constituidas y comprometidas con el bienestar social, apoyando proyectos e iniciativas alineadas con nuestros pilares.
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {institutions.map((inst, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all group cursor-pointer">
              <div className="text-4xl mb-3 group-hover:scale-125 transition">{inst.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-blue-600 group-hover:text-blue-700">{inst.name}</h3>
              <p className="text-gray-600 text-sm">{inst.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const institutions = [
    { name: 'Fundación Divino Niño', focus: 'Educación y desarrollo infantil' },
    { name: 'Fundación Sagrado Corazón', focus: 'Salud e inclusión social' },
    { name: 'Fundación Lazos del Sur', focus: 'Cohesión comunitaria' },
    { name: 'Fundación PRODE', focus: 'Desarrollo y oportunidades' },
    { name: 'CENADE', focus: 'Educación especializada' },
  ]

  return (
    <section id="instituciones" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Instituciones Acompañadas</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Trabajamos en articulación con instituciones debidamente constituidas y comprometidas con el bienestar social, 
          apoyando proyectos e iniciativas alineadas con nuestros pilares.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {institutions.map((inst, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-lg font-bold mb-2 text-blue-600">{inst.name}</h3>
              <p className="text-gray-600 text-sm">{inst.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

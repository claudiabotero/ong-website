export function Projects() {
  const institutions = [
    { name: 'Divino Niño', desc: 'Educación infantil', icon: '👶' },
    { name: 'Sagrado Corazón', desc: 'Salud e inclusión', icon: '❤️' },
    { name: 'Lazos del Sur', desc: 'Cohesión comunitaria', icon: '🤝' },
    { name: 'PRODE', desc: 'Desarrollo', icon: '🚀' },
    { name: 'CENADE', desc: 'Educación especializada', icon: '🎓' },
  ]

  return (
    <section id="instituciones" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-16">Instituciones Acompañadas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {institutions.map((inst, i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{inst.icon}</div>
              <h3 className="font-bold text-gray-900 mb-1">{inst.name}</h3>
              <p className="text-sm text-gray-600">{inst.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

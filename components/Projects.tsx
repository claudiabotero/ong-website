export function Projects() {
  const projects = [
    { title: 'Educación', desc: 'Programas educativos para comunidades vulnerables', icon: '📚' },
    { title: 'Salud', desc: 'Acceso a servicios de salud y prevención', icon: '🏥' },
    { title: 'Empleo', desc: 'Capacitación y oportunidades laborales', icon: '💼' },
    { title: 'Medio Ambiente', desc: 'Iniciativas sustentables para el planeta', icon: '🌱' },
  ]

  return (
    <section id="proyectos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-5xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

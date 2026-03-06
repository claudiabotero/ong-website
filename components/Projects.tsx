export function Projects() {
  const institutions = [
    { name: 'Divino Niño', desc: 'Educación infantil' },
    { name: 'Sagrado Corazón', desc: 'Salud e inclusión' },
    { name: 'Lazos del Sur', desc: 'Cohesión comunitaria' },
    { name: 'PRODE', desc: 'Desarrollo' },
    { name: 'CENADE', desc: 'Educación especializada' },
  ]
  return (
    <section id="work" className="bg-white py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Instituciones acompañadas</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {institutions.map((inst, i) => (
            <div key={i} className="border-l-2 border-gray-900 pl-6">
              <h3 className="font-bold text-gray-900">{inst.name}</h3>
              <p className="text-sm text-gray-600">{inst.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

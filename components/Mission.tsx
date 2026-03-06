export function Mission() {
  return (
    <section id="about" className="bg-gray-50 py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Quiénes somos</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Educación</h3>
            <p className="text-gray-600">Formación fundamental para el desarrollo de niños y jóvenes.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Salud e Inclusión</h3>
            <p className="text-gray-600">Bienestar e inclusión de personas en situación de vulnerabilidad.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Deporte</h3>
            <p className="text-gray-600">Formación, disciplina e integración social.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

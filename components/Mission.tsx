export function Mission() {
  return (
    <section id="mision" className="bg-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">Quiénes Somos</h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            La Fundación Carlos y Miriam E.H. nace del profundo vínculo que sus fundadores mantienen con Encarnación. A través de educación, salud e inclusión y deporte, buscamos generar oportunidades.
          </p>
        </div>

        <div id="pilares" className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Nuestros Pilares</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="mb-6">
                <div className="text-5xl">📚</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Educación</h3>
              <p className="text-gray-600 leading-relaxed">
                Educación como herramienta fundamental. Acompañamos instituciones que promueven oportunidades.
              </p>
            </div>
            <div>
              <div className="mb-6">
                <div className="text-5xl">🏥</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Salud e Inclusión</h3>
              <p className="text-gray-600 leading-relaxed">
                Bienestar e inclusión de personas en vulnerabilidad, fortaleciendo espacios de contención.
              </p>
            </div>
            <div>
              <div className="mb-6">
                <div className="text-5xl">⚽</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Deporte</h3>
              <p className="text-gray-600 leading-relaxed">
                Deporte como formación, disciplina e integración social para niños y jóvenes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

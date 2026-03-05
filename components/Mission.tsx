export function Mission() {
  return (
    <section id="mision" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-5xl font-bold mb-6 text-blue-600">Quiénes Somos</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              La Fundación Carlos y Miriam E.H. nace del profundo vínculo que sus fundadores mantienen con Encarnación. Fue aquí donde comenzaron a construir su camino, donde nacieron sus primeras oportunidades y donde se forjaron los valores de trabajo, esfuerzo y compromiso.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Decidieron crear la Fundación para devolver a la comunidad parte de lo que la vida y el trabajo les permitieron construir. A través de iniciativas vinculadas a educación, salud e inclusión y deporte, buscamos generar oportunidades y contribuir al desarrollo de Encarnación.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="/images/img4.jpg" alt="Evento Fundación" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="border-t-4 border-blue-600 pt-16">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Nuestros Pilares</h2>
          <div id="pilares" className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-xl transition">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Educación</h3>
              <p className="text-gray-700 leading-relaxed">
                Creemos en la educación como herramienta fundamental para el desarrollo. Acompañamos instituciones que promueven oportunidades de formación para niños y jóvenes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl hover:shadow-xl transition">
              <div className="text-6xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">Salud e Inclusión</h3>
              <p className="text-gray-700 leading-relaxed">
                Apoyamos instituciones que trabajan por el bienestar e inclusión de personas en situación de vulnerabilidad, fortaleciendo espacios de contención y desarrollo.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl hover:shadow-xl transition">
              <div className="text-6xl mb-4">⚽</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-700">Deporte</h3>
              <p className="text-gray-700 leading-relaxed">
                Fomentamos el deporte como herramienta de formación, disciplina e integración social para niños y jóvenes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

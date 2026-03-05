export function Mission() {
  return (
    <section id="mision" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Quiénes Somos</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          La Fundación Carlos y Miriam E.H. nace del profundo vínculo que sus fundadores mantienen con Encarnación. 
          Fue aquí donde comenzaron a construir su camino, donde nacieron sus primeras oportunidades y donde se forjaron 
          los valores de trabajo, esfuerzo y compromiso.
        </p>
        
        <h2 className="text-4xl font-bold text-center mb-12 mt-16">Nuestros Pilares</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-4">Educación</h3>
            <p className="text-gray-600">
              Creemos en la educación como herramienta fundamental para el desarrollo. Acompañamos instituciones 
              que promueven oportunidades de formación para niños y jóvenes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-bold mb-4">Salud e Inclusión</h3>
            <p className="text-gray-600">
              Apoyamos instituciones que trabajan por el bienestar e inclusión de personas en situación de vulnerabilidad, 
              fortaleciendo espacios de contención y desarrollo.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">⚽</div>
            <h3 className="text-xl font-bold mb-4">Deporte</h3>
            <p className="text-gray-600">
              Fomentamos el deporte como herramienta de formación, disciplina e integración social para niños y jóvenes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

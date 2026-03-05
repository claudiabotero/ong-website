export function Mission() {
  return (
    <section id="mision" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestra Misión</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-4">Propósito</h3>
            <p className="text-gray-600">
              Crear oportunidades para que cada persona pueda alcanzar su máximo potencial y vivir una vida digna.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-4">Visión</h3>
            <p className="text-gray-600">
              Un mundo donde la igualdad, la educación y la salud sean derechos accesibles para todos.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-xl font-bold mb-4">Valores</h3>
            <p className="text-gray-600">
              Transparencia, compromiso, innovación y respeto por la dignidad humana en cada acción.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

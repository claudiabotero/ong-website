import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      
      <section className="bg-white py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">Transformar vidas a través de acciones concretas</h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl">Educación. Salud e inclusión. Deporte. Devolviéndole a Encarnación lo que permitió nuestro crecimiento.</p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded font-medium hover:bg-gray-800 transition">Conoce nuestro trabajo</button>
        </div>
      </section>

      <section className="bg-gray-50 py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-12">Quiénes Somos</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">La Fundación Carlos y Miriam E.H. nace del profundo vínculo que sus fundadores mantienen con Encarnación. Fue aquí donde comenzaron a construir su camino.</p>
              <p className="text-lg text-gray-700 leading-relaxed">Decidieron crear la Fundación para devolver a la comunidad parte de lo que la vida y el trabajo les permitieron construir.</p>
            </div>
            <img src="/images/img2.jpg" alt="Quiénes Somos" className="rounded-lg w-full h-auto shadow-lg" />
          </div>
        </div>
      </section>

      <section className="bg-white py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-16">Nuestros Pilares</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Educación</h3>
              <p className="text-gray-600 leading-relaxed">Formación fundamental para el desarrollo de niños y jóvenes.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Salud e Inclusión</h3>
              <p className="text-gray-600 leading-relaxed">Bienestar e inclusión de personas en situación de vulnerabilidad.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚽</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Deporte</h3>
              <p className="text-gray-600 leading-relaxed">Formación, disciplina e integración social.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-12">Instituciones Acompañadas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-xl font-bold text-gray-900">Fundación Divino Niño</h3>
              <p className="text-gray-600">Educación infantil</p>
            </div>
            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-xl font-bold text-gray-900">Sagrado Corazón</h3>
              <p className="text-gray-600">Salud e inclusión</p>
            </div>
            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-xl font-bold text-gray-900">Lazos del Sur</h3>
              <p className="text-gray-600">Cohesión comunitaria</p>
            </div>
            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-xl font-bold text-gray-900">PRODE</h3>
              <p className="text-gray-600">Desarrollo</p>
            </div>
            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-xl font-bold text-gray-900">CENADE</h3>
              <p className="text-gray-600">Educación especializada</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-12">Nuestro Compromiso</h2>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="text-6xl font-bold mb-4 text-gray-300">5</div>
              <p className="text-lg text-gray-300">Instituciones acompañadas</p>
            </div>
            <div>
              <div className="text-6xl font-bold mb-4 text-gray-300">3</div>
              <p className="text-lg text-gray-300">Pilares de acción</p>
            </div>
            <div>
              <div className="text-6xl font-bold mb-4 text-gray-300">∞</div>
              <p className="text-lg text-gray-300">Compromiso</p>
            </div>
          </div>
          <p className="text-2xl italic text-gray-200">Encarnación es nuestro origen. Servir a su comunidad es nuestro compromiso.</p>
        </div>
      </section>

      <section className="bg-white py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-gray-900 mb-12">Contacta</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-lg text-gray-600 mb-4"><strong>Ubicación:</strong> Encarnación, Paraguay</p>
              <p className="text-lg text-gray-600"><strong>Email:</strong> contacto@fundacioneh.org</p>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Nombre" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900" />
              <textarea placeholder="Mensaje" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900" />
              <button type="submit" className="w-full bg-gray-900 text-white py-3 rounded font-medium hover:bg-gray-800 transition">Enviar</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

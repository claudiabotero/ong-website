export function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/img5.jpg')",
          filter: "brightness(0.4)"
        }}
      />
      
      {/* Content overlay */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg" style={{ fontFamily: 'Playfair Display' }}>
            Transformar vidas a través de acciones concretas
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md opacity-95">
            Fundación Carlos y Miriam E.H. — Devolviéndole a Encarnación lo que nos permitió crecer
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 text-lg">
              Conoce nuestro trabajo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 text-lg">
              Contacta con nosotros
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

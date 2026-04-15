'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-0">
        <div className="max-w-4xl">
          <div className="mb-6 inline-block">
            <span className="bg-gray-700/30 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-gray-600">
              ✨ Experts en Construction depuis 25 ans
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Excellence en Construction
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light leading-relaxed max-w-2xl">
            Partenaire de confiance pour vos projets résidentiels et commerciaux. Qualité, innovation et respect des délais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-white to-gray-100 text-gray-900 font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 text-center text-lg"
            >
              Demander un Devis
            </a>
            <a
              href="#portfolio"
              className="inline-block bg-gray-700/50 hover:bg-gray-700 text-white font-bold px-8 py-4 rounded-xl border-2 border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-lg backdrop-blur-sm"
            >
              Voir Réalisations
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-700">
            <div>
              <div className="text-3xl font-black text-white">150+</div>
              <div className="text-gray-400 font-medium">Projets Réalisés</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">98%</div>
              <div className="text-gray-400 font-medium">Satisfaction Client</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">25+</div>
              <div className="text-gray-400 font-medium">Ans d'Expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

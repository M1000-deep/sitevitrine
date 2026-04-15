'use client';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Excellence en Construction
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Partenaire de confiance pour vos projets résidentiels et commerciaux. Qualité, respect des délais et innovation pour chaque réalisation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block bg-white text-gray-900 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition text-center"
            >
              Demander un Devis
            </a>
            <a
              href="#portfolio"
              className="inline-block bg-gray-700 text-white font-bold px-8 py-3 rounded-lg hover:bg-gray-600 transition text-center border border-gray-600"
            >
              Voir Nos Réalisations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Vos Projets de Construction, Notre Expertise
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            BuildCraft accompagne vos projets de A à Z. Résidences, commerces, rénovations : nous réalisons vos rêves avec excellence et professionnalisme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition text-center"
            >
              Demander un Devis
            </a>
            <a
              href="#portfolio"
              className="inline-block bg-blue-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-400 transition text-center"
            >
              Voir Nos Réalisations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

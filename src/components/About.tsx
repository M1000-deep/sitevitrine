'use client';

export default function About() {
  const stats = [
    { number: '150+', label: 'Projets Réalisés', icon: '🏗️' },
    { number: '25+', label: 'Ans d\'Expérience', icon: '⭐' },
    { number: '500+', label: 'Clients Satisfaits', icon: '👥' },
    { number: '98%', label: 'Taux de Satisfaction', icon: '✓' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Contenu Texte */}
          <div>
            <span className="text-sm font-bold text-gray-600 uppercase tracking-widest">À PROPOS</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 mt-4">
              Qui Sommes-Nous
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
              Depuis plus de 25 ans, BuildCraft construit la confiance à travers l'excellence. Leader du secteur, nous réalisons les projets les plus ambitieux avec professionnalisme et innovation.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
              Chaque projet est une opportunité de démontrer notre expertise technique, notre maîtrise des délais et notre engagement qualité. Nous travaillons avec les meilleures pratiques industrie.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl text-gray-900 font-black">✓</span>
                <div>
                  <div className="font-bold text-gray-900">Expertise Reconnue</div>
                  <div className="text-gray-600 text-sm">Dans tous les secteurs de construction</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-gray-900 font-black">✓</span>
                <div>
                  <div className="font-bold text-gray-900">Respect des Délais</div>
                  <div className="text-gray-600 text-sm">Rigoreux et professionnel</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-gray-900 font-black">✓</span>
                <div>
                  <div className="font-bold text-gray-900">Certifications ISO 9001</div>
                  <div className="text-gray-600 text-sm">Qualité garantie</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl text-gray-900 font-black">✓</span>
                <div>
                  <div className="font-bold text-gray-900">Durabilité</div>
                  <div className="text-gray-600 text-sm">Engagement environnemental</div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg hover:bg-white transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl font-black text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

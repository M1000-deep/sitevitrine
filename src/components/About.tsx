'use client';

export default function About() {
  const stats = [
    { number: '150+', label: 'Projets Réalisés' },
    { number: '25+', label: 'Ans d\'Expérience' },
    { number: '500+', label: 'Clients Satisfaits' },
    { number: '98%', label: 'Taux de Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenu Texte */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Qui Sommes-Nous
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Depuis plus de 25 ans, BuildCraft construit la confiance à travers l'excellence. Leader du secteur, nous réalisons les projets les plus ambitieux avec professionnalisme et innovation.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Chaque projet est une opportunité de démontrer notre expertise technique, notre maîtrise des délais et notre engagement qualité. Nous travaillons avec les meilleures pratiques industrie.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-xl">✓</span>
                <span className="text-gray-700">Expertise reconnue dans tous les secteurs de construction</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-xl">✓</span>
                <span className="text-gray-700">Respect rigoureux des délais et budgets</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-xl">✓</span>
                <span className="text-gray-700">Certification qualité ISO 9001</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-900 font-bold text-xl">✓</span>
                <span className="text-gray-700">Engagement envers la durabilité environnementale</span>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition border-t-4 border-gray-900"
              >
                <div className="text-4xl font-bold text-gray-900 mb-2">
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

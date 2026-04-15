'use client';

export default function Services() {
  const services = [
    {
      icon: '🏗️',
      title: 'Construction Neuve',
      description: 'Réalisation de bâtiments résidentiels et commerciaux avec les normes les plus exigeantes.',
    },
    {
      icon: '🔨',
      title: 'Rénovation & Réhabilitation',
      description: 'Modernisation de vos espaces existants avec respect du patrimoine et efficacité énergétique.',
    },
    {
      icon: '🏢',
      title: 'Infrastructure Commerciale',
      description: 'Projets commerciaux clés en main : boutiques, bureaux, espaces de loisir.',
    },
    {
      icon: '🌿',
      title: 'Construction Écologique',
      description: 'Bâtiments durables respectueux de l\'environnement avec certifications écologiques.',
    },
    {
      icon: '👷',
      title: 'Gestion de Projet',
      description: 'Pilotage complet de vos projets avec respect des délais et budgets prévus.',
    },
    {
      icon: '🛡️',
      title: 'Conformité & Normes',
      description: 'Respect des normes de sécurité, d\'accessibilité et réglementations en vigueur.',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-gray-600 uppercase tracking-widest">NOS PRESTATIONS</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 mt-4">
            Services Complets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Expertise complète pour la conception, réalisation et suivi de vos projets de construction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-6 flex items-center text-gray-900 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  En savoir plus <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

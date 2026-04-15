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
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expertise complète pour la conception, réalisation et suivi de vos projets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-gray-900 hover:border-gray-700"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

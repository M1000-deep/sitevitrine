'use client';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Résidence Moderne Lyon',
      category: 'Résidentiel',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      description: 'Immeuble résidentiel de 45 appartements avec parties communes haut de gamme.',
    },
    {
      id: 2,
      title: 'Centre Commercial Grenoble',
      category: 'Commercial',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      description: 'Centre commercial de 8 000 m² avec 50 boutiques et restaurants.',
    },
    {
      id: 3,
      title: 'Rénovation Château Historique',
      category: 'Rénovation',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      description: 'Restauration complète d\'un château du XVIIe siècle préservant son heritage.',
    },
    {
      id: 4,
      title: 'Parc Écologique Saint-Étienne',
      category: 'Écologique',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      description: 'Complexe écologique certifié LEED avec panneaux solaires et gestion d\'eau.',
    },
    {
      id: 5,
      title: 'Bureau Technologique Villeurbanne',
      category: 'Commercial',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      description: 'Bâtiment de bureaux high-tech de 5 000 m² pour entreprise informatique.',
    },
    {
      id: 6,
      title: 'Complexe Sportif Régional',
      category: 'Infrastructure',
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      description: 'Salle omnisports avec piscine et salles d\'entraînement pour 2 000 personnes.',
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Réalisations Récentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Portfolio de projets majeurs réalisés avec succès et satisfaction client.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Placeholder avec Gradient */}
              <div
                className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundImage: project.image }}
              />

              {/* Contenu */}
              <div className="bg-white p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

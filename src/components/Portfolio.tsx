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
      description: 'Restauration complète d\'un château du XVIIe siècle préservant son héritage.',
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
    <section id="portfolio" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-gray-600 uppercase tracking-widest">PORTFOLIO</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 mt-4">
            Réalisations Récentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Portfolio de projets majeurs réalisés avec succès et satisfaction client optimale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="relative h-56 bg-cover bg-center overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: project.image }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
              </div>

              <div className="bg-white p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                <div className="mt-4 inline-flex items-center text-gray-900 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Voir le projet <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Entreprise Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg font-bold">
                BC
              </div>
              <span className="font-bold text-lg">BuildCraft</span>
            </div>
            <p className="text-gray-400 text-sm">
              Votre partenaire de confiance pour tous vos projets de construction et rénovation.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-blue-400 transition">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-blue-400 transition">
                  Réalisations
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  À Propos
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Construction Neuve
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Rénovation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Construction Écologique
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Gestion de Projet
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 +33 (0)4 72 XX XX XX</li>
              <li>📧 contact@buildcraft.fr</li>
              <li>📍 123 Ave de la Construction</li>
              <li>69000 Lyon, France</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} BuildCraft. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition">
                Mentions légales
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                CGU
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

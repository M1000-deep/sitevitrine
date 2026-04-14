'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez-Nous
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prêt à démarrer votre projet ? Contactez-nous pour un devis gratuit et sans engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-bold text-lg mb-2">Téléphone</h3>
            <p className="text-gray-600">+33 (0)4 72 XX XX XX</p>
            <p className="text-gray-600">Lun - Ven: 8h - 18h</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-gray-600">contact@buildcraft.fr</p>
            <p className="text-gray-600">Réponse sous 24h</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-bold text-lg mb-2">Adresse</h3>
            <p className="text-gray-600">123 Avenue de la Construction</p>
            <p className="text-gray-600">69000 Lyon, France</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              ✓ Merci ! Votre message a été envoyé. Nous vous contacterons rapidement.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Votre Nom
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="jean@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="+33 (0)6 XX XX XX XX"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Type de Projet
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Sélectionner...</option>
                  <option value="construction">Construction Neuve</option>
                  <option value="renovation">Rénovation</option>
                  <option value="commercial">Commercial</option>
                  <option value="eco">Écologique</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Décrivez votre projet..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Envoyer ma Demande
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

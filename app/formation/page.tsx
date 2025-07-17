export default function FormationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold text-center">Nos Formations</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Découvrez nos parcours</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            FuturCraft Institut propose une gamme de formations innovantes pour préparer les étudiants aux métiers de demain. Nos programmes sont conçus pour développer les compétences techniques, créatives et humaines.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Exemples de formations</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>Développement Web & Mobile</li>
            <li>Intelligence Artificielle & Data Science</li>
            <li>Design UX/UI</li>
            <li>Entrepreneuriat & Innovation</li>
            <li>Soft Skills et Leadership</li>
          </ul>
        </section>
      </div>
    </div>
  );
} 
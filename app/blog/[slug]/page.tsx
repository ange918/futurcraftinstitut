import React from 'react'

export default function Page() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-6">
                Titre de l'article exemple
            </h1>
            <img
                src="/public/image/hero.jpg"
                alt="Exemple"
                className="w-full rounded-lg mb-8"
            />
            <div className="prose prose-lg">
                <p>
                    Ceci est un contenu d'article statique pour test. Remplacez
                    ce texte par votre contenu réel.
                </p>
            </div>
        </div>
    )
}

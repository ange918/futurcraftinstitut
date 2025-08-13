'use client'

import { useBrochure } from '../contexts/BrochureContext'
import { FiX } from 'react-icons/fi'

export default function BrochureModal() {
    const { showBrochure, setShowBrochure } = useBrochure()

    if (!showBrochure) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-fade-in">
                {/* Bouton fermer */}
                <button
                    onClick={() => setShowBrochure(false)}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                    <FiX className="text-xl" />
                </button>

                {/* Contenu de la brochure */}
                <div className="text-center">
                    <h3 className="text-2xl font-extrabold mb-6 flex items-center justify-center gap-2">
                        Informations
                        <span className="text-[var(--secondary)]">_</span>
                    </h3>
                    
                    <div className="space-y-4 mb-8">
                        <div>
                            <div className="text-[var(--secondary)] font-bold text-lg">
                                Rentrée
                            </div>
                            <div className="text-gray-700">
                                Septembre 2025
                            </div>
                        </div>
                        <div>
                            <div className="text-[var(--secondary)] font-bold text-lg">
                                Durée
                            </div>
                            <div className="text-gray-700">
                                2 200 h
                            </div>
                        </div>
                        <div>
                            <div className="text-[var(--secondary)] font-bold text-lg">
                                Frais de scolarité
                            </div>
                            <div className="text-gray-700">
                                8 000€ la 1<sup>ère</sup> année
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={() => {
                            // Ici vous pouvez ajouter la logique pour télécharger la brochure
                            console.log('Téléchargement de la brochure')
                            setShowBrochure(false)
                        }}
                        className="w-full bg-[var(--secondary)] text-[var(--secondary-foreground)] font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-[var(--secondary)]/80 transition-colors flex items-center justify-center gap-2"
                    >
                        Télécharger la Brochure
                        <span className="text-xl">→</span>
                    </button>
                </div>
            </div>
        </div>
    )
}


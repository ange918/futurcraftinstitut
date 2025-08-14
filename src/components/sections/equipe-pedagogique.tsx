'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const intervenants = [
    {
        nom: 'Yoan DANSOU',
        titre: 'Co-founder & Prompt engineer',
        image: '/image/pro2.jpg',
    },
    {
        nom: 'Hermann Richy',
        titre: 'Formateur en développement web',
        image: '/image/Herman.jpg',
    },
    {
        nom: 'Gauthier Ore',
        titre: 'Directeur des stages et emplois',
        image: '/image/gauthier.jpg',
    },
    {
        nom: 'SEDAGONGJI Hugues Mahugnon',
        titre: 'Formateur en cadrage & montage',
        image: '/image/Mahugnon.jpg',
    },
    {
        nom: 'Merveil SUSUNI',
        titre: 'Dévoloppeur web',
        image: '/image/img14.jpg',
    },
    {
        nom: 'Private DANSOU',
        titre: 'Sécrétaire de direction',
        image: '/image/private.jpg',
    },
]

export default function EquipePedagogiqueSection() {
    const [showAll, setShowAll] = useState(false)
    const visibleIntervenants = showAll
        ? intervenants
        : intervenants.slice(0, 3)

    return (
        <section className="w-full bg-[#070526] text-[var(--foreground)] py-10 sm:py-16 flex flex-col items-center px-2 sm:px-4 md:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-6">
                Notre équipe d'intervenants
                <br />
                pédagogiques
                <span className="inline-block w-6 h-1 bg-[var(--secondary)] align-middle ml-2" />
            </h2>
            <button className="border border-[var(--foreground)] rounded-full px-6 sm:px-8 py-2 mb-10 text-base sm:text-lg font-semibold hover:bg-[var(--foreground)] hover:text-[var(--background)] transition cursor-pointer">
                Devenir professeur
            </button>
            <div className="flex flex-col gap-6 md:gap-8 justify-center mb-8 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full">
                    {intervenants.slice(0, 3).map(intervenant => (
                        <div
                            key={intervenant.nom}
                            className="bg-[var(--card)] rounded-3xl overflow-hidden shadow-lg flex flex-col justify-end relative w-full max-w-xs mx-auto h-[340px] sm:h-[400px] group">
                            <Image
                                src={intervenant.image}
                                alt={intervenant.nom}
                                width={320}
                                height={400}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-gradient-to-t from-[var(--card)] to-transparent">
                                <span className="block text-xl sm:text-2xl font-bold text-[var(--card-foreground)] drop-shadow-md">
                                    {intervenant.nom}
                                </span>
                                <span className="block text-[var(--secondary)] text-base font-medium">
                                    {intervenant.titre}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                {showAll && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full mt-6">
                        {intervenants.slice(3, 6).map(intervenant => (
                            <div
                                key={intervenant.nom}
                                className="bg-[var(--card)] rounded-3xl overflow-hidden shadow-lg flex flex-col justify-end relative w-full max-w-xs mx-auto h-[340px] sm:h-[400px] group">
                                <Image
                                    src={intervenant.image}
                                    alt={intervenant.nom}
                                    width={320}
                                    height={400}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-gradient-to-t from-[var(--card)] to-transparent">
                                    <span className="block text-xl sm:text-2xl font-bold text-[var(--card-foreground)] drop-shadow-md">
                                        {intervenant.nom}
                                    </span>
                                    <span className="block text-[var(--secondary)] text-base font-medium">
                                        {intervenant.titre}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {!showAll && (
                <button
                    className="mt-2 px-6 sm:px-8 py-2 border-2 border-[var(--secondary)] rounded-full text-[var(--secondary)] font-semibold text-base sm:text-lg hover:bg-[var(--secondary)] hover:text-[var(--background)] transition cursor-pointer"
                    onClick={() => setShowAll(true)}>
                    Voir plus
                </button>
            )}
        </section>
    )
}

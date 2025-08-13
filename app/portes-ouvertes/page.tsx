'use client'

import { FiArrowLeft, FiClock, FiMapPin, FiCalendar, FiUsers, FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'

export default function PortesOuvertesPage() {
    const openDays = [
        {
            city: 'Dijon',
            date: '28/06/2025',
            time: '14h - 18h',
            image: '/image/ange.jpg',
            description: 'Venez visiter notre centre de formation, découvrir nos projets, échanger avec nos étudiants et rencontrer notre équipe pédagogique !'
        },
        {
            city: 'Orléans',
            date: '21/06/2025',
            time: '14h - 18h',
            image: '/image/victoire.jpg',
            description: 'Venez visiter FuturCraft Institut, découvrir nos projets, échanger avec nos étudiants et rencontrer notre équipe pédagogique !'
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#070526] to-[#1a0840] text-white">
            {/* Header avec bouton retour */}
            <div className="pt-24 pb-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <Link 
                        href="/"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
                    >
                        <FiArrowLeft className="text-xl" />
                        Retour à l'accueil
                    </Link>
                    
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-black mb-6">
                            Journées Portes Ouvertes
                            <span className="text-[var(--secondary)]">_</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                            Venez visiter notre centre de formation, découvrir nos projets, échanger avec les étudiants et rencontrer les équipes pédagogiques !
                        </p>
                    </div>
                </div>
            </div>

            {/* Contenu principal */}
            <div className="max-w-6xl mx-auto px-4 pb-24">
                {/* Section Informations générales */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Pourquoi venir aux portes ouvertes ?
                        <span className="text-[var(--secondary)]">_</span>
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-[var(--secondary)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <FiUsers className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Rencontrer l'équipe</h3>
                            <p className="text-white/80">Échangez avec nos formateurs et l'équipe pédagogique</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-[var(--secondary)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <FiMapPin className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Découvrir les locaux</h3>
                            <p className="text-white/80">Visitez nos salles de cours et espaces de travail</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-[var(--secondary)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <FiCalendar className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">S'informer</h3>
                            <p className="text-white/80">Obtenez toutes les informations sur nos formations</p>
                        </div>
                    </div>
                </div>

                {/* Section Dates des portes ouvertes */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Nos prochaines portes ouvertes
                        <span className="text-[var(--secondary)]">_</span>
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {openDays.map((openDay, index) => (
                            <div key={index} className="bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors">
                                <div className="relative h-48">
                                    <Image
                                        src={openDay.image}
                                        alt={openDay.city}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="bg-[var(--secondary)] text-[var(--secondary-foreground)] font-bold px-4 py-2 rounded-full text-sm">
                                            {openDay.date}
                                        </span>
                                        <span className="flex items-center gap-1 text-white/80 font-semibold text-sm">
                                            <FiClock className="inline-block" />
                                            {openDay.time}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">
                                        FuturCraft INSTITUT - {openDay.city}
                                    </h3>
                                    <p className="text-white/80 mb-4">
                                        {openDay.description}
                                    </p>
                                    <button className="bg-[var(--secondary)] rounded-full w-10 h-10 flex items-center justify-center text-[var(--secondary-foreground)] text-xl hover:scale-110 transition">
                                        <FiArrowUpRight />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section Programme */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Programme de la journée
                        <span className="text-[var(--secondary)]">_</span>
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">14h</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Accueil et présentation</h3>
                                    <p className="text-white/80">Présentation de FuturCraft Institut et de nos valeurs</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">15h</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Visite des locaux</h3>
                                    <p className="text-white/80">Découverte des salles de cours et espaces de travail</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">16h</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Échanges avec les étudiants</h3>
                                    <p className="text-white/80">Témoignages et retours d'expérience</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">17h</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Présentation des formations</h3>
                                    <p className="text-white/80">Détail des programmes et débouchés professionnels</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">17h30</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Questions-réponses</h3>
                                    <p className="text-white/80">Session d'échanges avec l'équipe pédagogique</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">18h</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Cocktail de clôture</h3>
                                    <p className="text-white/80">Moment convivial pour échanger librement</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Inscription */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        S'inscrire aux portes ouvertes
                        <span className="text-[var(--secondary)]">_</span>
                    </h2>
                    
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-lg text-white/80 mb-8">
                            L'inscription aux portes ouvertes est gratuite et obligatoire pour des raisons d'organisation.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <button className="bg-[var(--secondary)] text-[var(--secondary-foreground)] font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-[var(--secondary)]/80 transition-colors flex items-center justify-center gap-3">
                                <FiCalendar className="text-xl" />
                                Dijon - 28/06/2025
                            </button>
                            
                            <button className="bg-[var(--secondary)] text-[var(--secondary-foreground)] font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-[var(--secondary)]/80 transition-colors flex items-center justify-center gap-3">
                                <FiCalendar className="text-xl" />
                                Orléans - 21/06/2025
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

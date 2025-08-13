'use client'

import { FiDownload, FiArrowLeft, FiCalendar, FiClock, FiDollarSign, FiUsers, FiBookOpen } from 'react-icons/fi'
import Link from 'next/link'

export default function BrochurePage() {
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
                            Brochure
                            <span className="text-[var(--secondary)]">_</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                            Découvrez toutes nos formations et programmes d'études
                        </p>
                    </div>
                </div>
            </div>

            {/* Contenu principal */}
            <div className="max-w-6xl mx-auto px-4 pb-24">
                {/* Section Informations générales */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Informations générales
                        <span className="text-[var(--secondary)]">_</span>
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-[var(--secondary)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <FiCalendar className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Rentrée</h3>
                            <p className="text-white/80">Septembre 2025</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-[var(--secondary)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <FiClock className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Durée</h3>
                            <p className="text-white/80">2 200 heures</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-[var(--secondary)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <FiDollarSign className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Frais de scolarité</h3>
                            <p className="text-white/80">8 000€ la 1ère année</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-[var(--secondary)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <FiUsers className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Effectifs</h3>
                            <p className="text-white/80">Classes de 20 étudiants</p>
                        </div>
                    </div>
                </div>

                {/* Section Formations disponibles */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Nos formations
                        <span className="text-[var(--secondary)]">_</span>
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Développement Web', duration: '3 ans', level: 'Bac+3' },
                            { name: 'Développement IA', duration: '3 ans', level: 'Bac+3' },
                            { name: 'Marketing Digital', duration: '2 ans', level: 'Bac+2' },
                            { name: 'Graphisme Web Design', duration: '2 ans', level: 'Bac+2' },
                            { name: 'E-commerce', duration: '2 ans', level: 'Bac+2' },
                            { name: 'Maîtrise IA', duration: '2 ans', level: 'Bac+4' },
                        ].map((formation, index) => (
                            <div key={index} className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <FiBookOpen className="text-[var(--secondary)] text-xl" />
                                    <h3 className="text-xl font-bold">{formation.name}</h3>
                                </div>
                                <div className="space-y-2 text-white/80">
                                    <p>Durée : {formation.duration}</p>
                                    <p>Niveau : {formation.level}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section Avantages */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Pourquoi choisir FuturCraft ?
                        <span className="text-[var(--secondary)]">_</span>
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">1</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Formation pratique</h3>
                                    <p className="text-white/80">70% de pratique, 30% de théorie pour une formation professionnalisante</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">2</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Alternance dès la 2ème année</h3>
                                    <p className="text-white/80">Rémunération et prise en charge des frais de scolarité par l'entreprise</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">3</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Green IT</h3>
                                    <p className="text-white/80">Sensibilisation aux enjeux environnementaux du numérique</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">4</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Intervenants professionnels</h3>
                                    <p className="text-white/80">Tous nos formateurs sont des professionnels en activité</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">5</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Projets concrets</h3>
                                    <p className="text-white/80">Hackathons, game jams et projets d'entreprises</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">6</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Insertion professionnelle</h3>
                                    <p className="text-white/80">95% de nos étudiants trouvent un emploi dans les 6 mois</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bouton de téléchargement */}
                <div className="text-center">
                    <button 
                        onClick={() => {
                            // Logique de téléchargement de la brochure PDF
                            console.log('Téléchargement de la brochure complète')
                        }}
                        className="bg-[var(--secondary)] text-[var(--secondary-foreground)] font-bold px-12 py-4 rounded-full text-xl shadow-lg hover:bg-[var(--secondary)]/80 transition-colors flex items-center gap-3 mx-auto"
                    >
                        <FiDownload className="text-2xl" />
                        Télécharger la brochure complète
                    </button>
                </div>
            </div>
        </div>
    )
}

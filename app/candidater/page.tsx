'use client'

import { FiArrowLeft, FiUser, FiMail, FiPhone, FiBookOpen, FiCalendar, FiFileText, FiCheckCircle } from 'react-icons/fi'
import Link from 'next/link'
import { useState } from 'react'

export default function CandidaterPage() {
    const [selectedFormation, setSelectedFormation] = useState('')
    const [selectedNiveau, setSelectedNiveau] = useState('')

    const formations = [
        'Développement Web',
        'Développement IA', 
        'Marketing Digital',
        'Graphisme Web Design',
        'E-commerce',
        'Maîtrise IA',
        'Webmaster',
        'Graphisme Sérigraphie',
        'Maintenance Informatique & Réseau',
        'Pilotage Drone',
        'Photo Cadrage Montage',
        'Secrétariat Caisse',
        'Copywriting'
    ]

    const niveaux = [
        'Bac+1 (1ère année)',
        'Bac+2 (2ème année)', 
        'Bac+3 (3ème année)',
        'Bac+4 (Maîtrise)',
        'Bac+5 (Master)'
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
                            Candidater
                            <span className="text-[var(--secondary)]">_</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                            Rejoignez FuturCraft Institut et commencez votre aventure dans le numérique
                        </p>
                    </div>
                </div>
            </div>

            {/* Contenu principal */}
            <div className="max-w-6xl mx-auto px-4 pb-24">
                {/* Section Processus de candidature */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Processus de candidature
                        <span className="text-[var(--secondary)]">_</span>
                    </h2>
                    
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-[var(--secondary)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Candidature</h3>
                            <p className="text-white/80">Remplissez le formulaire de candidature en ligne</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-[var(--secondary)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Étude du dossier</h3>
                            <p className="text-white/80">Notre équipe étudie votre dossier sous 48h</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-[var(--secondary)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Entretien</h3>
                            <p className="text-white/80">Entretien de motivation de 1h dans nos locaux</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="bg-[var(--secondary)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold">4</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Réponse</h3>
                            <p className="text-white/80">Réponse définitive sous 48h après l'entretien</p>
                        </div>
                    </div>
                </div>

                {/* Section Formulaire de candidature */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Formulaire de candidature
                        <span className="text-[var(--secondary)]">_</span>
                    </h2>
                    
                    <form className="max-w-4xl mx-auto space-y-8">
                        {/* Informations personnelles */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-lg font-bold mb-3">
                                    <FiUser className="inline mr-2" />
                                    Prénom *
                                </label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[var(--secondary)]"
                                    placeholder="Votre prénom"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-lg font-bold mb-3">
                                    <FiUser className="inline mr-2" />
                                    Nom *
                                </label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[var(--secondary)]"
                                    placeholder="Votre nom"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-lg font-bold mb-3">
                                    <FiMail className="inline mr-2" />
                                    Email *
                                </label>
                                <input 
                                    type="email" 
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[var(--secondary)]"
                                    placeholder="votre.email@exemple.com"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-lg font-bold mb-3">
                                    <FiPhone className="inline mr-2" />
                                    Téléphone *
                                </label>
                                <input 
                                    type="tel" 
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[var(--secondary)]"
                                    placeholder="06 12 34 56 78"
                                />
                            </div>
                        </div>

                        {/* Formation souhaitée */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-lg font-bold mb-3">
                                    <FiBookOpen className="inline mr-2" />
                                    Formation souhaitée *
                                </label>
                                <select 
                                    value={selectedFormation}
                                    onChange={(e) => setSelectedFormation(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[var(--secondary)]"
                                >
                                    <option value="">Sélectionnez une formation</option>
                                    {formations.map((formation, index) => (
                                        <option key={index} value={formation}>{formation}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-lg font-bold mb-3">
                                    <FiCalendar className="inline mr-2" />
                                    Niveau d'admission *
                                </label>
                                <select 
                                    value={selectedNiveau}
                                    onChange={(e) => setSelectedNiveau(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[var(--secondary)]"
                                >
                                    <option value="">Sélectionnez un niveau</option>
                                    {niveaux.map((niveau, index) => (
                                        <option key={index} value={niveau}>{niveau}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Message de motivation */}
                        <div>
                            <label className="block text-lg font-bold mb-3">
                                <FiFileText className="inline mr-2" />
                                Message de motivation *
                            </label>
                            <textarea 
                                required
                                rows={6}
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[var(--secondary)] resize-none"
                                placeholder="Décrivez votre motivation pour rejoindre FuturCraft Institut et vos projets professionnels..."
                            />
                        </div>

                        {/* Bouton de soumission */}
                        <div className="text-center">
                            <button 
                                type="submit"
                                className="bg-[var(--secondary)] text-[var(--secondary-foreground)] font-bold px-12 py-4 rounded-full text-xl shadow-lg hover:bg-[var(--secondary)]/80 transition-colors flex items-center gap-3 mx-auto"
                            >
                                <FiCheckCircle className="text-2xl" />
                                Envoyer ma candidature
                            </button>
                        </div>
                    </form>
                </div>

                {/* Section Informations importantes */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Informations importantes
                        <span className="text-[var(--secondary)]">_</span>
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">!</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Aucun prérequis pédagogique</h3>
                                    <p className="text-white/80">Nos formations sont ouvertes à tous, sans condition de diplôme préalable</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">!</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Hors Parcoursup</h3>
                                    <p className="text-white/80">Nos admissions se font en dehors de la plateforme Parcoursup</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">!</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Test technique</h3>
                                    <p className="text-white/80">Un test technique de 45min est demandé pour les admissions en 3ème année</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">!</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Revalidation des blocs</h3>
                                    <p className="text-white/80">Les étudiants ayant déjà validé des blocs de compétences doivent les revalider</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">!</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Réponse rapide</h3>
                                    <p className="text-white/80">Une réponse positive ou négative est donnée 48h après le 2ème entretien</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="bg-[var(--secondary)] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-bold">!</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Cohérence pédagogique</h3>
                                    <p className="text-white/80">Assurance de la cohérence pédagogique et du bon niveau de compétence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Contact */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Des questions ?
                        <span className="text-[var(--secondary)]">_</span>
                    </h2>
                    
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        Notre équipe est là pour vous accompagner dans votre projet de formation. N'hésitez pas à nous contacter.
                    </p>
                    
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link 
                            href="/portes-ouvertes"
                            className="bg-[var(--secondary)] text-[var(--secondary-foreground)] font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-[var(--secondary)]/80 transition-colors"
                        >
                            Participer aux portes ouvertes
                        </Link>
                        
                        <Link 
                            href="/brochure"
                            className="bg-white/10 text-white font-bold px-8 py-3 rounded-full text-lg border border-white/20 hover:bg-white/20 transition-colors"
                        >
                            Télécharger la brochure
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

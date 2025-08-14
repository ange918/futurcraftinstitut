'use client'

import { useState } from 'react'
import { AnimatedTestimonials } from '../../../src/components/ui/AnimatedTestimonials'

const testimonials = [
    {
        src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=500&h=500&facepad=2',
        name: 'Alice Dupont',
        designation: 'Étudiante en Trading',
        quote: "J'ai adoré la formation, l'équipe pédagogique est très à l'écoute et les projets sont concrets !",
    },
    {
        src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=500&h=500&facepad=2',
        name: 'Mohamed Benali',
        designation: 'Trader Junior',
        quote: "Grâce à FuturCraft, j'ai trouvé une alternance et j'ai pu progresser très vite.",
    },
    {
        src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=500&h=500&facepad=2',
        name: 'Sophie Martin',
        designation: 'Analyste Financier',
        quote: 'Les intervenants sont passionnés et nous transmettent leur savoir avec enthousiasme.',
    },
]

export default function TradingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const faq = [
        {
            question: "Quelles sont les conditions d'éligibilité pour la formation Trading ?",
            answer: (
                <div className="space-y-3">
                    <p>
                        La formation Trading est ouverte à tous les profils motivés par les marchés financiers. 
                        Aucun prérequis pédagogique n'est nécessaire, mais une appétence pour les mathématiques 
                        et l'analyse est recommandée.
                    </p>
                    <p>
                        Les inscriptions se font après étude du dossier de candidature et un entretien d'admission. 
                        Une réponse positive ou négative est donnée 48h après l'entretien.
                    </p>
                </div>
            ),
        },
        {
            question: "Comment fonctionne la formation et quels sont les débouchés ?",
            answer: (
                <div className="space-y-3">
                    <p>
                        La formation Trading dure 6 mois et combine théorie et pratique avec des simulations 
                        de trading en temps réel. Les étudiants apprennent l'analyse technique, fondamentale 
                        et la gestion des risques.
                    </p>
                    <p>
                        Les débouchés incluent : Trader, Analyste financier, Gestionnaire de portefeuille, 
                        Conseiller en investissement financier, ou création de votre propre activité de trading.
                    </p>
                </div>
            ),
        },
        {
            question: "Quel est le coût de la formation et les modalités de paiement ?",
            answer: (
                <div className="space-y-3">
                    <p>
                        Le coût de la formation Trading est de 100.000 FCFA pour 6 mois. 
                        Des facilités de paiement peuvent être proposées selon votre situation.
                    </p>
                    <p>
                        Le matériel nécessaire (ordinateur, accès aux plateformes de trading) 
                        est fourni par l'école pendant la formation.
                    </p>
                </div>
            ),
        },
    ]

    return (
        <div className="min-h-screen bg-background pt-24 font-sans">
            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-gradient-to-br from-background to-primary/90">
                <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 text-left">
                        <div className="text-sm font-bold text-secondary mb-2 uppercase tracking-widest">
                            FORMATION TRADING
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight">
                            Trading
                            <br className="hidden md:block" /> 1 mois
                        </h1>
                        <div className="flex gap-3 mb-6">
                            <span className="px-5 py-2 rounded-full border border-foreground text-foreground text-base font-medium">
                                Cotonou
                            </span>
                            <span className="px-5 py-2 rounded-full border border-foreground text-foreground text-base font-medium">
                                Abidjan
                            </span>
                        </div>
                        <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                            Une formation intensive pour maîtriser les techniques de trading et 
                            l'analyse des marchés financiers. Apprenez à trader en toute sécurité 
                            avec une approche professionnelle.
                        </p>
                        <button 
                            onClick={() => {
                                document.getElementById('candidature-form')?.scrollIntoView({ 
                                    behavior: 'smooth' 
                                })
                            }}
                            className="bg-secondary text-secondary-foreground font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-secondary/80 transition-colors cursor-pointer"
                        >
                            Candidater
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center relative mt-12 md:mt-0">
                        <div className="relative rounded-3xl" style={{
                            boxShadow: '0 0 0 8px var(--color-secondary), 0 8px 32px 0px var(--color-secondary)',
                            marginLeft: '-2rem',
                        }}>
                            <img
                                src="/image/hero.jpg"
                                alt="Formation Trading FuturCraft"
                                className="w-[380px] h-[340px] object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pourquoi cette formation */}
            <section className="py-16 px-4 bg-background">
                <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex-1 transition-all duration-300">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                            Pourquoi cette formation est
                            <br />
                            faite pour toi
                            <span className="text-secondary">_</span>
                        </h2>
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="px-5 py-2 rounded-full border border-muted-foreground text-muted-foreground text-base font-medium bg-background">
                                6 mois
                            </span>
                            <span className="px-5 py-2 rounded-full border border-muted-foreground text-muted-foreground text-base font-medium bg-background">
                                Formation intensive
                            </span>
                            <span className="px-5 py-2 rounded-full border border-muted-foreground text-muted-foreground text-base font-medium bg-background">
                                Trading en temps réel
                            </span>
                            <span className="px-5 py-2 rounded-full border border-muted-foreground text-muted-foreground text-base font-medium bg-background">
                                Certifiée
                            </span>
                        </div>
                        <p className="text-lg text-foreground/90 mb-2">
                            La formation Trading est faite pour toi si tu cherches une{' '}
                            <span className="font-bold">
                                formation pratique et professionnelle
                            </span>{' '}
                            dans le domaine des marchés financiers. Tu apprendras à maîtriser les{' '}
                            <span className="font-bold">
                                techniques d'analyse technique et fondamentale
                            </span>
                            , la gestion des risques et les stratégies de trading. Cette formation te
                            permettra d'acquérir des compétences très recherchées dans le secteur financier, 
                            tout en développant ta capacité à prendre des décisions éclairées sous pression. 
                            Avec la croissance des marchés financiers en Afrique, ce diplôme t'ouvrira de{' '}
                            <span className="font-bold text-primary">
                                nombreuses opportunités professionnelles
                            </span>{' '}
                            dans un domaine en constante évolution.
                        </p>
                    </div>
                </div>
            </section>

            {/* Programme de formation */}
            <section className="bg-[#0a0a1a] py-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">
                        Programme de formation
                        <span className="text-secondary">_</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-[#181a20] rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-4">Module 1: Fondamentaux</h3>
                            <ul className="text-white/80 space-y-2">
                                <li>• Introduction aux marchés financiers</li>
                                <li>• Types d'instruments financiers</li>
                                <li>• Mécanismes de trading</li>
                                <li>• Psychologie du trader</li>
                            </ul>
                        </div>
                        <div className="bg-[#181a20] rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-4">Module 2: Analyse Technique</h3>
                            <ul className="text-white/80 space-y-2">
                                <li>• Graphiques et indicateurs</li>
                                <li>• Patterns de retournement</li>
                                <li>• Support et résistance</li>
                                <li>• Moyennes mobiles</li>
                            </ul>
                        </div>
                        <div className="bg-[#181a20] rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-4">Module 3: Gestion des Risques</h3>
                            <ul className="text-white/80 space-y-2">
                                <li>• Position sizing</li>
                                <li>• Stop loss et take profit</li>
                                <li>• Ratio risque/récompense</li>
                                <li>• Diversification</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formulaire de candidature */}
            <section id="candidature-form" className="bg-background py-24 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-2 font-sans">
                        Candidature Formation Trading{' '}
                        <span className="text-secondary">_</span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-8 font-sans">
                        Merci de remplir le formulaire pour finaliser votre candidature.
                        <br />
                        Notre Responsable des Admissions reviendra très prochainement vers vous.
                    </p>
                    <form className="bg-primary rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col gap-6 relative border font-sans border-r-8 border-[#ff9900]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="prenom" className="block text-primary-foreground font-medium mb-2">
                                    Prénom*
                                </label>
                                <input
                                    type="text"
                                    id="prenom"
                                    name="prenom"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-base border border-border"
                                />
                            </div>
                            <div>
                                <label htmlFor="nom" className="block text-primary-foreground font-medium mb-2">
                                    Nom*
                                </label>
                                <input
                                    type="text"
                                    id="nom"
                                    name="nom"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-base border border-border"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-primary-foreground font-medium mb-2">
                                    E-mail*
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-base border border-border"
                                />
                            </div>
                            <div>
                                <label htmlFor="telephone" className="block text-primary-foreground font-medium mb-2">
                                    Numéro de téléphone*
                                </label>
                                <input
                                    type="tel"
                                    id="telephone"
                                    name="telephone"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-base border border-border"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="campus" className="block text-primary-foreground font-medium mb-2">
                                    Campus*
                                </label>
                                <select
                                    id="campus"
                                    name="campus"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-base border border-border">
                                    <option value="">Veuillez sélectionner</option>
                                    <option value="cotonou">Cotonou</option>
                                    <option value="abidjan">Abidjan</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="message" className="block text-primary-foreground font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-base border border-border"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <input
                                type="checkbox"
                                id="rgpd"
                                name="rgpd"
                                required
                                className="accent-secondary w-5 h-5"
                            />
                            <label htmlFor="rgpd" className="text-primary-foreground text-sm">
                                J'accepte d'être contacté(e) par email et téléphone.*
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-secondary text-secondary-foreground font-bold py-3 rounded-full text-lg mt-4 shadow-lg hover:bg-secondary/80 transition-colors">
                            Soumettre
                        </button>
                    </form>
                </div>
            </section>

            {/* Témoignages */}
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />

            {/* FAQ */}
            <section className="bg-[#0a0a1a] py-24 px-4">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
                        Questions fréquentes
                        <span className="text-secondary">_</span>
                    </h2>
                    <p className="text-white/80 text-center mb-10">
                        Toutes les réponses aux questions que vous vous posez sur la formation Trading.
                    </p>
                    <div className="flex flex-col gap-4">
                        {faq.map((item, idx) => (
                            <div
                                key={idx}
                                className={`bg-gradient-to-r from-[#181a20] to-[#221c3a] rounded-xl p-6 transition-all duration-300 cursor-pointer hover:shadow-lg flex flex-col ${
                                    openFaq === idx
                                        ? 'max-h-[700px] min-h-[180px] py-8'
                                        : 'max-h-[80px]'
                                } overflow-hidden`}
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg text-white font-semibold">
                                        {item.question}
                                    </span>
                                    <span className="text-3xl text-secondary font-bold select-none">
                                        {openFaq === idx ? '×' : '+'}
                                    </span>
                                </div>
                                {openFaq === idx && (
                                    <div className="mt-6 text-white/90 text-base animate-fade-in overflow-y-auto max-h-[420px] pr-2">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

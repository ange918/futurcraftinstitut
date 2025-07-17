'use client'

import { useState, useEffect, useRef } from 'react'
import { AnimatedTestimonials } from '../../../src/components/ui/AnimatedTestimonials'

export default function DeveloppementIaPage() {
    const [openBachelor, setOpenBachelor] = useState<number | null>(null)
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const [admissionTab, setAdmissionTab] = useState<'B1' | 'B3'>('B1')
    const [showInfoAlert, setShowInfoAlert] = useState(false)
    const pourquoiRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => setShowInfoAlert(entry.isIntersecting),
            { threshold: 0.3 }
        )
        if (pourquoiRef.current) {
            observer.observe(pourquoiRef.current)
        }
        return () => {
            if (pourquoiRef.current) observer.unobserve(pourquoiRef.current)
        }
    }, [])

    // Liste complète des 13 formations pour le sous-menu
    const formations = [
        {
            name: 'Développement Web Fullstack',
            link: '/formation/developpement-web',
        },
        { name: 'Webmaster', link: '/formation/webmaster' },
        {
            name: 'Photo, cadrage et montage',
            link: '/formation/photo-cadrage-montage',
        },
        {
            name: 'Graphisme & Web Design',
            link: '/formation/graphisme-web-design',
        },
        { name: 'Secrétariat & Caisse', link: '/formation/secretariat-caisse' },
        { name: 'Marketing Digital', link: '/formation/marketing-digital' },
        {
            name: 'Graphisme et Sérigraphie',
            link: '/formation/graphisme-serigraphie',
        },
        { name: 'Développement IA', link: '/formation/developpement-ia' },
        { name: 'Maîtrise IA', link: '/formation/maitrise-ia' },
        {
            name: 'Maintenance Informatique & Réseau',
            link: '/formation/maintenance-informatique-reseau',
        },
        { name: 'Copywriting', link: '/formation/copywriting' },
        { name: 'E-commerce', link: '/formation/e-commerce' },
        { name: 'Pilotage de drone', link: '/formation/pilotage-drone' },
    ]

    const testimonials = [
        {
            src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=500&h=500&facepad=2',
            name: 'Alice Dupont',
            designation: 'Étudiante en Web',
            quote: "J'ai adoré la formation, l'équipe pédagogique est très à l'écoute et les projets sont concrets !",
        },
        {
            src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=500&h=500&facepad=2',
            name: 'Mohamed Benali',
            designation: 'Développeur Junior',
            quote: "Grâce à FuturCraft, j'ai trouvé une alternance et j'ai pu progresser très vite.",
        },
        {
            src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=500&h=500&facepad=2',
            name: 'Sophie Martin',
            designation: 'Graphiste',
            quote: 'Les intervenants sont passionnés et nous transmettent leur savoir avec enthousiasme.',
        },
    ]

    // ... Le reste du code est identique à la page Développement Web, mais adapté pour Développement IA ...

    return (
        <div className="min-h-screen bg-background pt-24 font-sans">
            {/* Hero Section - Développement IA */}
            <section className="relative py-20 px-4 bg-gradient-to-br from-background to-primary/90">
                <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Bloc texte */}
                    <div className="flex-1 text-left">
                        <div className="text-sm font-bold text-secondary mb-2 uppercase tracking-widest">
                            DÉVELOPPEMENT IA
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight">
                            BAC+2 – Développement IA
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
                            Apprends à concevoir, développer et intégrer des
                            solutions d'intelligence artificielle pour répondre
                            aux enjeux de demain.
                        </p>
                        <button className="bg-secondary text-secondary-foreground font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:bg-secondary/80 transition-colors">
                            Candidater
                        </button>
                    </div>
                    {/* Image avec ombre jaune fluo et coins décoratifs */}
                    <div className="flex-1 flex items-center justify-center relative mt-12 md:mt-0">
                        <div
                            className="relative rounded-3xl"
                            style={{
                                boxShadow:
                                    '0 0 0 8px var(--color-secondary), 0 8px 32px 0px var(--color-secondary)',
                                marginLeft: '-2rem',
                            }}>
                            <img
                                src="/images/image.jpg"
                                alt="Promo FuturCraft Institut"
                                className="w-[380px] h-[340px] object-cover rounded-2xl"
                            />
                            {/* Coin décoratif haut gauche */}
                            <div className="absolute -top-6 -left-6 w-12 h-12 pointer-events-none">
                                <div className="absolute top-0 left-0 w-10 h-2 bg-secondary rounded-full" />
                                <div className="absolute top-0 left-0 w-2 h-10 bg-secondary rounded-full" />
                            </div>
                            {/* Coin décoratif bas droit */}
                            <div className="absolute -bottom-6 -right-6 w-12 h-12 pointer-events-none">
                                <div className="absolute bottom-0 right-0 w-10 h-2 bg-secondary rounded-full" />
                                <div className="absolute bottom-0 right-0 w-2 h-10 bg-secondary rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Pourquoi cette formation est faite pour toi */}
            <section className="py-16 px-4 bg-background" ref={pourquoiRef}>
                <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-12 items-start">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                            Pourquoi cette formation est
                            <br />
                            faite pour toi
                            <span className="text-secondary">_</span>
                        </h2>
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="px-5 py-2 rounded-full border border-muted-foreground text-muted-foreground text-base font-medium bg-background">
                                2 ans
                            </span>
                            <span className="px-5 py-2 rounded-full border border-muted-foreground text-muted-foreground text-base font-medium bg-background">
                                Intelligence Artificielle
                            </span>
                            <span className="px-5 py-2 rounded-full border border-muted-foreground text-muted-foreground text-base font-medium bg-background">
                                Développement
                            </span>
                        </div>
                        <p className="text-lg text-foreground/90 mb-2">
                            Cette formation est faite pour toi si tu veux
                            maîtriser les bases de l'IA, du machine learning, du
                            traitement de données et de l'intégration
                            d'algorithmes intelligents dans des applications
                            concrètes.
                        </p>
                    </div>
                </div>
            </section>
            {/* Accordéon (modules ou parcours) */}
            <div className="container mx-auto max-w-6xl flex flex-col gap-12 items-start mt-4 pb-24">
                <div className="flex-1 flex flex-col gap-6">
                    {[
                        "Bases de l'IA",
                        'Machine learning',
                        'Traitement de données',
                        "Développement d'applications IA",
                    ].map((module, idx) => (
                        <div
                            key={module}
                            className="bg-background border border-muted rounded-2xl p-6 shadow-sm flex flex-col gap-4 transition-all">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() =>
                                    setOpenBachelor(
                                        openBachelor === idx ? null : idx
                                    )
                                }>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
                                    {module}
                                    <span className="text-secondary">_</span>
                                </h3>
                                <button
                                    className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-muted text-2xl text-foreground font-bold hover:bg-muted transition-colors focus:outline-none"
                                    aria-label={
                                        openBachelor === idx
                                            ? 'Fermer'
                                            : 'Ouvrir'
                                    }
                                    tabIndex={-1}>
                                    {openBachelor === idx ? '×' : '+'}
                                </button>
                            </div>
                            {openBachelor === idx && (
                                <div className="animate-fade-in mt-2 text-muted-foreground">
                                    <p>
                                        Contenu détaillé sur {module} (à
                                        personnaliser selon le programme réel).
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Section diplôme */}
            <section className="relative bg-[#0a0a1a] pt-24 pb-20 overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
                    <div className="flex-1 bg-[#0a0a1a] rounded-2xl p-10 relative shadow-xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Le diplôme FuturCraft Institut
                            <span className="text-secondary">_</span>
                        </h2>
                        <p className="text-lg text-white/90">
                            Le titre délivré permet d'accéder à des postes de
                            développeur IA, data scientist, ingénieur machine
                            learning ou chef de projet IA.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <img
                            src="/images/Logo-ENTIERE-768x516.webp"
                            alt="le diplôme FuturCraft Institut"
                            className="w-[320px] h-auto object-contain drop-shadow-2xl rounded-2xl bg-white p-4"
                        />
                    </div>
                </div>
            </section>
            {/* Section Rejoindre la formation (étapes d'admission) */}
            <section className="bg-[#0a0a1a] py-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">
                        Rejoindre la formation
                        <span className="text-secondary">_</span>
                    </h2>
                    <div className="flex justify-center mb-12">
                        <div className="flex gap-2 bg-[#181a20] rounded-full p-2">
                            <button
                                className={`px-8 py-2 rounded-full font-bold text-lg shadow transition-colors ${
                                    admissionTab === 'B1'
                                        ? 'bg-secondary text-[#181a20]'
                                        : 'text-white hover:bg-secondary/20'
                                }`}
                                onClick={() => setAdmissionTab('B1')}
                                type="button">
                                Admission classique
                            </button>
                            <button
                                className={`px-8 py-2 rounded-full font-bold text-lg shadow transition-colors ${
                                    admissionTab === 'B3'
                                        ? 'bg-secondary text-[#181a20]'
                                        : 'text-white hover:bg-secondary/20'
                                }`}
                                onClick={() => setAdmissionTab('B3')}
                                type="button">
                                Admission passerelle
                            </button>
                        </div>
                    </div>
                    {admissionTab === 'B1' ? (
                        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
                            <div className="flex-1 bg-[#181a20] rounded-2xl p-8 shadow-lg relative flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-primary p-3 rounded-lg">
                                        <svg
                                            width="32"
                                            height="32"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <rect
                                                width="24"
                                                height="24"
                                                rx="6"
                                                fill="#6c47ff"
                                            />
                                            <path
                                                d="M7 17V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10"
                                                stroke="#fff"
                                                strokeWidth="2"
                                            />
                                            <rect
                                                x="9"
                                                y="10"
                                                width="6"
                                                height="4"
                                                rx="1"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-secondary font-bold text-sm">
                                            ÉTAPE 1
                                        </div>
                                        <div className="text-2xl font-bold text-white">
                                            Candidature en ligne
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white/80 mt-2">
                                    Remplis le formulaire de candidature en
                                    ligne pour démarrer le processus
                                    d'admission.
                                </div>
                            </div>
                            <div className="hidden md:flex items-center justify-center">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-[#181a20] text-2xl font-bold">
                                    <span>&#8594;</span>
                                </div>
                            </div>
                            <div className="flex-1 bg-[#181a20] rounded-2xl p-8 shadow-lg relative flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-primary p-3 rounded-lg">
                                        <svg
                                            width="32"
                                            height="32"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <rect
                                                width="24"
                                                height="24"
                                                rx="6"
                                                fill="#6c47ff"
                                            />
                                            <path
                                                d="M8 10h8M8 14h4"
                                                stroke="#fff"
                                                strokeWidth="2"
                                            />
                                            <rect
                                                x="8"
                                                y="8"
                                                width="8"
                                                height="8"
                                                rx="2"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-secondary font-bold text-sm">
                                            ÉTAPE 2
                                        </div>
                                        <div className="text-2xl font-bold text-white">
                                            Entretien de motivation
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white/80 mt-2">
                                    Un entretien individuel pour évaluer ta
                                    motivation et ton projet professionnel.
                                </div>
                            </div>
                            <div className="hidden md:flex items-center justify-center">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-[#181a20] text-2xl font-bold">
                                    <span>&#8594;</span>
                                </div>
                            </div>
                            <div className="flex-1 bg-[#181a20] rounded-2xl p-8 shadow-lg relative flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-primary p-3 rounded-lg">
                                        <svg
                                            width="32"
                                            height="32"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <rect
                                                width="24"
                                                height="24"
                                                rx="6"
                                                fill="#6c47ff"
                                            />
                                            <path
                                                d="M7 12l3 3 7-7"
                                                stroke="#fff"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-secondary font-bold text-sm">
                                            ÉTAPE 3
                                        </div>
                                        <div className="text-2xl font-bold text-white">
                                            Admission
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white/80 mt-2">
                                    Tu reçois la réponse d'admission sous 48h
                                    après l'entretien.
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
                            <div className="flex-1 bg-[#181a20] rounded-2xl p-8 shadow-lg relative flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-primary p-3 rounded-lg">
                                        <svg
                                            width="32"
                                            height="32"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <rect
                                                width="24"
                                                height="24"
                                                rx="6"
                                                fill="#6c47ff"
                                            />
                                            <path
                                                d="M7 17V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10"
                                                stroke="#fff"
                                                strokeWidth="2"
                                            />
                                            <rect
                                                x="9"
                                                y="10"
                                                width="6"
                                                height="4"
                                                rx="1"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-secondary font-bold text-sm">
                                            ÉTAPE 1
                                        </div>
                                        <div className="text-2xl font-bold text-white">
                                            Candidature en ligne
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white/80 mt-2">
                                    Remplis le formulaire de candidature en
                                    ligne pour démarrer le processus
                                    d'admission.
                                </div>
                            </div>
                            <div className="hidden md:flex items-center justify-center">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-[#181a20] text-2xl font-bold">
                                    <span>&#8594;</span>
                                </div>
                            </div>
                            <div className="flex-1 bg-[#181a20] rounded-2xl p-8 shadow-lg relative flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-primary p-3 rounded-lg">
                                        <svg
                                            width="32"
                                            height="32"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <rect
                                                width="24"
                                                height="24"
                                                rx="6"
                                                fill="#6c47ff"
                                            />
                                            <path
                                                d="M8 10h8M8 14h4"
                                                stroke="#fff"
                                                strokeWidth="2"
                                            />
                                            <rect
                                                x="8"
                                                y="8"
                                                width="8"
                                                height="8"
                                                rx="2"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-secondary font-bold text-sm">
                                            ÉTAPE 2
                                        </div>
                                        <div className="text-2xl font-bold text-white">
                                            Test technique
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white/80 mt-2">
                                    Un test technique pour valider tes
                                    compétences de base en IA ou développement.
                                </div>
                            </div>
                            <div className="hidden md:flex items-center justify-center">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-[#181a20] text-2xl font-bold">
                                    <span>&#8594;</span>
                                </div>
                            </div>
                            <div className="flex-1 bg-[#181a20] rounded-2xl p-8 shadow-lg relative flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-primary p-3 rounded-lg">
                                        <svg
                                            width="32"
                                            height="32"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <rect
                                                width="24"
                                                height="24"
                                                rx="6"
                                                fill="#6c47ff"
                                            />
                                            <path
                                                d="M8 10h8M8 14h4"
                                                stroke="#fff"
                                                strokeWidth="2"
                                            />
                                            <rect
                                                x="8"
                                                y="8"
                                                width="8"
                                                height="8"
                                                rx="2"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-secondary font-bold text-sm">
                                            ÉTAPE 3
                                        </div>
                                        <div className="text-2xl font-bold text-white">
                                            Entretien de motivation
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white/80 mt-2">
                                    Un entretien individuel pour évaluer ta
                                    motivation et ton projet professionnel.
                                </div>
                            </div>
                            <div className="hidden md:flex items-center justify-center">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-[#181a20] text-2xl font-bold">
                                    <span>&#8594;</span>
                                </div>
                            </div>
                            <div className="flex-1 bg-[#181a20] rounded-2xl p-8 shadow-lg relative flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-primary p-3 rounded-lg">
                                        <svg
                                            width="32"
                                            height="32"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <rect
                                                width="24"
                                                height="24"
                                                rx="6"
                                                fill="#6c47ff"
                                            />
                                            <path
                                                d="M7 12l3 3 7-7"
                                                stroke="#fff"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-secondary font-bold text-sm">
                                            ÉTAPE 4
                                        </div>
                                        <div className="text-2xl font-bold text-white">
                                            Admission
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white/80 mt-2">
                                    Tu reçois la réponse d'admission sous 48h
                                    après l'entretien.
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            {/* Formulaire de candidature */}
            <section className="bg-background py-24 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-2 font-sans">
                        Candidature Développement IA{' '}
                        <span className="text-secondary">_</span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-8 font-sans">
                        Merci de remplir le formulaire pour finaliser votre
                        candidature.
                        <br />
                        Notre Responsable des Admissions reviendra très
                        prochainement vers vous.
                    </p>
                    <form
                        className="bg-primary rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col gap-6 relative border font-sans border-r-8 border-[#ff9900]"
                        style={{
                            boxShadow:
                                '16px 0 48px -8px rgba(255,153,0,0.25), 0 8px 32px 0px var(--color-secondary)',
                        }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="prenom"
                                    className="block text-primary-foreground font-medium mb-2">
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
                                <label
                                    htmlFor="nom"
                                    className="block text-primary-foreground font-medium mb-2">
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
                                <label
                                    htmlFor="email"
                                    className="block text-primary-foreground font-medium mb-2">
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
                                <label
                                    htmlFor="telephone"
                                    className="block text-primary-foreground font-medium mb-2">
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
                                <label
                                    htmlFor="campus"
                                    className="block text-primary-foreground font-medium mb-2">
                                    Campus*
                                </label>
                                <select
                                    id="campus"
                                    name="campus"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-base border border-border">
                                    <option value="">
                                        Veuillez sélectionner
                                    </option>
                                    <option value="cotonou">Cotonou</option>
                                    <option value="abidjan">Abidjan</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="statut"
                                    className="block text-primary-foreground font-medium mb-2">
                                    Qui êtes-vous ?
                                </label>
                                <select
                                    id="statut"
                                    name="statut"
                                    className="w-full px-4 py-3 rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-base border border-border">
                                    <option value="">
                                        Veuillez sélectionner
                                    </option>
                                    <option value="lyceen">Lycéen(ne)</option>
                                    <option value="etudiant">
                                        Étudiant(e)
                                    </option>
                                    <option value="parent">Parent</option>
                                    <option value="autre">Autre</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="connu"
                                    className="block text-primary-foreground font-medium mb-2">
                                    Comment nous avez-vous connu ?
                                </label>
                                <select
                                    id="connu"
                                    name="connu"
                                    className="w-full px-4 py-3 rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-base border border-border">
                                    <option value="">
                                        Veuillez sélectionner
                                    </option>
                                    <option value="reseaux">
                                        Réseaux sociaux
                                    </option>
                                    <option value="site">Site web</option>
                                    <option value="ami">Ami / Famille</option>
                                    <option value="autre">Autre</option>
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="block text-primary-foreground font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-base border border-border"></textarea>
                            </div>
                        </div>
                        <div className="mt-2 text-primary-foreground/90 text-sm">
                            Dans le cadre de la protection des données,
                            j'accepte d'être contacté(e) par email et téléphone.
                            Voir la{' '}
                            <a
                                href="#"
                                className="text-secondary font-semibold underline">
                                politique de confidentialité
                            </a>
                            .
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <input
                                type="checkbox"
                                id="rgpd"
                                name="rgpd"
                                required
                                className="accent-secondary w-5 h-5"
                            />
                            <label
                                htmlFor="rgpd"
                                className="text-primary-foreground text-sm">
                                J'accepte d'être contacté(e) par email et
                                téléphone.*
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
            {/* Témoignages animés */}
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />

            {/* Section Questions fréquentes_ */}
            <section className="bg-[#0a0a1a] py-24 px-4">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
                        Questions fréquentes
                        <span className="text-secondary">_</span>
                    </h2>
                    <p className="text-white/80 text-center mb-10">
                        Toutes les réponses aux questions que vous vous posez
                        sur FuturCraft Institut et ses formations.
                    </p>
                    <div className="flex flex-col gap-4">
                        {[
                            'Quels sont les prérequis pour cette formation ?',
                            'Quels outils vais-je apprendre à utiliser ?',
                            'Quels débouchés après la formation ?',
                            'La formation est-elle accessible à distance ?',
                        ].map((question, idx) => (
                            <div
                                key={idx}
                                className={`bg-gradient-to-r from-[#181a20] to-[#221c3a] rounded-xl p-6 transition-all duration-300 cursor-pointer hover:shadow-lg flex flex-col ${
                                    openFaq === idx
                                        ? 'max-h-[700px] min-h-[180px] py-8'
                                        : 'max-h-[80px]'
                                } overflow-hidden`}
                                onClick={() =>
                                    setOpenFaq(openFaq === idx ? null : idx)
                                }>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg text-white font-semibold">
                                        {question}
                                    </span>
                                    <span className="text-3xl text-secondary font-bold select-none">
                                        {openFaq === idx ? '×' : '+'}
                                    </span>
                                </div>
                                {openFaq === idx && (
                                    <div className="mt-6 text-white/90 text-base animate-fade-in overflow-y-auto max-h-[420px] pr-2">
                                        <p>
                                            Réponse à la question « {question} »
                                            (à personnaliser selon la FAQ
                                            réelle).
                                        </p>
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

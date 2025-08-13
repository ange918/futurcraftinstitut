'use client'

import { useState, useEffect, useRef } from 'react'
import { AnimatedTestimonials } from '../../../src/components/ui/AnimatedTestimonials'
import { useBrochure } from '../../../src/contexts/BrochureContext'

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

export default function DeveloppementWebPage() {
    const [openBachelor, setOpenBachelor] = useState<number | null>(null)
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const [admissionTab, setAdmissionTab] = useState<'B1' | 'B3'>('B1')
    const { setShowBrochure } = useBrochure()
    const pourquoiRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowBrochure(true)
                }
            },
            { threshold: 0.3 }
        )
        if (pourquoiRef.current) {
            observer.observe(pourquoiRef.current)
        }
        return () => {
            if (pourquoiRef.current) observer.unobserve(pourquoiRef.current)
        }
    }, [setShowBrochure])

    const faq = [
        {
            question:
                "Quelles sont les conditions d'éligibilité et les modalités d'admission du Développeur Web Fullstack ?",
            answer: (
                <div className="space-y-3">
                    <p>
                        Le Bachelor est ouvert à tous les lycéens, étudiants ou
                        personnes en reconversion. Aucun prérequis pédagogique
                        n'est nécessaire.
                    </p>
                    <p>
                        Les inscriptions se font hors Parcoursup, après étude du
                        dossier de candidature et un entretien d'admission.
                        L'admissibilité chez Coda est conditionnée à la réussite
                        de 2 entretiens successifs&nbsp;: un entretien en visio
                        de 20mn puis un entretien de motivation de 1h dans les
                        locaux de l'école. Une réponse positive ou négative est
                        donnée 48h après le 2<sup>nd</sup> entretien.
                    </p>
                    <p>
                        Pour les admissions directes en 3<sup>ème</sup> année,
                        le passage d'un test technique de 45min est demandé afin
                        de valider l'adéquation entre le niveau de l'élève et le
                        programme suivi.
                    </p>
                    <p>
                        Les étudiants qui auraient déjà validé un ou plusieurs
                        blocs de compétences du titre RNCP doivent revalider ces
                        blocs dans le cadre des évaluations continues et des
                        jurys finaux. Ceci dans le but d'assurer la cohérence
                        pédagogique du programme dispensé et le bon niveau de
                        compétence des étudiants qui sortent de l'école.
                    </p>
                </div>
            ),
        },
        {
            question:
                "Comment fonctionne l'alternance et la rémunération des étudiants avec le Développeur Web Fullstack ?",
            answer: (
                <div className="space-y-3">
                    <p>
                        Les étudiants peuvent suivre leur Bachelor en alternance
                        à partir de la 2<sup>ème</sup> année. Ils disposent d'un
                        contrat d'apprentissage en alternance. À ce titre, les
                        étudiants de 2<sup>ème</sup> et 3<sup>ème</sup> année
                        sont rémunérés par les entreprises et c'est l'entreprise
                        qui paie les frais de scolarité.
                    </p>
                    <p>
                        L'alternance est obligatoire dans le cadre du suivi des
                        études. Les élèves commencent à chercher leur alternance
                        à partir du mois de janvier en 1<sup>ère</sup> année.
                        Les élèves qui n'auraient pas trouvé eux-mêmes leur
                        alternance à compter du mois de septembre se voient
                        imposer un contrat proposé par une des entreprises
                        partenaires de l'école, ou ont le choix de poursuivre
                        leur 2<sup>ème</sup> année en initiale.
                    </p>
                </div>
            ),
        },
        {
            question:
                "Quelles sont les modalités d'évaluation du Développeur Web Fullstack ?",
            answer: (
                <div className="space-y-3">
                    <p>Les étudiants sont évalués par un jury au vu :</p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>
                            D'une mise en situation professionnelle ou d'une
                            présentation d'un projet réalisé en amont de la
                            session, éventuellement complétée par d'autres
                            modalités d'évaluation : entretien technique,
                            questionnaire professionnel, questionnement à partir
                            de production(s)
                        </li>
                        <li>
                            D'un dossier professionnel faisant état des
                            pratiques professionnelles de l'étudiant
                        </li>
                        <li>Des résultats des évaluations continues</li>
                        <li>
                            D'un entretien avec le jury destiné à vérifier le
                            niveau de maîtrise des compétences requises pour le
                            Bachelor
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            question:
                'Quels sont les prérequis techniques pour suivre cette formation ?',
            answer: (
                <div className="space-y-3">
                    <p>
                        Les étudiants doivent s'équiper d'un ordinateur type PC
                        portable, les caractéristiques minimales requises sont :
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>
                            Un processeur 4 cœurs 2,3 Ghz x86 64 bits (Intel i5
                            ou AMD Ryzen 5)
                        </li>
                        <li>Une mémoire vive de 8Go</li>
                        <li>Un disque dur SSD de 250Go</li>
                        <li>Un écran définition 1920 x 1080</li>
                        <li>Système GNU/Linux, MacOS ou Windows</li>
                        <li>Pas de ChromeOS ou équivalent</li>
                    </ul>
                    <p>
                        Des modèles comme le Dell Vostro 3525 ou Dell Latitude
                        3420 sont utilisables.
                    </p>
                    <p>
                        Les environnements de travail et logiciels utilisés par
                        les étudiants sont installés et paramétrés en cours sous
                        la supervision des professeurs.
                    </p>
                </div>
            ),
        },
        {
            question: "Quel est le taux d'obtention du diplôme ?",
            answer: (
                <div className="space-y-3">
                    <p>
                        Le taux d'obtention de la certification est indiqué sur
                        le site&nbsp;
                        <a
                            href="https://www.francecompetences.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary underline hover:text-secondary/80">
                            France Compétences
                        </a>
                        .
                    </p>
                    <p>
                        Le titre professionnel est composé de trois blocs de
                        compétences dénommés certificats de compétences
                        professionnelles (CCP).
                    </p>
                    <p>
                        Le titre professionnel est accessible par capitalisation
                        de certificats de compétences professionnelles (CCP) ou
                        suite à un parcours de formation et conformément aux
                        dispositions prévues dans l'arrêté du 22 décembre 2015
                        modifié, relatif aux conditions de délivrance du titre
                        professionnel du ministère chargé de l'emploi.
                    </p>
                </div>
            ),
        },
    ]

    const bachelors = [
        {
            title: 'Développeur Web Fullstack 1',
            description:
                'Découvre et commence à maîtriser les fondamentaux techniques du développement informatique.',
            badges: ['1 100 heures', 'Initiale'],
            details: (
                <div className="mt-4 text-foreground/90 space-y-4">
                    <div>
                        <h4 className="font-bold text-lg mb-1">Objectifs_</h4>
                        <p>
                            La 1ère année du parcours Développeur Web Fullstack
                            prépare à la découverte et la maitrise des grands
                            fondamentaux du développement informatique. Cette
                            année permet de poser les bases pour des étudiants
                            issus de cursus différents, de développer leurs
                            compétences techniques via la découverte de
                            différents stacks, et de les préparer à l'alternance
                            en entreprise via du coaching étudiant et des cours
                            transverses.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Programme_</h4>
                        <p>
                            Le programme de cours de cette année se compose de 6
                            unités d'enseignements pluridisciplinaires avec :
                        </p>
                        <ul className="list-disc ml-6">
                            <li>1 100 heures de formation dont :</li>
                            <li>600 heures de cours</li>
                            <li>530 heures de projet</li>
                        </ul>
                        <ul className="list-disc ml-6 mt-2">
                            <li>
                                <b>Développement et intégration :</b>{' '}
                                Introduction à Java, Backend PHP, Programmation
                                bas niveau, Web Fullstack, JavaScript,
                                Intégration HTML/CSS, Langage SQL, Versionning
                                GIT, Initiation à Wordpress
                            </li>
                            <li>
                                <b>Business :</b> Communication en entreprise,
                                Fonctionnement des entreprises, Coaching CV,
                                Anglais, Présentation et networking
                            </li>
                            <li>
                                <b>Ouverture :</b> Fresque du climat, Séminaire,
                                Ethique et responsabilité du développeur
                            </li>
                            <li>
                                <b>Produit :</b> Eco conception, Fondamentaux
                                UI/UX, Gestion de projet
                            </li>
                            <li>
                                <b>Système :</b> GNU/Linux, Initiation à la
                                cybersécurité
                            </li>
                            <li>
                                <b>Transverse :</b> Techniques de mémorisation,
                                Hackathon, Projet d'entreprise, Heures flexibles
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">
                            Les temps forts_
                        </h4>
                        <ul className="list-disc ml-6">
                            <li>
                                <b>Séminaire d'intégration et de cohésion :</b>{' '}
                                Avant votre rentrée universitaire, vous partez
                                en séminaire pendant 4 jours avec tous vos
                                camarades afin de faire connaissance autour
                                d'activités ludiques et de booster la cohésion
                                de la promotion.
                            </li>
                            <li>
                                <b>Hackathon :</b> En groupe, vous travaillez
                                pendant une ou plusieurs journées sur une
                                problématique réelle apportée par un
                                professionnel de l'une de nos entreprises
                                partenaires.
                            </li>
                            <li>
                                <b>Game jam :</b> Vous êtes mis en situation de
                                développement d'un jeu vidéo en groupe pendant
                                48h.
                            </li>
                            <li>
                                <b>Projet Fullstack :</b> En fin d'année, vous
                                travaillez 3 semaines sur un projet en
                                autonomie, à présenter lors d'une soutenance,
                                qui mobilise toutes les compétences développées
                                au cours de l'année.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">
                            Les pré-requis_
                        </h4>
                        <p>
                            Le parcours Développeur Web Fullstack 1 est ouvert à
                            tous les profils curieux et motivés de découvrir le
                            monde de l'informatique afin d'en faire leur projet
                            professionnel. Leur profil et leur motivation sont
                            évalués par notre Responsable des Admissions lors
                            des différents entretiens. Avoir suivi une filière
                            générale option NSI ou une filière STI2D est un
                            plus.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Développeur Web Fullstack 2',
            description:
                "Renforce ton expertise technique avec de nouveaux stacks et professionnalise-toi avec l'alternance.",
            badges: ['590 heures', 'Initiale ou Alternance'],
            details: (
                <div className="mt-4 text-foreground/90 space-y-4">
                    <div>
                        <h4 className="font-bold text-lg mb-1">
                            Conditions d'éligibilité et modalités d'admission_
                        </h4>
                        <p>
                            Le Bachelor est ouvert à tous les lycéens, étudiants
                            ou personnes en reconversion. Aucun prérequis
                            pédagogique n'est nécessaire.
                        </p>
                        <p>
                            Les inscriptions se font hors Parcoursup, après
                            étude du dossier de candidature et un entretien
                            d'admission. L'admissibilité chez Coda est
                            conditionnée à la réussite de 2 entretiens
                            successifs&nbsp;: un entretien en visio de 20mn puis
                            un entretien de motivation de 1h dans les locaux de
                            l'école. Une réponse positive ou négative est donnée
                            48h après le 2<sup>nd</sup> entretien.
                        </p>
                        <p>
                            Pour les admissions directes en 3<sup>ème</sup>{' '}
                            année, le passage d'un test technique de 45min est
                            demandé afin de valider l'adéquation entre le niveau
                            de l'élève et le programme suivi.
                        </p>
                        <p>
                            Les étudiants qui auraient déjà validé un ou
                            plusieurs blocs de compétences du titre RNCP doivent
                            revalider ces blocs dans le cadre des évaluations
                            continues et des jurys finaux. Ceci dans le but
                            d'assurer la cohérence pédagogique du programme
                            dispensé et le bon niveau de compétence des
                            étudiants qui sortent de l'école.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Développeur Web Fullstack 3',
            description:
                'Découvre et commence à maîtriser les fondamentaux techniques du développement informatique.',
            badges: ['435 heures', 'Alternance'],
            details: (
                <div className="mt-4 text-foreground/90 space-y-4">
                    <div>
                        <h4 className="font-bold text-lg mb-1">Objectifs_</h4>
                        <p>
                            La 3ème année du parcours Développeur Web Fullstack
                            s'effectue uniquement en alternance. On vient
                            davantage renforcer les compétences techniques en
                            intégrant de nouveaux stacks ainsi que différentes
                            spécialisations en vue d'une potentielle poursuite
                            d'études en Master. L'insertion sur le marché du
                            travail est également renforcée avec un rythme
                            d'alternance à 75% en entreprise.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Programme_</h4>
                        <p>
                            Le programme de cours de cette année se compose de 6
                            unités d'enseignements pluridisciplinaires avec :
                        </p>
                        <ul className="list-disc ml-6">
                            <li>435 heures de formation dont :</li>
                            <li>310 heures de cours</li>
                            <li>125 heures de projet</li>
                        </ul>
                        <ul className="list-disc ml-6 mt-2">
                            <li>
                                <b>Développement et intégration :</b>{' '}
                                Approfondissement React, Node.js, Framework CSS,
                                SEO, API, Design pattern
                            </li>
                            <li>
                                <b>Spécialités :</b> Jeux vidéos, Cybersécurité,
                                Data, Machine Learning
                            </li>
                            <li>
                                <b>Ouverture :</b> Séminaire
                            </li>
                            <li>
                                <b>Produit :</b> Eco conception, Gestion agile,
                                Introduction à SCRUM
                            </li>
                            <li>
                                <b>Système :</b> Docker
                            </li>
                            <li>
                                <b>Transverse :</b> Algorithmie appliquée à
                                l'IA, Projet final
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">
                            Les temps forts_
                        </h4>
                        <ul className="list-disc ml-6">
                            <li>
                                <b>L'alternance :</b> La professionnalisation de
                                l'étudiant est renforcée par un rythme
                                d'alternance à 75% en entreprise et 25% en cours
                            </li>
                            <li>
                                <b>Les spécialisations :</b> Il vous est
                                possible de vous spécialiser dans différents
                                modules de votre choix afin d'élargir votre
                                champs de compétences et de vous préparer à
                                votre poursuite d'études en Master.
                            </li>
                            <li>
                                <b>Le projet de fin d'études :</b> C'est un
                                projet final qui permet d'utiliser toutes les
                                compétences vues au cours des 3 années (front
                                end, back end, gestion de données, design,...)
                                et qui permet de préparer au mieux les étudiants
                                au passage du jury de fin d'année pour la
                                validation du diplôme.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">
                            Les pré-requis_
                        </h4>
                        <p>
                            Le parcours Développeur Web Fullstack 3 est ouvert
                            aux étudiants de 2ème année ayant validé leurs
                            unités d'enseignements. L'alternance en entreprise
                            étant obligatoire, l'étudiant doit avoir signé un
                            contrat d'alternance au plus tard fin Novembre pour
                            rejoindre la formation. Les admissions directes en
                            3ème année sont ouvertes pour les étudiants
                            souhaitant poursuivre leurs études, sous réserve de
                            la réussite d'une évaluation technique, attestant de
                            leur niveau de compétences.
                        </p>
                    </div>
                </div>
            ),
        },
    ]

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

    return (
        <div className="min-h-screen bg-background pt-24 font-sans">
            {/* Hero Section - Design fidèle à la charte globale */}
            <section className="relative py-20 px-4 bg-gradient-to-br from-background to-primary/90">
                <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Bloc texte */}
                    <div className="flex-1 text-left">
                        <div className="text-sm font-bold text-secondary mb-2 uppercase tracking-widest">
                            DEVELOPPEUR WEB FULLSTARK
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight">
                            Développeur Fullstack
                            <br className="hidden md:block" /> 2 ans
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
                            Une formation en 3 ans pour apprendre à concevoir et
                            développer des applications web robustes, intuitives
                            et sécurisées en maîtrisant toutes les étapes du
                            cycle de développement logiciel.
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
                                src="/images/ange.jpg"
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
                    {/* Bloc texte */}
                    <div className="flex-1 transition-all duration-300">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                            Pourquoi cette formation est
                            <br />
                            faite pour toi
                            <span className="text-secondary">_</span>
                        </h2>
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="px-5 py-2 rounded-full border border-muted-foreground text-muted-foreground text-base font-medium bg-background">
                                3 ans
                            </span>
                            <span className="px-5 py-2 rounded-full border border-muted-foreground text-muted-foreground text-base font-medium bg-background">
                                Alternance dès B2
                            </span>
                            <span className="px-5 py-2 rounded-full border border-muted-foreground text-muted-foreground text-base font-medium bg-background">
                                Admission B1 & B3
                            </span>
                            <span className="px-5 py-2 rounded-full border border-muted-foreground text-muted-foreground text-base font-medium bg-background">
                                bac+3
                            </span>
                        </div>
                        <p className="text-lg text-foreground/90 mb-2">
                            La formation de développeur web est faite pour toi
                            si tu cherches une{' '}
                            <span className="font-bold">
                                formation polyvalente et complète
                            </span>{' '}
                            dans le domaine de l'informatique. En tant que
                            développeur fullstack, tu apprendras à maîtriser à
                            la fois le développement{' '}
                            <span className="font-bold">
                                front-end et back-end
                            </span>
                            , te permettant de concevoir des applications web et
                            mobiles de bout en bout. Cette formation te
                            permettra d'acquérir des compétences techniques très
                            recherchées, tout en développant ta capacité à
                            résoudre des problèmes complexes et à collaborer
                            avec différentes équipes. Avec la croissance rapide
                            du secteur numérique, ce diplôme t'ouvrira de{' '}
                            <span className="font-bold text-primary">
                                nombreuses opportunités professionnelles
                            </span>{' '}
                            dans un domaine en constante évolution, où la
                            demande pour des développeurs capables de gérer des
                            projets dans leur intégralité est en forte
                            augmentation.
                        </p>
                    </div>
                </div>

            </section>

            {/* Cartes Bachelor Accordéon */}
            <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-12 items-start mt-4 pb-24">
                <div className="flex-1 flex flex-col gap-6">
                    {bachelors.map((bachelor, idx) => (
                        <div
                            key={bachelor.title}
                            className="bg-background border border-muted rounded-2xl p-6 shadow-sm flex flex-col gap-4 transition-all">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() =>
                                    setOpenBachelor(
                                        openBachelor === idx ? null : idx
                                    )
                                }>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2">
                                    {bachelor.title}
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
                            <p className="text-muted-foreground mb-2">
                                {bachelor.description}
                            </p>
                            <div className="flex gap-3 mt-2">
                                {bachelor.badges.map((badge, i) => (
                                    <span
                                        key={i}
                                        className="px-5 py-2 rounded-full border border-muted-foreground text-muted-foreground text-base font-medium bg-background">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                            {openBachelor === idx && (
                                <div className="animate-fade-in mt-2">
                                    {bachelor.details}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Demi-cercle décoratif en bas de la section Bachelor */}
            <div
                className="relative w-full overflow-hidden mt-0"
                style={{ height: '100px' }}>
                <svg
                    viewBox="0 0 1600 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full">
                    <path
                        d="M0,0 Q800,100 1600,0 L1600,100 L0,100 Z"
                        fill="#0a0a1a"
                    />
                </svg>
            </div>

            {/* Le diplôme Coda_ */}
            <section className="relative bg-[#0a0a1a] pt-24 pb-20 overflow-hidden">
                {/* Wave arrondie en haut */}
                <div
                    className="absolute top-0 left-0 w-full"
                    style={{ height: '80px', zIndex: 1 }}>
                    <svg
                        viewBox="0 0 1600 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full">
                        <path
                            d="M0,80 Q800,0 1600,80 L1600,0 L0,0 Z"
                            fill="#fff"
                        />
                    </svg>
                </div>
                <div className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
                    {/* Bloc texte à gauche */}
                    <div className="flex-1 bg-[#0a0a1a] rounded-2xl p-10 relative shadow-xl">
                        {/* Coins décoratifs */}
                        <div className="absolute -left-4 -bottom-4 w-8 h-8">
                            <div className="absolute left-0 bottom-0 w-6 h-1 bg-secondary rounded-full" />
                            <div className="absolute left-0 bottom-0 w-1 h-6 bg-secondary rounded-full" />
                        </div>
                        <div className="absolute -top-4 -right-4 w-8 h-8">
                            <div className="absolute right-0 top-0 w-6 h-1 bg-secondary rounded-full" />
                            <div className="absolute right-0 top-0 w-1 h-6 bg-secondary rounded-full" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Le diplôme FuturCraft Institut
                            <span className="text-secondary">_</span>
                        </h2>
                        <p className="text-lg text-white/90">
                            Le Bachelor Développeur Fullstack délivre un diplôme{' '}
                            <b>de niveau Bac+3 (titre RNCP6)</b> reconnu par
                            l'Etat. A l'issue de la formation, il vous est
                            possible de vous insérer directement sur le marché
                            du travail ou de poursuivre vos études dans l'un de
                            nos Masters pour préparer un diplôme de niveau Bac+5
                            (titre RNCP7).
                        </p>
                    </div>
                    {/* Badge à droite */}
                    <div className="flex-1 flex items-center justify-center">
                        <img
                            src="/images/Logo-ENTIERE-768x516.webp"
                            alt="le diplôme FuturCraft Institut"
                            className="w-[320px] h-auto object-contain drop-shadow-2xl rounded-2xl bg-white p-4"
                        />
                    </div>
                </div>
            </section>

            {/* Section Rejoindre la formation_ */}
            <section className="bg-[#0a0a1a] py-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">
                        Rejoindre la formation
                        <span className="text-secondary">_</span>
                    </h2>
                    {/* Onglets */}
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
                                Développeur Web (B1)
                            </button>
                            <button
                                className={`px-8 py-2 rounded-full font-bold text-lg shadow transition-colors ${
                                    admissionTab === 'B3'
                                        ? 'bg-secondary text-[#181a20]'
                                        : 'text-white hover:bg-secondary/20'
                                }`}
                                onClick={() => setAdmissionTab('B3')}
                                type="button">
                                Développeur Web (B2)
                            </button>
                        </div>
                    </div>
                    {/* Étapes dynamiques */}
                    {admissionTab === 'B1' ? (
                        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
                            {/* Étape 1 */}
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
                                            Rendez-vous en visio
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white/80 mt-2">
                                    Première rencontre de <b>20 minutes</b> en
                                    distanciel pour échanger sur votre projet
                                    d'orientation.
                                </div>
                            </div>
                            {/* Flèche */}
                            <div className="hidden md:flex items-center justify-center">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-[#181a20] text-2xl font-bold">
                                    <span>&#8594;</span>
                                </div>
                            </div>
                            {/* Étape 2 */}
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
                                            Entretien en présentiel
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white/80 mt-2">
                                    Nouvel entretien d'<b>une heure</b> planifié
                                    en présentiel sur le campus, afin de motiver
                                    vos choix pour rejoindre notre formation.
                                </div>
                            </div>
                            {/* Flèche */}
                            <div className="hidden md:flex items-center justify-center">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-[#181a20] text-2xl font-bold">
                                    <span>&#8594;</span>
                                </div>
                            </div>
                            {/* Étape 3 */}
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
                                            Réponse d'admission
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white/80 mt-2">
                                    L'équipe d'admissions s'engage à vous
                                    apporter une réponse en <b>48 heures</b>,
                                    qu'elle soit positive ou négative.
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
                            {/* Étape 1 */}
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
                                            Rendez-vous en visio
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white/80 mt-2">
                                    Première rencontre de 20 minutes en
                                    distanciel pour échanger sur votre projet
                                    d'orientation.
                                </div>
                            </div>
                            {/* Flèche */}
                            <div className="hidden md:flex items-center justify-center">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-[#181a20] text-2xl font-bold">
                                    <span>&#8594;</span>
                                </div>
                            </div>
                            {/* Étape 2 */}
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
                                            Tests techniques
                                        </div>
                                        <div className="text-xs text-secondary">
                                            (Uniquement admissions en troisième
                                            année)
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white/80 mt-2">
                                    Des tests techniques d'une durée de 45
                                    minutes sont requis pour attester de votre
                                    niveau de compétences.
                                </div>
                            </div>
                            {/* Flèche */}
                            <div className="hidden md:flex items-center justify-center">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-[#181a20] text-2xl font-bold">
                                    <span>&#8594;</span>
                                </div>
                            </div>
                            {/* Étape 3 */}
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
                                            Entretien en présentiel
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white/80 mt-2">
                                    Nouvel entretien d'une heure planifié en
                                    présentiel sur le campus, afin de motiver
                                    vos choix pour rejoindre notre formation.
                                </div>
                            </div>
                            {/* Flèche */}
                            <div className="hidden md:flex items-center justify-center">
                                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-[#181a20] text-2xl font-bold">
                                    <span>&#8594;</span>
                                </div>
                            </div>
                            {/* Étape 4 */}
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
                                            Réponse d'admission
                                        </div>
                                    </div>
                                </div>
                                <div className="text-white/80 mt-2">
                                    L'équipe d'admissions s'engage à vous
                                    apporter une réponse en 48 heures, qu'elle
                                    soit positive ou négative.
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Formulaire de candidature Bachelor (B1) */}
            <section className="bg-background py-24 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-2 font-sans">
                        Candidature Developpeur Web Fullstack{' '}
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
                        {faq.map((item, idx) => (
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

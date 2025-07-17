'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
    FaLaptopCode,
    FaUserTie,
    FaCamera,
    FaPaintBrush,
    FaCashRegister,
    FaBullhorn,
    FaTshirt,
    FaRobot,
    FaBrain,
    FaTools,
    FaPenNib,
    FaShoppingCart,
    FaHelicopter,
} from 'react-icons/fa'

const formations = [
    {
        type: 'BACHELOR',
        title: 'BAC+2 – Développement web et mobile',

        description:
            'Une formation en 3 ans pour apprendre à concevoir et développer des applications web robustes, intuitives et sécurisées en maîtrisant toutes les étapes du cycle de développement logiciel.',
        image: '/image/formation1.jpg',
        button: 'En savoir plus',
    },
    {
        type: 'BACHELOR',
        title: 'BAC+1 – Web master',

        description:
            "Découvrez la gestion de l'infrastructure informatique, la sécurité réseau et l'optimisation des systèmes, tout en développant une véritable expertise des technologies de l'information.",
        image: '/image/formation2.jpg',
        button: 'En savoir plus',
    },
    {
        type: 'MASTER OF SCIENCE',
        title: 'BAC+2 – Autonomisation et IA',

        description:
            'Spécialisez-vous en cyber pour maîtriser la protection des systèmes informatiques, la gestion des risques et la réponse aux incidents de sécurité afin de défendre les infrastructures numériques contre les cybermenaces.',
        image: '/image/formation3.jpg',
        button: 'En savoir plus',
    },
    {
        type: 'Marketing digital',
        title: 'BAC+1 – Marketing digital',

        description:
            "Spécialisez-vous en IA & Data pour maîtriser le développement d'algorithmes avancés, l'analyse de grandes quantités de données et l'application de techniques d'apprentissage automatique pour résoudre des problèmes complexes.",
        image: '/image/formation4.jpg',
        button: 'En savoir plus',
    },
    {
        type: 'MASTER OF SCIENCE',
        title: 'BAC+1 – Photographie et Montage vidéo',
        description:
            "Devenez un chef de projet informatique avec une spécialité en déploiement de projets Green IT pour mettre l'accent sur l'efficacité énergétique, la réduction de l'empreinte carbone et la promotion de pratiques écologiques dans le domaine des technologies numériques.",
        image: '/image/formation5.jpg',
        button: 'En savoir plus',
    },
    {
        type: 'BACHELOR',
        title: 'BAC+3 – Design UX/UI',
        badges: ['3 ans', 'Alternance dès B2', 'Admission B1 & B3', 'bac+3'],
        description:
            "Deviens expert en expérience utilisateur et en design d'interface. Apprends à concevoir des produits numériques intuitifs, esthétiques et accessibles.",
        image: '/image/formation6.jpg',
        button: 'En savoir plus',
    },
]

const tabs = [
    { label: 'BACHELOR', filter: (f: any) => f.type === 'BACHELOR' },
    {
        label: 'MASTER OF SCIENCE',
        filter: (f: any) => f.type === 'MASTER OF SCIENCE',
    },
    { label: 'TOUT', filter: () => true },
]

export default function FormationsSection() {
    return (
        <section className="w-full bg-[#070526] flex flex-col items-center justify-center py-12 md:py-32 px-2 md:px-8">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white text-center mb-6 md:mb-8 relative w-fit mx-auto">
                Découvrez nos formations
                <span
                    className="inline-block align-baseline relative"
                    style={{
                        width: '2.2rem',
                        height: '0.3rem',
                        marginLeft: '0.3rem',
                    }}>
                    <span className="absolute left-0 bottom-0 h-1 w-6 bg-[var(--secondary)] rounded"></span>
                </span>
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-gray-300 text-center max-w-3xl mb-6 md:mb-12">
                FuturCraft propose des formations professionnalisantes et
                diplômantes qui délivrent des titres certifiés et enregistrés au
                RNCP de BAC+3 à BAC+5.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center items-stretch w-full max-w-6xl mx-auto mt-8 md:mt-12">
                {/* Cadre 1 */}
                <div className="relative group">
                    <div className="absolute top-4 left-4 w-full h-full bg-[#22223b] rounded-xl z-0 group-hover:bg-[var(--secondary)] group-active:bg-[var(--secondary)] transition-colors duration-300"></div>
                    <div className="relative bg-[var(--card)] rounded-xl shadow-2xl p-4 md:p-6 z-10 flex flex-col h-full">
                        <span className="text-[var(--secondary)] font-bold text-base mb-2 flex items-center gap-2">
                            <FaLaptopCode className="inline-block text-[var(--secondary)] text-lg" />{' '}
                            Développement web
                        </span>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                            Devenez expert en développement web moderne
                        </h3>
                        <div className="flex flex-row flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                300.000 FCFA/An
                            </span>
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                2 ans
                            </span>
                        </div>
                        <p className="text-[var(--card-foreground)] text-xs md:text-base mb-2 md:mb-6">
                            Apprenez à créer des sites web performants,
                            responsives et dynamiques avec les technologies les
                            plus demandées comme HTML, CSS, JavaScript, React et
                            Node.js.
                        </p>
                        <button className="mt-auto bg-[var(--secondary)] text-[var(--primary-foreground)] font-bold text-sm md:text-lg rounded-full px-4 md:px-8 py-2 md:py-3 w-fit hover:bg-[var(--primary)] transition">
                            En savoir plus
                        </button>
                    </div>
                </div>
                {/* Cadre 2 */}
                <div className="relative group">
                    <div className="absolute top-4 left-4 w-full h-full bg-[#22223b] rounded-xl z-0 group-hover:bg-[var(--secondary)] group-active:bg-[var(--secondary)] transition-colors duration-300"></div>
                    <div className="relative bg-[var(--card)] rounded-xl shadow-2xl p-4 md:p-6 z-10 flex flex-col h-full">
                        <span className="text-[var(--secondary)] font-bold text-base mb-2 flex items-center gap-2">
                            <FaUserTie className="inline-block text-[var(--secondary)] text-lg" />{' '}
                            Web master
                        </span>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                            Maîtrisez la gestion complète de sites web
                        </h3>
                        <div className="flex flex-row flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                300.000 FCFA
                            </span>
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                1 an
                            </span>
                        </div>
                        <p className="text-[var(--card-foreground)] text-xs md:text-base mb-2 md:mb-6">
                            Gérez, mettez à jour et optimisez des sites web
                            professionnels. Une formation polyvalente pour les
                            futurs responsables digitaux.
                        </p>
                        <button className="mt-auto bg-[var(--secondary)] text-[var(--primary-foreground)] font-bold text-sm md:text-lg rounded-full px-4 md:px-8 py-2 md:py-3 w-fit hover:bg-[var(--primary)] transition">
                            En savoir plus
                        </button>
                    </div>
                </div>
                {/* Cadre 3 */}
                <div className="relative group">
                    <div className="absolute top-4 left-4 w-full h-full bg-[#22223b] rounded-xl z-0 group-hover:bg-[var(--secondary)] group-active:bg-[var(--secondary)] transition-colors duration-300"></div>
                    <div className="relative bg-[var(--card)] rounded-xl shadow-2xl p-4 md:p-6 z-10 flex flex-col h-full">
                        <span className="text-[var(--secondary)] font-bold text-base mb-2 flex items-center gap-2">
                            <FaCamera className="inline-block text-[var(--secondary)] text-lg" />{' '}
                            Photographie, cadrage et montage vidéo
                        </span>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                            Créez des visuels et vidéos percutants
                        </h3>
                        <div className="flex flex-row flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                300.000 FCFA
                            </span>
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                1 an
                            </span>
                        </div>
                        <p className="text-[var(--card-foreground)] text-xs md:text-base mb-2 md:mb-6">
                            Apprenez les techniques de la photographie
                            professionnelle, du cadrage artistique et du montage
                            vidéo avec des outils comme Adobe Premiere et
                            DaVinci Resolve.
                        </p>
                        <button className="mt-auto bg-[var(--secondary)] text-[var(--primary-foreground)] font-bold text-sm md:text-lg rounded-full px-4 md:px-8 py-2 md:py-3 w-fit hover:bg-[var(--primary)] transition">
                            En savoir plus
                        </button>
                    </div>
                </div>
                {/* Cadre 4 */}
                <div className="relative group">
                    <div className="absolute top-4 left-4 w-full h-full bg-[#22223b] rounded-xl z-0 group-hover:bg-[var(--secondary)] group-active:bg-[var(--secondary)] transition-colors duration-300"></div>
                    <div className="relative bg-[var(--card)] rounded-xl shadow-2xl p-4 md:p-6 z-10 flex flex-col h-full">
                        <span className="text-[var(--secondary)] font-bold text-base mb-2 flex items-center gap-2">
                            <FaPaintBrush className="inline-block text-[var(--secondary)] text-lg" />{' '}
                            Graphisme et web design
                        </span>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                            Donnez vie à vos idées en image et en interface
                        </h3>
                        <div className="flex flex-row flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                300.000 FCFA
                            </span>
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                1 an
                            </span>
                        </div>
                        <p className="text-[var(--card-foreground)] text-xs md:text-base mb-2 md:mb-6">
                            Devenez designer polyvalent en maîtrisant le
                            graphisme print et digital, le design d'interface
                            (UI) et l'expérience utilisateur (UX).
                        </p>
                        <button className="mt-auto bg-[var(--secondary)] text-[var(--primary-foreground)] font-bold text-sm md:text-lg rounded-full px-4 md:px-8 py-2 md:py-3 w-fit hover:bg-[var(--primary)] transition">
                            En savoir plus
                        </button>
                    </div>
                </div>
                {/* Cadre 5 */}
                <div className="relative group">
                    <div className="absolute top-4 left-4 w-full h-full bg-[#22223b] rounded-xl z-0 group-hover:bg-[var(--secondary)] group-active:bg-[var(--secondary)] transition-colors duration-300"></div>
                    <div className="relative bg-[var(--card)] rounded-xl shadow-2xl p-4 md:p-6 z-10 flex flex-col h-full">
                        <span className="text-[var(--secondary)] font-bold text-base mb-2 flex items-center gap-2">
                            <FaCashRegister className="inline-block text-[var(--secondary)] text-lg" />{' '}
                            Secrétariat et caisse
                        </span>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                            Gérez les tâches administratives avec rigueur
                        </h3>
                        <div className="flex flex-row flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                200.000 FCFA
                            </span>
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                6 mois
                            </span>
                        </div>
                        <p className="text-[var(--card-foreground)] text-xs md:text-base mb-2 md:mb-6">
                            Formez-vous aux métiers de l'assistanat
                            administratif, de la gestion de caisse et des outils
                            bureautiques.
                        </p>
                        <button className="mt-auto bg-[var(--secondary)] text-[var(--primary-foreground)] font-bold text-sm md:text-lg rounded-full px-4 md:px-8 py-2 md:py-3 w-fit hover:bg-[var(--primary)] transition">
                            En savoir plus
                        </button>
                    </div>
                </div>
                {/* Cadre 6 */}
                <div className="relative group">
                    <div className="absolute top-4 left-4 w-full h-full bg-[#22223b] rounded-xl z-0 group-hover:bg-[var(--secondary)] group-active:bg-[var(--secondary)] transition-colors duration-300"></div>
                    <div className="relative bg-[var(--card)] rounded-xl shadow-2xl p-4 md:p-6 z-10 flex flex-col h-full">
                        <span className="text-[var(--secondary)] font-bold text-base mb-2 flex items-center gap-2">
                            <FaBullhorn className="inline-block text-[var(--secondary)] text-lg" />{' '}
                            Marketing digital
                        </span>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                            Devenez stratège en marketing numérique
                        </h3>
                        <div className="flex flex-row flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                250.000 FCFA/An
                            </span>
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                8 mois
                            </span>
                        </div>
                        <p className="text-[var(--card-foreground)] text-xs md:text-base mb-2 md:mb-6">
                            Apprenez à créer et gérer des campagnes marketing,
                            optimiser la visibilité d'une marque en ligne et
                            utiliser les réseaux sociaux pour vendre.
                        </p>
                        <button className="mt-auto bg-[var(--secondary)] text-[var(--primary-foreground)] font-bold text-sm md:text-lg rounded-full px-4 md:px-8 py-2 md:py-3 w-fit hover:bg-[var(--primary)] transition">
                            En savoir plus
                        </button>
                    </div>
                </div>
                {/* Cadre 7 */}
                <div className="relative group">
                    <div className="absolute top-4 left-4 w-full h-full bg-[#22223b] rounded-xl z-0 group-hover:bg-[var(--secondary)] group-active:bg-[var(--secondary)] transition-colors duration-300"></div>
                    <div className="relative bg-[var(--card)] rounded-xl shadow-2xl p-4 md:p-6 z-10 flex flex-col h-full">
                        <span className="text-[var(--secondary)] font-bold text-base mb-2 flex items-center gap-2">
                            <FaTshirt className="inline-block text-[var(--secondary)] text-lg" />{' '}
                            Graphisme et sérigraphie
                        </span>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                            Créez des designs prêts pour l'impression
                        </h3>
                        <div className="flex flex-row flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                250.000 FCFA
                            </span>
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                1 an
                            </span>
                        </div>
                        <p className="text-[var(--card-foreground)] text-xs md:text-base mb-2 md:mb-6">
                            Apprenez à concevoir des visuels pour impression
                            textile, affiches, flyers et maîtrisez les
                            techniques de sérigraphie.
                        </p>
                        <button className="mt-auto bg-[var(--secondary)] text-[var(--primary-foreground)] font-bold text-sm md:text-lg rounded-full px-4 md:px-8 py-2 md:py-3 w-fit hover:bg-[var(--primary)] transition">
                            En savoir plus
                        </button>
                    </div>
                </div>
                {/* Cadre 8 */}
                <div className="relative group">
                    <div className="absolute top-4 left-4 w-full h-full bg-[#22223b] rounded-xl z-0 group-hover:bg-[var(--secondary)] group-active:bg-[var(--secondary)] transition-colors duration-300"></div>
                    <div className="relative bg-[var(--card)] rounded-xl shadow-2xl p-4 md:p-6 z-10 flex flex-col h-full">
                        <span className="text-[var(--secondary)] font-bold text-base mb-2 flex items-center gap-2">
                            <FaRobot className="inline-block text-[var(--secondary)] text-lg" />{' '}
                            Développement IA
                        </span>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                            Initiez-vous à la programmation de l'intelligence
                            artificielle
                        </h3>
                        <div className="flex flex-row flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                300.000 FCFA/An
                            </span>
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                2 ans
                            </span>
                        </div>
                        <p className="text-[var(--card-foreground)] text-xs md:text-base mb-2 md:mb-6">
                            Découvrez les bases de la data science, du machine
                            learning et des modèles d'IA pour créer des
                            applications intelligentes.
                        </p>
                        <button className="mt-auto bg-[var(--secondary)] text-[var(--primary-foreground)] font-bold text-sm md:text-lg rounded-full px-4 md:px-8 py-2 md:py-3 w-fit hover:bg-[var(--primary)] transition">
                            En savoir plus
                        </button>
                    </div>
                </div>
                {/* Cadre 9 */}
                <div className="relative group">
                    <div className="absolute top-4 left-4 w-full h-full bg-[#22223b] rounded-xl z-0 group-hover:bg-[var(--secondary)] group-active:bg-[var(--secondary)] transition-colors duration-300"></div>
                    <div className="relative bg-[var(--card)] rounded-xl shadow-2xl p-4 md:p-6 z-10 flex flex-col h-full">
                        <span className="text-[var(--secondary)] font-bold text-base mb-2 flex items-center gap-2">
                            <FaBrain className="inline-block text-[var(--secondary)] text-lg" />{' '}
                            Maîtrise IA
                        </span>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                            Dominez les outils IA pour booster votre
                            productivité
                        </h3>
                        <div className="flex flex-row flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                700.000 FCFA
                            </span>
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                3 mois
                            </span>
                        </div>
                        <p className="text-[var(--card-foreground)] text-xs md:text-base mb-2 md:mb-6">
                            Apprenez à utiliser efficacement ChatGPT,
                            Midjourney, ElevenLabs, Suno AI et bien d'autres
                            pour vos projets pro et créatifs.
                        </p>
                        <button className="mt-auto bg-[var(--secondary)] text-[var(--primary-foreground)] font-bold text-sm md:text-lg rounded-full px-4 md:px-8 py-2 md:py-3 w-fit hover:bg-[var(--primary)] transition">
                            En savoir plus
                        </button>
                    </div>
                </div>
                {/* Cadre 10 */}
                <div className="relative group">
                    <div className="absolute top-4 left-4 w-full h-full bg-[#22223b] rounded-xl z-0 group-hover:bg-[var(--secondary)] group-active:bg-[var(--secondary)] transition-colors duration-300"></div>
                    <div className="relative bg-[var(--card)] rounded-xl shadow-2xl p-4 md:p-6 z-10 flex flex-col h-full">
                        <span className="text-[var(--secondary)] font-bold text-base mb-2 flex items-center gap-2">
                            <FaTools className="inline-block text-[var(--secondary)] text-lg" />{' '}
                            Maintenance informatique
                        </span>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                            Réparez, optimisez et sécurisez les ordinateurs
                        </h3>
                        <div className="flex flex-row flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                250.000 FCFA
                            </span>
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                9 mois
                            </span>
                        </div>
                        <p className="text-[var(--card-foreground)] text-xs md:text-base mb-2 md:mb-6">
                            Apprenez à diagnostiquer et réparer les pannes
                            matérielles et logicielles, et à sécuriser les
                            systèmes informatiques.
                        </p>
                        <button className="mt-auto bg-[var(--secondary)] text-[var(--primary-foreground)] font-bold text-sm md:text-lg rounded-full px-4 md:px-8 py-2 md:py-3 w-fit hover:bg-[var(--primary)] transition">
                            En savoir plus
                        </button>
                    </div>
                </div>
                {/* Cadre 11 */}
                <div className="relative group">
                    <div className="absolute top-4 left-4 w-full h-full bg-[#22223b] rounded-xl z-0 group-hover:bg-[var(--secondary)] group-active:bg-[var(--secondary)] transition-colors duration-300"></div>
                    <div className="relative bg-[var(--card)] rounded-xl shadow-2xl p-4 md:p-6 z-10 flex flex-col h-full">
                        <span className="text-[var(--secondary)] font-bold text-base mb-2 flex items-center gap-2">
                            <FaPenNib className="inline-block text-[var(--secondary)] text-lg" />{' '}
                            Copywriting
                        </span>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                            L'art de convaincre avec les mots
                        </h3>
                        <div className="flex flex-row flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                250.000 FCFA
                            </span>
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                6 mois
                            </span>
                        </div>
                        <p className="text-[var(--card-foreground)] text-xs md:text-base mb-2 md:mb-6">
                            Apprenez à écrire des textes puissants qui captent
                            l'attention, vendent des produits et créent de
                            l'engagement.
                        </p>
                        <button className="mt-auto bg-[var(--secondary)] text-[var(--primary-foreground)] font-bold text-sm md:text-lg rounded-full px-4 md:px-8 py-2 md:py-3 w-fit hover:bg-[var(--primary)] transition">
                            En savoir plus
                        </button>
                    </div>
                </div>
                {/* Cadre 12 */}
                <div className="relative group">
                    <div className="absolute top-4 left-4 w-full h-full bg-[#22223b] rounded-xl z-0 group-hover:bg-[var(--secondary)] group-active:bg-[var(--secondary)] transition-colors duration-300"></div>
                    <div className="relative bg-[var(--card)] rounded-xl shadow-2xl p-4 md:p-6 z-10 flex flex-col h-full">
                        <span className="text-[var(--secondary)] font-bold text-base mb-2 flex items-center gap-2">
                            <FaShoppingCart className="inline-block text-[var(--secondary)] text-lg" />{' '}
                            E-commerce
                        </span>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                            Lancez votre boutique en ligne avec succès
                        </h3>
                        <div className="flex flex-row flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                200.000 FCFA
                            </span>
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                6 mois
                            </span>
                        </div>
                        <p className="text-[var(--card-foreground)] text-xs md:text-base mb-2 md:mb-6">
                            Apprenez à créer, gérer et promouvoir une boutique
                            en ligne avec Shopify, WordPress ou WooCommerce.
                        </p>
                        <button className="mt-auto bg-[var(--secondary)] text-[var(--primary-foreground)] font-bold text-sm md:text-lg rounded-full px-4 md:px-8 py-2 md:py-3 w-fit hover:bg-[var(--primary)] transition">
                            En savoir plus
                        </button>
                    </div>
                </div>
                {/* Cadre 13 */}
                <div className="relative group">
                    <div className="absolute top-4 left-4 w-full h-full bg-[#22223b] rounded-xl z-0 group-hover:bg-[var(--secondary)] group-active:bg-[var(--secondary)] transition-colors duration-300"></div>
                    <div className="relative bg-[var(--card)] rounded-xl shadow-2xl p-4 md:p-6 z-10 flex flex-col h-full">
                        <span className="text-[var(--secondary)] font-bold text-base mb-2 flex items-center gap-2">
                            <FaHelicopter className="inline-block text-[var(--secondary)] text-lg" />{' '}
                            Pilotage de drone
                        </span>
                        <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                            Maîtrisez le ciel avec les drones professionnels
                        </h3>
                        <div className="flex flex-row flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                100.000 FCFA
                            </span>
                            <span className="px-4 py-0.5 rounded-full border border-[var(--secondary)] text-[var(--secondary)] text-base">
                                1 mois
                            </span>
                        </div>
                        <p className="text-[var(--card-foreground)] text-xs md:text-base mb-2 md:mb-6">
                            Apprenez à piloter des drones en toute sécurité pour
                            la photographie, la vidéo, la cartographie ou la
                            surveillance.
                        </p>
                        <button className="mt-auto bg-[var(--secondary)] text-[var(--primary-foreground)] font-bold text-sm md:text-lg rounded-full px-4 md:px-8 py-2 md:py-3 w-fit hover:bg-[var(--primary)] transition">
                            En savoir plus
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

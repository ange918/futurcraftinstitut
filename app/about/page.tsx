'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import FormationsSection from '../../src/components/sections/formations-section'

export default function About() {
    // Pour l'effet de texte qui devient blanc au scroll
    const citationRef = useRef<HTMLDivElement>(null)
    const [isWhite, setIsWhite] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        function handleScroll() {
            if (!citationRef.current) return
            const rect = citationRef.current.getBoundingClientRect()
            // Quand le haut de la section atteint le haut du viewport
            if (rect.top < window.innerHeight * 0.5) {
                setIsWhite(true)
            } else {
                setIsWhite(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMounted(true)
    }, [])

    const citation =
        "Offrir une éducation d'excellence en informatique dans des villes et des régions qui souffrent d'un manque de professionnels expérimentés."
    const citationWords = citation.split(' ')

    return (
        <div
            className="min-h-screen w-full flex flex-col items-center justify-start py-8 px-2 mt-20 md:px-8"
            style={{ background: 'var(--background)' }}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold p-4 md:p-10 flex justify-center items-center text-center">
                Le centre informatique <br /> qui forme des professionnels{' '}
                <br /> engagés
            </h1>
            <h2 className="text-base md:text-lg lg:text-2xl text-white font-bold flex justify-center items-center p-4 md:p-10 text-center">
                FuturCraft INSTITUT est un centre <br />
                de formation en informatique privée hors Parcoursup <br /> avec
                un enseignement moderne qui prépare ses étudiants au monde du
                travail. <br /> Acteur local engagé pour un développement du
                numérique <br />
                qui minimise son impact sur l'environnement, FuturCraft INSTITUT{' '}
                <br />
                sensibilise et forme ses étudiants aux enjeux actuels et <br />
                futurs liés au numérique.
            </h2>
            <div className="flex justify-center items-center mb-10">
                <button className="text-base md:text-lg rounded-full inline-block border border-white px-4 py-2 hover:bg-white hover:text-[#2a0a5c] transition">
                    <a href="#">Nos formations</a>
                </button>
            </div>
            {/* GALLERY */}
            <div className="w-full max-w-6xl mb-16">
                {/* Version mobile/tablette : 3 images côte à côte */}
                <div className="flex lg:hidden flex-row gap-4 w-full">
                    <Image
                        src="/image/ange.jpg"
                        alt="Arcade"
                        width={400}
                        height={400}
                        className="rounded-2xl border border-white object-cover w-1/3 h-32"
                    />
                    <Image
                        src="/image/hero.jpg"
                        alt="Groupe central"
                        width={600}
                        height={500}
                        className="rounded-2xl border-4 border-white object-cover w-1/3 h-32"
                    />
                    <Image
                        src="/image/open-day.jpg"
                        alt="Open day"
                        width={400}
                        height={400}
                        className="rounded-2xl border border-white object-cover w-1/3 h-32"
                    />
                </div>
                {/* Version desktop : galerie complète */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-4 w-full">
                    <div className="flex flex-col md:flex-row gap-4">
                        <Image
                            src="/image/ange.jpg"
                            alt="Arcade"
                            width={400}
                            height={400}
                            className="rounded-2xl border border-white object-cover w-full h-40 md:w-52 md:h-full"
                        />
                        <div className="flex flex-col gap-4">
                            <Image
                                src="/image/pro1.jpg"
                                alt="Classe"
                                width={400}
                                height={200}
                                className="rounded-2xl object-cover h-24 md:h-1/3 w-full"
                            />
                            <Image
                                src="/image/develop.webp"
                                alt="Salon"
                                width={400}
                                height={200}
                                className="rounded-2xl object-cover h-32 md:h-2/3 w-full"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            src="/image/hero.jpg"
                            alt="Groupe central"
                            width={600}
                            height={500}
                            className="rounded-2xl border-4 border-white object-cover w-full h-40 md:h-full"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col gap-4">
                            <Image
                                src="/image/pro2.jpg"
                                alt="Groupe ville"
                                width={400}
                                height={200}
                                className="rounded-2xl border border-white object-cover w-full h-32 md:h-2/3"
                            />
                            <Image
                                src="/image/Ibidon.jpg"
                                alt="Laser game"
                                width={400}
                                height={200}
                                className="rounded-2xl border border-white object-cover w-full h-24 md:h-1/3"
                            />
                        </div>
                        <Image
                            src="/image/open-day.jpg"
                            alt="Open day"
                            width={400}
                            height={400}
                            className="rounded-2xl border border-white object-cover w-full h-40 md:w-52 md:h-full"
                        />
                    </div>
                </div>
            </div>

            <section className="w-full flex flex-col md:flex-row justify-center items-center py-12 md:py-24 bg-white">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 max-w-6xl w-full items-center">
                    <div className="relative bg-white border border-gray-300 px-4 md:px-16 py-8 md:py-14 flex-1 flex flex-col justify-center min-w-0 md:min-w-[480px] max-w-full md:max-w-[600px]">
                        <div className="absolute top-0 right-0">
                            <div className="w-12 h-3 bg-[#4f00ff] rounded-bl-lg"></div>
                            <div className="w-3 h-12 bg-[#4f00ff] rounded-bl-lg ml-9 -mt-3"></div>
                        </div>
                        <div className="absolute left-0 bottom-0 z-10">
                            <div className="w-12 h-3 bg-[#4f00ff] rounded-tr-lg"></div>
                            <div className="w-3 h-12 bg-[#4f00ff] rounded-tl-lg absolute left-0 bottom-3"></div>
                        </div>
                        <h2 className="text-3xl md:text-6xl font-bold text-[#1a093e] mb-8 leading-tight relative">
                            Notre constat
                            <span className="inline-block align-middle ml-2 w-10 h-2 bg-[#4f00ff] rounded"></span>
                        </h2>
                        <p className="text-base md:text-lg text-[#1a093e] mb-6">
                            Les développeurs informatiques sont une ressource de
                            plus en plus rare sur le marché du travail. Le
                            Ministère du Travail fait état de plus de{' '}
                            <span className="font-bold">105 000 postes</span> à
                            pourvoir dans le numérique.
                        </p>
                        <p className="text-base md:text-lg text-[#1a093e]">
                            La pénurie de professionnels expérimentés en IT et
                            capables d'engager leur organisation dans la
                            transition écologique est particulièrement forte
                            dans les villes de moins de 500 000 habitants.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <Image
                            src="/image/pro1.jpg"
                            alt="Classe Futurcraft"
                            width={520}
                            height={400}
                            className="rounded-3xl shadow-2xl object-cover w-full h-40 md:w-[520px] md:h-[400px] bg-white"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION : Citation fidèle à la capture */}
            <section
                ref={citationRef}
                className="relative w-full overflow-hidden"
                style={{ background: 'var(--card)' }}>
                {/* Vague blanche en haut */}
                <svg
                    className="absolute top-0 left-0 w-full"
                    height="80"
                    viewBox="0 0 1920 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 80 Q960 0 1920 80 V0 H0 V80Z" fill="#fff" />
                </svg>
                <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center py-10 md:py-32 px-2 md:px-8 md:gap-16 gap-6 z-10">
                    {/* Icône guillemets ouvrantes */}
                    <div className="flex-shrink-0 flex items-center justify-center h-full mb-4 md:mb-0">
                        <svg
                            width="120"
                            height="120"
                            viewBox="0 0 400 480"
                            className="md:w-[400px] md:h-[480px] w-24 h-24">
                            <text
                                x="30"
                                y="100"
                                fontSize="100"
                                fontFamily="Georgia, serif"
                                fontWeight="bold"
                                fill="var(--secondary)"
                                stroke="var(--secondary)"
                                strokeWidth="1.5"
                                className="md:font-bold">
                                "
                            </text>
                        </svg>
                    </div>
                    {/* Texte citation */}
                    <div className="flex-1 flex items-center justify-center text-center">
                        <p
                            className={`text-2xl md:text-5xl font-bold transition-colors duration-500 flex flex-wrap gap-x-2 gap-y-2 ${
                                isWhite ? 'text-white' : 'text-gray-400'
                            }`}>
                            {citationWords.map((word, i) => (
                                <span
                                    key={i}
                                    style={{ transitionDelay: `${i * 60}ms` }}>
                                    {word}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col md:flex-row items-center py-8">
                <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 md:gap-16 items-center h-full">
                    {/* Image à gauche */}
                    <div className="flex-1 flex justify-center items-start h-full">
                        <div className="overflow-hidden rounded-[3rem] shadow-xl w-full md:w-[520px] h-40 md:h-full bg-gray-200 flex">
                            <Image
                                src="/image/hero.jpg"
                                alt="Valeurs Futurcraft"
                                width={520}
                                height={500}
                                className="object-cover w-full h-full md:h-[500px]"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    {/* Valeurs à droite */}
                    <div className="flex-1 flex flex-col gap-8 h-full">
                        {/* Titre */}
                        <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 relative w-fit">
                            Nos valeurs
                            <span className="block h-2 w-16 bg-[var(--secondary)] rounded absolute left-0 -bottom-3"></span>
                        </h2>
                        {/* Cartes valeurs */}
                        <div className="flex flex-col gap-8 h-full">
                            {/* Carte 1 */}
                            <div className="flex flex-row gap-6 items-start pb-8 border-b border-[#444]">
                                <div className="flex items-center justify-center w-12 md:w-16 h-12 md:h-16 border-2 border-[var(--secondary)] rounded-lg mr-2 md:mr-4">
                                    {/* Globe SVG */}
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle
                                            cx="16"
                                            cy="16"
                                            r="14"
                                            stroke="var(--secondary)"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M16 2C20.4183 2 24 8.26801 24 16C24 23.732 20.4183 30 16 30C11.5817 30 8 23.732 8 16C8 8.26801 11.5817 2 16 2Z"
                                            stroke="var(--secondary)"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M2 16H30"
                                            stroke="var(--secondary)"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                                        Le numérique accessible à tous
                                    </h3>
                                    <p className="text-base md:text-lg text-[var(--muted-foreground)]">
                                        Coda s'implante en région pour offrir
                                        des formations en informatique au plus
                                        grand nombre.
                                    </p>
                                </div>
                            </div>
                            {/* Carte 2 */}
                            <div className="flex flex-row gap-6 items-start pb-8 border-b border-[#444]">
                                <div className="flex items-center justify-center w-12 md:w-16 h-12 md:h-16 border-2 border-[var(--secondary)] rounded-lg mr-2 md:mr-4">
                                    {/* Feuille SVG */}
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect
                                            x="4"
                                            y="4"
                                            width="24"
                                            height="24"
                                            rx="12"
                                            stroke="var(--secondary)"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M16 22C16 22 22 18 22 12C22 8 16 8 16 8C16 8 10 8 10 12C10 18 16 22 16 22Z"
                                            stroke="var(--secondary)"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                                        La sobriété numérique
                                    </h3>
                                    <p className="text-base md:text-lg text-[var(--muted-foreground)]">
                                        Coda sensibilise aux enjeux d'un
                                        numérique plus responsable envers
                                        l'environnement.
                                    </p>
                                </div>
                            </div>
                            {/* Carte 3 */}
                            <div className="flex flex-row gap-6 items-start">
                                <div className="flex items-center justify-center w-12 md:w-16 h-12 md:h-16 border-2 border-[var(--secondary)] rounded-lg mr-2 md:mr-4">
                                    {/* Balance SVG */}
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect
                                            x="4"
                                            y="4"
                                            width="24"
                                            height="24"
                                            rx="12"
                                            stroke="var(--secondary)"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M16 10V22"
                                            stroke="var(--secondary)"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M10 18C10 18 12 22 16 22C20 22 22 18 22 18"
                                            stroke="var(--secondary)"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                                        L'inclusivité dans la tech
                                    </h3>
                                    <p className="text-base md:text-lg text-[var(--muted-foreground)]">
                                        Coda souhaite mettre en lumière tous les
                                        profils dans la tech, notamment les
                                        femmes, trop souvent sous-représentées
                                        dans le monde la tech.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION : ADN FuturCraft */}
            <section className="w-full min-h-screen bg-[#070526] flex flex-col items-center py-10 md:py-20 px-2">
                {/* Titre centré */}
                <h2 className="text-3xl md:text-6xl font-bold text-white text-center mb-8 md:mb-16 relative w-fit mx-auto">
                    L'ADN{' '}
                    <span className="relative inline-block">
                        FuturCraft
                        <span className="block h-1.5 w-8 bg-[var(--secondary)] rounded absolute left-1/2 -translate-x-1/2 mt-2"></span>
                    </span>
                </h2>
                {/* Cartes */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-stretch w-full max-w-5xl px-2">
                    {/* Carte 1 */}
                    <div className="flex-1 bg-white rounded-[2.5rem] flex flex-col overflow-hidden shadow-xl max-w-full md:max-w-xl mx-auto min-w-0 md:min-w-[320px]">
                        <div className="h-32 md:h-64 w-full overflow-hidden relative">
                            <img
                                src="/image/pro1.jpg"
                                alt="Qualité pédagogique"
                                className="w-full h-full object-cover rounded-t-[2.5rem]"
                            />
                        </div>
                        <div className="p-8 flex flex-col flex-1 pt-0">
                            <h3 className="text-lg md:text-3xl font-bold text-[#070526] mb-4 relative w-fit">
                                <span className="relative inline-block">
                                    La qualité pédagogique
                                    <span className="block h-1 w-6 bg-[var(--secondary)] rounded absolute left-1/2 -translate-x-1/2 mt-2"></span>
                                </span>
                            </h3>
                            <p className="text-base md:text-lg text-[#070526]">
                                Nos professeurs sont tous des intervenants
                                professionnels issus du monde de l'entreprise.
                                Ils préparent nos étudiants au marché du travail
                                grâce à un programme pluridisciplinaire
                                comprenant des cours techniques, cours
                                d'ouverture et mises en situation (hackathons,
                                gamejams, projets d'entreprises…).
                            </p>
                        </div>
                    </div>
                    {/* Carte 2 */}
                    <div className="flex-1 bg-white rounded-[2.5rem] flex flex-col overflow-hidden shadow-xl max-w-full md:max-w-xl mx-auto min-w-0 md:min-w-[320px]">
                        <div className="h-32 md:h-64 w-full overflow-hidden relative">
                            <img
                                src="/image/open-day.jpg"
                                alt="Expérience étudiante"
                                className="w-full h-full object-cover rounded-t-[2.5rem]"
                            />
                        </div>
                        <div className="p-8 flex flex-col flex-1 pt-0">
                            <h3 className="text-lg md:text-3xl font-bold text-[#070526] mb-4 relative w-fit">
                                <span className="relative inline-block">
                                    L'expérience étudiante
                                    <span className="block h-1 w-6 bg-[var(--secondary)] rounded absolute left-1/2 -translate-x-1/2 mt-2"></span>
                                </span>
                            </h3>
                            <p className="text-base md:text-lg text-[#070526]">
                                Nous souhaitons offrir une vie riche et rythmée
                                à nos étudiants à travers des séminaires de
                                cohésion, hackathons, activités sportives, au
                                sein d'espaces conviviaux qui favorisent
                                l'échange et l'apprentissage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION : Cartes alternance & green IT (fidèle à la capture) */}
            <section className="w-full bg-[#070526] flex flex-col items-center py-16 px-2">
                <div className="flex flex-col md:flex-row gap-12 justify-center items-stretch w-full max-w-5xl">
                    {/* Carte 1 */}
                    <div className="flex-1 bg-white rounded-[2rem] flex flex-col overflow-hidden shadow-lg max-w-xl mx-auto min-w-[320px]">
                        <div className="relative h-64 w-full overflow-hidden">
                            <img
                                src="/image/pro2.jpg"
                                alt="Alternance"
                                className="w-full h-full object-cover rounded-t-[2rem]"
                            />
                        </div>
                        <div className="p-10 flex flex-col flex-1 pt-0">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#070526] mb-4 relative w-fit">
                                <span className="relative inline-block">
                                    L'alternance
                                    <span className="block h-1 w-6 bg-[var(--secondary)] rounded absolute left-1/2 -translate-x-1/2 mt-2"></span>
                                </span>
                            </h3>
                            <p className="text-lg text-[#070526]">
                                Nous professionnalisons nos étudiants grâce à
                                l'alternance, du coaching personnalisé, et des
                                job datings avec notre vaste réseau
                                d'entreprises partenaires.
                            </p>
                        </div>
                    </div>
                    {/* Carte 2 */}
                    <div className="flex-1 bg-white rounded-[2rem] flex flex-col overflow-hidden shadow-lg max-w-xl mx-auto min-w-[320px]">
                        <div className="h-64 w-full overflow-hidden relative">
                            <img
                                src="/image/develop.webp"
                                alt="Green IT"
                                className="w-full h-full object-cover rounded-t-[2rem]"
                            />
                        </div>
                        <div className="p-10 flex flex-col flex-1 pt-0">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#070526] mb-4 relative w-fit">
                                <span className="relative inline-block">
                                    Le green IT
                                    <span className="block h-1 w-6 bg-[var(--secondary)] rounded absolute left-1/2 -translate-x-1/2 mt-2"></span>
                                </span>
                            </h3>
                            <p className="text-lg text-[#070526]">
                                La pollution du numérique équivaut à 4% des
                                émissions de gaz à effet de serre, soit
                                l'équivalent de tout le trafic aérien mondial.
                                Coda s'engage pour sensibiliser et former ses
                                étudiants aux bonnes pratiques du green IT, à
                                travers des cours d'éco-conception logicielle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION : Slogan + vidéo (reproduction exacte de la capture) */}
            <section className="w-full bg-[#070526] flex flex-col items-center py-16 px-2">
                {/* Slogan */}
                <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 relative w-fit mx-auto">
                    L'école qui forme les talents en{' '}
                    <br className="hidden md:block" />
                    informatique de demain !
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
                {/* Vidéo dans une carte */}
                <div className="bg-[#0a0920] rounded-3xl shadow-lg p-2 md:p-6 flex justify-center items-center w-full max-w-4xl mx-auto">
                    <div className="w-full h-0 pb-[56.25%] relative rounded-2xl overflow-hidden">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-2xl"
                            src="https://www.youtube.com/embed/0QwKQ4QbFqA"
                            title="Coda, l'école supérieure d'informatique engagée !"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            {/* SECTION : Moments marquants de la vie étudiante FuturCraft */}
            <section className="w-full bg-white flex flex-col items-center py-12 md:py-24 px-2">
                {/* Titre centré */}
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#1a093e] text-center mb-8 md:mb-20 relative w-fit mx-auto">
                    Les moments marquants de la{' '}
                    <br className="hidden md:block" />
                    vie étudiante FuturCraft
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
                {/* Bloc 1 : Image gauche, texte droite */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8 md:mb-24 w-full max-w-6xl mx-auto">
                    <div className="flex-1 flex justify-center items-center w-full">
                        <img
                            src="/image/open-day.jpg"
                            alt="Séminaire cohésion"
                            className="rounded-2xl md:rounded-3xl shadow-xl w-full max-w-xs md:max-w-xl object-cover h-48 md:h-[500px]"
                        />
                    </div>
                    <div className="flex-1 relative w-full">
                        <div className="border border-gray-300 rounded-xl md:rounded-2xl p-4 md:p-10 bg-white shadow-md relative">
                            {/* Coins violets */}
                            <span className="absolute top-0 right-0 w-6 md:w-10 h-2 md:h-3 bg-[#5b1fff] rounded-tr-lg"></span>
                            <span className="absolute top-0 right-0 w-2 md:w-3 h-6 md:h-10 bg-[#5b1fff] rounded-tl-lg"></span>
                            <span className="absolute left-0 bottom-0 w-6 md:w-10 h-2 md:h-3 bg-[#5b1fff] rounded-tr-lg"></span>
                            <span className="absolute left-0 bottom-0 w-2 md:w-3 h-6 md:h-10 bg-[#5b1fff] rounded-tl-lg mb-1 md:mb-3"></span>
                            <h3 className="text-lg md:text-3xl font-bold text-[#1a093e] mb-2 md:mb-4 relative w-fit">
                                Les séminaires de cohésion
                                <span
                                    className="inline-block align-baseline relative"
                                    style={{
                                        width: '2.2rem',
                                        height: '0.3rem',
                                        marginLeft: '0.3rem',
                                    }}>
                                    <span className="absolute left-0 bottom-0 h-1 w-6 bg-[var(--secondary)] rounded"></span>
                                </span>
                            </h3>
                            <p className="text-base md:text-lg text-[#1a093e] mb-1 md:mb-2">
                                FuturCraft a à cœur de proposer une expérience
                                optimale pour tous ses étudiants. Cette ambition
                                se traduit par l'instauration de moments
                                d'intégration et de cohésion avant la rentrée et
                                pendant l'année.
                            </p>
                            <p className="text-base md:text-lg text-[#1a093e]">
                                Au programme : des activités de team building,
                                saut à l'élastique, accrobranche, laser game,
                                course d'orientation et bien d'autres... Le tout
                                dans un cadre convivial afin de briser la glace
                                et de faire connaissance au sein de la
                                promotion.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Bloc 2 : Texte gauche, image droite */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-12 mb-8 md:mb-24 w-full max-w-6xl mx-auto">
                    <div className="flex-1 flex justify-center items-center w-full">
                        <img
                            src="/image/pro1.jpg"
                            alt="Séminaires techniques"
                            className="rounded-2xl md:rounded-3xl shadow-xl w-full max-w-xs md:max-w-xl object-cover h-40 md:h-[400px]"
                        />
                    </div>
                    <div className="flex-1 relative w-full">
                        <div className="border border-gray-300 rounded-xl md:rounded-2xl p-4 md:p-10 bg-white shadow-md relative">
                            {/* Coins violets */}
                            <span className="absolute top-0 right-0 w-6 md:w-10 h-2 md:h-3 bg-[#5b1fff] rounded-tr-lg"></span>
                            <span className="absolute top-0 right-0 w-2 md:w-3 h-6 md:h-10 bg-[#5b1fff] rounded-tl-lg"></span>
                            <span className="absolute left-0 bottom-0 w-6 md:w-10 h-2 md:h-3 bg-[#5b1fff] rounded-tr-lg"></span>
                            <span className="absolute left-0 bottom-0 w-2 md:w-3 h-6 md:h-10 bg-[#5b1fff] rounded-tl-lg mb-1 md:mb-3"></span>
                            <h3 className="text-lg md:text-3xl font-bold text-[#1a093e] mb-2 md:mb-4 relative w-fit">
                                Les séminaires techniques
                                <span
                                    className="inline-block align-baseline relative"
                                    style={{
                                        width: '2.2rem',
                                        height: '0.3rem',
                                        marginLeft: '0.3rem',
                                    }}>
                                    <span className="absolute left-0 bottom-0 h-1 w-6 bg-[var(--secondary)] rounded"></span>
                                </span>
                            </h3>
                            <p className="text-base md:text-lg text-[#1a093e] mb-1 md:mb-2">
                                Le modèle pédagogique de FuturCraft intègre des
                                cours en mode projet qui passent par des mises
                                en situation en groupe. Dans ce cadre, l'année
                                scolaire est rythmée par des moments forts
                                techniques tels que des hackathons, des game
                                jams et des mises en pratique au contact
                                d'entreprises (Full stack, simulation
                                cyber-attaque, design de LLM,...).
                            </p>
                            <p className="text-base md:text-lg text-[#1a093e]">
                                L'objectif est de faire travailler les étudiants
                                sur une problématique réelle d'entreprise, afin
                                de les professionnaliser et de développer leurs
                                compétences en gestion de projet.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Bloc 3 : Image gauche, texte droite */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8 md:mb-24 w-full max-w-6xl mx-auto">
                    <div className="flex-1 flex justify-center items-center w-full">
                        <img
                            src="/image/hero.jpg"
                            alt="Vie de campus"
                            className="rounded-2xl md:rounded-3xl shadow-xl w-full max-w-xs md:max-w-xl object-cover h-48 md:h-[500px]"
                        />
                    </div>
                    <div className="flex-1 relative w-full">
                        <div className="border border-gray-300 rounded-xl md:rounded-2xl p-4 md:p-10 bg-white shadow-md relative">
                            {/* Coins violets */}
                            <span className="absolute top-0 right-0 w-6 md:w-10 h-2 md:h-3 bg-[#5b1fff] rounded-tr-lg"></span>
                            <span className="absolute top-0 right-0 w-2 md:w-3 h-6 md:h-10 bg-[#5b1fff] rounded-tl-lg"></span>
                            <span className="absolute left-0 bottom-0 w-6 md:w-10 h-2 md:h-3 bg-[#5b1fff] rounded-tr-lg"></span>
                            <span className="absolute left-0 bottom-0 w-2 md:w-3 h-6 md:h-10 bg-[#5b1fff] rounded-tl-lg mb-1 md:mb-3"></span>
                            <h3 className="text-lg md:text-3xl font-bold text-[#1a093e] mb-2 md:mb-4 relative w-fit">
                                La vie de campus
                                <span
                                    className="inline-block align-baseline relative"
                                    style={{
                                        width: '2.2rem',
                                        height: '0.3rem',
                                        marginLeft: '0.3rem',
                                    }}>
                                    <span className="absolute left-0 bottom-0 h-1 w-6 bg-[var(--secondary)] rounded"></span>
                                </span>
                            </h3>
                            <p className="text-base md:text-lg text-[#1a093e] mb-1 md:mb-2">
                                Les campus FuturCraft ont une dynamique propice
                                aux études et à la réalisation de projets en
                                groupe.
                            </p>
                            <p className="text-base md:text-lg text-[#1a093e]">
                                En parallèle, les élèves profitent d'une vie
                                étudiante riche et diversifiée avec des
                                événements à thème, associations étudiantes,
                                bornes d'arcade, baby-foot, billard, job datings
                                et conférences, les étudiants n'ont pas le temps
                                de s'ennuyer chez FuturCraft !
                            </p>
                        </div>
                    </div>
                </div>
                {/* Bloc 4 : Texte gauche, image droite */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-12 w-full max-w-6xl mx-auto">
                    <div className="flex-1 flex justify-center items-center w-full">
                        <img
                            src="/image/Ibidon.jpg"
                            alt="Associations étudiantes"
                            className="rounded-2xl md:rounded-3xl shadow-xl w-full max-w-xs md:max-w-xl object-cover h-40 md:h-[400px]"
                        />
                    </div>
                    <div className="flex-1 relative w-full">
                        <div className="border border-gray-300 rounded-xl md:rounded-2xl p-4 md:p-10 bg-white shadow-md relative">
                            {/* Coins violets */}
                            <span className="absolute top-0 right-0 w-6 md:w-10 h-2 md:h-3 bg-[#5b1fff] rounded-tr-lg"></span>
                            <span className="absolute top-0 right-0 w-2 md:w-3 h-6 md:h-10 bg-[#5b1fff] rounded-tl-lg"></span>
                            <span className="absolute left-0 bottom-0 w-6 md:w-10 h-2 md:h-3 bg-[#5b1fff] rounded-tr-lg"></span>
                            <span className="absolute left-0 bottom-0 w-2 md:w-3 h-6 md:h-10 bg-[#5b1fff] rounded-tl-lg mb-1 md:mb-3"></span>
                            <h3 className="text-lg md:text-3xl font-bold text-[#1a093e] mb-2 md:mb-4 relative w-fit">
                                Les associations étudiantes
                                <span
                                    className="inline-block align-baseline relative"
                                    style={{
                                        width: '2.2rem',
                                        height: '0.3rem',
                                        marginLeft: '0.3rem',
                                    }}>
                                    <span className="absolute left-0 bottom-0 h-1 w-6 bg-[var(--secondary)] rounded"></span>
                                </span>
                            </h3>
                            <p className="text-base md:text-lg text-[#1a093e] mb-1 md:mb-2">
                                Chez FuturCraft, nous misons sur la synergie des
                                compétences de chacun pour créer des projets
                                engagés et ambitieux. Dans ce cadre, l'école
                                favorise la création d'associations étudiantes
                                afin de stimuler la créativité et développer
                                l'expérience de ses étudiants.
                            </p>
                            <p className="text-base md:text-lg text-[#1a093e]">
                                Cette initiative permet également de faire vivre
                                le campus, de développer les compétences et de
                                professionnaliser les étudiants sur de la
                                gestion de projet 360°.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION : Découvrez nos formations */}
            <FormationsSection />

            {/* SECTION : Les fondateurs */}
            <section className="w-full bg-[#070526] flex flex-col items-center py-20 px-2">
                <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12 relative w-fit mx-auto">
                    Les fondateurs
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
                <div className="flex justify-center mb-12 w-full">
                    <img
                        src="/image/hero.jpg"
                        alt="Les fondateurs"
                        className="rounded-3xl object-cover w-full max-w-6xl h-[350px] md:h-[400px] mx-auto"
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl mx-auto">
                    {/* Léni Maroglou */}
                    <div className="flex-1">
                        <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">
                            Léni Maroglou
                        </h3>
                        <div className="text-[var(--secondary)] text-xl font-semibold mb-2">
                            Co-fondateur
                        </div>
                        <p className="text-gray-300 text-lg">
                            Ingénieur de l'école Centrale de Lille et diplômé de
                            HEC Paris, Léni est un entrepreneur expérimenté dans
                            le domaine de l'éducation. Il s'investit pour
                            intégrer le Green IT et les bonnes pratiques de
                            sobriété numérique comme un standard au sein de
                            FuturCraft.
                        </p>
                    </div>
                    {/* Marin Vogler */}
                    <div className="flex-1">
                        <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">
                            Marin Vogler
                        </h3>
                        <div className="text-[var(--secondary)] text-xl font-semibold mb-2">
                            Co-fondateur
                        </div>
                        <p className="text-gray-300 text-lg">
                            Diplômé X-HEC Paris, Marin s'oriente très rapidement
                            dans le monde de l'orientation scolaire et du
                            numérique. Il s'engage en faveur de la
                            décentralisation des offres de formation en région,
                            pour un monde du numérique accessible à toutes et
                            tous.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

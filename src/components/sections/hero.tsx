import React from 'react'

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-white overflow-hidden pt-8 sm:pt-16 md:pt-28 lg:pt-36 pb-16 sm:pb-24 md:pb-32 lg:pb-44 px-2 sm:px-4 md:px-4">
            {/* Image de fond */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="/image/hero.jpg"
                    alt="FuturCraft Institut Hero"
                    className="w-full h-full object-cover object-center"
                    style={{ minHeight: '100%', minWidth: '100%' }}
                />
                {/* Overlay violet foncé */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#7c3aedcc] via-[#1a0840e6] to-[#0a091ce6]" />
            </div>
            <div className="w-full lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-4 flex flex-col items-center gap-2 sm:gap-4 md:gap-6">
                {/* Logo */}
                <div className="w-full flex justify-center mb-2">
                    <span className="block text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none text-center">
                        FuturCraft Institut
                        <span className="text-[var(--secondary)]">_</span>
                    </span>
                </div>
                {/* Titre principal */}
                <h1 className="text-center font-black text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight mb-2 sm:mb-4 md:mb-6">
                    L'école supérieure
                    <br />
                    d'informatique engagée
                </h1>
                {/* Sous-titre */}
                <p className="max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl mx-auto text-center text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6">
                    FuturCraft INSTITUT est un centre de formation privée qui
                    forme des étudiants engagés jusqu'à bac+3 ou bac+5, grâce à
                    un enseignement moderne et professionnalisant. Le centre de
                    formation adopte une pédagogie axée sur la pratique et
                    sensibilisant aux enjeux de la sobriété numérique.
                </p>
                {/* Bouton */}
                <div className="flex justify-center mb-2 sm:mb-4">
                    <a
                        href=""
                        className="px-4 xs:px-6 md:px-8 py-2 xs:py-2.5 md:py-3 rounded-full border-2 border-white bg-[var(--secondary)] text-[var(--secondary-foreground)] text-sm xs:text-base md:text-lg font-bold hover:bg-white hover:text-[#1a0840] transition-colors duration-200 shadow-lg"
                        aria-label="Découvrir le centre">
                        Découvrir le centre
                    </a>
                </div>
            </div>
            {/* SVG vague/pont bas */}
            <div className="absolute left-0 bottom-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1920 340"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-[80px] sm:h-[120px] md:h-[180px] lg:h-[260px] xl:h-[340px]">
                    <path d="M0 0C320 80 1600 80 1920 0V340H0V0Z" fill="#fff" />
                </svg>
            </div>
        </section>
    )
}

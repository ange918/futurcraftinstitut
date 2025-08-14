import React from 'react'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-white overflow-hidden px-2 sm:px-4 md:px-4 pt-0 sm:pt-16 md:pt-28 lg:pt-36 pb-16 sm:pb-24 md:pb-32 lg:pb-44">
            {/* Image de fond */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <img
                    src="/image/hero.jpg"
                    alt="FuturCraft Institut Hero"
                    className="w-full h-full object-cover object-center max-w-none"
                    style={{ minHeight: '100%', minWidth: '100%' }}
                />
                {/* Overlay violet foncé */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#7c3aedcc] via-[#1a0840e6] to-[#0a091ce6]" />
            </div>
            <div className="w-full lg:max-w-7xl mx-auto px-2 sm:px-4 md:px-4 flex flex-col items-center gap-2 sm:gap-4 md:gap-6">
                {/* Logo */}
                <div className="w-full flex justify-center mb-2">
                    <span className="block text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none text-center">
                        FuturCraft INSTITUT
                        <span className="text-[var(--secondary)]">_</span>
                    </span>
                </div>
                {/* Titre principal */}
                <h1 className="text-center font-black text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight mb-2 sm:mb-4 md:mb-6">
                Centre de formation
                    <br />
                    d'informatique engagée
                </h1>
                {/* Sous-titre */}
                <p className="max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl mx-auto text-center text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6">
                    FuturCraft INSTITUT est un centre de formation privée qui
                    forme des étudiants engagés sur une durée de 6 mois à 2 ans, grâce à
                    un enseignement moderne et professionnalisant. Le centre de
                    formation adopte une pédagogie axée sur la pratique et
                    sensibilisant aux enjeux de la sobriété numérique.
                </p>
                {/* Bouton */}
                <div className="flex justify-center mb-2 sm:mb-4">
                    <Link
                        href="/about"
                        className="px-4 xs:px-6 md:px-8 py-2 xs:py-2.5 md:py-3 rounded-full border-2 border-white bg-[var(--secondary)] text-[var(--secondary-foreground)] text-sm xs:text-base md:text-lg font-bold hover:bg-white hover:text-[#1a0840] transition-colors duration-200 shadow-lg cursor-pointer"
                        aria-label="Découvrir le centre">
                        Découvrir le centre
                    </Link>
                </div>
            </div>
        </section>
    )
}

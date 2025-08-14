import React from 'react'
import Image from 'next/image'

export default function WhyChooseUsSection() {
    return (
        <section className="relative w-full bg-[#070526] text-[var(--foreground)] pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden px-2 sm:px-4 md:px-8">
            {/* Vague en haut */}
            <div
                className="absolute top-0 left-0 w-full h-16 sm:h-24 md:h-32 lg:h-40"
                style={{ zIndex: 1 }}>
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full">
                    <path
                        d="M0,80 C480,160 960,0 1440,80 L1440,0 L0,0 Z"
                        fill="var(--background)"
                    />
                </svg>
            </div>
            <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-2 md:px-8 z-10">
                {/* Colonne gauche */}
                <div className="flex-1 flex flex-col items-center justify-center gap-6 md:gap-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-[var(--foreground)] text-center">
                        Pourquoi
                        <br />rejoindre FuturCraft INSTITUT ?
                    </h2>
                
                        <div className="flex items-center justify-center min-w-[360px] md:min-w-[450px] lg:min-w-[540px] min-h-[200px] md:min-h-[240px] lg:min-h-[300px] max-w-[95vw]">
                            <Image
                                src="/image/img9.jpg"
                                alt="Qualiopi"
                                width={400}
                                height={180}
                                className="w-[360px] md:w-[450px] lg:w-[540px] h-[200px] md:h-[240px] lg:h-[300px] rounded-xl"
                            />
                        </div>
                       
                    
                </div>
                {/* Colonne droite */}
                <div className="flex-1 flex flex-col gap-10 md:gap-16">
                    {/* Item 1 */}
                    <div className="flex items-start gap-4 md:gap-6">
                        <div className="flex flex-col items-center">
                            <span className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-[var(--secondary)] text-[var(--secondary)] flex items-center justify-center text-xl md:text-2xl font-bold mb-2 bg-[var(--background)]">
                                1
                            </span>
                            <span
                                className="w-px flex-1 bg-[var(--secondary)] opacity-20"
                                style={{ minHeight: '40px' }}></span>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[var(--foreground)]">
                                Développer son potentiel
                            </h3>
                            <p className="text-base md:text-lg text-[var(--muted-foreground)] max-w-xl">
                                Développez vos compétences techniques et vos
                                "soft skills" en suivant notre formation
                                informatique articulée autour d'un modèle
                                pédagogique moderne et complet.
                            </p>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex items-start gap-4 md:gap-6">
                        <div className="flex flex-col items-center">
                            <span className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-[var(--secondary)] text-[var(--secondary)] flex items-center justify-center text-xl md:text-2xl font-bold mb-2 bg-[var(--background)]">
                                2
                            </span>
                            <span
                                className="w-px flex-1 bg-[var(--secondary)] opacity-20"
                                style={{ minHeight: '40px' }}></span>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[var(--foreground)]">
                                Trouver sa voie
                            </h3>
                            <p className="text-base md:text-lg text-[var(--muted-foreground)] max-w-xl">
                                Exploitez directement vos compétences
                                informatiques grâce à nos projets encadrés,
                                stages, et alternance au sein de nos entreprises
                                partenaires.
                            </p>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="flex items-start gap-4 md:gap-6">
                        <div className="flex flex-col items-center">
                            <span className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-[var(--secondary)] text-[var(--secondary)] flex items-center justify-center text-xl md:text-2xl font-bold mb-2 bg-[var(--background)]">
                                3
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-[var(--foreground)]">
                                Faire de sa passion une carrière
                            </h3>
                            <p className="text-base md:text-lg text-[var(--muted-foreground)] max-w-xl">
                                Accédez rapidement à des métiers dans
                                l'informatique passionnants, diversifiés et bien
                                rémunérés !
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
